import Link from 'next/link'
import Head from 'next/head'

const SERVICES = [
  { title: 'Family Lawyer',      href: '/family-lawyer-in-lahore',      body: 'Divorce (Khula & Talaq), child custody, maintenance, domestic violence, inheritance, and all matrimonial matters.' },
  { title: 'Tax Lawyer',         href: '/tax-lawyer-in-lahore',         body: 'FBR audits, income tax disputes, sales tax, property tax, penalty waivers, and tax litigation.' },
  { title: 'Immigration Lawyer', href: '/immigration-lawyer-in-lahore', body: 'Student visas, work permits, family reunification, citizenship, and immigration appeals.' },
  { title: 'Criminal Lawyer',    href: '/criminal-lawyer-in-lahore',    body: 'Bail applications, FIR matters, criminal trials, narcotics, cybercrime, and High Court appeals.' },
  { title: 'Property Lawyer',    href: '/property-lawyer-in-lahore',    body: 'Property disputes, inheritance partition, mutation matters, rental disputes, and Lahore real estate litigation.' },
  { title: 'Civil Lawyer',       href: '/civil-lawyer-in-lahore',       body: 'Property disputes, contract breaches, recovery suits, injunctions, and civil appeals.' },
]

export default function Services() {
  return (
    <>
      <Head><title>Services | Saeed Law Firm Lahore</title></Head>

      <div className="bg-navy-900 py-16 px-6 text-center">
        <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-2">OUR SERVICES</p>
        <h1 className="font-serif text-3xl md:text-4xl font-semibold text-white mb-3">Navigating Your Legal Needs</h1>
        <div className="w-12 h-1 bg-gold-600 rounded mx-auto mb-5" />
        <p className="text-gray-300 max-w-2xl mx-auto text-sm leading-relaxed">
          Saeed Law Firm Lahore provides comprehensive legal services across Pakistan. Established 1975, 50+ years of experience, 800+ cases handled.
        </p>
      </div>

      <div className="bg-gray-50 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map(s => (
              <Link key={s.href} href={s.href} className="group bg-white border border-gray-200 rounded-lg p-7 hover:border-gold-400 hover:shadow-lg transition-all duration-200 flex flex-col cursor-pointer">
                <h2 className="font-serif text-xl font-semibold text-navy-900 mb-3 group-hover:text-gold-700 transition-colors">{s.title}</h2>
                <p className="text-sm text-navy-700 leading-relaxed flex-1">{s.body}</p>
                <p className="mt-5 text-sm font-semibold text-gold-600 group-hover:underline">Explore →</p>
              </Link>
            ))}
          </div>

          <div className="mt-16 bg-navy-900 rounded-lg p-10 text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-white mb-3">Book a Free Consultation</h2>
            <p className="text-gray-300 mb-6 max-w-xl mx-auto text-sm leading-relaxed">
              Contact Saeed Law Firm today. Discuss your legal matter and begin working toward the best possible outcome with experienced lawyers.
            </p>
            <Link href="https://wa.me/+923194959420" className="btn-gold">Call Now</Link>
          </div>
        </div>
      </div>
    </>
  )
}
