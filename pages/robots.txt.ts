import type { GetServerSideProps } from 'next'

import { SITE_URL } from '../lib/seo-content'

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader('Content-Type', 'text/plain')
  res.write(`User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`)
  res.end()

  return { props: {} }
}

export default function Robots() {
  return null
}
