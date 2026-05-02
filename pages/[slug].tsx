import type { GetStaticPaths, GetStaticProps } from 'next'

import DynamicSeoPage from '../components/shared/DynamicSeoPage'
import { markdownToHtml } from '../lib/seo-content'
import { findSeoPageByRoute, listSeoPagesByKind } from '../lib/page-content'
import type { SeoPageContent } from '../lib/page-content'

type Props = {
  page: SeoPageContent
  html: string
}

export default function SeoServiceRoute({ page, html }: Props) {
  return <DynamicSeoPage page={page} html={html} />
}

export const getStaticPaths: GetStaticPaths = () => ({
  paths: listSeoPagesByKind('service').map(page => ({ params: { slug: page.slug } })),
  fallback: false,
})

export const getStaticProps: GetStaticProps<Props> = ({ params }) => {
  const slug = String(params?.slug ?? '')
  const page = findSeoPageByRoute(`/${slug}`)

  if (!page) return { notFound: true }
  return {
    props: {
      page,
      html: markdownToHtml(page.bodyMarkdown),
    },
  }
}
