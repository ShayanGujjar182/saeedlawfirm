import type { GetStaticPaths, GetStaticProps } from 'next'

import DynamicSeoPage from '../../components/shared/DynamicSeoPage'
import { hasStructuredContent, markdownToHtml } from '../../lib/seo-content'
import { findSeoPageByRoute, listSeoPagesByKind } from '../../lib/page-content'
import type { SeoPageContent } from '../../lib/page-content'

type Props = {
	page: SeoPageContent
	html: string
}

export default function AreaRoute({ page, html }: Props) {
	return <DynamicSeoPage page={page} html={html} />
}

export const getStaticPaths: GetStaticPaths = () => ({
	paths: listSeoPagesByKind('area').map(page => ({ params: { area: page.slug } })),
	fallback: false
})

export const getStaticProps: GetStaticProps<Props> = ({ params }) => {
	const slug = String(params?.area ?? '')
	const page = findSeoPageByRoute(`/areas/${slug}`)

	if (!page) return { notFound: true }

	// Area pages render page.content.sections; their markdown body never reaches the DOM.
	// Shipping it anyway inlined it twice into __NEXT_DATA__ (~14 kB of dead weight per page).
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
