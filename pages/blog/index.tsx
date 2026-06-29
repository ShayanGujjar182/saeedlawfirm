import type { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import { SITE_URL } from '../../lib/seo-content'
import { listSeoPagesByKind } from '../../lib/page-content'

type ArticleCard = {
	slug: string
	route: string
	eyebrow: string
	h1: string
	intro: string
}

type ClusterGroup = {
	title: string
	blurb: string
	articles: ArticleCard[]
}

type Props = {
	groups: ClusterGroup[]
}

// Practice-area clusters for the topical-authority hub. Ordered by demand.
const CLUSTERS: { title: string; blurb: string; slugs: string[] }[] = [
	{
		title: 'Tax & FBR',
		blurb: 'Becoming a filer, filing your return, and responding to FBR notices.',
		slugs: [
			'how-to-become-a-filer-in-pakistan',
			'how-to-file-income-tax-return-in-pakistan',
			'fbr-tax-notice-how-to-respond'
		]
	},
	{
		title: 'Family Law',
		blurb: 'Court marriage, khula, divorce, and child custody under Pakistani and Islamic law.',
		slugs: [
			'court-marriage-in-pakistan',
			'khula-procedure-in-pakistan',
			'divorce-procedure-in-pakistan',
			'child-custody-in-pakistan',
			'divorce-rate-in-pakistan'
		]
	},
	{
		title: 'Property & Inheritance',
		blurb: 'Succession certificates, property transfer, inheritance shares, and gift deeds.',
		slugs: [
			'nadra-succession-certificate-in-pakistan',
			'inheritance-law-in-pakistan',
			'how-to-transfer-property-in-punjab',
			'gift-deed-hiba-vs-sale-vs-will-in-pakistan'
		]
	},
	{
		title: 'Civil Litigation',
		blurb: 'Cheque bounce, money recovery, tenancy disputes, and defamation.',
		slugs: [
			'cheque-bounce-in-pakistan',
			'recovery-of-money-and-specific-performance-in-pakistan',
			'rent-and-tenancy-law-in-punjab',
			'defamation-law-in-pakistan'
		]
	},
	{
		title: 'Criminal Defence',
		blurb: 'Pre-arrest bail and how to file, check, or quash an FIR.',
		slugs: ['pre-arrest-bail-in-pakistan', 'how-to-file-an-fir-in-pakistan']
	},
	{
		title: 'Corporate',
		blurb: 'Registering a company with SECP.',
		slugs: ['company-registration-in-pakistan-secp']
	},
	{
		title: 'Immigration & Accidents',
		blurb: 'Asylum guidance and road-accident compensation.',
		slugs: [
			'best-countries-for-asylum',
			'road-accident-compensation-and-car-insurance-in-pakistan'
		]
	},
	{
		title: 'Legal Costs',
		blurb: 'What lawyers charge in Pakistan, explained by case type.',
		slugs: ['how-much-does-a-lawyer-cost-in-pakistan']
	}
]

export default function BlogIndex({ groups }: Props) {
	const canonicalUrl = `${SITE_URL}/blog`
	return (
		<>
			<Head>
				<title>Legal Guides &amp; Blog | Saeed Law Firm Lahore</title>
				<meta
					name="description"
					content="Practical legal guides for Pakistan from Saeed Law Firm: tax filing, NADRA succession, court marriage, khula, divorce, child custody, property transfer, and SECP company registration."
				/>
				<link rel="canonical" href={canonicalUrl} />
			</Head>

			<main className="bg-gray-50">
				<header className="bg-navy-900 py-20 px-6 text-center">
					<p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-3">
						Legal Guides
					</p>
					<h1 className="font-serif text-3xl md:text-5xl font-semibold text-white leading-tight mb-4">
						Legal Guides for Pakistan
					</h1>
					<div className="w-12 h-1 bg-gold-600 rounded mx-auto mb-6" />
					<p className="text-gray-300 text-base leading-relaxed max-w-2xl mx-auto">
						Clear, practitioner-written guides on tax, family, property, civil,
						criminal, and corporate law in Pakistan, reviewed by Bilal Saeed, Advocate
						(Punjab Bar Council). Practising in Lahore since 1975.
					</p>
				</header>

				<section className="bg-white py-16 px-6">
					<div className="max-w-7xl mx-auto space-y-16">
						{groups.map(group => (
							<div key={group.title}>
								<div className="mb-6">
									<h2 className="font-serif text-2xl md:text-3xl font-semibold text-navy-900">
										{group.title}
									</h2>
									<p className="text-sm text-navy-600 mt-1">{group.blurb}</p>
									<div className="w-12 h-1 bg-gold-600 rounded mt-3" />
								</div>
								<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
									{group.articles.map(article => (
										<Link
											key={article.route}
											href={article.route}
											className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gold-400 hover:shadow-md transition-all duration-200"
										>
											<p className="text-gold-600 text-xs font-semibold uppercase tracking-widest mb-2">
												{article.eyebrow}
											</p>
											<h3 className="font-serif text-xl font-semibold text-navy-900 mb-3">
												{article.h1}
											</h3>
											<p className="text-sm text-navy-700 leading-relaxed">
												{article.intro}
											</p>
										</Link>
									))}
								</div>
							</div>
						))}
					</div>
				</section>
			</main>
		</>
	)
}

export const getStaticProps: GetStaticProps<Props> = () => {
	const cards: Record<string, ArticleCard> = {}
	for (const page of listSeoPagesByKind('article')) {
		cards[page.slug] = {
			slug: page.slug,
			route: page.route,
			eyebrow: page.hero.eyebrow,
			h1: page.hero.h1,
			intro: page.hero.intro
		}
	}

	const used = new Set<string>()
	const groups: ClusterGroup[] = CLUSTERS.map(cluster => {
		const articles = cluster.slugs
			.filter(slug => cards[slug])
			.map(slug => {
				used.add(slug)
				return cards[slug]
			})
		return { title: cluster.title, blurb: cluster.blurb, articles }
	}).filter(group => group.articles.length > 0)

	// Any article not mapped to a cluster still gets listed, so nothing is orphaned.
	const leftovers = Object.values(cards).filter(card => !used.has(card.slug))
	if (leftovers.length) {
		groups.push({
			title: 'More Guides',
			blurb: 'Further legal guides for Pakistan.',
			articles: leftovers
		})
	}

	return { props: { groups } }
}
