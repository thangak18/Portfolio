import { NextResponse } from "next/server"

const FIREBASE_DB_URL = process.env.FIREBASE_DATABASE_URL
const COUNTER_PATH = "/portfolio/profile-views"

export async function GET() {
  if (!FIREBASE_DB_URL) {
    return NextResponse.json({ count: 0, error: "Firebase not configured" }, { status: 503 })
  }

  try {
    // Firebase Realtime Database transaction via REST API
    // Step 1: Read current value
    const getRes = await fetch(`${FIREBASE_DB_URL}${COUNTER_PATH}.json`, {
      cache: "no-store",
    })

    if (!getRes.ok) {
      throw new Error(`Firebase read failed: ${getRes.status}`)
    }

    const currentValue = await getRes.json()
    const newCount = (typeof currentValue === "number" ? currentValue : 0) + 1

    // Step 2: Write incremented value
    const putRes = await fetch(`${FIREBASE_DB_URL}${COUNTER_PATH}.json`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newCount),
    })

    if (!putRes.ok) {
      throw new Error(`Firebase write failed: ${putRes.status}`)
    }

    return NextResponse.json({ count: newCount })
  } catch (error) {
    console.error("Visitor counter error:", error)
    return NextResponse.json({ count: 0, error: "Counter unavailable" }, { status: 500 })
  }
}

// GET-only endpoint for reading without incrementing
export async function HEAD() {
  if (!FIREBASE_DB_URL) {
    return new NextResponse(null, { status: 503 })
  }

  try {
    const getRes = await fetch(`${FIREBASE_DB_URL}${COUNTER_PATH}.json`, {
      cache: "no-store",
    })

    if (!getRes.ok) {
      return new NextResponse(null, { status: 500 })
    }

    const currentValue = await getRes.json()
    const count = typeof currentValue === "number" ? currentValue : 0

    return new NextResponse(null, {
      status: 200,
      headers: { "X-Visitor-Count": String(count) },
    })
  } catch {
    return new NextResponse(null, { status: 500 })
  }
}
