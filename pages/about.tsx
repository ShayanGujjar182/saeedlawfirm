import Head from 'next/head'
import Link from 'next/link'
import { SITE_URL, jsonLd, organizationSchema, breadcrumbSchema } from '../lib/seo-content'

const TITLE = 'About Saeed Law Firm | Best Lawyers in Lahore'
const DESCRIPTION =
	'Saeed Law Firm, established 1975: among the most experienced lawyers in Lahore. 50 years, 800+ cases, six practice areas. Free consultation.'

export default function About() {
	const breadcrumbs = [
		{ name: 'Home', url: SITE_URL },
		{ name: 'About', url: SITE_URL + '/about' }
	]

	return (
		<>
			<Head>
				<title>{TITLE}</title>
				<meta name="description" content={DESCRIPTION} />
				<link rel="canonical" href={SITE_URL + '/about'} />
				<meta property="og:title" content={TITLE} />
				<meta property="og:description" content={DESCRIPTION} />
				<meta property="og:url" content={SITE_URL + '/about'} />
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
					dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbSchema(breadcrumbs)) }}
				/>
			</Head>

			{/* Hero */}
			<div className="bg-navy-900 py-16 px-6 text-center">
				<p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-2">
					About Us
				</p>
				<h1 className="font-serif text-3xl md:text-4xl font-semibold text-white mb-3">
					Saeed Law Firm: 50 Years of Legal Practice in Lahore
				</h1>
				<div className="w-12 h-1 bg-gold-600 rounded mx-auto" />
			</div>

			{/* Intro with Story */}
			<section className="bg-white py-20">
				<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:items-center gap-12">
					<div className="w-full md:w-1/2">
						<img
							className="object-cover w-full h-80 md:h-[440px] rounded-lg shadow-lg"
							src="/images/why-us.jpeg"
							alt="Saeed Law Firm Lahore"
						/>
					</div>
					<div className="w-full md:w-1/2">
						<p className="text-gold-600 text-sm font-semibold uppercase tracking-widest mb-2">
							Our Story
						</p>
						<h2 className="font-serif text-3xl font-semibold text-navy-900 mb-1">
							Five Decades in Lahore Courts
						</h2>
						<div className="divider-gold" />
						<p className="text-navy-700 leading-relaxed mb-4">
							Saeed Law Firm was established in 1975. For fifty years, we have served
							individuals, families, and businesses across Lahore, handling 800+ cases
							in the Lahore High Court, District Courts, and Family Courts. After
							fifty years in these courtrooms, we rarely meet a situation we have not
							seen a version of before.
						</p>
						<p className="text-navy-700 leading-relaxed mb-4">
							Led by Bilal Saeed, Advocate of the Punjab Bar Council, the firm offers
							expert advice across six core practice areas: family law, criminal
							defence, property, tax, immigration, and civil litigation. Whether you
							face a straightforward matter or a complex dispute, we bring decades of
							court experience to your case.
						</p>
						<p className="text-navy-700 leading-relaxed mb-4">
							You work with the same lawyer throughout. You get transparent fees and
							plain advice, no legalese. We safeguard your confidentiality and
							privilege, conduct thorough conflict checks, and follow our professional
							code. If you are weighing up the best lawyers in Lahore for your matter,
							start with the ones who listen before they advise.
						</p>
						<p className="text-navy-700 leading-relaxed mb-8">
							Learn more about{' '}
							<Link
								href="/ethos"
								className="text-gold-600 font-semibold hover:text-gold-700"
							>
								our ethos
							</Link>{' '}
							and{' '}
							<Link
								href="/what-we-do"
								className="text-gold-600 font-semibold hover:text-gold-700"
							>
								what we do
							</Link>
							.
						</p>
						<Link href="https://wa.me/+923194959420" className="btn-gold">
							Free Initial Consultation
						</Link>
					</div>
				</div>
			</section>

			{/* Why Choose Us */}
			<section className="bg-navy-900 py-20 px-6">
				<div className="max-w-5xl mx-auto">
					<div className="text-center mb-12">
						<p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-2">
							Why Choose Us
						</p>
						<h2 className="font-serif text-3xl font-semibold text-white">
							Why Work with Saeed Law Firm?
						</h2>
						<div className="w-12 h-1 bg-gold-600 rounded mx-auto mt-3 mb-4" />
					</div>
					<div className="grid sm:grid-cols-2 gap-5">
						{[
							{
								title: '50 Years in Lahore Courts',
								body: 'Established 1975. 800+ cases handled across Lahore High Court, District Courts, and Family Courts. We have the experience and court relationships you need.'
							},
							{
								title: 'One Lawyer, Your Case',
								body: 'The lawyer you meet is the lawyer who runs your matter. No handoffs. No junior without supervision. Accountability and continuity throughout.'
							},
							{
								title: 'Clear Fees, Straight Advice',
								body: 'Transparent rates. No hidden charges. We explain your options plainly, tell you what things cost, and recommend the path that fits your goals and budget.'
							},
							{
								title: 'Six Practice Areas Under One Roof',
								body: 'Family, criminal, property, tax, immigration, civil. If your issue spans more than one area, the same team handles it, so you are not repeating your story to three different firms.'
							}
						].map(b => (
							<div
								key={b.title}
								className="bg-navy-800 border border-navy-700 rounded-lg p-6 hover:border-gold-600 transition-colors duration-200"
							>
								<h3 className="font-serif text-lg font-semibold text-gold-400 mb-2">
									{b.title}
								</h3>
								<p className="text-gray-300 text-sm leading-relaxed">{b.body}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* CTA Footer */}
			<section className="bg-gold-600 py-12 px-6 text-center">
				<h2 className="font-serif text-2xl font-semibold text-white mb-3">
					Ready to Talk?
				</h2>
				<p className="text-white/90 mb-6 max-w-xl mx-auto text-sm">
					Call us for a free initial consultation. We&apos;ll listen, assess your
					situation, and explain your options with no obligation.
				</p>
				<div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
					<Link
						href="https://wa.me/+923194959420"
						className="bg-white text-gold-700 font-semibold px-7 py-3 rounded hover:bg-gold-50 transition-colors duration-200 inline-block"
					>
						WhatsApp Now
					</Link>
					<Link
						href="/contact"
						className="bg-navy-900 text-white font-semibold px-7 py-3 rounded hover:bg-navy-800 transition-colors duration-200 inline-block"
					>
						Contact Form
					</Link>
				</div>
				<p className="text-white/80 text-xs max-w-2xl mx-auto mb-4">
					Back to the{' '}
					<Link href="/" className="underline hover:no-underline">
						Saeed Law Firm homepage
					</Link>
					. Explore our expertise in{' '}
					<Link href="/family-lawyer-in-lahore" className="underline hover:no-underline">
						family law
					</Link>
					,{' '}
					<Link
						href="/criminal-lawyer-in-lahore"
						className="underline hover:no-underline"
					>
						criminal defence
					</Link>
					,{' '}
					<Link
						href="/property-lawyer-in-lahore"
						className="underline hover:no-underline"
					>
						property
					</Link>
					,{' '}
					<Link href="/tax-lawyer-in-lahore" className="underline hover:no-underline">
						tax
					</Link>
					,{' '}
					<Link
						href="/immigration-lawyer-in-lahore"
						className="underline hover:no-underline"
					>
						immigration
					</Link>
					, and{' '}
					<Link href="/civil-lawyer-in-lahore" className="underline hover:no-underline">
						civil litigation
					</Link>
					.
				</p>
			</section>
		</>
	)
}
