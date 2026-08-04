import type { GetStaticPaths, GetStaticProps } from 'next'

import DynamicSeoPage from '../../components/shared/DynamicSeoPage'
import { hasStructuredContent, markdownToHtml } from '../../lib/seo-content'
import { findSeoPageByRoute, listSeoPagesByKind } from '../../lib/page-content'
import type { SeoPageContent } from '../../lib/page-content'

type Props = {
	page: SeoPageContent
	html: string
}

export default function CourtRoute({ page, html }: Props) {
	return <DynamicSeoPage page={page} html={html} />
}

export const getStaticPaths: GetStaticPaths = () => ({
	paths: listSeoPagesByKind('court').map(page => ({ params: { court: page.slug } })),
	fallback: false
})

export const getStaticProps: GetStaticProps<Props> = ({ params }) => {
	const slug = String(params?.court ?? '')
	const page = findSeoPageByRoute(`/courts/${slug}`)

	if (!page) return { notFound: true }

	// Court pages render page.content.sections; their markdown body never reaches the DOM.
	// Shipping it anyway inlined it twice into __NEXT_DATA__ (~20 kB of dead weight per page).
	if (hasStructuredContent(page)) {
		return { props: { page: { ...page, bodyMarkdown: '' }, html: '' } }
	}

	return {
		props: {
			page,
			html: markdownToHtml(page.bodyMarkdown)
		}
	}
}
