import type { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import { listSeoPagesByKind } from '../../lib/page-content'

// ponytail: only the fields the cards render — full SeoPageContent ballooned page-data past Next's 128 kB warning.
type CourtCard = {
	route: string
	eyebrow: string
	h1: string
	intro: string
}

type Props = {
	courts: CourtCard[]
}

export default function CourtsIndex({ courts }: Props) {
	return (
		<>
			<Head>
				<title>Lahore Court Practice | Saeed Law Firm</title>
				<meta
					name="description"
					content="Find Saeed Law Firm court practice pages for Lahore High Court, District Court, Family Court, Tax Tribunal, Service Tribunal, and Cantonment Court Lahore."
				/>
			</Head>

			<main className="bg-gray-50">
				<header className="bg-navy-900 py-20 px-6 text-center">
					<p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-3">
						Lahore Court Practice
					</p>
					<h1 className="font-serif text-3xl md:text-5xl font-semibold text-white leading-tight mb-4">
						Lawyers for Lahore Courts
					</h1>
					<div className="w-12 h-1 bg-gold-600 rounded mx-auto mb-6" />
					<p className="text-gray-300 text-base leading-relaxed max-w-2xl mx-auto">
						Choose a court to find court-specific legal representation from Saeed Law
						Firm.
					</p>
				</header>

				<section className="bg-white py-16 px-6">
					<div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{courts.map(court => (
							<Link
								key={court.route}
								href={court.route}
								className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gold-400 hover:shadow-md transition-all duration-200"
							>
								<p className="text-gold-600 text-xs font-semibold uppercase tracking-widest mb-2">
									{court.eyebrow}
								</p>
								<h2 className="font-serif text-xl font-semibold text-navy-900 mb-3">
									{court.h1}
								</h2>
								<p className="text-sm text-navy-700 leading-relaxed">
									{court.intro}
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
		courts: listSeoPagesByKind('court').map(court => ({
			route: court.route,
			eyebrow: court.hero.eyebrow,
			h1: court.hero.h1,
			intro: court.hero.intro
		}))
	}
})
