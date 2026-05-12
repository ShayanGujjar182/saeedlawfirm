import Head from 'next/head'
import Link from 'next/link'

export default function About() {
  return (
    <>
      <Head><title>About Us | Saeed Law Firm Lahore</title></Head>

      <div className="bg-navy-900 py-16 px-6 text-center">
        <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-2">About Us</p>
        <h1 className="font-serif text-3xl md:text-4xl font-semibold text-white mb-3">Personal Lawyers &amp; Legal Consultants</h1>
        <div className="w-12 h-1 bg-gold-600 rounded mx-auto" />
      </div>

      {/* Intro */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:items-center gap-12">
          <div className="w-full md:w-1/2">
            <img className="object-cover w-full h-80 md:h-[440px] rounded-lg shadow-lg" src="/images/why-us.jpeg" alt="Saeed Law Firm Lahore" />
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-gold-600 text-sm font-semibold uppercase tracking-widest mb-2">About Us</p>
            <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-1">Bilal Saeed &amp; Team – Your Shield in Law</h2>
            <div className="divider-gold" />
            <p className="text-navy-700 leading-relaxed mb-4">
              Saeed Law Firm is a trusted legal practice in Lahore, offering expert legal services and professional consultancy to individuals, families, and businesses. We focus on delivering tailored legal guidance that safeguards your rights and interests while helping you navigate complex legal situations.
            </p>
            <p className="text-navy-700 leading-relaxed mb-4">
              Saeed Law Firm, led by the esteemed Bilal Saeed, is dedicated to providing authoritative and results-driven legal solutions. Our experienced team handles complex cases across corporate, civil, and criminal law, ensuring clients&apos; rights are fully protected.
            </p>
            <p className="text-navy-700 leading-relaxed mb-8">
              Committed to professionalism, integrity, and excellence, we guide you through every legal challenge with clarity and confidence, delivering outcomes that secure your future and build lasting trust.
            </p>
            <Link href="https://wa.me/+923194959420" className="btn-gold">Call Now</Link>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="bg-navy-900 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-2">Our Benefits</p>
            <h2 className="font-serif text-3xl font-semibold text-white">Why Choose Our Lawyers?</h2>
            <div className="w-12 h-1 bg-gold-600 rounded mx-auto mt-3 mb-4" />
            <p className="text-gray-300 max-w-2xl mx-auto text-sm leading-relaxed">
              Our skilled team understands the complexities of the legal system and is fully prepared to handle your case with confidence and expertise.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { title: 'Expertise & Experience',              body: 'Over 50 years of combined legal practice across Pakistan\'s court system — from district courts to the Supreme Court.' },
              { title: 'Client-Focused Approach',            body: 'We tailor every legal strategy to your unique situation, never offering one-size-fits-all solutions.' },
              { title: 'Wide Range of Legal Services',       body: 'Family law, criminal defence, tax, immigration, personal injury, and civil litigation — all under one roof.' },
              { title: 'Strong Commitment to the Community', body: 'We believe in accessible justice and take our responsibility to the communities we serve seriously.' },
            ].map(b => (
              <div key={b.title} className="bg-navy-800 border border-navy-700 rounded-lg p-6 hover:border-gold-600 transition-colors duration-200">
                <h3 className="font-serif text-lg font-semibold text-gold-400 mb-2">{b.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gold-600 py-12 px-6 text-center">
        <h2 className="font-serif text-2xl font-semibold text-white mb-3">Make an Appointment</h2>
        <p className="text-white/90 mb-6 max-w-xl mx-auto text-sm">
          Get compassionate legal help for divorce, custody, maintenance, or guardianship. Contact Saeed Law Firm today for a private consultation with an experienced family lawyer.
        </p>
        <Link href="https://wa.me/+923194959420" className="bg-white text-gold-700 font-semibold px-7 py-3 rounded hover:bg-gold-50 transition-colors duration-200 inline-block">
          Call Now
        </Link>
      </section>
    </>
  )
}
