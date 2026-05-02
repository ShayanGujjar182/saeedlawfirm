const Vision = (): JSX.Element => {
	return (
		<section className="bg-navy-900 py-20 px-6">
			<div className="max-w-3xl mx-auto text-center">
				<p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-2">Our Aspiration</p>
				<h2 className="font-serif text-3xl md:text-4xl font-semibold text-white mb-3">Vision</h2>
				<div className="w-12 h-1 bg-gold-600 rounded mx-auto mb-10" />

				<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-8 h-8 text-gold-400 mb-6 opacity-60" viewBox="0 0 975.036 975.036" aria-hidden="true">
					<path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
				</svg>

				<blockquote className="font-serif text-xl md:text-2xl text-white leading-relaxed italic">
					&ldquo;To strive for becoming the most preferred consultants in the domain of HR Management
					Consulting, Legal Advisory and Compliance Management.&rdquo;
				</blockquote>

				<div className="mt-8 flex items-center justify-center gap-3">
					<div className="w-8 h-px bg-gold-600" />
					<span className="text-gold-400 text-sm font-semibold tracking-widest uppercase">Bodhankar &amp; Associates</span>
					<div className="w-8 h-px bg-gold-600" />
				</div>
			</div>
		</section>
	)
}

export default Vision
