import Head from 'next/head'
import Link from 'next/link'

import type { SeoPageContent } from '../../lib/page-content'
import {
  SITE_URL,
  breadcrumbSchema,
  faqSchema,
  inlineMarkdownToHtml,
  jsonLd,
  legalServiceSchema,
  organizationSchema,
} from '../../lib/seo-content'
import type { PageContentBlock } from '../../lib/page-content'

type Props = {
  html: string
  page: SeoPageContent
}

function titleForKind(kind: SeoPageContent['kind']) {
  if (kind === 'court') return 'Lahore Court Practice'
  if (kind === 'area') return 'Local Lahore Counsel'
  return 'Legal Services in Lahore'
}

function inlineHtml(value: string) {
  return { __html: inlineMarkdownToHtml(value) }
}

function renderContentBlock(block: PageContentBlock, index: number) {
  if (block.type === 'paragraph') {
    return <p key={index} dangerouslySetInnerHTML={inlineHtml(block.text)} />
  }

  if (block.type === 'subheading') {
    return <h3 key={index} dangerouslySetInnerHTML={inlineHtml(block.text)} />
  }

  if (block.type === 'list') {
    return (
      <ul key={index}>
        {block.items.map(item => <li key={item} dangerouslySetInnerHTML={inlineHtml(item)} />)}
      </ul>
    )
  }

  if (block.type === 'orderedList') {
    return (
      <ol key={index}>
        {block.items.map(item => <li key={item} dangerouslySetInnerHTML={inlineHtml(item)} />)}
      </ol>
    )
  }

  if (block.type === 'table') {
    return (
      <div key={index} className="overflow-x-auto my-6">
        <table className="min-w-full text-sm border border-gray-200">
          <thead>
            <tr>
              {block.headers.map(header => (
                <th key={header} className="bg-gray-50 border border-gray-200 px-4 py-3 text-left font-semibold text-navy-900" dangerouslySetInnerHTML={inlineHtml(header)} />
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row, rowIndex) => (
              <tr key={`${row.join('-')}-${rowIndex}`}>
                {row.map((cell, cellIndex) => (
                  <td key={`${cell}-${cellIndex}`} className="border border-gray-200 px-4 py-3 align-top" dangerouslySetInnerHTML={inlineHtml(cell)} />
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }

  return null
}

export default function DynamicSeoPage({
  html,
  page,
}: Props) {
  const faqs = page.faqs ?? []
  const details = page.details ?? []
  const relatedPages = page.relatedPages ?? []
  const canonicalPath = page.seo.canonicalPath || page.route
  const canonicalUrl = `${SITE_URL}${canonicalPath}`
  const content = page.content
  const hasStructuredContent = Boolean(content?.sections?.length || content?.introBlocks?.length)
  const hierarchy = page.ancestors?.length
    ? page.ancestors
    : page.parent
      ? [page.parent]
      : [{ label: titleForKind(page.kind), route: '/lawyers-in-lahore', slug: 'lawyers-in-lahore' }]
  const breadcrumbs = [
    { name: 'Home', url: SITE_URL },
    ...hierarchy.map(item => ({ name: item.label, url: `${SITE_URL}${item.route}` })),
    { name: page.hero.h1, url: canonicalUrl },
  ]

  return (
    <>
      <Head>
        <title>{page.seo.title}</title>
        <meta name="description" content={page.seo.description} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={page.seo.title} />
        <meta property="og:description" content={page.seo.description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(organizationSchema()) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbSchema(breadcrumbs)) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(legalServiceSchema({ h1: page.hero.h1, metaDescription: page.seo.description, slug: canonicalPath.replace(/^\//, '') })) }} />
        {faqs.length > 0 && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(faqSchema(faqs)) }} />}
      </Head>

      <main className="bg-gray-50">
        <header className="bg-navy-900 py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-3">{page.hero.eyebrow}</p>
            <h1 className="font-serif text-3xl md:text-5xl font-semibold text-white leading-tight mb-4">{page.hero.h1}</h1>
            <div className="w-12 h-1 bg-gold-600 rounded mx-auto mb-6" />
            <p className="text-gray-300 text-base leading-relaxed max-w-2xl mx-auto mb-8">{page.hero.intro}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-gold">Book a Consultation Today</Link>
              <a href="tel:+923194959420" className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded text-sm hover:bg-white/10 transition-colors duration-200">Call Now</a>
            </div>
          </div>
        </header>

        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '50+', label: 'Years Experience' },
              { value: '800+', label: 'Cases Handled' },
              { value: '1975', label: 'Established' },
              { value: 'Lahore', label: 'Court Focus' },
            ].map(stat => (
              <div key={stat.label} className="text-center">
                <p className="font-serif text-3xl font-bold text-gold-600">{stat.value}</p>
                <p className="text-sm font-semibold text-navy-800 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <section className="bg-white py-16 px-6">
          <div className="max-w-4xl mx-auto">
            {hasStructuredContent && content ? (
              <article className="seo-content text-navy-800">
                {content.introBlocks.map(renderContentBlock)}
                {content.sections.map(section => (
                  <section key={section.heading} className="pt-2">
                    <h2 dangerouslySetInnerHTML={inlineHtml(section.heading)} />
                    {section.subheading && <p className="text-gold-700 font-semibold" dangerouslySetInnerHTML={inlineHtml(section.subheading)} />}
                    {section.description && <p dangerouslySetInnerHTML={inlineHtml(section.description)} />}
                    {section.blocks.map(renderContentBlock)}
                  </section>
                ))}
              </article>
            ) : (
              <article
                className="seo-content text-navy-800"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            )}
          </div>
        </section>

        {details.some(detail => detail.values?.length) && (
          <section className="bg-gray-50 py-16 px-6">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
              {details.filter(detail => detail.values?.length).map(detail => (
                <div key={detail.label} className="bg-white border border-gray-200 rounded-lg p-6">
                  <h2 className="font-serif text-xl font-semibold text-navy-900 mb-4">{detail.label}</h2>
                  <ul className="space-y-2 text-sm text-navy-700">
                    {detail.values?.map(value => <li key={value}>{value}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {faqs.length > 0 && (
          <section className="bg-white py-16 px-6">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-navy-900">Frequently Asked Questions</h2>
                <div className="w-12 h-1 bg-gold-600 rounded mx-auto mt-3" />
              </div>
              <div className="space-y-3">
                {faqs.map(item => (
                  <details key={item.q} className="group bg-gray-50 border border-gray-200 rounded-lg overflow-hidden hover:border-gold-300 transition-colors">
                    <summary className="flex items-center justify-between px-6 py-4 cursor-pointer font-medium text-navy-900 list-none select-none">
                      {item.q}
                      <svg className="w-5 h-5 text-gold-600 flex-shrink-0 ml-4 transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-6 pb-5 text-sm text-navy-700 leading-relaxed border-t border-gray-100">
                      <p className="pt-4">{item.a}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </section>
        )}

        {relatedPages.length > 0 && (
          <section className="bg-gray-50 py-16 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-10">
                <p className="text-gold-600 text-sm font-semibold uppercase tracking-widest mb-2">Related Services</p>
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-navy-900">Explore Related Legal Help</h2>
                <div className="w-12 h-1 bg-gold-600 rounded mx-auto mt-3" />
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedPages.map(relatedPage => (
                  <Link key={relatedPage.href} href={relatedPage.href} className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gold-400 hover:shadow-md transition-all duration-200">
                    <h3 className="font-serif text-lg font-semibold text-navy-900 mb-2">{relatedPage.title}</h3>
                    <p className="text-sm text-navy-700 leading-relaxed">{relatedPage.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="bg-gold-600 py-12 px-6 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-white mb-3">Book a Consultation</h2>
          <p className="text-white/90 mb-6 max-w-xl mx-auto text-sm leading-relaxed">
            Speak with Saeed Law Firm about your matter and get a clear case scope, documents checklist, and next steps.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-white text-gold-700 font-semibold px-6 py-3 rounded hover:bg-gold-50 transition-colors duration-200">Get In Touch</Link>
            <a href="tel:+923194959420" className="border-2 border-white text-white font-semibold px-6 py-3 rounded hover:bg-white/10 transition-colors duration-200">+92 319 4959420</a>
          </div>
        </section>
      </main>
    </>
  )
}
