'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navItems = [
  { label: 'Home', href: '#home', isAnchor: true },
  { label: 'Services', href: '#services', isAnchor: true },
  { label: 'Portfolio', href: '#portfolio', isAnchor: true },
  { label: 'About', href: '#about', isAnchor: true },
  { label: 'Pricing', href: '/pricing', isAnchor: false }, // Future page
  { label: 'Contact', href: '#contact', isAnchor: true },
]

export function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Check if current path matches any section
  const isActiveSection = (href: string) => {
    if (pathname === '/') {
      const currentSection = window.location.hash
      return currentSection === href
    }
    return pathname === href
  }

  return (
    <header
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-300 border-b',
        scrolled
          ? 'bg-black/80 backdrop-blur-md border-neutral-800'
          : 'bg-black/60 backdrop-blur-sm border-transparent'
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Logo - links to home section */}
        <Link 
          href="#home" 
          scroll={false}
          className="text-xl font-semibold tracking-tighter text-white flex items-center gap-2"
        >
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            NextCraft
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
              className={cn(
                "text-neutral-300 hover:text-white hover:bg-white/10",
                isActiveSection(item.href) && "bg-white/10 text-white"
              )}
            >
              <Link 
                href={item.href}
                scroll={!item.isAnchor} // Only scroll for non-anchor links
                onClick={() => {
                  if (item.isAnchor) {
                    // Smooth scroll for anchor links
                    const element = document.querySelector(item.href)
                    if (element) {
                      element.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                      })
                    }
                  }
                }}
              >
                {item.label}
              </Link>
            </Button>
          ))}
          <Button 
            variant="outline" 
            className="ml-2 bg-transparent border-blue-500 text-blue-500 hover:bg-blue-500/10 hover:text-blue-400"
            asChild
          >
            <Link href="#contact" scroll={false}>
              Get Started
            </Link>
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
          <span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
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
                className={cn(
                  "w-full justify-start text-neutral-300 hover:bg-white/10 hover:text-white",
                  isActiveSection(item.href) && "bg-white/10 text-white"
                )}
                onClick={() => {
                  setMenuOpen(false)
                  if (item.isAnchor) {
                    const element = document.querySelector(item.href)
                    if (element) {
                      element.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                      })
                    }
                  }
                }}
              >
                <Link 
                  href={item.href}
                  scroll={!item.isAnchor}
                >
                  {item.label}
                </Link>
              </Button>
            ))}
            <Button 
              variant="outline" 
              className="w-full mt-2 bg-transparent border-blue-500 text-blue-500 hover:bg-blue-500/10 hover:text-blue-400"
              asChild
            >
              <Link href="#contact" scroll={false}>
                Get Started
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}