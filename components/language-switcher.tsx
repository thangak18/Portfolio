"use client"

import { useLanguage } from "@/lib/contexts"
import { Button } from "@/components/ui/button"
import { Languages } from "lucide-react"

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'vi' : 'en')
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="relative overflow-hidden group transition-all duration-300 hover:scale-105"
    >
      <div className="flex items-center space-x-2">
        <Languages className="h-4 w-4" />
        <span className="font-medium">{language.toUpperCase()}</span>
      </div>
      
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Ripple effect */}
      <div className="absolute inset-0 bg-primary/10 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-md" />
    </Button>
  )
} 