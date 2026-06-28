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

type Props = {
  articles: ArticleCard[]
}

export default function BlogIndex({ articles }: Props) {
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
          <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-3">Legal Guides</p>
          <h1 className="font-serif text-3xl md:text-5xl font-semibold text-white leading-tight mb-4">
            Legal Guides for Pakistan
          </h1>
          <div className="w-12 h-1 bg-gold-600 rounded mx-auto mb-6" />
          <p className="text-gray-300 text-base leading-relaxed max-w-2xl mx-auto">
            Clear, practitioner-written guides on tax, family, property, and corporate law in Pakistan, reviewed by
            Bilal Saeed, Advocate.
          </p>
        </header>

        <section className="bg-white py-16 px-6">
          <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map(article => (
              <Link
                key={article.route}
                href={article.route}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gold-400 hover:shadow-md transition-all duration-200"
              >
                <p className="text-gold-600 text-xs font-semibold uppercase tracking-widest mb-2">{article.eyebrow}</p>
                <h2 className="font-serif text-xl font-semibold text-navy-900 mb-3">{article.h1}</h2>
                <p className="text-sm text-navy-700 leading-relaxed">{article.intro}</p>
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
    articles: listSeoPagesByKind('article').map(page => ({
      slug: page.slug,
      route: page.route,
      eyebrow: page.hero.eyebrow,
      h1: page.hero.h1,
      intro: page.hero.intro,
    })),
  },
})
