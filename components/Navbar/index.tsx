import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

const SERVICES = [
  { label: 'All Lawyers in Lahore', href: '/lawyers-in-lahore' },
  { label: 'Family Lawyer',      href: '/family-lawyer-in-lahore' },
  { label: 'Criminal Lawyer',    href: '/criminal-lawyer-in-lahore' },
  { label: 'Property Lawyer',    href: '/property-lawyer-in-lahore' },
  { label: 'Tax Lawyer',         href: '/tax-lawyer-in-lahore' },
  { label: 'Immigration Lawyer', href: '/immigration-lawyer-in-lahore' },
  { label: 'Civil Lawyer',       href: '/civil-lawyer-in-lahore' },
  { label: 'Corporate Lawyer',   href: '/corporate-lawyer-in-lahore' },
  { label: 'Divorce Lawyer',     href: '/divorce-lawyer-in-lahore' },
  { label: 'Khula Lawyer',       href: '/khula-lawyer-in-lahore' },
  { label: 'Child Custody Lawyer', href: '/child-custody-lawyer-in-lahore' },
  { label: 'Court Marriage Lawyer', href: '/court-marriage-lawyer-in-lahore' },
]

const COURTS = [
  { label: 'Lahore High Court', href: '/courts/lawyer-at-lahore-high-court' },
  { label: 'District Court Lahore', href: '/courts/district-court-lawyer-lahore' },
  { label: 'Family Court Lahore', href: '/courts/family-court-lawyer-lahore' },
  { label: 'Tax Tribunal Lahore', href: '/courts/tax-tribunal-lawyer-lahore' },
  { label: 'Service Tribunal Lahore', href: '/courts/service-tribunal-lawyer-lahore' },
  { label: 'Cantonment Court Lahore', href: '/courts/cantonment-court-lawyer-lahore' },
]

const AREAS = [
  { label: 'DHA Lahore', href: '/areas/lawyer-in-dha-lahore' },
  { label: 'Gulberg Lahore', href: '/areas/lawyer-in-gulberg-lahore' },
  { label: 'Johar Town Lahore', href: '/areas/lawyer-in-johar-town-lahore' },
  { label: 'Model Town Lahore', href: '/areas/lawyer-in-model-town-lahore' },
  { label: 'Bahria Town Lahore', href: '/areas/lawyer-in-bahria-town-lahore' },
  { label: 'Lahore Cantt', href: '/areas/lawyer-in-lahore-cantt' },
  { label: 'Faisal Town Lahore', href: '/areas/lawyer-in-faisal-town-lahore' },
  { label: 'Township Lahore', href: '/areas/lawyer-in-township-lahore' },
]

const NAV_GROUPS = [
  { title: 'Services', links: SERVICES },
  { title: 'Courts', links: COURTS },
  { title: 'Areas', links: AREAS },
]

export default function Navbar() {
  const [menuOpen,   setMenuOpen]   = useState(false)
  const [dropOpen,   setDropOpen]   = useState(false)
  const [mobileServ, setMobileServ] = useState(false)
  const [scrolled,   setScrolled]   = useState(false)
  const dropRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) setDropOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const close = () => { setMenuOpen(false); setDropOpen(false); setMobileServ(false) }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md border-b border-gray-200' : 'bg-white/95 backdrop-blur-sm border-b border-gray-100'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* Logo — text-based */}
        <Link href="/" onClick={close} className="flex flex-col leading-tight">
          <span className="font-serif text-lg font-bold text-navy-900 tracking-tight">Saeed Law Firm</span>
          <span className="text-xs text-gold-600 font-semibold tracking-widest uppercase">Lahore</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center space-x-7">
          <Link href="/" className="text-sm font-medium text-navy-800 hover:text-gold-600 transition-colors duration-200">Home</Link>

          <div className="relative" ref={dropRef}>
            <button
              onClick={() => setDropOpen(v => !v)}
              className="flex items-center gap-1 text-sm font-medium text-navy-800 hover:text-gold-600 transition-colors duration-200 cursor-pointer"
              aria-expanded={dropOpen}
            >
              Practice Areas
              <svg className={`w-4 h-4 transition-transform duration-200 ${dropOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {dropOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[760px] max-w-[calc(100vw-3rem)] bg-white border border-gray-200 rounded-lg shadow-xl p-5 z-50">
                <div className="grid grid-cols-3 gap-5">
                  {NAV_GROUPS.map(group => (
                    <div key={group.title}>
                      <p className="text-xs font-semibold text-gold-700 uppercase tracking-widest mb-2">{group.title}</p>
                      <div className="space-y-1">
                        {group.links.map(item => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setDropOpen(false)}
                            className="block rounded px-3 py-2 text-sm text-navy-800 hover:bg-gold-50 hover:text-gold-700 transition-colors duration-150"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link href="/about" className="text-sm font-medium text-navy-800 hover:text-gold-600 transition-colors duration-200">About Us</Link>
          <Link href="/contact" className="text-sm font-medium text-navy-800 hover:text-gold-600 transition-colors duration-200">Contact</Link>
          <Link href="/contact" className="btn-gold text-sm">Book Consultation</Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(v => !v)}
          className="md:hidden p-2 rounded text-navy-800 hover:bg-gray-100 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold-500"
        >
          {menuOpen
            ? <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            : <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
          }
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-1">
          <Link href="/" onClick={close} className="block py-2.5 text-sm font-medium text-navy-800 hover:text-gold-600 transition-colors">Home</Link>
          <div>
            <button onClick={() => setMobileServ(v => !v)} className="flex items-center justify-between w-full py-2.5 text-sm font-medium text-navy-800 hover:text-gold-600 transition-colors cursor-pointer">
              Practice Areas
              <svg className={`w-4 h-4 transition-transform duration-200 ${mobileServ ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </button>
            {mobileServ && (
              <div className="pl-4 border-l-2 border-gold-200 ml-2 mt-1 mb-2 space-y-4">
                {NAV_GROUPS.map(group => (
                  <div key={group.title}>
                    <p className="text-xs font-semibold text-gold-700 uppercase tracking-widest mb-1">{group.title}</p>
                    {group.links.map(item => (
                      <Link key={item.href} href={item.href} onClick={close} className="block py-1.5 text-sm text-navy-700 hover:text-gold-600 transition-colors">{item.label}</Link>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>
          <Link href="/about" onClick={close} className="block py-2.5 text-sm font-medium text-navy-800 hover:text-gold-600 transition-colors">About Us</Link>
          <Link href="/contact" onClick={close} className="block py-2.5 text-sm font-medium text-navy-800 hover:text-gold-600 transition-colors">Contact</Link>
          <Link href="/contact" onClick={close} className="btn-gold w-full justify-center mt-3 block text-center">Book Consultation</Link>
        </div>
      )}
    </nav>
  )
}
