import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

const SERVICES = [
	{ label: 'All Lawyers in Lahore', href: '/lawyers-in-lahore' },
	{ label: 'Family Lawyer', href: '/family-lawyer-in-lahore' },
	{ label: 'Criminal Lawyer', href: '/criminal-lawyer-in-lahore' },
	{ label: 'Property Lawyer', href: '/property-lawyer-in-lahore' },
	{ label: 'Tax Lawyer', href: '/tax-lawyer-in-lahore' },
	{ label: 'Immigration Lawyer', href: '/immigration-lawyer-in-lahore' },
	{ label: 'Civil Lawyer', href: '/civil-lawyer-in-lahore' },
	{ label: 'Corporate Lawyer', href: '/corporate-lawyer-in-lahore' },
	{ label: 'Divorce Lawyer', href: '/divorce-lawyer-in-lahore' },
	{ label: 'Khula Lawyer', href: '/khula-lawyer-in-lahore' },
	{ label: 'Child Custody Lawyer', href: '/child-custody-lawyer-in-lahore' },
	{ label: 'Court Marriage Lawyer', href: '/court-marriage-lawyer-in-lahore' }
]

const COURTS = [
	{ label: 'Lahore High Court', href: '/courts/lawyer-at-lahore-high-court' },
	{ label: 'District Court Lahore', href: '/courts/district-court-lawyer-lahore' },
	{ label: 'Family Court Lahore', href: '/courts/family-court-lawyer-lahore' },
	{ label: 'Tax Tribunal Lahore', href: '/courts/tax-tribunal-lawyer-lahore' },
	{ label: 'Service Tribunal Lahore', href: '/courts/service-tribunal-lawyer-lahore' },
	{ label: 'Cantonment Court Lahore', href: '/courts/cantonment-court-lawyer-lahore' }
]

const PRACTICE_AREAS = [
	{ label: 'DHA Lahore', href: '/areas/lawyer-in-dha-lahore' },
	{ label: 'Gulberg Lahore', href: '/areas/lawyer-in-gulberg-lahore' },
	{ label: 'Johar Town Lahore', href: '/areas/lawyer-in-johar-town-lahore' },
	{ label: 'Model Town Lahore', href: '/areas/lawyer-in-model-town-lahore' },
	{ label: 'Bahria Town Lahore', href: '/areas/lawyer-in-bahria-town-lahore' },
	{ label: 'Lahore Cantt', href: '/areas/lawyer-in-lahore-cantt' },
	{ label: 'Faisal Town Lahore', href: '/areas/lawyer-in-faisal-town-lahore' },
	{ label: 'Township Lahore', href: '/areas/lawyer-in-township-lahore' }
]

const NAV_GROUPS = [
	{ title: 'Services', links: SERVICES },
	{ title: 'Courts', links: COURTS },
	{ title: 'Practice Areas', links: PRACTICE_AREAS }
]

const CONTACT_LINKS = {
	email: 'ahmadbilal2003@gmail.com',
	phone: '+92 319 4959420',
	phoneHref: '+923194959420'
}

const MailIcon = () => (
	<svg
		className="h-4 w-4 flex-shrink-0"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth={2}
		strokeLinecap="round"
		strokeLinejoin="round"
		aria-hidden="true"
	>
		<rect width="20" height="16" x="2" y="4" rx="2" />
		<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
	</svg>
)

const PhoneIcon = () => (
	<svg
		className="h-4 w-4 flex-shrink-0"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth={2}
		strokeLinecap="round"
		strokeLinejoin="round"
		aria-hidden="true"
	>
		<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.68 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.32 1.85.55 2.81.68A2 2 0 0 1 22 16.92Z" />
	</svg>
)

