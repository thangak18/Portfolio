import { kv } from '@vercel/kv';
import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const DB_FILE = path.join(process.cwd(), 'visitors-db.json');

function readLocalDb() {
    try {
        if (fs.existsSync(DB_FILE)) {
            const data = fs.readFileSync(DB_FILE, 'utf8');
            const parsed = JSON.parse(data);
            return {
                count: parsed.count || 0,
                ips: new Set<string>(parsed.ips || [])
            };
        }
    } catch (e) {
        // ignore errors
    }
    return { count: 0, ips: new Set<string>() };
}

function writeLocalDb(count: number, ips: Set<string>) {
    try {
        fs.writeFileSync(DB_FILE, JSON.stringify({
            count,
            ips: Array.from(ips)
        }), 'utf8');
    } catch (e) {
        // ignore errors
    }
}

export async function POST(req: NextRequest) {
    const forwarded = req.headers.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(/, /)[0] : "127.0.0.1";

    try {
        if (process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN) {
            // Unconditionally increment without checking IP uniqueness
            const newCount = await kv.incr('visitor_count');
            return NextResponse.json({ count: newCount });
        } else {
            throw new Error("KV not configured");
        }
    } catch (error) {
        // Fallback to local file persistent DB
        const db = readLocalDb();
        // Unconditionally increment
        db.count++;
        // Optional: you can still log the IP if you want, or just let it exist.
        db.ips.add(ip);
        writeLocalDb(db.count, db.ips);
        return NextResponse.json({ count: db.count });
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
        const db = readLocalDb();
        return NextResponse.json({ count: db.count });
    }
}
