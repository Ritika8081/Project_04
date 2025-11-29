"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function Header(){
  const pathname = usePathname()
  const isActive = (p: string) => pathname === p
  const [open, setOpen] = useState(false)

  // Close mobile menu on navigation / resize to larger screens
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 720) setOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link href="/" className="logo" aria-label="SoulConnect home">
          <svg className="logo-icon" width="36" height="36" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <rect width="48" height="48" rx="10" fill="#fff" fillOpacity="0.06"/>
            <circle cx="14" cy="20" r="2.5" fill="#F6C667" />
            <circle cx="24" cy="12" r="2.5" fill="#F6C667" />
            <circle cx="34" cy="22" r="2.5" fill="#F6C667" />
            <path d="M14 20 L24 12 L34 22" stroke="#fff" strokeWidth="0.9" strokeOpacity="0.9" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="logo-text">SoulConnect</span>
        </Link>

        <nav className={`nav ${open ? 'open' : ''}`} aria-label="Primary navigation">
          <Link href="/" className={`nav-link ${isActive('/') ? 'active' : ''}`} onClick={() => setOpen(false)}>Home</Link>
          <Link href="/onboarding" className={`nav-link ${isActive('/onboarding') ? 'active' : ''}`} onClick={() => setOpen(false)}>Start</Link>
          <Link href="/dashboard" className={`nav-link ${isActive('/dashboard') ? 'active' : ''}`} onClick={() => setOpen(false)}>Dashboard</Link>
          <Link href="/soulmatch" className={`nav-link ${isActive('/soulmatch') ? 'active' : ''}`} onClick={() => setOpen(false)}>SoulMatch</Link>
        </nav>

        <div className="actions">
          <Link href="/onboarding" className="header-cta">Start Your Journey</Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="mobile-toggle"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(v => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d={open ? "M6 18L18 6M6 6l12 12" : "M3 6h18M3 12h18M3 18h18"} stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Mobile nav overlay for small screens */}
        {open && (
          <div className="mobile-nav" role="dialog" aria-modal="true">
            <div className="mobile-nav-inner">
              <Link href="/" className={`nav-link ${isActive('/') ? 'active' : ''}`} onClick={() => setOpen(false)}>Home</Link>
              <Link href="/onboarding" className={`nav-link ${isActive('/onboarding') ? 'active' : ''}`} onClick={() => setOpen(false)}>Start</Link>
              <Link href="/dashboard" className={`nav-link ${isActive('/dashboard') ? 'active' : ''}`} onClick={() => setOpen(false)}>Dashboard</Link>
              <Link href="/soulmatch" className={`nav-link ${isActive('/soulmatch') ? 'active' : ''}`} onClick={() => setOpen(false)}>SoulMatch</Link>
              <Link href="/onboarding" className="header-cta mobile-cta" onClick={() => setOpen(false)}>Start Your Journey</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
