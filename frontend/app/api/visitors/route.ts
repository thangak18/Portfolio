import { kv } from '@vercel/kv';
import { NextRequest, NextResponse } from 'next/server';

// Fallback in-memory storage for when KV is not configured (e.g. local dev without env vars)
// or if connections fail. Note: This resets on server restart/redeploy.
let memoryVisitorCount = 0;
const memoryVisitorIps = new Set<string>();

export async function POST(req: NextRequest) {
    const forwarded = req.headers.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(/, /)[0] : "127.0.0.1";

    try {
        // Try to use Vercel KV if configured
        if (process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN) {
            const isNewVisitor = await kv.sadd('visitor_ips', ip);
            if (isNewVisitor) {
                const newCount = await kv.incr('visitor_count');
                return NextResponse.json({ count: newCount });
            } else {
                const currentCount = await kv.get('visitor_count');
                return NextResponse.json({ count: currentCount || 0 });
            }
        } else {
            throw new Error("KV not configured");
        }
    } catch (error) {
        console.warn("KV error or not configured, falling back to memory:", error);

        // Fallback to memory
        if (!memoryVisitorIps.has(ip)) {
            memoryVisitorIps.add(ip);
            memoryVisitorCount++;
        }
        // If memory count is 0 but we have KV error, maybe we should try to initialize it? 
        // For now, just return what we have.
        // In a real scenario, you might want to read from a file if local, but memory is safer for serverless.
        return NextResponse.json({ count: memoryVisitorCount });
    }
}

export async function GET() {
    try {
        if (process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN) {
            const count = await kv.get('visitor_count');
            return NextResponse.json({ count: count || 0 });
        } else {
            throw new Error("KV not configured");
        }
    } catch (error) {
        return NextResponse.json({ count: memoryVisitorCount });
    }
}
