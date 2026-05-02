import Head from 'next/head'

export default function Contact() {
  return (
    <>
      <Head><title>Contact | Saeed Law Firm Lahore</title></Head>

      <div className="bg-navy-900 py-16 px-6 text-center">
        <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-2">GET IN TOUCH</p>
        <h1 className="font-serif text-3xl md:text-4xl font-semibold text-white mb-3">Contact</h1>
        <div className="w-12 h-1 bg-gold-600 rounded mx-auto" />
      </div>

      <div className="bg-gray-50 py-16 px-6">
        <div className="max-w-2xl mx-auto">

          <p className="text-center text-navy-700 mb-10 text-sm leading-relaxed">
            Need help or have questions? Our dedicated support team is always ready to assist you.
          </p>

          {/* Contact cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            <div className="flex flex-col items-center text-center bg-white border border-gray-200 rounded-lg px-4 py-6 hover:border-gold-300 transition-colors duration-200">
              <svg className="w-6 h-6 text-gold-600 mb-3" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <span className="text-sm text-navy-700 font-medium">13 Fane Road Infront of Lahore High Court, Tauheed Manzil</span>
            </div>

            <a href="tel:+923194959420" className="flex flex-col items-center text-center bg-white border border-gray-200 rounded-lg px-4 py-6 hover:border-gold-300 transition-colors duration-200 cursor-pointer">
              <svg className="w-6 h-6 text-gold-600 mb-3" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <span className="text-sm text-navy-700 font-medium">+92 319 4959420</span>
            </a>

            <a href="mailto:ahmadbilal2003@gmail.com" className="flex flex-col items-center text-center bg-white border border-gray-200 rounded-lg px-4 py-6 hover:border-gold-300 transition-colors duration-200 cursor-pointer">
              <svg className="w-6 h-6 text-gold-600 mb-3" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              <span className="text-sm text-navy-700 font-medium">ahmadbilal2003@gmail.com</span>
            </a>
          </div>

          {/* Contact form */}
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <h2 className="font-serif text-xl font-semibold text-navy-900 mb-2">Contact With Us</h2>
            <p className="text-sm text-navy-700 mb-6">Select your legal service and we&apos;ll connect you with the right specialist.</p>

            <div className="mb-5">
              <label htmlFor="service" className="block text-sm font-medium text-navy-800 mb-1.5">Service Required</label>
              <select id="service" className="block w-full px-4 py-2.5 text-navy-900 bg-white border border-gray-300 rounded-md focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500 transition-colors">
                <option value="">Select a service…</option>
                <option>Real Estate – Residential / Commercial</option>
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
                <input id="name" type="text" className="block w-full px-4 py-2.5 text-navy-900 bg-white border border-gray-300 rounded-md focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500 transition-colors" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-navy-800 mb-1.5">Email</label>
                <input id="email" type="email" className="block w-full px-4 py-2.5 text-navy-900 bg-white border border-gray-300 rounded-md focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500 transition-colors" placeholder="your@email.com" />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-navy-800 mb-1.5">Message</label>
              <textarea id="message" rows={5} className="block w-full px-4 py-2.5 text-navy-900 bg-white border border-gray-300 rounded-md focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500 transition-colors resize-none" placeholder="Describe your legal matter…" />
            </div>

            <button type="button" className="btn-gold w-full justify-center">Send</button>
          </div>

        </div>
      </div>
    </>
  )
}
