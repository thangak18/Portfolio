import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const VISITORS_FILE = path.join(process.cwd(), 'data', 'visitors.json')

// Ensure data directory exists
const ensureDataDir = () => {
  const dataDir = path.dirname(VISITORS_FILE)
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true })
  }
}

// Load visitors data
const loadVisitors = () => {
  ensureDataDir()
  if (!fs.existsSync(VISITORS_FILE)) {
    return { count: 0, ips: [] }
  }
  try {
    const data = fs.readFileSync(VISITORS_FILE, 'utf8')
    return JSON.parse(data)
  } catch {
    return { count: 0, ips: [] }
  }
}

// Save visitors data
const saveVisitors = (data: { count: number; ips: string[] }) => {
  ensureDataDir()
  fs.writeFileSync(VISITORS_FILE, JSON.stringify(data, null, 2))
}

// Get client IP
const getClientIP = (request: NextRequest) => {
  const forwarded = request.headers.get('x-forwarded-for')
  const realIP = request.headers.get('x-real-ip')
  const cfConnectingIP = request.headers.get('cf-connecting-ip')
  
  if (forwarded) {
    return forwarded.split(',')[0].trim()
  }
  if (realIP) {
    return realIP
  }
  if (cfConnectingIP) {
    return cfConnectingIP
  }
  
  return 'unknown'
}

export async function GET() {
  const visitors = loadVisitors()
  return NextResponse.json({ count: visitors.count })
}

export async function POST(request: NextRequest) {
  const clientIP = getClientIP(request)
  const visitors = loadVisitors()
  
  // Only increment if this IP hasn't been seen before
  if (!visitors.ips.includes(clientIP)) {
    visitors.count += 1
    visitors.ips.push(clientIP)
    saveVisitors(visitors)
  }
  
  return NextResponse.json({ count: visitors.count })
} 