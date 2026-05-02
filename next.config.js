/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	async redirects() {
		return [
			{
				source: '/sitemap_index.xml',
				destination: '/sitemap.xml',
				permanent: true,
			},
			{ source: '/services', destination: '/lawyers-in-lahore', permanent: true },
			{ source: '/services/family-law', destination: '/family-lawyer-in-lahore', permanent: true },
			{ source: '/services/criminal-lawyer', destination: '/criminal-lawyer-in-lahore', permanent: true },
			{ source: '/services/tax-lawyer', destination: '/tax-lawyer-in-lahore', permanent: true },
			{ source: '/services/immigration', destination: '/immigration-lawyer-in-lahore', permanent: true },
			{ source: '/services/civil-litigation', destination: '/civil-lawyer-in-lahore', permanent: true },
			{ source: '/services/personal-injury', destination: '/civil-lawyer-in-lahore', permanent: true },
			{ source: '/family-lawyer', destination: '/family-lawyer-in-lahore', permanent: true },
			{ source: '/criminal-lawyer', destination: '/criminal-lawyer-in-lahore', permanent: true },
			{ source: '/tax-lawyer', destination: '/tax-lawyer-in-lahore', permanent: true },
			{ source: '/immigration-lawyer', destination: '/immigration-lawyer-in-lahore', permanent: true },
			{ source: '/civil-lawyer', destination: '/civil-lawyer-in-lahore', permanent: true },
			{ source: '/personal-injury-lawyer', destination: '/civil-lawyer-in-lahore', permanent: true },
		]
	},
}

module.exports = nextConfig
