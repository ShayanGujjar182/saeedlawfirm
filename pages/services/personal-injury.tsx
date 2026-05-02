import Head from 'next/head'
import ServicePage from '../../components/shared/ServicePage'

const i = (d: string) => <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d={d} /></svg>

export default function PersonalInjury() {
  return (
    <>
      <Head><title>Personal Injury Lawyer in Pakistan | Saeed Law Firm Lahore</title></Head>
      <ServicePage
        eyebrow="Personal Injury Experts"
        headline="Personal Injury Lawyer in Pakistan — Accident & Injury Claim Experts"
        intro="An accident shatters life in seconds — whether caused by a reckless driver, an unsafe workplace, or a medical error. Suddenly, you're facing injuries, bills, lost income, and overwhelming stress. And while you deserve full compensation, insurance companies work to pay you less. That's where Saeed Law Firm stands with you. For over 50 years, we've fought for injured Pakistanis, investigating every detail, proving negligence, and negotiating fiercely to secure the fair compensation you truly deserve."
        stats={[
          { value: '5000+', label: 'Injury Victims Represented', sub: 'Clients across Pakistan trust our experienced injury team for powerful, results-driven representation.' },
          { value: 'Priority', label: 'Injury Case Response', sub: 'Get fast legal support with urgent case review and early action when you need help most.' },
          { value: 'Fast', label: 'Claims Filing & Documentation', sub: 'We prepare and file your claim quickly to avoid delays and keep your case moving forward.' },
          { value: 'Complete', label: 'Personal Injury Coverage', sub: 'From accidents to medical malpractice — complete injury claim support under one experienced team.' },
        ]}
        servicesSectionTitle="Our Personal Injury Legal Services"
        services={[
          { title: 'Car Accident Injury Claims', body: 'Motor vehicle accidents cause countless injuries. We represent car accident victims, investigate driver negligence, challenge unfair insurance valuations, and secure compensation for vehicle damage and bodily injury.', icon: i('M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12') },
          { title: 'Motorcycle Accident & Road Crash Cases', body: 'Motorcyclists suffer catastrophic injuries in crashes. We understand motorcycle accident severity, fight for fair compensation reflecting serious injuries, and hold negligent drivers accountable.', icon: i('M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z') },
          { title: 'Medical Negligence & Malpractice Claims', body: 'Doctor mistakes cause lasting harm. We investigate medical malpractice, review medical records for negligence, consult expert physicians, and pursue compensation for treatment failures.', icon: i('M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5') },
          { title: 'Workplace Injury Compensation', body: 'Factories, offices, and construction sites carry injury risks. We pursue workplace compensation for industrial injuries, negotiate with employer insurance, and ensure injured workers receive fair benefits.', icon: i('M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z') },
          { title: 'Slip & Fall Injury Claims', body: 'Property owners must maintain safe premises. We represent slip and fall victims, investigate premise liability, challenge negligence denials, and secure compensation for injury-causing hazards.', icon: i('M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25') },
          { title: 'Wrongful Death Claims', body: 'Fatal accidents devastate families. We pursue wrongful death claims, represent grieving families, negotiate settlements, and hold negligent parties accountable for fatal consequences.', icon: i('M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z') },
          { title: 'Hit & Run Accident Claims', body: 'Fleeing accident scenes is criminal. We investigate hit and run cases, work with police, access insurance recovery funds, and ensure hit and run victims obtain compensation despite driver\'s absence.', icon: i('M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z') },
          { title: 'Product Liability Injury Cases', body: 'Defective products injure consumers. We investigate product defects, identify manufacturing negligence, consult product experts, and pursue manufacturer liability for injuries caused by unsafe products.', icon: i('M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z') },
          { title: 'Dog Bite & Animal Attack Claims', body: 'Animal attacks cause serious injury. We represent dog bite and animal attack victims, investigate owner negligence, pursue owner liability, and secure compensation for injuries and trauma.', icon: i('M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z') },
        ]}
        benefitsSectionTitle="Why Choose Our Personal Injury Lawyers?"
        benefits={[
          { title: 'Expert Accident Investigation', body: "We don't rely on insurance company investigations. Our lawyers conduct an independent accident investigation, gather witness statements, obtain accident reports, and collect evidence supporting your claim." },
          { title: 'Medical Evidence Review', body: 'Understanding injury severity requires medical expertise. We work with doctors, review medical reports thoroughly, assess long-term disability potential, and calculate compensation reflecting true injury impact.' },
          { title: 'Insurance Company Negotiation', body: 'Insurance adjusters negotiate daily. We match their experience. We understand insurance valuation formulas, challenge low offers, and negotiate strategically for maximum compensation.' },
          { title: 'Maximum Compensation Strategy', body: 'We calculate damages comprehensively. Medical bills, lost wages, emotional distress, disability costs, and future care needs are included. We pursue compensation addressing every loss you\'ve suffered.' },
          { title: 'Proven Settlement Record', body: 'Our clients receive substantially more compensation than they would through insurance company settlements alone. Years of successful negotiation create documented success proving our effectiveness.' },
          { title: 'Contingency Fee Model', body: "You shouldn't pay legal fees while injured. We work on contingency, earning fees only when we recover compensation for you. You pay nothing upfront." },
        ]}
        stepsSectionTitle="Our Claim Handling Process"
        steps={[
          { num: '1', title: 'Free Consultation & Case Analysis', body: 'We meet with you, review accident details, evaluate claim viability, and explain your legal rights and compensation potential honestly.' },
          { num: '2', title: 'Investigation & Evidence Collection', body: 'We investigate comprehensively — gathering accident reports, witness statements, scene photographs, and physical evidence supporting negligence.' },
          { num: '3', title: 'Medical Documentation & Compensation Calculation', body: 'We obtain medical records, consult healthcare providers, assess injury severity, and calculate total damages including future care needs.' },
          { num: '4', title: 'Negotiation & Court Representation', body: 'We present evidence, challenge insurer valuations, and negotiate for maximum settlement. If insurance won\'t settle fairly, we file lawsuits and represent you through civil litigation.' },
        ]}
        faqs={[
          { q: 'Do I need a personal injury lawyer for an accident claim?', a: "Many accident victims accept inadequate insurance settlements. Personal injury lawyers negotiate substantially higher compensation. Saeed Law Firm's expertise typically results in settlements 2–3 times higher than unrepresented claims, making legal representation financially beneficial." },
          { q: 'How do personal injury lawyers calculate compensation?', a: "Lawyers calculate damages comprehensively, including medical bills, lost wages, disability costs, pain and suffering, and future treatment needs. Injury severity, treatment duration, and disability impact determine compensation amounts. Our lawyers ensure calculations reflect true injury costs." },
          { q: 'What is negligence in personal injury claims?', a: 'Negligence means someone failed to exercise reasonable care, causing your injury. Establishing negligence requires proving duty of care, breach of that duty, causation, and damages. Personal injury lawyers build negligence cases through evidence and expert testimony.' },
          { q: 'How long does a personal injury claim take to settle?', a: 'Settlement timelines vary. Simple cases with clear liability may settle within months. Complex cases involving severe injuries or liability disputes may take 1–2 years. Medical recovery completion often determines settlement timing.' },
          { q: "Can I still pursue a claim if the accident was partially my fault?", a: "Yes. Pakistan's comparative negligence rules allow claims even with partial fault. Your compensation is reduced proportionally to your fault percentage. Saeed Law Firm pursues claims even where liability is disputed or shared." },
          { q: "What happens if I can't afford medical treatment?", a: 'Many personal injury lawyers arrange medical treatment through lien agreements. Healthcare providers defer payment until compensation is recovered. This ensures injury treatment without upfront medical costs while your claim proceeds.' },
          { q: 'What is a settlement agreement in personal injury claims?', a: 'A settlement agreement is a written contract where the defendant compensates you in exchange for releasing all claims. Our lawyers ensure settlement agreements protect your interests, release only appropriate claims, and represent fair compensation value.' },
          { q: 'Can I sue if the insurance company denies my claim?', a: 'Yes. Insurance denials can be challenged legally. If an insurer wrongfully denies your claim, we file bad faith lawsuits and pursue damages beyond the initial claim. Saeed Law Firm holds insurers accountable for unfair denial decisions.' },
        ]}
        ctaHeadline="Book a Free Personal Injury Consultation"
        ctaBody="Contact Saeed Law Firm today. Let our experienced injury lawyers review your case, explain your rights, and fight for the compensation you truly deserve."
      />
    </>
  )
}
