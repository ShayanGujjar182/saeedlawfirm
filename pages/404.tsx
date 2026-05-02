import Link from 'next/link'

const NotFound = (): JSX.Element => {
	return (
		<section className="flex items-center justify-center min-h-[70vh] bg-gray-50 px-6">
			<div className="text-center max-w-md">
				<p className="font-serif text-8xl font-bold text-navy-900 mb-4">404</p>
				<div className="w-12 h-1 bg-gold-600 rounded mx-auto mb-6" />
				<h1 className="font-serif text-2xl md:text-3xl font-semibold text-navy-900 mb-3">
					Page Not Found
				</h1>
				<p className="text-navy-700 mb-8">
					We couldn&apos;t find the page you were looking for. It may have moved or no longer exists.
				</p>
				<Link href="/" className="btn-gold">
					Back to Homepage
				</Link>
			</div>
		</section>
	)
}

export default NotFound
