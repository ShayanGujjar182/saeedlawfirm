import Head from 'next/head'
import { useState, type ChangeEvent, type FormEvent } from 'react'
import { SITE_URL, jsonLd, organizationSchema, breadcrumbSchema } from '../lib/seo-content'

type StatusType = 'idle' | 'sending' | 'success' | 'error'

// Web3Forms access key is public by design (client-side submission).
// Web3Forms free tier only accepts requests from a real browser, so the form
// posts straight to their API. Override per-environment via NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY.
const WEB3FORMS_ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || 'db57d8a2-c33a-484d-9877-7db9adaa8a2c'

export default function Contact() {
  const [form, setForm] = useState({ service: '', name: '', email: '', message: '' })
  const [status, setStatus] = useState<{ type: StatusType; message: string }>({ type: 'idle', message: '' })

  const update = (field: keyof typeof form) => (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm(prev => ({ ...prev, [field]: e.target.value }))

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus({ type: 'sending', message: '' })
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: 'Website enquiry' + (form.service ? ': ' + form.service : ''),
          from_name: 'Saeed Law Firm website',
          name: form.name,
          email: form.email,
          replyto: form.email,
          service: form.service || 'Not specified',
          message: form.message,
        }),
      })
      const data = await res.json()
      if (data.success) {
        setStatus({ type: 'success', message: 'Thanks. Your message has been sent and we will get back to you shortly.' })
        setForm({ service: '', name: '', email: '', message: '' })
      } else {
        setStatus({ type: 'error', message: data.message || 'Something went wrong. Please call or WhatsApp us at +92 319 4959420.' })
      }
    } catch {
      setStatus({ type: 'error', message: 'We could not send your message. Please call or WhatsApp us at +92 319 4959420.' })
    }
  }

  return (
    <>
      <Head>
        <title>Contact Saeed Law Firm | Lawyers in Lahore</title>
        <meta name="description" content="Call or WhatsApp +92 319 4959420 to reach Saeed Law Firm in DHA Phase 3 Lahore. Free legal consultation. Monday to Friday 9 AM to 6 PM." />
        <link rel="canonical" href={SITE_URL + '/contact'} />
        <meta property="og:title" content="Contact Saeed Law Firm | Lawyers in Lahore" />
        <meta property="og:description" content="Call or WhatsApp +92 319 4959420 to reach Saeed Law Firm in DHA Phase 3 Lahore. Free legal consultation. Monday to Friday 9 AM to 6 PM." />
        <meta property="og:url" content={SITE_URL + '/contact'} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(organizationSchema()) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbSchema([{ name: 'Home', url: SITE_URL }, { name: 'Contact', url: SITE_URL + '/contact' }])) }} />
      </Head>

      <div className="bg-navy-900 py-16 px-6 text-center">
        <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-2">Get In Touch</p>
        <h1 className="font-serif text-3xl md:text-4xl font-semibold text-white mb-3">Contact Saeed Law Firm in Lahore</h1>
        <div className="w-12 h-1 bg-gold-600 rounded mx-auto" />
      </div>

      <div className="bg-gray-50 py-16 px-6">
        <div className="max-w-2xl mx-auto">

          <p className="text-center text-navy-700 mb-10 text-sm leading-relaxed">
            Reach Saeed Law Firm by phone, WhatsApp, or email. Bilal Saeed, Advocate, handles your matter personally. We offer a free initial consultation and have been serving clients in Lahore since 1975.
          </p>

          {/* Contact cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            <a href="https://www.google.com/maps/search/?api=1&query=Saeed+Law+Firm+DHA+Phase+3+Lahore" className="flex flex-col items-center text-center bg-white border border-gray-200 rounded-lg px-4 py-6 hover:border-gold-300 transition-colors duration-200">
              <svg className="w-6 h-6 text-gold-600 mb-3" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <span className="text-sm text-navy-700 font-medium">Y Block Main Market, Sector Y, DHA Phase 3, Lahore 54793</span>
            </a>

            <a href="tel:+923194959420" className="flex flex-col items-center text-center bg-white border border-gray-200 rounded-lg px-4 py-6 hover:border-gold-300 transition-colors duration-200">
              <svg className="w-6 h-6 text-gold-600 mb-3" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <span className="text-sm text-navy-700 font-medium">+92 319 4959420</span>
            </a>

            <a href="mailto:ahmadbilal2003@gmail.com" className="flex flex-col items-center text-center bg-white border border-gray-200 rounded-lg px-4 py-6 hover:border-gold-300 transition-colors duration-200">
              <svg className="w-6 h-6 text-gold-600 mb-3" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              <span className="text-sm text-navy-700 font-medium">ahmadbilal2003@gmail.com</span>
            </a>

            <div className="flex flex-col items-center text-center bg-white border border-gray-200 rounded-lg px-4 py-6">
              <svg className="w-6 h-6 text-gold-600 mb-3" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5-15a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-xs text-navy-700 font-medium leading-relaxed">Monday to Friday: 9:00 AM to 6:00 PM<br />Saturday: 10:00 AM to 2:00 PM<br />Sunday: Closed</span>
            </div>
          </div>

          {/* Contact form */}
          <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-lg p-8">
            <h2 className="font-serif text-xl font-semibold text-navy-900 mb-2">Send us a message</h2>
            <p className="text-sm text-navy-700 mb-6">Tell us which legal service you need. For a faster response, call or WhatsApp us directly.</p>

            <div className="mb-5">
              <label htmlFor="service" className="block text-sm font-medium text-navy-800 mb-1.5">Service Required</label>
              <select id="service" value={form.service} onChange={update('service')} className="block w-full px-4 py-2.5 text-navy-900 bg-white border border-gray-300 rounded-md focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500 transition-colors">
                <option value="">Select a service</option>
                <option>Real Estate (Residential / Commercial)</option>
                <option>Family Laws</option>
                <option>Civil Litigation</option>
                <option>Immigration</option>
                <option>Criminal Defence</option>
                <option>Tax Law</option>
                <option>Personal Injury</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-navy-800 mb-1.5">Name</label>
                <input id="name" type="text" required value={form.name} onChange={update('name')} className="block w-full px-4 py-2.5 text-navy-900 bg-white border border-gray-300 rounded-md focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500 transition-colors" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-navy-800 mb-1.5">Email</label>
                <input id="email" type="email" required value={form.email} onChange={update('email')} className="block w-full px-4 py-2.5 text-navy-900 bg-white border border-gray-300 rounded-md focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500 transition-colors" placeholder="your@email.com" />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-navy-800 mb-1.5">Message</label>
              <textarea id="message" rows={5} required value={form.message} onChange={update('message')} className="block w-full px-4 py-2.5 text-navy-900 bg-white border border-gray-300 rounded-md focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500 transition-colors resize-none" placeholder="Describe your legal matter" />
            </div>

            <button type="submit" disabled={status.type === 'sending'} className="btn-gold w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed">
              {status.type === 'sending' ? 'Sending...' : 'Send'}
            </button>

            {(status.type === 'success' || status.type === 'error') && (
              <p role="status" className={'mt-4 text-sm text-center ' + (status.type === 'success' ? 'text-green-700' : 'text-red-600')}>
                {status.message}
              </p>
            )}
          </form>

          {/* Footer links */}
          <div className="mt-10 text-center text-sm text-navy-700">
            <p>
              Return to <a href="/" className="text-gold-600 hover:text-gold-700 font-medium">Saeed Law Firm</a>, read about <a href="/what-we-do" className="text-gold-600 hover:text-gold-700 font-medium">our legal services</a>, or learn <a href="/about" className="text-gold-600 hover:text-gold-700 font-medium">about the firm</a>.
            </p>
          </div>

        </div>
      </div>
    </>
  )
}
