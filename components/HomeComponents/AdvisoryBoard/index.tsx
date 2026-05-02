import { advisoryBoard } from './data'

const initials = (name: string) =>
	name
		.replace(/^(Dr\.\s*\(Prof\)|Mr\.|Ms\.|Mrs\.)\s*/i, '')
		.split(' ')
		.filter(Boolean)
		.slice(0, 2)
		.map((w) => w[0].toUpperCase())
		.join('')

const AdvisoryBoard = (): JSX.Element => {
	return (
		<section className="bg-white py-20">
			<div className="max-w-7xl mx-auto px-6">

				{/* Heading */}
				<div className="text-center mb-14">
					<p className="text-gold-600 text-sm font-semibold uppercase tracking-widest mb-2">Our Advisors</p>
					<h2 className="font-serif text-3xl md:text-4xl font-semibold text-navy-900">Advisory Board</h2>
					<div className="w-12 h-1 bg-gold-600 rounded mx-auto mt-3 mb-5" />
					<p className="text-navy-700 text-base leading-relaxed max-w-2xl mx-auto">
						Eminent and senior advisers form our guiding force. They provide professional counsel across
						a variety of critical subject matters in HR, Legal, and Management domains.
					</p>
				</div>

				{/* Cards */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{advisoryBoard.map((advisor, idx) => (
						<div
							key={idx}
							className="flex flex-col items-center text-center p-7 rounded-lg border border-gray-200 bg-white hover:shadow-lg hover:border-gold-300 transition-all duration-200 cursor-default"
						>
							{/* Avatar with initials */}
							<div className="w-16 h-16 rounded-full bg-navy-900 flex items-center justify-center mb-4 flex-shrink-0">
								<span className="font-serif text-xl font-semibold text-gold-400">
									{initials(advisor.name)}
								</span>
							</div>

							<h3 className="font-serif text-lg font-semibold text-navy-900 leading-snug mb-1">
								{advisor.name}
							</h3>
							<p className="text-xs text-gold-700 font-medium mb-3 leading-snug">
								{advisor.designation}
							</p>
							<div className="w-8 h-px bg-gold-300 mb-3" />
							<p className="text-sm text-navy-700 leading-relaxed">
								{advisor.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default AdvisoryBoard
