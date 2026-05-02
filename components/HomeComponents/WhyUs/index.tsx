import Link from 'next/link'

const STATS = [
	{ value: '15+', label: 'Years of Practice' },
	{ value: '500+', label: 'Clients Advised' },
	{ value: '3',   label: 'Practice Areas' },
]

const WhyUs = (): JSX.Element => {
	return (
		<section className="bg-gray-50 py-20">
			<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:items-center gap-12">

				<div className="w-full md:w-1/2 relative">
					<img
						className="object-cover w-full h-80 md:h-[460px] rounded-lg shadow-lg"
						src="/images/why-us.jpeg"
						alt="Bodhankar & Associates — law library"
					/>
					<div className="absolute -bottom-6 -right-4 hidden md:flex gap-4 bg-white rounded-lg shadow-xl p-5 border border-gray-100">
						{STATS.map((s) => (
							<div key={s.label} className="text-center px-3">
								<p className="font-serif text-2xl font-bold text-gold-600">{s.value}</p>
								<p className="text-xs text-navy-700 mt-0.5 leading-tight whitespace-nowrap">{s.label}</p>
							</div>
						))}
					</div>
				</div>

				<div className="w-full md:w-1/2 md:pl-8">
					<p className="text-gold-600 text-sm font-semibold uppercase tracking-widest mb-3">Why Choose Us</p>
					<h2 className="font-serif text-3xl md:text-4xl font-semibold text-navy-900 leading-tight">
						A Proprietary Knowledge Firm Built on Trust
					</h2>
					<div className="divider-gold" />
					<p className="text-navy-700 text-base leading-relaxed mb-4">
						<strong className="text-navy-900">Bodhankar &amp; Associates</strong> is a proprietary knowledge
						firm registered under the MSMED Act, 2006. We provide consulting services across Human Resource
						Management, Legal Compliance, Organisation Development, and Career Counselling.
					</p>
					<p className="text-navy-700 text-base leading-relaxed mb-8">
						The firm advises on specific queries and documentation with respect to human resource, labour,
						statutory acts, government schemes, and student career guidance — guiding individuals, SMEs,
						and startups through consultation and mediation.
					</p>

					<div className="flex gap-6 mb-8 md:hidden">
						{STATS.map((s) => (
							<div key={s.label} className="text-center">
								<p className="font-serif text-2xl font-bold text-gold-600">{s.value}</p>
								<p className="text-xs text-navy-700 mt-0.5 leading-tight">{s.label}</p>
							</div>
						))}
					</div>

					<Link href="/contact" className="btn-gold">
						Get in Touch
					</Link>
				</div>
			</div>
		</section>
	)
}

export default WhyUs
