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

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
	const routes = [...staticRoutes, ...listSeoPages().map(page => page.route)]

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url><loc>${escapeXml(`${SITE_URL}${route}`)}</loc></url>`).join('\n')}
</urlset>`

	res.setHeader('Content-Type', 'application/xml')
	res.write(xml)
	res.end()

	return { props: {} }
}

export default function Sitemap() {
	return null
}
