const MISSION_ITEMS = [
	{
		title: 'Provide Efficient Solutions',
		body: 'To provide efficient solutions & value-added service to clients on specified assignments in cost-effective and time-bound processes.',
		icon: (
			<svg className="w-8 h-8" viewBox="0 0 30 30" fill="none" aria-hidden="true">
				<path d="M29.6931 14.2283L22.7556 6.87823C22.3292 6.426 21.6175 6.40538 21.1652 6.83212C20.7137 7.25851 20.6927 7.9706 21.1195 8.42248L27.3284 15L21.1195 21.5783C20.6927 22.0302 20.7137 22.7419 21.1652 23.1687C21.3827 23.3738 21.6606 23.4754 21.9374 23.4754C22.2363 23.4754 22.5348 23.3569 22.7557 23.1233L29.6932 15.7729C30.1022 15.339 30.1023 14.6618 29.6931 14.2283Z" fill="#CA8A04" />
				<path d="M8.88087 21.578L2.67236 15L8.88087 8.42215C9.30726 7.97028 9.28664 7.25812 8.83476 6.83179C8.38323 6.4054 7.67073 6.42603 7.2444 6.87791L0.306858 14.2279C-0.102245 14.6614-0.102245 15.3391 0.306858 15.7726L7.24475 23.123C7.466 23.3574 7.76413 23.4755 8.06302 23.4755C8.33976 23.4755 8.61767 23.3735 8.83476 23.1684C9.28705 22.742 9.30726 22.0299 8.88087 21.578Z" fill="#0F172A" />
				<path d="M16.8201 3.08774C16.2062 2.99476 15.6317 3.41622 15.5379 4.03011L12.2379 25.6302C12.1441 26.2445 12.566 26.8186 13.1803 26.9124C13.238 26.921 13.295 26.9252 13.3516 26.9252C13.898 26.9252 14.3773 26.5266 14.4624 25.97L17.7624 4.3699C17.8562 3.7556 17.4343 3.1815 16.8201 3.08774Z" fill="#CA8A04" />
			</svg>
		),
	},
	{
		title: 'Develop Relationships',
		body: 'To constantly develop professional and social relationships with clients, building long-term partnerships built on trust.',
		icon: (
			<svg className="w-8 h-8" viewBox="0 0 30 30" fill="none" aria-hidden="true">
				<path d="M27.3633 7.08984H26.4844V6.21094C26.4844 4.75705 25.3015 3.57422 23.8477 3.57422H4.39453C2.94064 3.57422 1.75781 4.75705 1.75781 6.21094V21.1523H0.878906C0.393516 21.1523 0 21.5459 0 22.0312V23.7891C0 25.2429 1.18283 26.4258 2.63672 26.4258H27.3633C28.8172 26.4258 30 25.2429 30 23.7891V9.72656C30 8.27268 28.8172 7.08984 27.3633 7.08984ZM3.51562 6.21094C3.51562 5.72631 3.9099 5.33203 4.39453 5.33203H23.8477C24.3323 5.33203 24.7266 5.72631 24.7266 6.21094V7.08984H20.332C18.8781 7.08984 17.6953 8.27268 17.6953 9.72656V21.1523H3.51562V6.21094ZM1.75781 23.7891V22.9102H17.6953V23.7891C17.6953 24.0971 17.7489 24.3929 17.8465 24.668H2.63672C2.15209 24.668 1.75781 24.2737 1.75781 23.7891ZM28.2422 23.7891C28.2422 24.2737 27.8479 24.668 27.3633 24.668H20.332C19.8474 24.668 19.4531 24.2737 19.4531 23.7891V9.72656C19.4531 9.24193 19.8474 8.84766 20.332 8.84766H27.3633C27.8479 8.84766 28.2422 9.24193 28.2422 9.72656V23.7891Z" fill="#0F172A" />
				<path d="M24.7266 21.1523H22.9688C22.4834 21.1523 22.0898 21.5459 22.0898 22.0312C22.0898 22.5166 22.4834 22.9102 22.9688 22.9102H24.7266C25.212 22.9102 25.6055 22.5166 25.6055 22.0312C25.6055 21.5459 25.212 21.1523 24.7266 21.1523Z" fill="#CA8A04" />
			</svg>
		),
	},
	{
		title: 'Upgrade Efficiency',
		body: 'To constantly update related knowledge on specified areas and domains to upgrade efficiency & competency.',
		icon: (
			<svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
				<path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" stroke="#CA8A04" />
			</svg>
		),
	},
]

const Mission = (): JSX.Element => {
	return (
		<section className="bg-white py-20">
			<div className="max-w-7xl mx-auto px-6">
				<div className="text-center mb-12">
					<p className="text-gold-600 text-sm font-semibold uppercase tracking-widest mb-2">Our Purpose</p>
					<h2 className="font-serif text-3xl md:text-4xl font-semibold text-navy-900">Mission</h2>
					<div className="w-12 h-1 bg-gold-600 rounded mx-auto mt-3" />
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{MISSION_ITEMS.map((item) => (
						<div key={item.title} className="flex flex-col items-start p-6 bg-gray-50 border border-gray-200 rounded-lg hover:border-gold-300 transition-colors duration-200">
							<div className="mb-4">{item.icon}</div>
							<h3 className="font-serif text-lg font-semibold text-navy-900 mb-2">{item.title}</h3>
							<p className="text-navy-700 text-sm leading-relaxed">{item.body}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Mission
