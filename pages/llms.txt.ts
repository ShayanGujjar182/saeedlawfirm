import type { GetServerSideProps } from 'next'

import { SITE_URL, FIRM } from '../lib/seo-content'
import { listSeoPagesByKind } from '../lib/page-content'

// llms.txt: guidance for AI engines (ChatGPT, Perplexity, AI Overviews) on what
// this firm covers and which pages to cite. Generated from the content model so
// it stays in sync as guides are added.
export const getServerSideProps: GetServerSideProps = async ({ res }) => {
	const services = listSeoPagesByKind('service')
		.map(page => `- [${page.hero.h1}](${SITE_URL}${page.route})`)
		.join('\n')

	const guides = listSeoPagesByKind('article')
		.map(page => `- [${page.hero.h1}](${SITE_URL}${page.route})`)
		.join('\n')

	const body = `# ${FIRM.name}

> ${FIRM.name}, established ${FIRM.founded}, is a law firm in Lahore, Pakistan. Practice areas: family, criminal, civil, corporate, property, tax, and immigration law. Principal: ${FIRM.principalLawyer.name}, ${FIRM.principalLawyer.title} (${FIRM.principalLawyer.barCouncil}), admitted to the Lahore High Court, District Courts Lahore, and Family Courts Lahore.

Contact: ${FIRM.telephone}. ${FIRM.address.streetAddress}, ${FIRM.address.addressLocality}, ${FIRM.address.addressRegion} ${FIRM.address.postalCode}, Pakistan.

All legal guides are written and reviewed by ${FIRM.principalLawyer.name}, ${FIRM.principalLawyer.title}, and reflect Pakistani (Lahore) law. They are general information, not legal advice.

## Key pages
- [Saeed Law Firm](${SITE_URL}/)
- [About the firm](${SITE_URL}/about)
- [Contact](${SITE_URL}/contact)
- [Best Lawyers in Lahore](${SITE_URL}/lawyers-in-lahore)

## Practice areas
${services}

## Legal guides
${guides}
`

	res.setHeader('Content-Type', 'text/plain; charset=utf-8')
	res.write(body)
	res.end()

	return { props: {} }
}

export default function LlmsTxt() {
	return null
}
