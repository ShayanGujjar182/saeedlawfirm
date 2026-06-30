import type { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import { listSeoPagesByKind } from '../../lib/page-content'

// ponytail: only the fields the cards render — full SeoPageContent ballooned page-data past Next's 128 kB warning.
type AreaCard = {
	route: string
	eyebrow: string
	h1: string
	intro: string
}

type Props = {
	areas: AreaCard[]
}

export default function AreasIndex({ areas }: Props) {
	return (
		<>
			<Head>
				<title>Lahore Practice Areas | Saeed Law Firm</title>
				<meta
					name="description"
					content="Find Saeed Law Firm local practice area pages for DHA, Gulberg, Johar Town, Model Town, Bahria Town, Lahore Cantt, Faisal Town, and Township Lahore."
				/>
			</Head>

			<main className="bg-gray-50">
				<header className="bg-navy-900 py-20 px-6 text-center">
					<p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-3">
						Lahore Practice Areas
					</p>
					<h1 className="font-serif text-3xl md:text-5xl font-semibold text-white leading-tight mb-4">
						Local Lahore Legal Help
					</h1>
					<div className="w-12 h-1 bg-gold-600 rounded mx-auto mb-6" />
					<p className="text-gray-300 text-base leading-relaxed max-w-2xl mx-auto">
						Choose your area to find location-specific legal services from Saeed Law
						Firm.
					</p>
				</header>

				<section className="bg-white py-16 px-6">
					<div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{areas.map(area => (
							<Link
								key={area.route}
								href={area.route}
								className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gold-400 hover:shadow-md transition-all duration-200"
							>
								<p className="text-gold-600 text-xs font-semibold uppercase tracking-widest mb-2">
									{area.eyebrow}
								</p>
								<h2 className="font-serif text-xl font-semibold text-navy-900 mb-3">
									{area.h1}
								</h2>
								<p className="text-sm text-navy-700 leading-relaxed">
									{area.intro}
								</p>
							</Link>
						))}
					</div>
				</section>
			</main>
		</>
	)
}

export const getStaticProps: GetStaticProps<Props> = () => ({
	props: {
		areas: listSeoPagesByKind('area').map(area => ({
			route: area.route,
			eyebrow: area.hero.eyebrow,
			h1: area.hero.h1,
			intro: area.hero.intro
		}))
	}
})
