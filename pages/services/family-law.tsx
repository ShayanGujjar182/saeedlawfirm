import Head from 'next/head'
import ServicePage from '../../components/shared/ServicePage'

const i = (d: string) => <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d={d} /></svg>

export default function FamilyLaw() {
  return (
    <>
      <Head><title>Family Lawyer in Pakistan | Saeed Law Firm Lahore</title></Head>
      <ServicePage
        eyebrow="Family Law Experts"
        headline="Family Lawyer in Pakistan — Expert Family Law Service"
        intro="Saeed Law Firm is one of Pakistan's most experienced and trusted family law firms, serving clients for over 50 years. We understand the emotional weight of family disputes and the legal complexities that accompany them. For over 50 years, we've stood beside Pakistani families during their most challenging moments, providing expert legal guidance and compassionate representation."
        stats={[
          { value: '1500+', label: 'Families Supported', sub: 'Families across Pakistan trust our experienced team for reliable, compassionate legal support.' },
          { value: 'Priority', label: 'Case Support', sub: 'Get fast legal guidance with a quick assessment and early action when your family needs help most.' },
          { value: 'Fast', label: 'Documentation & Filing', sub: 'We prepare and file your legal documents quickly to avoid delays and keep your case moving smoothly.' },
          { value: 'Comprehensive', label: 'Family Law Coverage', sub: 'From divorce to custody, inheritance to protection, complete legal support under one experienced team.' },
        ]}
        servicesSectionTitle="Our Criminal Defense Legal Services"
        services={[
          { title: 'Divorce Services', body: 'We guide clients through all forms of divorce: Khula (woman-initiated), Talaq (man-initiated), and mutual divorce. Our lawyers ensure your rights are protected, and settlements are fair.', icon: i('M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z') },
          { title: 'Child Custody & Guardianship', body: 'Custody decisions shape your child\'s future. We advocate for arrangements that prioritize your child\'s welfare while protecting parental rights.', icon: i('M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z') },
          { title: 'Child Support & Maintenance', body: 'Financial security matters. We help secure maintenance payments and child support aligned with Islamic law and Pakistani statutes.', icon: i('M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z') },
          { title: 'Domestic Violence Cases', body: 'Abuse has no place in families. We provide legal protection for victims through restraining orders, criminal complaints, and custody modifications.', icon: i('M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z') },
          { title: 'Property & Inheritance Disputes', body: 'Family assets can become sources of conflict. Our lawyers resolve property disputes, inheritance claims, and division of marital assets with clarity and fairness.', icon: i('M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25') },
          { title: 'Marriage, Separation & Nikah Issues', body: 'From marriage registration to separation agreements and Nikah-related disputes, we handle all matrimonial matters.', icon: i('M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z') },
        ]}
        benefitsSectionTitle="Why Choose Saeed Law Firm"
        benefits={[
          { title: 'Decades of Experience', body: 'With over 50 years of practice, Saeed Law Firm has developed deep expertise in family law. Our senior attorneys have handled thousands of cases across Pakistan\'s court system.' },
          { title: 'Proven Success Rate', body: 'We measure our commitment by results. Our clients achieve favorable outcomes in custody arrangements, fair divorce settlements, and successful inheritance claims.' },
          { title: 'Female Lawyers Available', body: 'Many family matters are sensitive. We offer experienced female family lawyers who understand unique perspectives in women\'s rights, custody, and domestic cases.' },
          { title: 'Supreme & High Court Experience', body: 'Beyond Family Courts, our lawyers represent clients in the Superior Courts. This elevated expertise ensures strong advocacy at every level.' },
          { title: 'Confidential & Client-Focused', body: 'Your privacy matters. We maintain strict confidentiality and tailor strategies to your specific circumstances, never pushing one-size-fits-all solutions.' },
          { title: 'Nationwide Support', body: 'You shouldn\'t have to travel far for quality legal help. Saeed Law Firm operates across Pakistan\'s major cities and provides nationwide online consultations.' },
        ]}
        stepsSectionTitle="How Saeed Law Firm Prepares Your Case"
        steps={[
          { num: '1', title: 'Case Analysis & Strategy', body: 'We review your situation in detail, identify legal strengths and risks, and develop a customized strategy aligned with your goals.' },
          { num: '2', title: 'Documentation & Evidence', body: 'Proper paperwork is critical. We prepare divorce deeds, custody petitions, maintenance claims, and supporting documentation that meet court standards.' },
          { num: '3', title: 'Court Representation', body: 'Our lawyers appear on your behalf in Family Courts, High Courts, and other forums. We present evidence, cross-examine witnesses, and argue persuasively for your rights.' },
          { num: '4', title: 'Timeline & Expectations', body: 'Family cases vary in duration. Simple mutual divorces may be resolved in months. Complex custody or property disputes may take longer. We keep you informed every step.' },
        ]}
        faqs={[
          { q: 'What is the difference between Khula and Talaq in Pakistan?', a: 'Talaq is initiated by the husband, while Khula is started by the wife through the court. Both are valid under Islamic and Pakistani law, differing mainly in who requests the divorce.' },
          { q: 'How long does a family court case take in Pakistan?', a: 'Simple family cases usually finish in three to six months. Cases involving custody or property disputes often take one to two years, depending on evidence, court workload, and cooperation between parties.' },
          { q: 'Can a mother get child custody after divorce in Pakistan?', a: 'Yes. Mothers commonly receive custody of young children. Courts decide based on the child\'s welfare, considering emotional stability, education, safety, and the overall best interests of the child.' },
          { q: 'What documents are required for a divorce case in Pakistan?', a: 'Required documents include the Nikahnama, CNIC copies, children\'s birth certificates, and relevant evidence. Additional records may be needed depending on property, maintenance, or custody matters involved in the case.' },
          { q: 'How is marital property divided in a Pakistani divorce?', a: 'Courts examine each spouse\'s contribution and ownership records. Pakistan has no fixed 50/50 rule. Property acquired during marriage is reviewed carefully to ensure a fair and reasonable division.' },
          { q: 'Can I get a protective order for domestic violence in Pakistan?', a: 'Yes. Under the Protection of Women Act 2016, victims can request protective, residence, and restraint orders. These orders provide immediate safety and restrict harmful actions by the abuser.' },
          { q: 'Is child support required after divorce in Pakistan?', a: 'Yes. Fathers must provide child maintenance. The court sets the amount based on the child\'s expenses and the father\'s income, covering education, healthcare, food, and everyday needs.' },
          { q: 'Do I need a lawyer for a mutual divorce in Pakistan?', a: 'Not mandatory, but recommended. A lawyer ensures the mutual divorce deed is correctly drafted, attested, and registered, reducing future disputes and ensuring compliance with legal procedures.' },
        ]}
        ctaHeadline="Book a Free Family Law Consultation"
        ctaBody="Get compassionate legal help for divorce, custody, maintenance, or guardianship. Contact Saeed Law Firm today for a private consultation with an experienced family lawyer."
      />
    </>
  )
}
