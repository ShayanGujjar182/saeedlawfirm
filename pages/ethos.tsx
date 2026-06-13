import Head from 'next/head'
import Link from 'next/link'
import { SITE_URL, jsonLd, organizationSchema, breadcrumbSchema } from '../lib/seo-content'
import ETHOS_DATA from '../components/Ethos/data'

const EthosPage = (): JSX.Element => {
  const title = 'Our Ethos | Saeed Law Firm Lahore'
  const description = 'The ethical foundation of Saeed Law Firm: client confidentiality, legal privilege, and the rule of law since 1975.'
  const canonicalUrl = `${SITE_URL}/ethos`

  const breadcrumbs = [
    { name: 'Home', url: SITE_URL },
    { name: 'Ethos', url: canonicalUrl },
  ]

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(organizationSchema()) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbSchema(breadcrumbs)) }} />
      </Head>

      <main>
        {/* Hero Section */}
        <section className="bg-navy-900 py-16 px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <p className="text-gold-500 text-sm font-semibold tracking-wide uppercase mb-4">Our Foundation</p>
            <h1 className="font-serif text-4xl md:text-5xl text-white mb-6">
              Our Ethos: How Saeed Law Firm Practises Law in Lahore
            </h1>
            <p className="text-white text-lg leading-relaxed max-w-3xl mx-auto">
              Fifty years of legal practice grounded in one principle: the law serves the client, not the lawyer.
            </p>
          </div>
        </section>

        {/* Intro Prose */}
        <section className="py-12 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-700 text-lg leading-relaxed mb-5">
              Ethics are not an add-on to legal practice. They are its skeleton. Strip out confidentiality and a client can no longer speak freely to their lawyer. Privilege, conflict checks, and a basic respect for the rule of law are not niceties either: they are what makes the advice worth paying for. Since 1975, Saeed Law Firm has built its reputation on that understanding, and our clients trust us because we have earned it.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              What you will find on these pages is not a list of values we aspire to. It is a description of how we actually work. When you consult with us in Lahore, or seek our advice on a matter of real importance, these principles are not rhetoric. They are the operating system of the firm.
            </p>
          </div>
        </section>

        {/* Business Ethical Quotient */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-serif text-navy-900 mb-2">How We Run the Firm</h2>
            <p className="text-gray-600 mb-12 max-w-2xl">
              These are the commitments that govern how we handle files, money, and client information inside the firm.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ETHOS_DATA[0].data.map((item, idx) => (
                <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6 flex items-start gap-4">
                  <span className="text-gold-500 text-2xl font-bold flex-shrink-0">✓</span>
                  <h3 className="text-lg font-semibold text-navy-900">{item}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Individual Ethical Quotient */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-serif text-navy-900 mb-2">What We Expect of Every Lawyer</h2>
            <p className="text-gray-600 mb-12 max-w-2xl">
              And these are what we hold every lawyer at the firm to, in court and out of it.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ETHOS_DATA[1].data.map((item, idx) => (
                <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6 flex items-start gap-4">
                  <span className="text-gold-500 text-2xl font-bold flex-shrink-0">✓</span>
                  <h3 className="text-lg font-semibold text-navy-900">{item}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* In-Practice Explanations */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif text-navy-900 mb-10">What This Means for You</h2>

            <div className="space-y-10">
              <div>
                <h3 className="text-xl font-semibold text-navy-900 mb-3">Client Confidentiality</h3>
                <p className="text-gray-700 leading-relaxed">
                  Everything you tell us stays with us. Not because the law requires it, though it does. But because you deserve to speak to your lawyer without wondering who else might hear it. In a city like Lahore where business and family networks overlap, confidentiality is not incidental. It is the entire point. We take it seriously enough to refuse instructions if keeping them would compromise another client&apos;s trust.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-navy-900 mb-3">Preserving Privilege</h3>
                <p className="text-gray-700 leading-relaxed">
                  Legal privilege exists to protect your right to speak frankly with your lawyer. We structure our advice and communications to keep that protection intact. A memo that protects privilege is worth more than one that does not, even if the second reads more cleanly. When privilege is at stake, we choose the option that serves your legal rights, not your comfort.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-navy-900 mb-3">Conflict Checks</h3>
                <p className="text-gray-700 leading-relaxed">
                  We do not accept instructions if we already represent someone with an adverse interest. It sounds simple. In practice, it means turning away work, and the money that comes with it. It also means we can be trusted not to be working against you on another file. That trust is worth more than a single engagement.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-navy-900 mb-3">Rule of Law</h3>
                <p className="text-gray-700 leading-relaxed">
                  We represent clients within the law, not against it. That distinction matters. We will advocate fiercely for your rights. We will challenge bad decisions and press weak claims. But we will not ask you to do something illegal, and we will not certify a statement we believe to be false. The law is the frame. Everything else fits inside it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Closing Links */}
        <section className="py-16 px-6 bg-navy-900">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif text-white mb-8">Learn More About Saeed Law Firm</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/" className="inline-block bg-white text-navy-900 font-semibold py-3 px-8 rounded hover:bg-gray-100 transition">
                Home
              </Link>
              <Link href="/about" className="inline-block bg-white text-navy-900 font-semibold py-3 px-8 rounded hover:bg-gray-100 transition">
                About the Firm
              </Link>
              <Link href="/what-we-do" className="inline-block bg-white text-navy-900 font-semibold py-3 px-8 rounded hover:bg-gray-100 transition">
                Our Legal Services
              </Link>
              <Link href="/contact" className="inline-block bg-white text-navy-900 font-semibold py-3 px-8 rounded hover:bg-gray-100 transition">
                Get in Touch
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default EthosPage