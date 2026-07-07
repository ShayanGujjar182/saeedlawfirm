/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	async redirects() {
		return [
			// Canonicalise host: www → non-www. www.saeedlawfirm.com currently
			// serves a live 200 for every path, splitting the index across two
			// hosts; the 301 is a stronger directive than the canonical tag alone.
			{
				source: '/:path*',
				has: [{ type: 'host', value: 'www.saeedlawfirm.com' }],
				destination: 'https://saeedlawfirm.com/:path*',
				permanent: true
			},
			{
				source: '/sitemap_index.xml',
				destination: '/sitemap.xml',
				permanent: true
			},
			// Legacy WordPress URLs still indexed in GSC — 301 to preserve equity.
			{ source: '/about-us', destination: '/about', permanent: true },
			{ source: '/contact-us', destination: '/contact', permanent: true },
			{ source: '/faqs', destination: '/about', permanent: true },
			{ source: '/cases', destination: '/about', permanent: true },
			{
				source: '/best-countries-for-asylum-a-complete-2025-guide-for-applicants',
				destination: '/blog/best-countries-for-asylum',
				permanent: true
			},
			{
				source: '/asylum-seekers-understanding-their-journey-rights-and-legal-protection',
				destination: '/blog/best-countries-for-asylum',
				permanent: true
			},
			{
				source: '/immigration-law-for-asylum-a-complete-guide-to-seeking-protection',
				destination: '/blog/best-countries-for-asylum',
				permanent: true
			},
			{
				source: '/traffic-violence-in-pakistan-causes-effects-and-solutions',
				destination: '/blog/road-accident-compensation-and-car-insurance-in-pakistan',
				permanent: true
			},
			{
				source: '/car-insurance-after-accident-a-complete-guide',
				destination: '/blog/road-accident-compensation-and-car-insurance-in-pakistan',
				permanent: true
			},
			{ source: '/services', destination: '/lawyers-in-lahore', permanent: true },
			{
				source: '/services/family-law',
				destination: '/family-lawyer-in-lahore',
				permanent: true
			},
			{
				source: '/services/criminal-lawyer',
				destination: '/criminal-lawyer-in-lahore',
				permanent: true
			},
			{
				source: '/services/tax-lawyer',
				destination: '/tax-lawyer-in-lahore',
				permanent: true
			},
			{
				source: '/services/immigration',
				destination: '/immigration-lawyer-in-lahore',
				permanent: true
			},
			{
				source: '/services/civil-litigation',
				destination: '/civil-lawyer-in-lahore',
				permanent: true
			},
			{
				source: '/services/personal-injury',
				destination: '/civil-lawyer-in-lahore',
				permanent: true
			},
			{ source: '/family-lawyer', destination: '/family-lawyer-in-lahore', permanent: true },
			{
				source: '/criminal-lawyer',
				destination: '/criminal-lawyer-in-lahore',
				permanent: true
			},
			{ source: '/tax-lawyer', destination: '/tax-lawyer-in-lahore', permanent: true },
			{
				source: '/immigration-lawyer',
				destination: '/immigration-lawyer-in-lahore',
				permanent: true
			},
			{ source: '/civil-lawyer', destination: '/civil-lawyer-in-lahore', permanent: true },
			{
				source: '/personal-injury-lawyer',
				destination: '/civil-lawyer-in-lahore',
				permanent: true
			}
		]
	}
}

module.exports = nextConfig
