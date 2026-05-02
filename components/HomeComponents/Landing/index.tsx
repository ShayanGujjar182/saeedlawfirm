import Link from 'next/link'

const SERVICES = [
	'Human Resource Consulting',
	'Legal Advisory & Due Diligence',
	'MSME & Startup Compliance',
	'Organisation Development',
]

const TRUST_BADGES = [
	{ label: 'Registered under MSMED Act 2006' },
	{ label: '15+ Years of Practice' },
	{ label: 'Confidential & Privileged Consultations' },
]

const CheckIcon = () => (
	<svg className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
		<path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
	</svg>
)

const ShieldIcon = () => (
	<svg className="w-4 h-4 text-gold-600 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
		<path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7L12 2zm-1 13l-3-3 1.41-1.41L11 12.17l4.59-4.58L17 9l-6 6z" />
	</svg>
)

const Landing = () => {
	return (
		<header className="bg-white">
			<div className="max-w-7xl mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row md:items-center gap-12">

				<div className="w-full md:w-1/2 max-w-xl">
					<p className="text-gold-600 text-sm font-semibold uppercase tracking-widest mb-3">
						Legal &amp; HR Consulting
					</p>
					<h1 className="font-serif text-4xl md:text-5xl font-semibold text-navy-900 leading-tight">
						Accurate Legal &amp; HR Guidance You Can Trust
					</h1>
					<div className="divider-gold" />
					<p className="text-navy-700 text-base leading-relaxed mb-8 max-w-md">
						Bodhankar &amp; Associates provides expert counsel on management and legal matters —
						advising individuals, SMEs, and startups through consultation and mediation.
					</p>

					<ul className="space-y-3 mb-10">
						{SERVICES.map((s) => (
							<li key={s} className="flex items-start gap-3 text-navy-800 text-sm font-medium">
								<CheckIcon />
								<span>{s}</span>
							</li>
						))}
					</ul>

					<div className="flex flex-wrap gap-4">
						<Link href="/what-we-do" className="btn-gold">
							Explore Our Services
						</Link>
						<Link href="/contact" className="btn-outline">
							Book a Consultation
						</Link>
					</div>

					<div className="mt-10 pt-8 border-t border-gray-100 flex flex-wrap gap-3">
						{TRUST_BADGES.map((b) => (
							<div key={b.label} className="flex items-center gap-2 text-xs text-navy-700 bg-gold-50 border border-gold-100 rounded-full px-3 py-1.5">
								<ShieldIcon />
								<span>{b.label}</span>
							</div>
						))}
					</div>
				</div>

				<div className="w-full md:w-1/2 relative">
					<div className="absolute -top-4 -left-4 w-full h-full border-2 border-gold-300 rounded-lg hidden md:block" aria-hidden="true" />
					<img
						className="relative object-cover w-full h-80 md:h-[480px] rounded-lg shadow-xl"
						src="/images/homepage-landing.jpeg"
						alt="Lady Justice — scales of justice representing legal expertise"
					/>
					<div className="absolute bottom-6 right-6 bg-navy-900 text-white rounded-lg px-5 py-4 shadow-lg hidden md:block">
						<p className="font-serif text-2xl font-semibold text-gold-400">500+</p>
						<p className="text-xs text-gray-300 mt-0.5 leading-tight">Clients<br />Advised</p>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Landing
