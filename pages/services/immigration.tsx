import Head from 'next/head'
import ServicePage from '../../components/shared/ServicePage'

const i = (d: string) => <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d={d} /></svg>

export default function Immigration() {
  return (
    <>
      <Head><title>Immigration Lawyer in Pakistan | Saeed Law Firm Lahore</title></Head>
      <ServicePage
        eyebrow="Immigration Law Experts"
        headline="Immigration Lawyer in Pakistan — Visa & Immigration Legal Services"
        intro="Moving to another country requires navigating complex immigration laws, completing detailed visa applications, and meeting strict documentation requirements. Saeed Law Firm has assisted Pakistani clients for over 50 years with study visas, work permits, family reunification, and residency applications across multiple jurisdictions."
        stats={[
          { value: 'Specialized', label: 'Immigration Law Expertise', sub: 'Our immigration attorneys know what visa officers look for and how to present your case compellingly.' },
          { value: 'Transparent', label: 'Case Communication', sub: 'We keep you informed at every stage of the application process.' },
          { value: 'Precise', label: 'Documentation & Filing', sub: 'Success depends on quality documentation — we review every detail.' },
          { value: 'Strict', label: 'Confidentiality & Security', sub: 'Your personal information is handled with the highest level of security.' },
        ]}
        servicesSectionTitle="Our Immigration Legal Services"
        services={[
          { title: 'Student Visa Lawyer', body: 'Education abroad opens doors. We help students secure student visas through proper documentation, institution letter support, financial proof organization, and application guidance specific to their chosen country.', icon: i('M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5') },
          { title: 'Work Permit & Employment Visa Lawyer', body: 'Employment opportunities abroad require work permits and employment visas. We guide professionals through skill assessment, job offer documentation, work authorization processes, and visa application procedures.', icon: i('M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z') },
          { title: 'Spouse & Family Visa Services', body: 'Family reunification is complex. We handle spouse visas, dependent visas, parent sponsorship, and family reunion applications, ensuring all relationship documentation meets immigration standards.', icon: i('M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z') },
          { title: 'Skilled Immigration Support', body: 'Many countries prioritize skilled workers. We advise on skilled migration programs, assist with points-based applications, support expression of interest submissions, and guide professional immigration pathways.', icon: i('M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342') },
          { title: 'Visitor Visa Assistance', body: 'Tourism, business visits, and short stays require visitor visas. We prepare visitor visa applications, organize travel purpose documentation, and support approval for temporary visits.', icon: i('M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253M3 12a8.959 8.959 0 00.284 2.253') },
          { title: 'Business & Investor Immigration', body: 'Entrepreneurs and investors pursuing business immigration need specialized guidance. We handle business visa applications, investor pathways, and documentation demonstrating business legitimacy.', icon: i('M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z') },
          { title: 'Citizenship & Naturalization', body: 'Long-term settlement often leads to citizenship pursuit. We guide naturalization applications, advise on residency requirements, and support the legal pathways to permanent citizenship status.', icon: i('M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z') },
          { title: 'Visa Refusal & Immigration Appeals', body: 'Refusals are not final. We analyze refusal letters, identify ground-of-rejection patterns, prepare comprehensive appeal documentation, and represent clients in immigration appeal tribunals.', icon: i('M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z') },
        ]}
        benefitsSectionTitle="Why Choose Our Immigration Lawyers?"
        benefits={[
          { title: 'Legal Representation You Can Trust', body: 'Our immigration attorneys have spent decades handling visa applications and immigration appeals. We know what visa officers look for and how to present your case compellingly.' },
          { title: 'Thorough Case Assessment', body: 'Before investing time and money, you deserve an honest evaluation. We assess your eligibility, identify potential challenges, and advise whether your case is viable before you proceed.' },
          { title: 'Appeals Handling Expertise', body: 'Visa refusals happen. When they do, skilled appeals handling makes the difference. We analyze refusal reasons, prepare strong rebuttal documentation, and represent you in immigration appeal processes.' },
          { title: 'Compliance with Immigration Laws', body: 'Immigration regulations change. Our team stays current with federal immigration laws, visa requirements, and procedural updates across major destination countries.' },
          { title: 'Professional Documentation Review', body: 'Success depends on quality documentation. We review your supporting documents, identify gaps, and ensure every paper meets visa officer expectations for completeness and clarity.' },
          { title: 'Nationwide Support', body: 'We serve clients in Lahore, Karachi, Islamabad, Rawalpindi, and across Pakistan through online consultations. Distance is never a barrier to quality legal help.' },
        ]}
        stepsSectionTitle="Our Immigration Process"
        steps={[
          { num: '1', title: 'Case Assessment', body: 'We review your situation, assess immigration pathway viability, and identify potential challenges upfront. This honest evaluation prevents wasted effort on non-viable applications.' },
          { num: '2', title: 'Eligibility Check', body: 'We confirm you meet destination country requirements, verify skill recognition, assess financial capacity, and ensure family documentation validity before formal application.' },
          { num: '3', title: 'Documentation Preparation', body: 'We organize supporting documents, prepare explanatory letters addressing potential concerns, compile evidence of ties to Pakistan, and structure your application package for maximum impact.' },
          { num: '4', title: 'Submission & Appeal Support', body: 'We submit your application to the appropriate immigration authority, track processing timelines, and provide full appeal support if a refusal occurs.' },
        ]}
        faqs={[
          { q: 'Do I need a lawyer for my visa application?', a: 'You are not legally required to hire a lawyer, but a professional review helps avoid mistakes that commonly lead to refusals. An immigration lawyer can identify missing documents, fix weak points, and guide you on country-specific requirements, especially useful for complex cases or previous refusals.' },
          { q: 'Can a lawyer help reduce my visa refusal chances?', a: 'Yes. Immigration lawyers review your application before submission, check for inconsistencies, and organize your documents in the format visa officers prefer. At Saeed Law Firm, our pre-submission review helps catch issues that commonly trigger refusals and improves the likelihood of approval.' },
          { q: 'What documents are required for a visa application?', a: 'Document requirements vary by visa type and destination country, but typically include: valid passport, birth and family documents, educational certificates, employment letters, bank statements or financial proof, and travel history.' },
          { q: 'How long does immigration processing take?', a: 'Processing times vary: student visas typically take 2–4 weeks; work permits 2–3 months; family visas 3–6 months. We advise on realistic timelines before you apply.' },
          { q: 'What should I do if my visa application is refused?', a: 'A visa refusal does not permanently block you from applying again. You can either appeal the decision (if allowed by the destination country) or reapply with stronger documentation. Saeed Law Firm reviews refusal letters, prepares appeal files, and addresses the exact reasons cited by the visa officer.' },
          { q: 'Can I appeal a visa refusal in Pakistan?', a: 'Yes. Appeal options depend on the immigration system of the country you applied to. Some countries allow tribunal appeals; others only permit reapplication. An immigration lawyer can guide you on the best route based on your refusal reason and visa category.' },
          { q: 'How do I prove financial capacity for a visa application?', a: 'Financial evidence typically includes recent bank statements, proof of income, tax returns, investments or property documents, and sponsor letters where applicable.' },
          { q: 'What is a skilled immigration program, and do I qualify?', a: 'Skilled migration programs prioritize professionals in in-demand fields. Points-based systems assess education, experience, language ability, and job offers. We assess your qualification for skilled programs and guide eligibility pathways specific to your profession.' },
        ]}
        ctaHeadline="Book a Free Immigration Consultation"
        ctaBody="Contact Saeed Law Firm today. Discuss your visa needs, understand your legal position, and let our experienced immigration lawyers guide you to the right pathway."
      />
    </>
  )
}
