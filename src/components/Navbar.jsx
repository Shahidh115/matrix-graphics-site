import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import businessLogo from '../assets/business-logo.svg'
import darkLogo from '../assets/logo-dark-mode-new.svg'

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/about', label: 'About Us' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' }
]

export default function Navbar() {
  const location = useLocation()
  
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') !== 'light'
    }
    return true
  })

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDark])

  const isActiveLink = (path) => {
    return location.pathname === path
  }

  return (
    <header className="navbar-shell sticky top-0 z-40">
      <div className="container flex items-center justify-between gap-3 py-1.5 sm:py-2">
        <NavLink to="/" className="order-2 flex min-w-0 items-center gap-3 md:order-1" aria-label="Matrix Graphics home">
          <div className="nav-logo-frame relative flex items-center justify-center">
            <img 
              src={businessLogo} 
              alt="Matrix Graphics Logo" 
              className={`nav-logo absolute h-8 w-auto transition-opacity duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${isDark ? 'opacity-0' : 'opacity-100'}`} 
            />
            <img 
              src={darkLogo} 
              alt="Matrix Graphics Logo" 
              className={`nav-logo absolute h-8 w-auto transition-opacity duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${isDark ? 'opacity-100' : 'opacity-0'}`} 
            />
          </div>
        </NavLink>

        <nav className="order-3 hidden items-center gap-2 rounded-lg border border-white/12 bg-white/8 p-1 md:order-2 md:flex">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'} className={navClass(isActiveLink(link.to))}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="order-1 flex items-center gap-2 sm:gap-3 md:order-3">
          <div className="md:hidden">
            <MobileMenu isActiveLink={isActiveLink} />
          </div>

          <button
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle Theme"
            className="relative inline-flex h-10 w-10 overflow-hidden items-center justify-center rounded-md border border-mgyellow/35 bg-mgyellow/10 text-mgyellow transition-all duration-300 hover:bg-mgyellow hover:text-mgblack"
          >
            <div className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${isDark ? 'rotate-0 opacity-100 scale-100' : 'rotate-90 opacity-0 scale-50'}`}>
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
            </div>
            <div className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${isDark ? '-rotate-90 opacity-0 scale-50' : 'rotate-0 opacity-100 scale-100'}`}>
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
            </div>
          </button>

          <a href="mailto:info@matrixgraphics.lk" className="hidden rounded-md bg-mgyellow px-4 py-2 text-sm font-bold text-mgblack transition duration-300 hover:brightness-95 md:inline-block">
            Email Us
          </a>
          <a
            href="tel:+94777043334"
            aria-label="Call Matrix Graphics"
            title="Call Matrix Graphics"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-mgyellow/35 bg-mgyellow/10 text-mgyellow transition duration-300 hover:bg-mgyellow hover:text-mgblack"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M21 16.92V20a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3 5.18 2 2 0 0 1 5 3h3.09a2 2 0 0 1 2 1.72c.12.9.32 1.78.6 2.62a2 2 0 0 1-.45 2.11L9.2 10.49a16 16 0 0 0 4.31 4.31l1.04-1.04a2 2 0 0 1 2.11-.45c.84.28 1.72.48 2.62.6A2 2 0 0 1 21 16.92Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  )
}

function navClass(active) {
  return active
    ? 'rounded-md bg-mgyellow px-3 py-2 text-sm font-black text-mgblack shadow-sm transition duration-300'
    : 'rounded-md px-3 py-2 text-sm font-bold text-mgnavy transition duration-300 hover:bg-mgnavy/10 hover:text-mgyellow'
}

function MobileMenu({ isActiveLink }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        aria-label="Open menu"
        aria-expanded={isOpen}
        className="flex cursor-pointer items-center justify-center rounded-md border border-mgyellow/35 bg-mgyellow px-3 py-2 text-sm font-black text-mgblack transition duration-300"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </button>
      {isOpen && (
      <div className="dark-panel absolute left-0 mt-2 w-screen p-2 sm:left-auto sm:w-56">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            onClick={() => setIsOpen(false)}
            className={isActiveLink(link.to) ? 'block rounded bg-mgyellow p-2 font-bold text-mgblack transition duration-300' : 'block rounded p-2 font-semibold text-mgnavy transition duration-300 hover:bg-mgnavy/10 hover:text-mgyellow'}
          >
            {link.label}
          </NavLink>
        ))}
      </div>
      )}
    </div>
  )
}
