"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import {
  ArrowLeft,
  Sparkles,
  CloudRain,
  Terminal,
  Maximize,
  Minimize,
  Play,
  Pause,
  Volume2,
  Github,
  Linkedin,
  Mail
} from "lucide-react"

export default function ImmersivePage() {
  const router = useRouter()
  const [isPlaying, setIsPlaying] = useState(false)
  const [isCyberMode, setIsCyberMode] = useState(false)
  const [isRainFX, setIsRainFX] = useState(false)
  const [isZenSpace, setIsZenSpace] = useState(true)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [progress, setProgress] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  const themeColor = isCyberMode ? '#00ffcc' : isZenSpace ? '#ffb067' : '#4a88ff'
  const themeGlow = isCyberMode ? 'rgba(0,255,204,0.4)' : isZenSpace ? 'rgba(255,176,103,0.4)' : 'rgba(74,136,255,0.4)'
  const themeGlowStrong = isCyberMode ? 'rgba(0,255,204,0.8)' : isZenSpace ? 'rgba(255,176,103,0.8)' : 'rgba(74,136,255,0.8)'
  const bgMain = isCyberMode ? '#0a0a0a' : isZenSpace ? '#0f0a05' : '#050a15'
  const gridColor = isCyberMode ? 'rgba(0, 255, 204, 0.05)' : isZenSpace ? 'rgba(255, 176, 103, 0.05)' : 'rgba(255, 255, 255, 0.03)'

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00"
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }
  const containerRef = useRef<HTMLDivElement>(null)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(e => console.log("Audio play blocked:", e))
      } else {
        audioRef.current.pause()
      }
    }
  }, [isPlaying])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return

      switch (e.key.toLowerCase()) {
        case ' ':
          e.preventDefault()
          setIsPlaying(prev => !prev)
          break
        case 'r':
          setIsRainFX(prev => !prev)
          break
        case 'z':
          setIsZenSpace(prev => !prev)
          if (!isZenSpace) setIsCyberMode(false)
          break
        case 'c':
          setIsCyberMode(prev => !prev)
          if (!isCyberMode) setIsZenSpace(false)
          break
        case 'escape':
          if (isFullscreen) {
            document.exitFullscreen().catch(err => console.log(err))
          } else {
            router.push('/')
          }
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isFullscreen, isZenSpace, isCyberMode, router])

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }
    document.addEventListener('fullscreenchange', handleFullscreenChange)
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange)
  }, [])

  const toggleFullscreen = async () => {
    if (!containerRef.current) return
    try {
      if (!isFullscreen) {
        await containerRef.current.requestFullscreen()
      } else {
        await document.exitFullscreen()
      }
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[9999] overflow-hidden flex flex-col items-center justify-center font-sans transition-colors duration-500"
      style={{
        backgroundColor: bgMain,
        backgroundImage: `linear-gradient(${gridColor} 1px, transparent 1px), linear-gradient(90deg, ${gridColor} 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
        backgroundPosition: 'center center'
      }}
    >
      {/* Rain Overlay Simulation */}
      {isRainFX && (
        <div className="absolute inset-0 pointer-events-none opacity-30" 
             style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")' }} />
      )}

      {/* Top Navigation */}
      <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-start w-full max-w-[1400px] mx-auto z-50">
        <Link 
          href="/" 
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-all"
        >
          <ArrowLeft size={16} />
          Back to Portfolio
        </Link>
        
        <div className="flex gap-4">
          <button 
            type="button"
            onClick={() => { 
              const nextCyber = !isCyberMode;
              setIsCyberMode(nextCyber);
              if (nextCyber) setIsZenSpace(false);
            }}
            className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm transition-all ${
              !isCyberMode ? 'bg-white/5 border-white/10 text-gray-400 hover:text-white' : ''
            }`}
            style={isCyberMode ? { backgroundColor: 'rgba(0, 255, 204, 0.15)', borderColor: 'rgba(0, 255, 204, 0.4)', color: '#00ffcc' } : {}}
          >
            <Terminal size={16} className="pointer-events-none" /> Cyber Mode
          </button>
          <button 
            type="button"
            onClick={() => setIsRainFX(!isRainFX)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm transition-all ${
              !isRainFX ? 'bg-white/5 border-white/10 text-gray-400 hover:text-white' : ''
            }`}
            style={isRainFX ? { backgroundColor: 'rgba(59, 130, 246, 0.15)', borderColor: 'rgba(59, 130, 246, 0.4)', color: '#3b82f6' } : {}}
          >
            <CloudRain size={16} className="pointer-events-none" /> Rain FX
          </button>
          <button 
            type="button"
            onClick={() => { 
              const nextZen = !isZenSpace;
              setIsZenSpace(nextZen);
              if (nextZen) setIsCyberMode(false);
            }}
            className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm transition-all ${
              !isZenSpace ? 'bg-white/5 border-white/10 text-gray-400 hover:text-white' : ''
            }`}
            style={isZenSpace ? { backgroundColor: 'rgba(255, 176, 103, 0.15)', borderColor: 'rgba(255, 176, 103, 0.4)', color: '#ffb067' } : {}}
          >
            <Sparkles size={16} className="pointer-events-none" /> ZEN SPACE
          </button>
          <button 
            type="button"
            onClick={toggleFullscreen}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
          >
            {isFullscreen ? <Minimize size={16} className="pointer-events-none" /> : <Maximize size={16} className="pointer-events-none" />}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-8 items-stretch justify-center w-full max-w-[1000px] z-10 px-6 mt-10">
        
        {/* Left: Vinyl Player */}
        <div className="flex-1 rounded-[32px] bg-[#0c111e] border border-white/5 p-8 flex items-center justify-center relative min-h-[400px] shadow-2xl">
          <div className="absolute top-6 left-6 w-2 h-2 rounded-full bg-white/10"></div>
          <div className="absolute top-6 right-6 w-2 h-2 rounded-full bg-white/10"></div>
          <div className="absolute bottom-6 left-6 w-2 h-2 rounded-full bg-white/10"></div>
          <div className="absolute bottom-6 right-6 w-2 h-2 rounded-full bg-white/10"></div>

          <div className={`relative w-[280px] h-[280px] rounded-full bg-[#111] border-[4px] border-[#222] shadow-2xl flex items-center justify-center vinyl-grooves ${isPlaying ? 'animate-spin-slow' : ''}`}>
            <div className="w-[100px] h-[100px] rounded-full bg-white flex items-center justify-center overflow-hidden border-2 border-gray-800">
              <div className="text-[50px] leading-none select-none">🎧</div>
            </div>
            <div className="absolute w-3 h-3 bg-[#111] rounded-full border border-gray-600"></div>
          </div>

          <div className="absolute top-10 right-12 flex flex-col items-center origin-top-left transition-transform duration-700 ease-in-out" style={{ transform: isPlaying ? 'rotate(15deg)' : 'rotate(0deg)' }}>
            <div className="w-12 h-12 rounded-full bg-[#222] border-4 border-[#333] shadow-lg relative z-10 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-[#111]"></div>
            </div>
            <div className="w-2 h-[180px] bg-gradient-to-b from-[#888] to-[#666] -mt-4 shadow-xl z-0"></div>
            <div className="w-6 h-10 bg-[#333] border-b-4 border-[#ffb067] rounded-b-sm -mt-1 z-10 shadow-lg"></div>
          </div>
        </div>

        {/* Right: Info & Controls */}
        <div className="flex-[0.8] flex flex-col gap-6 min-w-[360px]">
          
          {/* Music Player Card */}
          <div className="rounded-[24px] bg-[#0c111e]/80 backdrop-blur-md border border-white/5 p-8 flex flex-col flex-1 shadow-2xl relative overflow-hidden">
            <div 
              className={`absolute -top-[100px] -right-[100px] w-[300px] h-[300px] rounded-full blur-[80px] transition-all duration-1000 ${isPlaying ? 'opacity-100' : 'opacity-30'}`}
              style={{ backgroundColor: `${themeColor}20` }}
            ></div>

            <div className="flex justify-between items-start mb-6 z-10">
              <div>
                <h2 className="text-white text-2xl font-bold tracking-tight mb-1">Didn't Go to School Remix</h2>
                <p className="text-gray-400 text-sm">Ryanghyun Ryangha - DragonChimes Music</p>
              </div>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div 
                    key={i} 
                    className={`w-1.5 rounded-full transition-all duration-300 ${isPlaying ? 'animate-pulse' : 'h-1'}`} 
                    style={{ backgroundColor: themeColor, height: isPlaying ? `${Math.random() * 16 + 4}px` : '4px', animationDelay: `${i * 100}ms` }}
                  ></div>
                ))}
              </div>
            </div>

            <div className="flex-1 bg-white/5 rounded-xl p-6 flex flex-col items-center justify-center text-center z-10 mb-8 border border-white/5">
              <p className="text-white font-medium mb-2">아침에 일어나 시간을 보니까</p>
              <p className="text-gray-400 text-sm">I woke up in the morning, looked at the time...</p>
            </div>

            <div className="z-10 w-full mb-6">
              <div 
                className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden cursor-pointer flex relative"
                onClick={(e) => {
                  if (audioRef.current && duration) {
                    const rect = e.currentTarget.getBoundingClientRect()
                    const clickX = e.clientX - rect.left
                    const newTime = (clickX / rect.width) * duration
                    audioRef.current.currentTime = newTime
                    setCurrentTime(newTime)
                    setProgress((newTime / duration) * 100)
                  }
                }}
              >
                <div className="h-full relative transition-all" style={{ width: `${progress}%`, backgroundColor: themeColor }}>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full" style={{ boxShadow: `0 0 10px ${themeGlowStrong}` }}></div>
                </div>
              </div>
              <div className="flex justify-between items-center mt-2 text-[11px] text-gray-500 font-mono">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            <div className="flex items-center justify-between z-10">
              <div className="flex items-center gap-3 text-gray-400 w-[120px]">
                <Volume2 size={18} />
                <div className="h-1 w-16 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full w-[70%]" style={{ backgroundColor: themeColor }}></div>
                </div>
              </div>

              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-14 h-14 rounded-full flex items-center justify-center text-white transition-all transform hover:scale-105 active:scale-95"
                style={{ backgroundColor: themeColor, boxShadow: `0 0 20px ${themeGlow}` }}
              >
                {isPlaying ? <Pause size={24} className="fill-current" /> : <Play size={24} className="fill-current ml-1" />}
              </button>

              <div className="w-[120px] text-right text-xs text-gray-500 flex items-center justify-end gap-1.5">
                <kbd className="px-1.5 py-0.5 rounded border border-gray-700 bg-gray-800/50 font-sans text-[10px]">Space</kbd> to toggle
              </div>
            </div>
          </div>

          {/* Profile Card */}
          <div className="rounded-[24px] bg-[#0c111e]/80 backdrop-blur-md border border-white/5 p-6 flex gap-4 items-center shadow-xl">
            <div className="w-14 h-14 rounded-full overflow-hidden shrink-0 border border-white/10 relative bg-gray-800 flex items-center justify-center">
              <span className="text-xs">Avatar</span>
            </div>
            <div className="flex flex-col">
              <h3 className="text-white font-medium text-sm mb-1">Nguyen Tan Thang</h3>
              <p className="text-gray-400 text-xs leading-relaxed mb-2">Software Engineer. Taking a moment to step back, put on lofi music, and relax.</p>
              <div className="flex gap-3 text-gray-500">
                <Link href="https://github.com/thangak18" target="_blank" className="hover:text-white transition-colors"><Github size={14} /></Link>
                <Link href="https://www.linkedin.com/in/th%E1%BA%AFng-nguy%E1%BB%85n-598741283/" target="_blank" className="hover:text-white transition-colors"><Linkedin size={14} /></Link>
                <Link href="mailto:thangak18@gmail.com" className="hover:text-white transition-colors"><Mail size={14} /></Link>
              </div>
            </div>
          </div>

          {/* Shortcuts & Copyright */}
          <div className="flex flex-col gap-4 mt-2">
            <div className="flex gap-4 justify-start text-gray-500 text-xs">
              <div className="flex items-center gap-2">
                <kbd className="px-2 py-1 rounded-md border border-gray-700 bg-gray-800/30 text-gray-400 font-mono text-[10px]">Space</kbd> Play/Pause
              </div>
              <div className="flex items-center gap-2">
                <kbd className="px-2 py-1 rounded-md border border-gray-700 bg-gray-800/30 text-gray-400 font-mono text-[10px]">R</kbd> Rain FX
              </div>
              <div className="flex items-center gap-2">
                <kbd className="px-2 py-1 rounded-md border border-gray-700 bg-gray-800/30 text-gray-400 font-mono text-[10px]">Z</kbd> Zen/Cyber
              </div>
              <div className="flex items-center gap-2">
                <kbd className="px-2 py-1 rounded-md border border-gray-700 bg-gray-800/30 text-gray-400 font-mono text-[10px]">Esc</kbd> Exit
              </div>
            </div>
            <p className="text-gray-600 text-xs mt-2">© 2026 Nguyen Tan Thang. Built with React, Tailwind & custom vinyl physics.</p>
          </div>

        </div>
      </div>

      <audio 
        ref={audioRef} 
        src="https://cdn.pixabay.com/audio/2022/05/27/audio_1808fbf07a.mp3" 
        loop 
        preload="auto" 
        onTimeUpdate={() => {
          if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime)
            setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100 || 0)
          }
        }}
        onLoadedMetadata={() => {
          if (audioRef.current) {
            setDuration(audioRef.current.duration)
          }
        }}
      />
    </div>
  )
}
