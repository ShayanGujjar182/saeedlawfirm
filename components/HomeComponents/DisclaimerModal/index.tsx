import { useState, useEffect } from 'react'

const DISCLAIMER_POINTS = [
	'Grant of access to this website does not amount to any advertisement, personal communication, solicitation, invitation or any other inducement of any sort whatsoever by or on behalf of Saeed Law Firm or any of its Associates to solicit any work through this website.',
	'The user wishes to gain more information about Saeed Law Firm for his/her/their own information.',
	'Grant of access to this website is based on the voluntary request of the user in order to understand our practice areas and garner information about us. Any information obtained or materials downloaded from this website are completely at the user\'s volition and any transmission, receipt or use of this site would not create any lawyer-client relationship. Neither this website nor the web pages and the information contained herein constitute a contract, or will form the basis of a contract, or any legal relationship.',
	'This website is a resource for informational purposes only and though intended, is not promised or guaranteed, to be complete or updated. Saeed Law Firm does not warrant that the information contained on this website is accurate or complete, and hereby disclaims all liability to any person for any loss or damage caused by errors or omissions, whether such errors or omissions result from negligence, accident or any other cause.',
	'Saeed Law Firm assumes no liability for the interpretation and/or use of the information contained on this website, nor does it offer a warranty of any kind, either express or implied. While every care has been taken in preparing the content of this website to ensure accuracy at the time of publication, Saeed Law Firm assumes no responsibility for any errors which despite all precautions may be found herein.',
	'The contents of this website do not constitute, and shall not be construed as, legal advice or a substitute for legal advice.',
	'Saeed Law Firm is not liable for any consequence of any action taken by the user relying on material / information provided on this website or through any external links thereon.',
	'The information provided under this website is solely available at the user\'s request for informational purposes only and should not be interpreted as soliciting or advertisement.',
	'Selective material and information (except any statutory instruments or judicial precedents) on this website is proprietary of Saeed Law Firm, and no part thereof shall be used, with or without adaptation, without the express prior written consent of Saeed Law Firm.',
	'All disputes, if any, are subject to the exclusive jurisdiction of the competent courts in Lahore, Pakistan only.',
]

const DisclaimerModal = (): JSX.Element => {
	const [open, setOpen] = useState(false)

	useEffect(() => {
		const accepted = localStorage.getItem('disclaimer-accepted')
		if (accepted !== '1') setOpen(true)
	}, [])

	if (!open) return <></>

	const accept = () => {
		localStorage.setItem('disclaimer-accepted', '1')
		setOpen(false)
	}

	const decline = () => {
		localStorage.setItem('disclaimer-accepted', '0')
		setOpen(false)
		window.close()
	}

	return (
		<div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60">
			<div
				role="dialog"
				aria-modal="true"
				aria-labelledby="disclaimer-title"
				className="bg-white rounded-lg shadow-2xl w-full max-w-2xl flex flex-col max-h-[90vh]"
			>
				{/* Header */}
				<div className="px-6 py-4 border-b border-gray-200 flex-shrink-0">
					<h2 id="disclaimer-title" className="font-serif text-xl font-semibold text-navy-900">
						DISCLAIMER
					</h2>
				</div>

				{/* Scrollable body */}
				<div className="px-6 py-5 overflow-y-auto flex-1 text-sm text-navy-800 leading-relaxed">
					<p className="font-semibold text-base mb-4">Welcome to Saeed Law Firm!</p>
					<p className="mb-4">
						By clicking on the &ldquo;Accept&rdquo; button below, the website visitor agrees and acknowledges that:
					</p>
					<ol className="list-decimal list-outside space-y-3 pl-5">
						{DISCLAIMER_POINTS.map((point, i) => (
							<li key={i}>{point}</li>
						))}
					</ol>
				</div>

				{/* Actions */}
				<div className="px-6 py-4 border-t border-gray-200 flex justify-end gap-3 flex-shrink-0">
					<button
						onClick={decline}
						className="btn-outline text-sm"
					>
						Decline
					</button>
					<button
						onClick={accept}
						className="btn-gold text-sm"
					>
						Accept
					</button>
				</div>
			</div>
		</div>
	)
}

export default DisclaimerModal
