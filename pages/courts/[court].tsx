import type { GetStaticPaths, GetStaticProps } from 'next'

import DynamicSeoPage from '../../components/shared/DynamicSeoPage'
import { markdownToHtml } from '../../lib/seo-content'
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
  fallback: false,
})

export const getStaticProps: GetStaticProps<Props> = ({ params }) => {
  const slug = String(params?.court ?? '')
  const page = findSeoPageByRoute(`/courts/${slug}`)

  if (!page) return { notFound: true }
  return {
    props: {
      page,
      html: markdownToHtml(page.bodyMarkdown),
    },
  }
}
