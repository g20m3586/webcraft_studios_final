// components/ui/navbar.tsx
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={cn(
      "fixed top-0 z-50 w-full transition-all duration-300 border-b",
      scrolled ? "bg-black/80 backdrop-blur-md border-neutral-800" : "bg-black/60 backdrop-blur-sm border-transparent"
    )}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Logo */}
        <Link 
          href="/" 
          className="text-xl font-semibold tracking-tighter text-white flex items-center gap-2"
        >
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Webcraft
          </span>
          <span className="hidden sm:inline text-neutral-300">Studios</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Button
              key={item.href}
              asChild
              variant="ghost"
              className="text-neutral-300 hover:text-white hover:bg-white/10 data-[active=true]:bg-white/10 data-[active=true]:text-white"
              data-active={typeof window !== 'undefined' && window.location.pathname === item.href}
            >
              <Link href={item.href}>
                {item.label}
              </Link>
            </Button>
          ))}
          <Button variant="outline" className="ml-2 bg-transparent border-blue-500 text-blue-500 hover:bg-blue-500/10 hover:text-blue-400">
            Get Started
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-neutral-300 hover:bg-white/10 hover:text-white"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
        </Button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-neutral-800 animate-in fade-in slide-in-from-top-2">
          <div className="px-2 py-3 space-y-1">
            {navItems.map((item) => (
              <Button
                key={item.href}
                asChild
                variant="ghost"
                className="w-full justify-start text-neutral-300 hover:bg-white/10 hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                <Link href={item.href}>
                  {item.label}
                </Link>
              </Button>
            ))}
            <Button variant="outline" className="w-full mt-2 bg-transparent border-blue-500 text-blue-500 hover:bg-blue-500/10 hover:text-blue-400">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}