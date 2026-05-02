import Link from 'next/link'

const SERVICES = [
  { label: 'Family Lawyer',      href: '/family-lawyer-in-lahore' },
  { label: 'Criminal Lawyer',    href: '/criminal-lawyer-in-lahore' },
  { label: 'Tax Lawyer',         href: '/tax-lawyer-in-lahore' },
  { label: 'Immigration Lawyer', href: '/immigration-lawyer-in-lahore' },
  { label: 'Property Lawyer',    href: '/property-lawyer-in-lahore' },
  { label: 'Civil Lawyer',       href: '/civil-lawyer-in-lahore' },
]

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          <div className="lg:col-span-2">
            <Link href="/" className="font-serif text-xl font-semibold text-white hover:text-gold-400 transition-colors duration-200">
              Saeed Law Firm
            </Link>
            <p className="mt-1 text-gold-400 text-xs font-semibold tracking-widest uppercase mb-3">Lahore</p>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              From home to heritage, business to family, our team is dedicated to providing trusted legal counsel and comprehensive representation every step of the way.
            </p>
          </div>

          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-widest mb-4">OUR SERVICES</h3>
            <ul className="space-y-2 text-sm">
              {SERVICES.map(s => (
                <li key={s.href}>
                  <Link href={s.href} className="text-gray-400 hover:text-gold-400 transition-colors duration-200">{s.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-widest mb-4">QUICK LINKS</h3>
            <ul className="space-y-2 text-sm mb-6">
              {[
                { label: 'Home',     href: '/' },
                { label: 'About Us', href: '/about' },
                { label: 'Services', href: '/what-we-do' },
                { label: 'Contact Us', href: '/contact' },
              ].map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="text-gray-400 hover:text-gold-400 transition-colors duration-200">{label}</Link>
                </li>
              ))}
            </ul>

            <div className="space-y-1 text-sm">
              <p className="text-white text-xs font-semibold uppercase tracking-widest mb-2">Contact</p>
              <a href="tel:+923194959420" className="block text-gray-400 hover:text-gold-400 transition-colors cursor-pointer">+92 319 4959420</a>
              <p className="text-gray-400">FAX: +92 319 4959420</p>
              <p className="text-gray-400 text-xs leading-snug">13 Fane Road Tauheed Mazil,<br />Lahore, Pakistan</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-navy-800 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-500">
          <p>© Copyright {new Date().getFullYear()} Saeed Law Firm. All Rights Reserved</p>
          <p>Established 1975 &nbsp;·&nbsp; Lahore, Pakistan</p>
        </div>
      </div>
    </footer>
  )
}
