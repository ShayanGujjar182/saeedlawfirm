import Link from 'next/link'
import DisclaimerModal from '../components/HomeComponents/DisclaimerModal'

const SERVICES = [
  {
    title: 'Family Law Experts',
    href: '/family-lawyer-in-lahore',
    body: 'At Saeed Law Firm Lahore, our seasoned family law attorneys offer compassionate and expert guidance on matters including divorce, child custody, inheritance, and more.',
    icon: (<svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" /></svg>),
  },
  {
    title: 'Criminal Defense Experts',
    href: '/criminal-lawyer-in-lahore',
    body: 'Saeed & Lawyers Lahore provides experienced criminal defense attorneys, delivering robust representation and expert legal guidance for all types of criminal cases.',
    icon: (<svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>),
  },
  {
    title: 'Property Lawyer',
    href: '/property-lawyer-in-lahore',
    body: 'Saeed Law Firm handles property disputes, inheritance partition, mutation matters, rental disputes, and Lahore real estate litigation.',
    icon: (<svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg>),
  },
  {
    title: 'Tax Law Experts',
    href: '/tax-lawyer-in-lahore',
    body: 'Saeed & Lawyers Lahore specializes in tax law, offering legal support for FBR audits, income tax disputes, penalty resolution, and regulatory compliance.',
    icon: (<svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" /></svg>),
  },
  {
    title: 'Immigration Lawyer',
    href: '/immigration-lawyer-in-lahore',
    body: 'Saeed Law Firm offers trusted legal support for individuals and families seeking immigration solutions — visas, work permits, family reunification, and appeals.',
    icon: (<svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253M3 12a8.959 8.959 0 00.284 2.253" /></svg>),
  },
  {
    title: 'Civil Litigation Experts',
    href: '/civil-lawyer-in-lahore',
    body: 'Saeed & Lawyers Lahore offers expert legal representation in civil disputes, covering contract breaches, property conflicts, and personal injury claims, safeguarding your rights throughout the litigation process.',
    icon: (<svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>),
  },
]

const BENEFITS = [
  { title: 'Proven Skills & Knowledge',  body: 'Transparent Advice & Communication — We provide straightforward legal advice, clear timelines, and transparent fees, keeping you informed and confident at every stage of your case.' },
  { title: 'Focused on Your Needs',      body: 'Practical Solutions, Not Endless Delays — Whether through courtroom advocacy, strategic settlements, or dispute resolution, we prioritize your rights, goals, and the best possible outcome.' },
  { title: 'Complete Legal Solutions',   body: 'Handled by Experts Who Know Lahore Courts — 50 years of active litigation experience, our lawyers personally manage cases in district courts, family courts, and the Lahore High Court.' },
  { title: 'Dedicated to the Community', body: 'By choosing Saeed & Lawyers Lahore, you partner with a firm committed to excellence and personalized care, ensuring every client receives the attention and support they deserve.' },
]

export default function Home() {
  return (
    <div>

      {/* ── Hero ─────────────────────────────────────── */}
      <header className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row md:items-center gap-12">
          <div className="w-full md:w-1/2 max-w-xl">
            <p className="text-gold-600 text-sm font-semibold uppercase tracking-widest mb-3">
              Trusted Lawyers &amp; Legal Consultants in Lahore
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-navy-900 leading-tight">
              Saeed Law Firm Lahore – Trusted Lawyers &amp; Legal Consultants in Lahore
            </h1>
            <div className="divider-gold" />
            <p className="text-navy-700 text-base leading-relaxed mb-4 max-w-md">
              Saeed Law Firm Lahore, established in 1975, is a leading full-service law firm in Lahore, providing reliable, ethical, and results-driven legal services across Pakistan. Under the leadership of Bilal Saeed, Advocate, the firm brings over 50 years of combined legal experience and a record of 800+ successfully handled cases in Lahore.
            </p>
            <p className="text-navy-700 text-base leading-relaxed mb-4 max-w-md">
              Our lawyers in Lahore are recognized for strong advocacy, strategic legal advice, and consistent success before courts, tribunals, and regulatory authorities.
            </p>
            <p className="text-navy-700 text-base leading-relaxed mb-8 max-w-md">
              Whether you require urgent legal assistance, long-term legal counsel, or effective courtroom representation, Saeed Law Firm Lahore remains committed to protecting your rights and achieving the best possible legal outcomes.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-gold">Book a Consultation Today</Link>
              <a href="tel:+923194959420" className="btn-outline">Call Now</a>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gold-300 rounded-lg hidden md:block" aria-hidden="true" />
            <img
              className="relative object-cover w-full h-80 md:h-[480px] rounded-lg shadow-xl"
              src="/images/homepage-landing.jpeg"
              alt="Saeed Law Firm Lahore — Scales of Justice"
            />
            <div className="absolute bottom-6 right-6 bg-navy-900 text-white rounded-lg px-5 py-4 shadow-lg hidden md:block">
              <p className="font-serif text-2xl font-bold text-gold-400">800+</p>
              <p className="text-xs text-gray-300 mt-0.5 leading-tight">Cases<br />Handled</p>
            </div>
          </div>
        </div>
      </header>

      {/* ── Appointment banner ───────────────────────── */}
      <div className="bg-gold-600 py-10 px-6 text-center">
        <h2 className="font-serif text-xl md:text-2xl font-semibold text-white mb-2">MAKE AN APPOINTMENT</h2>
        <p className="text-white/90 mb-5 max-w-xl mx-auto text-sm">
          Schedule your consultation today and take the first step towards resolving your legal matters. Our team is ready to assist you.
        </p>
        <Link href="/contact" className="bg-white text-gold-700 font-semibold px-7 py-3 rounded hover:bg-gold-50 transition-colors duration-200 inline-block">
          Book a Consultation Today
        </Link>
      </div>

      {/* ── About / Leading Law Firm ─────────────────── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center gap-12">
          <div className="w-full md:w-1/2">
            <img className="object-cover w-full h-72 md:h-96 rounded-lg shadow-lg" src="/images/why-us.jpeg" alt="Saeed Law Firm Lahore" />
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-gold-600 text-sm font-semibold uppercase tracking-widest mb-2">Leading Law Firm in Lahore</p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-navy-900 leading-tight mb-1">
              Bilal Saeed &amp; Team – Your Shield in Law
            </h2>
            <div className="divider-gold" />
            <p className="text-navy-700 leading-relaxed mb-4">
              Saeed &amp; Lawyers Lahore is a premier full-service law firm, providing expert legal solutions across diverse areas of law. Recognized as one of Pakistan&apos;s most reputable firms, we have an extensive nationwide network and are highly recommended by international trade missions and global organizations throughout South Asia.
            </p>
            <p className="text-navy-700 leading-relaxed mb-4">
              At Saeed &amp; Lawyers Lahore, our mission is clear: we are committed to the success of our valued clients. Rooted in excellence, we provide top-tier legal services backed by extensive experience and a deep understanding of our clients&apos; business interests. Guided by the highest ethical standards, we ensure expert legal counsel to support your business growth and evolving needs.
            </p>
            <p className="text-navy-700 leading-relaxed mb-8">
              With the rise of law firms providing cross-border business guidance, legal counsel in South Asia demands a unique blend of expertise in both international and local laws, including a thorough understanding of Islamic law and local regulations.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { value: '50+',  label: 'Years of Experience' },
                { value: '800+', label: 'Cases Handled' },
                { value: '1975', label: 'Established' },
                { value: '6',    label: 'Practice Areas' },
              ].map(s => (
                <div key={s.label} className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-4 text-center">
                  <p className="font-serif text-2xl font-bold text-gold-600">{s.value}</p>
                  <p className="text-xs text-navy-700 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
            <Link href="/about" className="btn-gold">Learn More About Us</Link>
          </div>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────── */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-gold-600 text-sm font-semibold uppercase tracking-widest mb-2">OUR SERVICES</p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-navy-900">Guiding You Through Legal Challenges</h2>
            <div className="w-12 h-1 bg-gold-600 rounded mx-auto mt-3" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map(s => (
              <Link key={s.href} href={s.href} className="group bg-white border border-gray-200 rounded-lg p-7 hover:border-gold-400 hover:shadow-lg transition-all duration-200 cursor-pointer flex flex-col">
                <div className="text-gold-600 mb-4">{s.icon}</div>
                <h3 className="font-serif text-lg font-semibold text-navy-900 mb-2 group-hover:text-gold-700 transition-colors">{s.title}</h3>
                <p className="text-sm text-navy-700 leading-relaxed flex-1">{s.body}</p>
                <p className="mt-4 text-sm font-semibold text-gold-600 group-hover:underline">Learn More →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Benefits ─────────────────────────────────── */}
      <section className="bg-navy-900 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-2">OUR BENEFITS</p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white">Reasons to Choose Our Legal Team</h2>
            <div className="w-12 h-1 bg-gold-600 rounded mx-auto mt-3 mb-5" />
            <p className="text-gray-300 max-w-2xl mx-auto text-sm leading-relaxed">
              By choosing Saeed &amp; Lawyers Lahore, you partner with a firm committed to excellence and personalized care. We combine extensive experience, a client-focused approach, and diverse legal expertise to handle every case. Our dedication to community service and accessibility ensures every client receives the attention and support they deserve.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {BENEFITS.map(b => (
              <div key={b.title} className="bg-navy-800 border border-navy-700 rounded-lg p-7 hover:border-gold-600 transition-colors duration-200">
                <h3 className="font-serif text-lg font-semibold text-gold-400 mb-2">{b.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trust quote ──────────────────────────────── */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold-600 text-sm font-semibold uppercase tracking-widest mb-3">Why Clients Trust Saeed Law Firm</p>
          <blockquote className="font-serif text-xl md:text-2xl text-navy-900 italic leading-relaxed mb-6">
            &ldquo;At Saeed &amp; Lawyers Lahore, our vast experience sets us apart. Guided by precision, integrity, and personalized attention, we handle complex legal matters while prioritizing our clients&apos; needs at every stage. Clients trust us for results — experience the difference today.&rdquo;
          </blockquote>
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-8 h-px bg-gold-600" />
            <span className="text-gold-600 text-sm font-semibold tracking-widest uppercase">Saeed Law Firm Lahore</span>
            <div className="w-8 h-px bg-gold-600" />
          </div>
          <p className="text-navy-700 mb-8 max-w-xl mx-auto text-sm leading-relaxed">
            Looking for exceptional legal support? Get in touch today to schedule a consultation. Whether it&apos;s business law, family law, civil litigation, or immigration matters, Saeed &amp; Lawyers Lahore is here to assist you every step of the way.
          </p>
          <Link href="/contact" className="btn-gold">Get In Touch Today</Link>
        </div>
      </section>

      <DisclaimerModal />
    </div>
  )
}
