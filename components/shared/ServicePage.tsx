import Link from 'next/link'
import { ReactNode } from 'react'

interface Stat    { value: string; label: string; sub?: string }
interface FAQ     { q: string; a: string }
interface Step    { num: string; title: string; body: string }
interface Service { title: string; body: string; icon: ReactNode }
interface Review  { text: string; author: string }

interface Props {
  eyebrow:    string
  headline:   string
  intro:      string
  stats:      Stat[]
  services:   Service[]
  servicesSectionTitle?: string
  servicesSectionIntro?: string
  benefits:   { title: string; body: string }[]
  benefitsSectionTitle?: string
  steps:      Step[]
  stepsSectionTitle?: string
  faqs:       FAQ[]
  reviews?:   Review[]
  ctaHeadline?: string
  ctaBody?:   string
}

const REVIEWS: Review[] = [
  { text: 'Saeed Law Firm handled my Khula case with great professionalism. I felt supported throughout the process and received my decree faster than expected.', author: 'Fatima A.' },
  { text: "I was afraid I might lose custody of my son, but their lawyers fought my case strongly. The Guardian Court granted me full custody. Truly grateful.", author: 'Ayesha S.' },
  { text: 'Professional, honest, and very knowledgeable in family laws. They recovered my dowry items and helped me secure maintenance for my children.', author: 'Nazia R.' },
  { text: 'Their court marriage service was completely confidential and legally solid. Everything was arranged smoothly and respectfully.', author: 'Hassan & Maria' },
  { text: 'The best family lawyers in Lahore. They prepare everything perfectly and keep you updated every step of the way.', author: 'Imran K.' },
]

const StarIcon = () => (
  <svg className="w-4 h-4 text-gold-500 fill-current" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
)

export default function ServicePage({
  eyebrow, headline, intro, stats, services, servicesSectionTitle, servicesSectionIntro,
  benefits, benefitsSectionTitle, steps, stepsSectionTitle, faqs, reviews, ctaHeadline, ctaBody,
}: Props) {
  const displayReviews = reviews ?? REVIEWS

  return (
    <div className="bg-gray-50">

      {/* ── Hero ─────────────────────────────────────── */}
      <div className="bg-navy-900 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-3">{eyebrow}</p>
          <h1 className="font-serif text-3xl md:text-5xl font-semibold text-white leading-tight mb-4">{headline}</h1>
          <div className="w-12 h-1 bg-gold-600 rounded mx-auto mb-6" />
          <p className="text-gray-300 text-base leading-relaxed max-w-2xl mx-auto mb-8">{intro}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-gold">Book a Consultation Today</Link>
            <a href="tel:+923194959420" className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded text-sm hover:bg-white/10 transition-colors duration-200 cursor-pointer">Call Now</a>
          </div>
        </div>
      </div>

      {/* ── Stats bar ────────────────────────────────── */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map(s => (
            <div key={s.label} className="text-center">
              <p className="font-serif text-3xl font-bold text-gold-600">{s.value}</p>
              <p className="text-sm font-semibold text-navy-800 mt-1">{s.label}</p>
              {s.sub && <p className="text-xs text-navy-600 mt-1 leading-snug">{s.sub}</p>}
            </div>
          ))}
        </div>
      </div>

      {/* ── Services grid ────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          {servicesSectionTitle && <p className="text-gold-600 text-sm font-semibold uppercase tracking-widest mb-2">Our Services</p>}
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-navy-900">{servicesSectionTitle ?? 'Our Services in This Area'}</h2>
          <div className="w-12 h-1 bg-gold-600 rounded mx-auto mt-3" />
          {servicesSectionIntro && <p className="text-navy-700 mt-4 max-w-2xl mx-auto text-sm leading-relaxed">{servicesSectionIntro}</p>}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(s => (
            <div key={s.title} className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gold-300 hover:shadow-md transition-all duration-200">
              <div className="text-gold-600 mb-4">{s.icon}</div>
              <h3 className="font-serif text-lg font-semibold text-navy-900 mb-2">{s.title}</h3>
              <p className="text-sm text-navy-700 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Why Choose Us ────────────────────────────── */}
      <div className="bg-navy-900 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-white">{benefitsSectionTitle ?? 'Why Choose Our Lawyers?'}</h2>
            <div className="w-12 h-1 bg-gold-600 rounded mx-auto mt-3" />
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {benefits.map(b => (
              <div key={b.title} className="bg-navy-800 border border-navy-700 rounded-lg px-6 py-5 hover:border-gold-600 transition-colors duration-200">
                <h3 className="font-serif text-base font-semibold text-gold-400 mb-2">{b.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Process ──────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-navy-900">{stepsSectionTitle ?? 'Our Process'}</h2>
          <div className="w-12 h-1 bg-gold-600 rounded mx-auto mt-3" />
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {steps.map(s => (
            <div key={s.num} className="text-center">
              <div className="w-12 h-12 rounded-full bg-gold-600 text-white font-bold text-lg flex items-center justify-center mx-auto mb-4">{s.num}</div>
              <h3 className="font-serif font-semibold text-navy-900 mb-2">{s.title}</h3>
              <p className="text-sm text-navy-700 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Client Reviews ───────────────────────────── */}
      <div className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-gold-600 text-sm font-semibold uppercase tracking-widest mb-2">Client Reviews</p>
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-navy-900">What Our Clients Say</h2>
            <div className="w-12 h-1 bg-gold-600 rounded mx-auto mt-3" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayReviews.map((r, i) => (
              <div key={i} className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <div className="flex gap-0.5 mb-3">{[...Array(5)].map((_, j) => <StarIcon key={j} />)}</div>
                <p className="text-sm text-navy-700 leading-relaxed mb-4 italic">&ldquo;{r.text}&rdquo;</p>
                <p className="text-sm font-semibold text-navy-900">— {r.author}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── FAQ ──────────────────────────────────────── */}
      <div className="bg-gray-50 py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-navy-900">Frequently Asked Questions</h2>
            <div className="w-12 h-1 bg-gold-600 rounded mx-auto mt-3" />
          </div>
          <div className="space-y-3">
            {faqs.map(f => (
              <details key={f.q} className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-gold-300 transition-colors">
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer font-medium text-navy-900 list-none select-none">
                  {f.q}
                  <svg className="w-5 h-5 text-gold-600 flex-shrink-0 ml-4 transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-5 text-sm text-navy-700 leading-relaxed border-t border-gray-100">
                  <p className="pt-4">{f.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA ──────────────────────────────────────── */}
      <div className="bg-gold-600 py-12 px-6 text-center">
        <h2 className="font-serif text-2xl md:text-3xl font-semibold text-white mb-3">
          {ctaHeadline ?? 'Book a Free Consultation'}
        </h2>
        <p className="text-white/90 mb-6 max-w-xl mx-auto text-sm leading-relaxed">
          {ctaBody ?? 'Contact Saeed Law Firm today. Discuss your legal matter, understand your position, and begin building your case with experienced lawyers.'}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="bg-white text-gold-700 font-semibold px-6 py-3 rounded hover:bg-gold-50 transition-colors duration-200 cursor-pointer">Get In Touch</Link>
          <a href="tel:+923194959420" className="border-2 border-white text-white font-semibold px-6 py-3 rounded hover:bg-white/10 transition-colors duration-200 cursor-pointer">+92 319 4959420</a>
        </div>
      </div>

    </div>
  )
}
