import { Fragment } from 'react'
import ETHOS_DATA from './data'

const CheckCircleIcon = () => (
	<svg
		className="w-5 h-5 text-gold-600 flex-shrink-0"
		fill="none"
		stroke="currentColor"
		strokeWidth={2}
		viewBox="0 0 24 24"
		aria-hidden="true"
	>
		<path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
	</svg>
)

const Ethos = (): JSX.Element => {
	return (
		<section className="bg-gray-50 py-20">
			<div className="max-w-7xl mx-auto px-6">
				<div className="text-center mb-14">
					<p className="text-gold-600 text-sm font-semibold uppercase tracking-widest mb-2">Our Values</p>
					<h2 className="font-serif text-3xl md:text-4xl font-semibold text-navy-900">Ethos</h2>
					<div className="w-12 h-1 bg-gold-600 rounded mx-auto mt-3 mb-5" />
					<p className="text-navy-700 text-base leading-relaxed max-w-2xl mx-auto">
						We believe in adhering to the highest ethical standards. Our multi-dimensional approach
						towards sustaining ethics in business, work, and life is based upon:
					</p>
				</div>

				{ETHOS_DATA.map((ethosData, idx) => (
					<Fragment key={idx}>
						<h3 className="mt-12 mb-6 font-serif text-xl font-semibold text-navy-900 text-center">
							{ethosData.heading}
						</h3>
						<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-4xl mx-auto">
							{ethosData.data.map((point, i) => (
								<div
									key={i}
									className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg px-5 py-4 hover:border-gold-300 hover:shadow-sm transition-all duration-200"
								>
									<CheckCircleIcon />
									<span className="text-sm font-medium text-navy-800">{point}</span>
								</div>
							))}
						</div>
					</Fragment>
				))}
			</div>
		</section>
	)
}

export default Ethos
