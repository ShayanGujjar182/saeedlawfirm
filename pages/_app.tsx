import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Saeed Law Firm Lahore – Trusted Lawyers & Legal Consultants</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" type="image/png" href="/favicon.jpg" />
			</Head>
			<Navbar />
			<div className="pt-[6.35rem] sm:pt-24">
				<Component {...pageProps} />
			</div>
			<Footer />
		</>
	)
}
