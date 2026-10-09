"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Sparkles, Headphones } from "lucide-react"

export default function ZenFloatingPill() {
  const pathname = usePathname()

  // Do not render the floating pill if the user is already on the immersive page
  if (pathname === "/immersive") {
    return null
  }

  return (
    <aside aria-label="Zen Space quick entry" className="zen-floating-container">
      <Link
        href="/immersive"
        className="zen-floating-pill"
        title="Enter Zen Space — Ambient Lofi, Rain FX & Focus Space"
        aria-label="Enter Zen Space (Ambient Lofi and Focus)"
      >
        <span className="zen-floating-glow" aria-hidden="true" />
        <span className="zen-floating-sparkle" aria-hidden="true">
          <Sparkles />
        </span>
        <span className="zen-floating-text">
          <span className="zen-floating-title">Zen Space</span>
          <span className="zen-floating-subtitle">Lofi & Focus</span>
        </span>
        <span className="zen-floating-icon" aria-hidden="true">
          <Headphones />
        </span>
      </Link>
    </aside>
  )
}
