import Link from 'next/link'
import Head from 'next/head'
import { SITE_URL, jsonLd, organizationSchema, breadcrumbSchema } from '../lib/seo-content'

const SERVICES = [
	{
		title: 'Family Lawyer',
		href: '/family-lawyer-in-lahore',
		body: 'Divorce (Khula and Talaq), child custody, maintenance, domestic violence, inheritance, and all matrimonial matters.'
	},
	{
		title: 'Tax Lawyer',
		href: '/tax-lawyer-in-lahore',
		body: 'FBR audits, income tax disputes, sales tax, property tax, penalty waivers, and tax litigation.'
	},
	{
		title: 'Immigration Lawyer',
		href: '/immigration-lawyer-in-lahore',
		body: 'Student visas, work permits, family reunification, citizenship, and immigration appeals.'
	},
	{
		title: 'Criminal Lawyer',
		href: '/criminal-lawyer-in-lahore',
		body: 'Bail applications, FIR matters, criminal trials, narcotics, cybercrime, and High Court appeals.'
	},
	{
		title: 'Property Lawyer',
		href: '/property-lawyer-in-lahore',
		body: 'Property disputes, inheritance partition, mutation matters, rental disputes, and Lahore real estate litigation.'
	},
	{
		title: 'Civil Lawyer',
		href: '/civil-lawyer-in-lahore',
		body: 'Property disputes, contract breaches, recovery suits, injunctions, and civil appeals.'
	}
]

export default function Services() {
	const pageTitle = 'Legal Services in Lahore | Saeed Law Firm'
	const pageDescription =
		'Full-service law firm in Lahore since 1975. Family, criminal, tax, immigration, property & civil law. 50 years experience, 800+ cases. Free consultation.'

	return (
		<>
			<Head>
				<title>{pageTitle}</title>
				<meta name="description" content={pageDescription} />
				<link rel="canonical" href={SITE_URL + '/what-we-do'} />
				<meta property="og:title" content={pageTitle} />
				<meta property="og:description" content={pageDescription} />
				<meta property="og:url" content={SITE_URL + '/what-we-do'} />
				<meta property="og:type" content="website" />
				<meta property="og:image" content={SITE_URL + '/og-default.jpg'} />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:image" content={SITE_URL + '/og-default.jpg'} />
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: jsonLd(organizationSchema()) }}
				/>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: jsonLd(
							breadcrumbSchema([
								{ name: 'Home', url: SITE_URL },
								{ name: 'Services', url: SITE_URL + '/what-we-do' }
							])
						)
					}}
				/>
			</Head>

			<div className="bg-navy-900 py-16 px-6 text-center">
				<p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-2">
					OUR SERVICES
				</p>
				<h1 className="font-serif text-3xl md:text-4xl font-semibold text-white mb-3">
					Legal Services in Lahore Across Six Practice Areas
				</h1>
				<div className="w-12 h-1 bg-gold-600 rounded mx-auto mb-5" />
				<p className="text-gray-300 max-w-2xl mx-auto text-sm leading-relaxed">
					Saeed Law Firm is a full-service law firm in Lahore. Since 1975 we have
					represented individuals, families, and businesses across the six areas of law
					most people in Lahore actually need help with: family, criminal, property, tax,
					immigration, and civil matters. That is 50 years of practice and more than 800
					cases through the Lahore courts.
				</p>
				<p className="text-gray-300 max-w-2xl mx-auto text-sm leading-relaxed mt-4">
					Most legal problems do not stay in one box. A divorce can pull in property and
					inheritance. A business dispute can raise both contract and tax questions.
					Because we work across all six areas, one team can handle the whole matter
					instead of sending you to three different firms.
				</p>
			</div>

			<div className="bg-gray-50 py-16 px-6">
				<div className="max-w-7xl mx-auto">
					<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{SERVICES.map(s => (
							<Link
								key={s.href}
								href={s.href}
								className="group bg-white border border-gray-200 rounded-lg p-7 hover:border-gold-400 hover:shadow-lg transition-all duration-200 flex flex-col cursor-pointer"
							>
								<h2 className="font-serif text-xl font-semibold text-navy-900 mb-3 group-hover:text-gold-700 transition-colors">
									{s.title}
								</h2>
								<p className="text-sm text-navy-700 leading-relaxed flex-1">
									{s.body}
								</p>
								<p className="mt-5 text-sm font-semibold text-gold-600 group-hover:underline">
									Explore →
								</p>
							</Link>
						))}
					</div>

					<div className="mt-16 bg-white rounded-lg p-10 border border-gray-200">
						<h2 className="font-serif text-2xl md:text-3xl font-semibold text-navy-900 mb-4">
							How We Work
						</h2>
						<div className="max-w-3xl space-y-4 text-navy-700 text-sm leading-relaxed">
							<p>
								When you contact Saeed Law Firm, you meet with a qualified lawyer
								who will handle your case from start to finish. We don&apos;t pass
								clients between associates or charge you again when the lead lawyer
								changes. The lawyer you brief is the one who represents you in
								court.
							</p>
							<p>
								We start with a free initial consultation to understand your
								situation, outline your options, and explain the legal process. This
								is your chance to ask questions and decide whether we&apos;re the
								right fit. If you decide to proceed, we&apos;ll agree on fees and
								get to work.
							</p>
							<p>
								Whatever your matter, you are working with a lawyer who appears in
								Lahore&apos;s courts week in and week out and understands how
								Pakistan&apos;s legal system handles it in practice. Pick the area
								closest to your situation above to see how we approach it.
							</p>
						</div>
					</div>

					<div className="mt-16 bg-navy-900 rounded-lg p-10 text-center">
						<h2 className="font-serif text-2xl md:text-3xl font-semibold text-white mb-3">
							Start Your Legal Matter Today
						</h2>
						<p className="text-gray-300 mb-6 max-w-xl mx-auto text-sm leading-relaxed">
							Discuss your case with an experienced lawyer. Call now for a free
							consultation with Saeed Law Firm.
						</p>
						<Link href="https://wa.me/+923194959420" className="btn-gold">
							Call Now
						</Link>
					</div>

					<div className="mt-12 pt-8 border-t border-gray-200 text-center text-navy-700 text-sm">
						<p className="mb-4">
							Back to the{' '}
							<Link href="/" className="text-gold-600 font-semibold hover:underline">
								Saeed Law Firm homepage
							</Link>
							, or browse every service on our{' '}
							<Link
								href="/lawyers-in-lahore"
								className="text-gold-600 font-semibold hover:underline"
							>
								lawyers in Lahore
							</Link>{' '}
							hub. You can also read more about{' '}
							<Link
								href="/about"
								className="text-gold-600 font-semibold hover:underline"
							>
								our firm
							</Link>{' '}
							or{' '}
							<Link
								href="/contact"
								className="text-gold-600 font-semibold hover:underline"
							>
								contact us
							</Link>{' '}
							for directions.
						</p>
					</div>
				</div>
			</div>
		</>
	)
}
