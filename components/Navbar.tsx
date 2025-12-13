'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ThemeToggle from '@/components/ui/theme-toggle'

const User = "Nhan"

const NavLinks = () => {
  const navItems = [
    { href: "/About", label: "About" },
    { href: "/Blog", label: "Blog" },
    { href: "/Contact", label: "Contact" },
    { href: "/DailyLife", label: "Daily Life" },
    { href: "/Services", label: "Services" }
  ]

  return (
    <nav className="hidden lg:flex items-center space-x-1">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground 
                   transition-colors duration-200 rounded-md hover:bg-muted/5"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleNavbar = () => setIsOpen(!isOpen)

  const navItems = [
    { href: "/About", label: "About" },
    { href: "/Blog", label: "Blog" },
    { href: "/Contact", label: "Contact" },
    { href: "/DailyLife", label: "Daily Life" },
  ]

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center space-x-2 text-foreground hover:text-foreground/80 transition-colors"
            >
              <div className="text-xl font-bold tracking-tight">
                Welcome, {User}
              </div>
            </Link>

            {/* Desktop Navigation */}
            <NavLinks />

            {/* Theme toggle */}
            <div className="hidden lg:flex items-center ml-4">
              <ThemeToggle />
            </div>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleNavbar}
              className="lg:hidden text-foreground hover:bg-muted/10"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
            {/* Mobile theme toggle */}
            <div className="lg:hidden ml-2">
              <ThemeToggle />
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-md border-t border-border">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={toggleNavbar}
                  className="block px-3 py-2 text-base font-medium text-foreground/80 hover:text-foreground 
                           hover:bg-muted/5 rounded-md transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  )
}


