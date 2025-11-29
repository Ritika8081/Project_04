"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header(){
  const pathname = usePathname()
  const isActive = (p: string) => pathname === p

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

        <nav className="nav">
          <Link href="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>Home</Link>
          <Link href="/onboarding" className={`nav-link ${isActive('/onboarding') ? 'active' : ''}`}>Start</Link>
          <Link href="/dashboard" className={`nav-link ${isActive('/dashboard') ? 'active' : ''}`}>Dashboard</Link>
          <Link href="/soulmatch" className={`nav-link ${isActive('/soulmatch') ? 'active' : ''}`}>SoulMatch</Link>
        </nav>

        <div className="actions">
          <Link href="/onboarding" className="header-cta">Start Your Journey</Link>
        </div>
      </div>
    </header>
  )
}
