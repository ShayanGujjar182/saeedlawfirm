import Head from 'next/head'
import ServicePage from '../../components/shared/ServicePage'

const i = (d: string) => <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d={d} /></svg>

export default function CivilLitigation() {
  return (
    <>
      <Head><title>Civil Lawyer in Pakistan | Saeed Law Firm Lahore</title></Head>
      <ServicePage
        eyebrow="Civil Litigation Experts"
        headline="Civil Lawyer in Pakistan — Expert Civil Litigation & Dispute Resolution"
        intro="Civil disputes can disrupt your property, business, finances, and peace of mind. From property boundary conflicts and contract breaches to recovery claims and compensation cases, such matters often demand skilled court litigation, not just negotiation. For over 50 years, Saeed Law Firm has represented Pakistani clients in complex civil cases. Our experienced civil litigators handle property, contract, and recovery disputes with strategic precision across all courts in Pakistan."
        stats={[
          { value: '50+', label: 'Years Civil Practice', sub: 'Specialized civil litigation expertise across Pakistan\'s court system.' },
          { value: 'Decades', label: 'Courtroom Experience', sub: 'Our civil lawyers represent clients in district courts, high courts, and appellate forums.' },
          { value: 'Strategic', label: 'Drafting & Case Management', sub: 'Precise pleadings, evidence management, and litigation strategy at every stage.' },
          { value: 'Transparent', label: 'Fees & Honest Guidance', sub: 'Clear fee structures and realistic assessments before and during proceedings.' },
        ]}
        servicesSectionTitle="Our Civil Law Services"
        services={[
          { title: 'Property & Land Disputes', body: 'Property disagreements often involve boundary lines, ownership claims, or possession rights. We represent property owners, resolve boundary disputes, pursue possession recovery, and defend property rights through civil litigation.', icon: i('M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25') },
          { title: 'Civil Recovery Suits', body: 'Money owed but unpaid requires court recovery. We file recovery suits, pursue debt collection through civil courts, pursue judgment debtor execution, and help recover funds owed to you.', icon: i('M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z') },
          { title: 'Contract & Agreement Disputes', body: 'Broken business agreements need a legal remedy. We pursue breach of contract claims, seek specific performance, pursue damages for breach, and litigate commercial disputes professionally.', icon: i('M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z') },
          { title: 'Declaration & Injunction Suits', body: 'Some disputes require court declarations of rights or injunction orders. We file declaration suits establishing legal positions, seek interim injunctions preventing harmful actions, and pursue permanent injunctions protecting rights.', icon: i('M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z') },
          { title: 'Damages & Compensation Claims', body: 'Negligence causing property damage or personal injury requires compensation. We pursue damages claims, calculate compensation comprehensively, litigate tort claims, and seek court-ordered compensation.', icon: i('M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z') },
          { title: 'Possession & Eviction Matters', body: 'Wrongful possession or tenant disputes demand possession recovery. We pursue possession recovery suits, represent landlords in eviction proceedings, and handle possession disputes through civil courts.', icon: i('M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819') },
          { title: 'Specific Performance Suits', body: 'Some contracts require specific action rather than money damages. We pursue specific performance suits, compelling performance, litigate performance disputes, and seek court orders requiring contract performance.', icon: i('M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z') },
          { title: 'Civil Appeals & Revisions', body: 'Trial court decisions can be appealed. We file civil appeals challenging unfavorable judgments, pursue High Court revisions, and present appellate arguments seeking judgment reversal or modification.', icon: i('M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3') },
        ]}
        benefitsSectionTitle="Why Choose Our Civil Lawyers?"
        benefits={[
          { title: 'Decades of Courtroom Experience', body: 'Our civil litigation lawyers have spent years appearing in civil courts. We understand judge expectations, procedural rules, and courtroom strategy that determine case outcomes.' },
          { title: 'Strong Drafting & Pleading Skills', body: 'Civil cases are often won through written pleadings. Our lawyers draft compelling pleadings, detailed written statements, and persuasive legal arguments that capture judges\' attention and support your position.' },
          { title: 'Injunction & Recovery Expertise', body: 'Injunction suits and recovery actions are specialized. We understand interim injunction strategy, permanent injunction grounds, and recovery suit procedures through practical experience.' },
          { title: 'Trial & Appellate Representation', body: 'We represent clients through a complete litigation journey. From trial court appearances through appellate proceedings, we maintain consistent advocacy at every court level.' },
          { title: 'Professional & Result-Driven Approach', body: 'We measure success by case outcomes. We develop customized litigation strategies, manage procedural compliance rigorously, and pursue favorable judgments through skilled evidence handling and legal strategy.' },
          { title: 'Transparent Fees & Honest Guidance', body: 'We provide clear fee structures, realistic case assessments, and straightforward legal advice before and during proceedings. No surprises, no hidden costs.' },
        ]}
        stepsSectionTitle="Our Civil Case Process"
        steps={[
          { num: '1', title: 'Case Evaluation', body: 'We review your dispute, assess legal viability, explain civil procedure implications, and provide an honest assessment of case strength and realistic outcomes.' },
          { num: '2', title: 'Legal Notice (if required)', body: 'Some disputes benefit from a demand notice before formal filing. We prepare and send professional legal notices demanding compliance before court proceedings.' },
          { num: '3', title: 'Drafting Plaint or Reply', body: 'Civil cases begin with a plaintiff\'s filing or a defendant\'s reply. We draft comprehensive pleadings presenting facts and legal arguments compellingly and clearly.' },
          { num: '4', title: 'Trial, Judgment & Execution', body: 'We appear in court proceedings, present evidence effectively, cross-examine opposing witnesses, and argue your case. Once judgment is rendered, we assist with execution or appeal.' },
        ]}
        faqs={[
          { q: 'What cases fall under civil law in Pakistan?', a: 'Civil law in Pakistan deals with disputes between individuals or organizations where compensation or legal remedies are sought. Common civil cases include property disputes, contract breaches, recovery suits, injunctions, damages claims, and possession matters. Saeed Law Firm represents clients in all types of civil litigation across Pakistan.' },
          { q: 'How long does a civil case take in Pakistan?', a: 'The duration of a civil case in Pakistan depends on its complexity. Simple recovery suits may conclude within 1–2 years, while property or inheritance disputes can take 3–5 years or more. Appeals and court workload can extend timelines further.' },
          { q: 'Can a civil case be settled outside court in Pakistan?', a: 'Yes, most civil cases in Pakistan can be settled outside court through negotiation or compromise. Out-of-court settlements save time, legal costs, and emotional stress. Our civil lawyers negotiate fair settlements or recommend continuing litigation when a settlement is not in your best interest.' },
          { q: 'What is an injunction in a civil case?', a: 'An injunction is a court order that either restrains or compels a party to perform a specific act. Temporary (interim) injunctions provide immediate relief during a case, while permanent injunctions are granted after final judgment. Injunctions are common in property and business disputes.' },
          { q: 'What documents are required to file a civil suit in Pakistan?', a: 'To file a civil suit, you generally need: a written plaint explaining the dispute, supporting documents (contracts, receipts, correspondence), property ownership documents if applicable, copy of CNIC, and court fee payment receipt. A civil lawyer will guide you on the documents required for your specific case.' },
          { q: 'What is decree execution in civil cases?', a: 'Decree execution is the legal process of enforcing a court judgment. If a court awards money or property, execution proceedings are initiated to recover the awarded amount or enforce compliance. Execution may take several months, depending on asset tracing and resistance by the judgment debtor.' },
          { q: 'Can a civil judgment be appealed in Pakistan?', a: 'Yes, civil judgments can be appealed before higher courts in Pakistan within the prescribed limitation period. Appeals may challenge legal errors, factual findings, or procedural defects. Appellate courts can uphold, modify, or set aside the judgment.' },
          { q: 'What is the difference between a plaint and a written statement?', a: "A plaint is the plaintiff's initial legal document outlining the claim and facts of the case. A written statement is the defendant's reply, presenting defenses and counter-arguments. Both documents must comply with the Civil Procedure Code of Pakistan." },
        ]}
        ctaHeadline="Book a Free Civil Law Consultation"
        ctaBody="Contact Saeed Law Firm today. Our experienced civil litigation lawyers will review your dispute, explain your options, and pursue the best possible outcome through negotiation or litigation."
      />
    </>
  )
}
