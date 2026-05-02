import Head from 'next/head'
import ServicePage from '../../components/shared/ServicePage'

const i = (d: string) => <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d={d} /></svg>

export default function TaxLawyer() {
  return (
    <>
      <Head><title>Tax Lawyer in Pakistan | Saeed Law Firm Lahore</title></Head>
      <ServicePage
        eyebrow="Tax Law Experts"
        headline="Tax Lawyer in Pakistan — Expert Tax Law & Litigation Services"
        intro="Pakistan's tax system is complex. With income tax rules, FBR audits, sales tax compliance, and property tax obligations, individuals and businesses face constant pressure to stay compliant. A single mistake or missed deadline can lead to serious penalties and legal complications. Saeed Law Firm has spent over 50 years guiding taxpayers and corporations through challenging tax matters, representing clients before the FBR, Tax Tribunals, High Courts, and the Supreme Court."
        stats={[
          { value: '50+', label: 'Years Tax Expertise', sub: 'Fifty years of experience navigating Pakistan\'s evolving tax system.' },
          { value: 'Expert', label: 'FBR & Tribunal Representation', sub: 'We work directly with FBR officials and Appellate Tax Tribunal procedures.' },
          { value: 'Precise', label: 'Documentation & Filing', sub: 'Strong documentation determines outcomes at every stage.' },
          { value: 'Strict', label: 'Confidentiality & Security', sub: 'Tax matters are sensitive. We treat your information with utmost security.' },
        ]}
        servicesSectionTitle="Our Tax Law Services"
        services={[
          { title: 'Income Tax Disputes', body: 'Disagreements with the FBR over income tax assessments are common. We challenge unfair assessments, support your position with documentation, and fight for accurate calculations that reflect your actual income.', icon: i('M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z') },
          { title: 'FBR Audits & Notices', body: 'Receiving an FBR audit notice creates stress. We handle all communication with tax authorities, prepare detailed responses, organize documentation, and represent you in FBR hearings to defend your tax position.', icon: i('M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z') },
          { title: 'Sales Tax & Withholding Tax Cases', body: 'Businesses face complex sales tax and withholding tax obligations. We resolve disputes over tax credits, refund claims, and compliance issues while protecting your cash flow.', icon: i('M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z') },
          { title: 'Property Tax Disputes', body: 'Property tax assessments can seem arbitrary. We challenge unfair valuations, dispute rates, and negotiate reasonable assessments based on market conditions and legal standards.', icon: i('M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25') },
          { title: 'Corporate Tax Compliance', body: 'Large organizations need an ongoing tax strategy. We ensure your corporation meets all filing deadlines, complies with regulations, and optimizes your tax position within legal boundaries.', icon: i('M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21') },
          { title: 'Tax Litigation & Appeals', body: 'When disputes escalate, skilled litigation is essential. We file appeals in Appellate Tax Tribunals and High Courts, presenting compelling arguments and legal precedents to overturn unfavorable decisions.', icon: i('M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3') },
          { title: 'Penalty Waivers & Settlement Negotiations', body: 'Heavy penalties can be negotiated. We pursue penalty relief, work toward settlement agreements with the FBR, and explore installment plans when appropriate.', icon: i('M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z') },
          { title: 'Business Tax Advisory', body: 'Beyond disputes, we advise on tax planning, structuring, and optimization. Our lawyers help businesses minimize legitimate tax exposure and maintain compliance.', icon: i('M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z') },
          { title: 'FBR Hearing Documentation', body: 'Success before the FBR depends on documentation quality. We prepare comprehensive files with supporting evidence, legal arguments, and procedural compliance for hearing success.', icon: i('M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z') },
        ]}
        benefitsSectionTitle="Why Choose Our Tax Lawyers?"
        benefits={[
          { title: 'Fifty Years of Tax Expertise', body: "Our firm's reputation in tax law spans decades. We've witnessed Pakistan's tax system evolve, adapted our strategies accordingly, and built unmatched procedural knowledge." },
          { title: 'FBR & Tribunal Experience', body: "We're not just courtroom lawyers. Our team works directly with FBR officials, navigates Appellate Tax Tribunal procedures, and presents cases before High Courts with confidence." },
          { title: 'Proven Success Rate', body: 'We measure success by results. Our clients have won significant tax appeals, secured penalty relief, and negotiated favorable settlements with the FBR.' },
          { title: 'Individual & Corporate Representation', body: 'Whether you\'re a salaried professional, business owner, or multinational corporation, we tailor our approach to your specific tax situation.' },
          { title: 'Confidential & Professional', body: 'Tax matters are sensitive. We maintain strict confidentiality, operate with complete professionalism, and treat your information with the utmost security.' },
          { title: 'Specialists in Complex Disputes', body: 'Simple tax questions don\'t require experts. We focus on complex cases where specialized knowledge makes the difference between significant penalties and favorable outcomes.' },
        ]}
        stepsSectionTitle="Building Your Tax Defense"
        steps={[
          { num: '1', title: 'Building Your Defense', body: 'We begin by thoroughly reviewing your tax situation, identifying FBR\'s strengths and weaknesses, and developing a defense strategy grounded in applicable law and procedural rules.' },
          { num: '2', title: 'Document Preparation', body: 'Strong documentation determines outcomes. We organize your financial records, prepare detailed response letters to FBR notices, compile supporting evidence, and ensure all documents meet formal requirements.' },
          { num: '3', title: 'FBR Audits & Hearings', body: 'Our lawyers represent you during FBR audits and appear at FBR hearings. We present your position, answer questions from FBR officials, and address technical challenges.' },
          { num: '4', title: 'Filing Appeals', body: "If FBR's decision is unfavorable, we file timely appeals in Appellate Tax Tribunals and Courts. We present legal arguments, cite relevant precedents, and challenge assessment orders on substantive and procedural grounds." },
        ]}
        faqs={[
          { q: 'What should I do if I receive an FBR tax notice?', a: "Don't ignore it. Respond within the deadline with supporting documentation. Saeed Law Firm helps you prepare responses, organize evidence, and represent you before the FBR to ensure your position is properly presented and your rights are protected." },
          { q: 'Can a tax lawyer help reduce my FBR penalty?', a: 'Yes. Penalties can often be negotiated or waived based on reasonable cause or procedural errors. Our lawyers assess penalty validity and pursue relief through proper FBR channels and appeals when applicable.' },
          { q: 'How long does a tax appeal typically take in Pakistan?', a: 'Tax appeals vary significantly. Tribunal appeals may take 1–2 years, while High Court appeals can extend to 2–4 years, depending on case complexity. Early preparation and strong documentation accelerate timelines.' },
          { q: 'What documents do I need for a tax dispute case?', a: 'Essential documents include tax returns, bank statements, expense records, purchase invoices, sales documentation, property deeds, and correspondence with the FBR. Our lawyers guide you on specific documentation needs for your situation.' },
          { q: 'Can I negotiate with the FBR directly without a lawyer?', a: 'You can attempt negotiation, but FBR officials often take stronger positions against unrepresented taxpayers. Saeed Law Firm\'s involvement signals serious defense, often encouraging more reasonable FBR positions and settlements.' },
          { q: "What's the difference between sales tax and income tax in Pakistan?", a: 'Income tax is levied on individual or business earnings. Sales tax is a consumption tax on goods and services. Different rules, rates, and compliance requirements apply. Our lawyers specialize in both and guide you through applicable regulations.' },
          { q: 'How does tax litigation differ from regular disputes?', a: 'Tax litigation means taking your case to the Appellate Tax Tribunal or High Court. It\'s more formal than FBR negotiation, involving written arguments, legal precedents, and judicial review. Saeed Law Firm handles all litigation aspects professionally.' },
          { q: 'Is property tax in Pakistan subject to disputes?', a: 'Yes. Property valuations are often aggressive and subject to challenge. Saeed Law Firm disputes unfair assessments and negotiates reasonable property taxes based on actual market value and legal standards.' },
        ]}
        ctaHeadline="Book a Free Tax Consultation"
        ctaBody="Contact Saeed Law Firm today. Whether you've received an FBR notice, face an audit, or need tax planning advice — our experienced tax lawyers are ready to protect your interests."
      />
    </>
  )
}