const SOCIAL_LINKS = [
	{
		label: 'Facebook',
		href: 'https://www.facebook.com/saeedlawfirm',
		icon: (
			<svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
				<path d="M14 8.5V6.75c0-.77.5-.95.86-.95H17V2.1L14.02 2C10.7 2 9.94 4.48 9.94 6.07V8.5H7v3.86h2.94V22h4.06v-9.64h2.73l.43-3.86H14Z" />
			</svg>
		)
	},
	{
		label: 'LinkedIn',
		href: 'https://www.linkedin.com/company/saeedlawfirm',
		icon: (
			<svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
				<path d="M6.94 8.98H3.22V21h3.72V8.98ZM5.08 3C3.88 3 2.9 3.94 2.9 5.1c0 1.18.98 2.12 2.18 2.12 1.22 0 2.2-.94 2.2-2.12C7.28 3.94 6.3 3 5.08 3Zm16.02 11.1c0-3.22-1.72-5.38-4.58-5.38-1.58 0-2.64.86-3.08 1.68h-.05V8.98H9.82V21h3.72v-5.94c0-1.57.3-3.08 2.24-3.08 1.9 0 1.93 1.78 1.93 3.18V21h3.72v-6.9h-.33Z" />
			</svg>
		)
	},
	{
		label: 'Google Business',
		href: 'https://g.page/saeedlawfirm',
		icon: (
			<svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
				<path d="M21.6 12.23c0-.74-.07-1.45-.2-2.13H12v4.03h5.38a4.6 4.6 0 0 1-2 3.02v2.5h3.24c1.9-1.75 2.98-4.32 2.98-7.42Z" />
				<path d="M12 22c2.7 0 4.97-.9 6.62-2.43l-3.24-2.5c-.9.6-2.05.96-3.38.96-2.6 0-4.8-1.76-5.58-4.12H3.08v2.58A9.99 9.99 0 0 0 12 22Z" />
				<path d="M6.42 13.91A6.02 6.02 0 0 1 6.1 12c0-.66.11-1.3.32-1.91V7.51H3.08A9.99 9.99 0 0 0 2 12c0 1.61.39 3.13 1.08 4.49l3.34-2.58Z" />
				<path d="M12 5.97c1.47 0 2.78.5 3.82 1.49l2.87-2.87C16.96 2.98 14.7 2 12 2a9.99 9.99 0 0 0-8.92 5.51l3.34 2.58C7.2 7.73 9.4 5.97 12 5.97Z" />
			</svg>
		)
	}
]

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false)
	const [dropOpen, setDropOpen] = useState<string | false>(false)
	const [mobileDropOpen, setMobileDropOpen] = useState<string | false>(false)
	const [scrolled, setScrolled] = useState(false)

	const navRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 12)
		window.addEventListener('scroll', onScroll)
		return () => window.removeEventListener('scroll', onScroll)
	}, [])

	useEffect(() => {
		const handler = (e: MouseEvent) => {
			if (navRef.current && !navRef.current.contains(e.target as Node)) {
				setDropOpen(false)
			}
		}

		document.addEventListener('mousedown', handler)
		return () => document.removeEventListener('mousedown', handler)
	}, [])

	const close = () => {
		setMenuOpen(false)
		setDropOpen(false)
		setMobileDropOpen(false)
	}

	return (
		<nav
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				scrolled
					? 'bg-white shadow-md border-b border-gray-200'
					: 'bg-white/95 backdrop-blur-sm border-b border-gray-100'
			}`}
		>
			<div className="bg-gold-100 text-navy-900 border-b border-gold-400/40">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex items-center justify-center md:justify-between gap-3 text-xs sm:text-sm">
					<div className="flex flex-row flex-wrap items-center justify-center md:justify-start gap-x-3 gap-y-1 sm:gap-x-5 text-center sm:text-left leading-tight">
						<a
							href={`mailto:${CONTACT_LINKS.email}`}
							className="inline-flex items-center gap-1.5 font-normal hover:text-gold-700 transition-colors"
						>
							<MailIcon />
							{CONTACT_LINKS.email}
						</a>
						<a
							href={`tel:${CONTACT_LINKS.phoneHref}`}
							className="inline-flex items-center gap-1.5 font-normal hover:text-gold-700 transition-colors"
						>
							<PhoneIcon />
							{CONTACT_LINKS.phone}
						</a>
					</div>

					<div className="hidden md:flex items-center gap-2">
						{SOCIAL_LINKS.map(item => (
							<a
								key={item.label}
								href={item.href}
								target="_blank"
								rel="noreferrer"
								aria-label={item.label}
								title={item.label}
								className="inline-flex h-7 w-7 items-center justify-center rounded border border-gold-600/25 bg-white/65 text-navy-800 hover:bg-white hover:text-gold-700 transition-colors"
							>
								{item.icon}
							</a>
						))}
					</div>
				</div>
			</div>

			<div
				ref={navRef}
				className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between"
			>
				{/* Logo */}
				<Link href="/" onClick={close} className="flex flex-col leading-tight">
					<span className="font-serif text-lg font-bold text-navy-900 tracking-tight">
						Saeed Law Firm
					</span>
					<span className="text-xs text-gold-600 font-semibold tracking-widest uppercase">
						Lahore
					</span>
				</Link>

				{/* Desktop nav */}
				<div className="hidden md:flex items-center space-x-7">
					<Link
						href="/"
						className="text-sm font-medium text-navy-800 hover:text-gold-600 transition-colors duration-200"
					>
						Home
					</Link>

					{NAV_GROUPS.map(group => (
						<div className="relative" key={group.title}>
							<button
								type="button"
								onClick={() =>
									setDropOpen(dropOpen === group.title ? false : group.title)
								}
								className="flex items-center gap-1 text-sm font-medium text-navy-800 hover:text-gold-600 transition-colors duration-200 cursor-pointer"
								aria-expanded={dropOpen === group.title}
							>
								{group.title}
								<svg
									className={`w-4 h-4 transition-transform duration-200 ${
										dropOpen === group.title ? 'rotate-180' : ''
									}`}
									fill="none"
									stroke="currentColor"
									strokeWidth={2}
									viewBox="0 0 24 24"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M19 9l-7 7-7-7"
									/>
								</svg>
							</button>

							{dropOpen === group.title && (
								<div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-xl p-3 z-50">
									<div className="space-y-1">
										{group.links.map(item => (
											<Link
												key={item.href}
												href={item.href}
												onClick={() => setDropOpen(false)}
												className="block rounded px-3 py-2 text-sm text-navy-800 hover:bg-gold-50 hover:text-gold-700 transition-colors duration-150"
											>
												{item.label}
											</Link>
										))}
									</div>
								</div>
							)}
						</div>
					))}

					<Link
						href="/about"
						className="text-sm font-medium text-navy-800 hover:text-gold-600 transition-colors duration-200"
					>
						About Us
					</Link>

					<Link
						href="/contact"
						className="text-sm font-medium text-navy-800 hover:text-gold-600 transition-colors duration-200"
					>
						Contact
					</Link>

					<Link href="/contact" className="btn-gold text-sm">
						Book Consultation
					</Link>
				</div>

				{/* Mobile hamburger */}
				<button
					type="button"
					aria-label="Toggle menu"
					onClick={() => setMenuOpen(v => !v)}
					className="md:hidden p-2 rounded text-navy-800 hover:bg-gray-100 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold-500"
				>
					{menuOpen ? (
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							strokeWidth={2}
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					) : (
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							strokeWidth={2}
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					)}
				</button>
			</div>

			{/* Mobile menu */}
			{menuOpen && (
				<div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-1">
					<Link
						href="/"
						onClick={close}
						className="block py-2.5 text-sm font-medium text-navy-800 hover:text-gold-600 transition-colors"
					>
						Home
					</Link>

					{NAV_GROUPS.map(group => (
						<div key={group.title}>
							<button
								type="button"
								onClick={() =>
									setMobileDropOpen(
										mobileDropOpen === group.title ? false : group.title
									)
								}
								className="flex items-center justify-between w-full py-2.5 text-sm font-medium text-navy-800 hover:text-gold-600 transition-colors cursor-pointer"
							>
								{group.title}
								<svg
									className={`w-4 h-4 transition-transform duration-200 ${
										mobileDropOpen === group.title ? 'rotate-180' : ''
									}`}
									fill="none"
									stroke="currentColor"
									strokeWidth={2}
									viewBox="0 0 24 24"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M19 9l-7 7-7-7"
									/>
								</svg>
							</button>

							{mobileDropOpen === group.title && (
								<div className="pl-4 border-l-2 border-gold-200 ml-2 mt-1 mb-2">
									{group.links.map(item => (
										<Link
											key={item.href}
											href={item.href}
											onClick={close}
											className="block py-1.5 text-sm text-navy-700 hover:text-gold-600 transition-colors"
										>
											{item.label}
										</Link>
									))}
								</div>
							)}
						</div>
					))}

					<Link
						href="/about"
						onClick={close}
						className="block py-2.5 text-sm font-medium text-navy-800 hover:text-gold-600 transition-colors"
					>
						About Us
					</Link>

					<Link
						href="/contact"
						onClick={close}
						className="block py-2.5 text-sm font-medium text-navy-800 hover:text-gold-600 transition-colors"
					>
						Contact
					</Link>

					<Link
						href="/contact"
						onClick={close}
						className="btn-gold w-full justify-center mt-3 block text-center"
					>
						Book Consultation
					</Link>
				</div>
			)}
		</nav>
	)
}
