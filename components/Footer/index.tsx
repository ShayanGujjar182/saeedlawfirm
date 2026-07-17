import Link from 'next/link'

const SERVICES = [
	{ label: 'Best Lawyers in Lahore', href: '/lawyers-in-lahore' },
	{ label: 'Family Lawyer', href: '/family-lawyer-in-lahore' },
	{ label: 'Divorce Lawyer', href: '/divorce-lawyer-in-lahore' },
	{ label: 'Khula Lawyer', href: '/khula-lawyer-in-lahore' },
	{ label: 'Child Custody Lawyer', href: '/child-custody-lawyer-in-lahore' },
	{ label: 'Court Marriage Lawyer', href: '/court-marriage-lawyer-in-lahore' },
	{ label: 'Criminal Lawyer', href: '/criminal-lawyer-in-lahore' },
	{ label: 'Civil Lawyer', href: '/civil-lawyer-in-lahore' },
	{ label: 'Property Lawyer', href: '/property-lawyer-in-lahore' },
	{ label: 'Tax Lawyer', href: '/tax-lawyer-in-lahore' },
	{ label: 'Corporate Lawyer', href: '/corporate-lawyer-in-lahore' },
	{ label: 'Immigration Lawyer', href: '/immigration-lawyer-in-lahore' }
]

const COURTS = [
	{ label: 'Lahore High Court', href: '/courts/lawyer-at-lahore-high-court' },
	{ label: 'District Court Lahore', href: '/courts/district-court-lawyer-lahore' },
	{ label: 'Family Court Lahore', href: '/courts/family-court-lawyer-lahore' },
	{ label: 'Tax Tribunal Lahore', href: '/courts/tax-tribunal-lawyer-lahore' },
	{ label: 'Service Tribunal Lahore', href: '/courts/service-tribunal-lawyer-lahore' },
	{ label: 'Cantonment Court Lahore', href: '/courts/cantonment-court-lawyer-lahore' }
]

const AREAS = [
	{ label: 'DHA Lahore', href: '/areas/lawyer-in-dha-lahore' },
	{ label: 'Gulberg', href: '/areas/lawyer-in-gulberg-lahore' },
	{ label: 'Johar Town', href: '/areas/lawyer-in-johar-town-lahore' },
	{ label: 'Model Town', href: '/areas/lawyer-in-model-town-lahore' },
	{ label: 'Bahria Town', href: '/areas/lawyer-in-bahria-town-lahore' },
	{ label: 'Lahore Cantt', href: '/areas/lawyer-in-lahore-cantt' },
	{ label: 'Faisal Town', href: '/areas/lawyer-in-faisal-town-lahore' },
	{ label: 'Township', href: '/areas/lawyer-in-township-lahore' }
]

const linkClass = 'text-gray-400 hover:text-gold-400 transition-colors duration-200'

function LinkColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
	return (
		<div>
			<h3 className="text-white text-sm font-semibold uppercase tracking-widest mb-4">
				{title}
			</h3>
			<ul className="space-y-2 text-sm">
				{links.map(l => (
					<li key={l.href}>
						<Link href={l.href} className={linkClass}>
							{l.label}
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default function Footer() {
	return (
		<footer className="bg-navy-900 text-gray-300">
			<div className="max-w-7xl mx-auto px-6 py-14">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10">
					<div className="lg:col-span-2">
						<Link
							href="/"
							className="font-serif text-xl font-semibold text-white hover:text-gold-400 transition-colors duration-200"
						>
							Saeed Law Firm
						</Link>
						<p className="mt-1 text-gold-400 text-xs font-semibold tracking-widest uppercase mb-3">
							Lahore
						</p>
						<p className="text-sm text-gray-400 leading-relaxed max-w-sm">
							From home to heritage, business to family, our team is dedicated to
							providing trusted legal counsel and comprehensive representation every
							step of the way.
						</p>

						<div className="mt-6 space-y-1 text-sm">
							<p className="text-white text-xs font-semibold uppercase tracking-widest mb-2">
								Contact
							</p>
							<a
								href="tel:+923194959420"
								className={`block ${linkClass} cursor-pointer`}
							>
								+92 319 4959420
							</a>
							<p className="text-gray-400 text-xs leading-snug">
								Y Block Main Market, Sector Y,
								<br />
								DHA Phase 3, Lahore 54793
							</p>
						</div>

						<ul className="mt-6 space-y-2 text-sm">
							{[
								{ label: 'About Us', href: '/about' },
								{ label: 'What We Do', href: '/what-we-do' },
								{ label: 'Legal Guides', href: '/blog' },
								{ label: 'Contact Us', href: '/contact' }
							].map(({ label, href }) => (
								<li key={href}>
									<Link href={href} className={linkClass}>
										{label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div className="lg:col-span-2">
						<LinkColumn title="Our Services" links={SERVICES} />
					</div>

					<LinkColumn title="Courts We Appear In" links={COURTS} />

					<LinkColumn title="Areas We Serve" links={AREAS} />
				</div>

				<div className="mt-12 pt-6 border-t border-navy-800 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-500">
					<p>
						© Copyright {new Date().getFullYear()} Saeed Law Firm. All Rights Reserved
					</p>
					<p>Established 1975 &nbsp;·&nbsp; Lahore, Pakistan</p>
				</div>
			</div>
		</footer>
	)
}
