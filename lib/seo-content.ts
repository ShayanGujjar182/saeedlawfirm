import firm from '../data/firm.json'

export type FAQ = { q: string; a: string }

export const FIRM = firm
export const SITE_URL = firm.url || 'https://saeedlawfirm.com'

function escapeHtml(value: string) {
	return value
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#039;')
}

export function inlineMarkdownToHtml(value: string) {
	return escapeHtml(value)
		.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
		.replace(/\*(.*?)\*/g, '<em>$1</em>')
		.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
}

function renderTable(lines: string[]) {
	const rows = lines
		.map(line =>
			line
				.trim()
				.replace(/^\||\|$/g, '')
				.split('|')
				.map(cell => inlineMarkdownToHtml(cell.trim()))
		)
		.filter(row => row.length > 1)

	if (rows.length < 2) return ''

	const [header, , ...body] = rows
	return [
		'<div class="overflow-x-auto my-6">',
		'<table class="min-w-full text-sm border border-gray-200">',
		`<thead><tr>${header.map(cell => `<th class="bg-gray-50 border border-gray-200 px-4 py-3 text-left font-semibold text-navy-900">${cell}</th>`).join('')}</tr></thead>`,
		`<tbody>${body.map(row => `<tr>${row.map(cell => `<td class="border border-gray-200 px-4 py-3 align-top">${cell}</td>`).join('')}</tr>`).join('')}</tbody>`,
		'</table>',
		'</div>'
	].join('')
}

export function markdownToHtml(markdown: string) {
	const lines = markdown.split(/\r?\n/)
	const html: string[] = []
	let paragraph: string[] = []
	let list: string[] = []
	let orderedList: string[] = []
	let table: string[] = []

	const flushParagraph = () => {
		if (paragraph.length) {
			html.push(`<p>${inlineMarkdownToHtml(paragraph.join(' '))}</p>`)
			paragraph = []
		}
	}

	const flushList = () => {
		if (list.length) {
			html.push(
				`<ul>${list.map(item => `<li>${inlineMarkdownToHtml(item)}</li>`).join('')}</ul>`
			)
			list = []
		}
	}

	const flushOrderedList = () => {
		if (orderedList.length) {
			html.push(
				`<ol>${orderedList.map(item => `<li>${inlineMarkdownToHtml(item)}</li>`).join('')}</ol>`
			)
			orderedList = []
		}
	}

	const flushTable = () => {
		if (table.length) {
			html.push(renderTable(table))
			table = []
		}
	}

	for (const line of lines) {
		const trimmed = line.trim()

		if (!trimmed || trimmed === '---') {
			flushParagraph()
			flushList()
			flushOrderedList()
			flushTable()
			continue
		}

		if (trimmed.startsWith('|')) {
			flushParagraph()
			flushList()
			flushOrderedList()
			table.push(trimmed)
			continue
		}

		flushTable()

		if (trimmed.startsWith('### ')) {
			flushParagraph()
			flushList()
			flushOrderedList()
			html.push(`<h3>${inlineMarkdownToHtml(trimmed.slice(4))}</h3>`)
			continue
		}

		if (trimmed.startsWith('## ')) {
			flushParagraph()
			flushList()
			flushOrderedList()
			html.push(`<h2>${inlineMarkdownToHtml(trimmed.slice(3))}</h2>`)
			continue
		}

		if (trimmed.startsWith('# ')) {
			flushParagraph()
			flushList()
			flushOrderedList()
			html.push(`<h2>${inlineMarkdownToHtml(trimmed.slice(2))}</h2>`)
			continue
		}

		if (trimmed.startsWith('- ')) {
			flushParagraph()
			flushOrderedList()
			list.push(trimmed.slice(2))
			continue
		}

		const orderedItem = trimmed.match(/^\d+\.\s+(.*)$/)
		if (orderedItem) {
			flushParagraph()
			flushList()
			orderedList.push(orderedItem[1])
			continue
		}

		flushList()
		flushOrderedList()
		paragraph.push(trimmed)
	}

	flushParagraph()
	flushList()
	flushOrderedList()
	flushTable()

	return html.join('\n')
}

export function jsonLd(value: unknown) {
	return JSON.stringify(value).replace(/</g, '\\u003c')
}

