import type { GetServerSideProps } from 'next'

import { SITE_URL } from '../lib/seo-content'
import { listSeoPages } from '../lib/page-content'

const staticRoutes = [
	'/',
	'/about',
	'/contact',
	'/what-we-do',
	'/ethos',
	'/areas',
	'/blog',
	'/courts'
]

function escapeXml(value: string) {
	return value
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&apos;')
}

// ponytail: lastmod is emitted ONLY from a page's own dateModified, and only
// when it is a valid ISO date. Never synthesise one — a fabricated freshness
// signal is a trust signal you cannot take back. Static routes and content
// pages without dateModified stay loc-only.
const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
	const entries = [
		...staticRoutes.map(route => ({ route, lastmod: undefined as string | undefined })),
		...listSeoPages().map(page => ({
			route: page.route,
			lastmod: ISO_DATE.test(page.dateModified ?? '') ? page.dateModified : undefined
		}))
	]

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
	.map(
		({ route, lastmod }) =>
			`  <url><loc>${escapeXml(`${SITE_URL}${route}`)}</loc>${
				lastmod ? `<lastmod>${lastmod}</lastmod>` : ''
			}</url>`
	)
	.join('\n')}
</urlset>`

	res.setHeader('Content-Type', 'application/xml')
	res.write(xml)
	res.end()

	return { props: {} }
}

export default function Sitemap() {
	return null
}
