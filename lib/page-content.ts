import fs from 'fs'
import path from 'path'

export type PageKind = 'service' | 'court' | 'area' | 'article'

export type PageAuthor = {
  name: string
  title?: string
  barCouncil?: string
}

export type PageFAQ = {
  q: string
  a: string
}

export type PageDetail = {
  label: string
  values: string[]
}

export type PageContentBlock =
  | {
      type: 'paragraph'
      text: string
    }
  | {
      type: 'subheading'
      text: string
    }
  | {
      type: 'list' | 'orderedList'
      items: string[]
    }
  | {
      type: 'table'
      headers: string[]
      rows: string[][]
    }

export type PageContentSection = {
  heading: string
  subheading?: string
  description: string
  blocks: PageContentBlock[]
}

export type PageContentHierarchy = {
  h1: string
  subheading: string
  description: string
  introBlocks: PageContentBlock[]
  sections: PageContentSection[]
}

export type RelatedPage = {
  title: string
  href: string
  description: string
}

export type PageParent = {
  label: string
  slug: string
  route: string
}

export type SeoPageContent = {
  kind: PageKind
  slug: string
  route: string
  parent: PageParent | null
  ancestors: PageParent[]
  seo: {
    title: string
    description: string
    canonicalPath: string
  }
  hero: {
    eyebrow: string
    h1: string
    intro: string
  }
  content?: PageContentHierarchy
  areaServed?: string | string[]
  reviewNote?: string
  author?: PageAuthor
  datePublished?: string
  dateModified?: string
  bodyMarkdown: string
  details: PageDetail[]
  faqs: PageFAQ[]
  relatedPages: RelatedPage[]
}

const CONTENT_DIR = path.join(process.cwd(), 'content/pages')

function isPageFile(fileName: string) {
  return fileName.endsWith('.json') && !fileName.startsWith('_')
}

export function listSeoPages() {
  return fs
    .readdirSync(CONTENT_DIR)
    .filter(isPageFile)
    .map(fileName => readSeoPageByFileName(fileName))
}

export function listSeoPagesByKind(kind: PageKind) {
  return listSeoPages().filter(page => page.kind === kind)
}

export function readSeoPageByFileName(fileName: string): SeoPageContent {
  return JSON.parse(fs.readFileSync(path.join(CONTENT_DIR, fileName), 'utf8'))
}

export function findSeoPageByRoute(route: string) {
  return listSeoPages().find(page => page.route === route)
}