export function organizationSchema() {
	return {
		'@context': 'https://schema.org',
		'@type': ['LegalService', 'Organization'],
		'@id': `${SITE_URL}#organization`,
		name: FIRM.name,
		legalName: FIRM.legalName,
		url: SITE_URL,
		logo: FIRM.logo,
		foundingDate: FIRM.founded,
		telephone: FIRM.telephone,
		email: FIRM.email,
		address: {
			'@type': 'PostalAddress',
			...FIRM.address
		},
		geo: {
			'@type': 'GeoCoordinates',
			latitude: FIRM.geo.latitude,
			longitude: FIRM.geo.longitude
		},
		openingHours: FIRM.openingHours,
		areaServed: { '@type': 'City', name: 'Lahore' },
		sameAs: FIRM.sameAs
	}
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
	return {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: items.map((item, index) => ({
			'@type': 'ListItem',
			position: index + 1,
			name: item.name,
			item: item.url
		}))
	}
}

export function faqSchema(items: FAQ[]) {
	return {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: items.map(item => ({
			'@type': 'Question',
			name: item.q,
			acceptedAnswer: { '@type': 'Answer', text: item.a }
		}))
	}
}

export function legalServiceSchema(page: {
	h1: string
	metaDescription: string
	slug: string
	service?: string
	areaServed?: string | string[]
}) {
	const areas = page.areaServed
		? (Array.isArray(page.areaServed) ? page.areaServed : [page.areaServed]).map(name => ({
				'@type': 'Place',
				name
			}))
		: { '@type': 'City', name: 'Lahore' }

	return {
		'@context': 'https://schema.org',
		'@type': 'LegalService',
		name: page.h1,
		description: page.metaDescription,
		url: `${SITE_URL}/${page.slug}`,
		provider: { '@id': `${SITE_URL}#organization` },
		// Mirrors the visible "Reviewed by Bilal Saeed, Advocate" box on service/area
		// pages so the machine-readable attribution matches the on-page E-E-A-T signal.
		// Same Person shape as articleSchema's author; sourced from data/firm.json only.
		employee: {
			'@type': 'Person',
			'@id': `${SITE_URL}/about#bilal-saeed`,
			name: FIRM.principalLawyer.name,
			jobTitle: FIRM.principalLawyer.title,
			url: `${SITE_URL}/about`,
			worksFor: { '@id': `${SITE_URL}#organization` },
			memberOf: {
				'@type': 'Organization',
				name: FIRM.principalLawyer.barCouncil
			}
		},
		address: {
			'@type': 'PostalAddress',
			...FIRM.address
		},
		telephone: FIRM.telephone,
		areaServed: areas,
		serviceType: page.service ?? page.h1
	}
}

export function howToSchema(page: {
	name: string
	description?: string
	path: string
	steps: { name: string; text: string }[]
}) {
	return {
		'@context': 'https://schema.org',
		'@type': 'HowTo',
		name: page.name,
		description: page.description,
		step: page.steps.map((step, index) => ({
			'@type': 'HowToStep',
			position: index + 1,
			name: step.name,
			text: step.text,
			url: `${SITE_URL}${page.path}#step-${index + 1}`
		}))
	}
}

// speakable: marks the headline + answer-first summary as text-to-speech friendly
// for voice assistants and AI answer engines (GEO). Targets the stable `.page-summary`
// hook on the hero intro and the single h1. Emitted on every dynamic SEO page.
export function speakableSchema(path: string) {
	return {
		'@context': 'https://schema.org',
		'@type': 'WebPage',
		'@id': `${SITE_URL}${path}#webpage`,
		url: `${SITE_URL}${path}`,
		speakable: {
			'@type': 'SpeakableSpecification',
			cssSelector: ['h1', '.page-summary']
		}
	}
}

export function articleSchema(page: {
	h1: string
	metaDescription: string
	path: string
	datePublished?: string
	dateModified?: string
	author?: { name: string; title?: string; barCouncil?: string }
	image?: string
}) {
	return {
		'@context': 'https://schema.org',
		'@type': 'Article',
		headline: page.h1,
		description: page.metaDescription,
		mainEntityOfPage: `${SITE_URL}${page.path}`,
		datePublished: page.datePublished,
		dateModified: page.dateModified ?? page.datePublished,
		author: {
			'@type': 'Person',
			// ponytail: shared @id consolidates the attorney entity across all guides +
			// service pages. Correct because every page is authored by the one principal
			// (Bilal Saeed); gate this @id on author.name if a second author is ever added.
			'@id': `${SITE_URL}/about#bilal-saeed`,
			name: page.author?.name ?? FIRM.principalLawyer.name,
			jobTitle: page.author?.title ?? FIRM.principalLawyer.title,
			url: `${SITE_URL}/about`,
			worksFor: { '@id': `${SITE_URL}#organization` },
			memberOf: {
				'@type': 'Organization',
				name: page.author?.barCouncil ?? FIRM.principalLawyer.barCouncil
			}
		},
		publisher: { '@id': `${SITE_URL}#organization` },
		image: page.image ?? FIRM.logo
	}
}
