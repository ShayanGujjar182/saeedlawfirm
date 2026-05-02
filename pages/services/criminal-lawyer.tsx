import Head from 'next/head'
import ServicePage from '../../components/shared/ServicePage'

const i = (d: string) => <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d={d} /></svg>

export default function CriminalLawyer() {
  return (
    <>
      <Head><title>Criminal Lawyer in Pakistan | Saeed Law Firm Lahore</title></Head>
      <ServicePage
        eyebrow="Criminal Defense Experts"
        headline="Criminal Lawyer in Pakistan — Criminal Defense & Legal Representation"
        intro="Criminal charges can change your life, and the decisions you make in the first hours are critical. One mistake — speaking without counsel, missing deadlines, or failing to challenge evidence — can affect your freedom for years. Saeed Law Firm has spent over 50 years defending Pakistanis facing serious charges. Our criminal lawyers understand trial procedures, prosecution tactics, and evidence strategy."
        stats={[
          { value: '2500+', label: 'Criminal Cases Defended', sub: 'Clients across Pakistan trust our experienced criminal defense team for powerful, strategic representation.' },
          { value: 'Immediate', label: 'Legal Protection', sub: 'Get fast legal support with urgent case review and early intervention that protects your rights from the first moment.' },
          { value: 'Fast', label: 'Case Preparation & Filing', sub: 'We prepare bail applications, review evidence, and file legal documents quickly to prevent delays.' },
          { value: 'Complete', label: 'Criminal Law Coverage', sub: 'From bail to trial, cybercrime to financial crime, appeals to complex offenses — full defense support.' },
        ]}
        servicesSectionTitle="Our Criminal Defense Legal Services"
        servicesSectionIntro="Saeed Law Firm provides comprehensive criminal defense covering Pakistan's major crime categories:"
        services={[
          { title: 'Bail Applications & FIR Matters', body: 'Arrest is traumatic. We file bail applications immediately, present bail arguments effectively, and work to secure your release pending trial. We also handle FIR registration issues and early-stage criminal matters.', icon: i('M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z') },
          { title: 'Criminal Trial Defense', body: 'The trial is where your case is decided. We prepare a comprehensive trial strategy, organize evidence presentation, cross-examine prosecution witnesses effectively, and argue persuasively for acquittal.', icon: i('M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z') },
          { title: 'Murder, Attempted Murder & Homicide Defense', body: 'Homicide charges are serious. We investigate crime scenes, challenge evidence collection procedures, analyze forensic evidence critically, and mount robust defenses against these gravest allegations.', icon: i('M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z') },
          { title: 'Narcotics & Drug-Related Cases', body: 'Drug charges carry severe penalties. We challenge search procedures, question the evidence chain-of-custody, investigate entrapment possibilities, and defend against narcotics allegations strategically.', icon: i('M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5') },
          { title: 'Cybercrime & FIA Cases', body: 'Technology crimes are complex. We understand cybercrime law, FIA investigation procedures, digital evidence issues, and cyber harassment allegations. We defend against internet-related charges effectively.', icon: i('M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25') },
          { title: 'Fraud, Forgery & Financial Crime', body: 'White-collar crime defense requires accounting knowledge and document analysis. We challenge fraud accusations, dispute forgery allegations, and defend financial crime cases through detailed evidence analysis.', icon: i('M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z') },
          { title: 'Money Laundering & Corruption Cases', body: 'Money laundering and corruption charges are sophisticated. We analyze financial transactions, challenge evidence interpretation, and mount defenses addressing the prosecution\'s complex allegations.', icon: i('M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6') },
          { title: 'Harassment, Assault & Physical Violence Cases', body: 'Assault and harassment allegations are common. We investigate incident circumstances, gather witness statements, challenge victim credibility when appropriate, and defend against violence allegations.', icon: i('M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z') },
          { title: 'White-Collar Crime Defense', body: 'Executives and professionals face complex financial allegations. We understand corporate structures, regulatory compliance, and business practice nuances. We defend white-collar crime cases with specialized expertise.', icon: i('M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z') },
          { title: 'High Court Criminal Appeals', body: 'Trial outcomes can be appealed. We file High Court appeals, present appellate arguments, and pursue case reversal or sentence reduction through appellate courts.', icon: i('M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3') },
        ]}
        benefitsSectionTitle="Why Choose Our Criminal Lawyers?"
        benefits={[
          { title: 'Experienced Trial Defense Attorneys', body: 'Our criminal lawyers have spent decades in criminal courts. We understand how prosecutors build cases, what judges expect, and how to mount effective defenses that create reasonable doubt.' },
          { title: 'Thorough Case Evaluation', body: 'Before developing a strategy, we conduct an independent case evaluation. We review police reports, analyze evidence, assess prosecution weaknesses, and give you an honest assessment of case strength and realistic outcomes.' },
          { title: 'Strategic Defense Building', body: 'Every case is unique. We develop customized defense strategies based on your specific circumstances, evidence details, and applicable law. One-size-fits-all approaches don\'t work in criminal defense.' },
          { title: 'Cross-Examination Expertise', body: 'Trials are won through cross-examination. Our lawyers skillfully question prosecution witnesses, undermine unreliable testimony, and create reasonable doubt about guilt.' },
          { title: 'Prosecution Analysis', body: 'We don\'t just react to prosecution cases. We analyze prosecution evidence systematically, identify investigative gaps, challenge procedure violations, and expose weaknesses prosecutors hope you won\'t notice.' },
          { title: 'Reputation in Criminal Courts', body: 'Years of consistent courtroom presence builds respect from judges and prosecutors. This reputation translates into better plea negotiations and fairer judicial treatment.' },
        ]}
        stepsSectionTitle="Our Criminal Defense Process"
        steps={[
          { num: '1', title: 'Case Intake & Assessment', body: 'We review charges, analyze police reports, evaluate evidence, and assess case viability. We explain your legal position and realistic outcomes honestly.' },
          { num: '2', title: 'Investigation & Evidence Review', body: 'We conduct an independent investigation, gather evidence supporting your defense, challenge the prosecution\'s evidence, and identify procedural violations.' },
          { num: '3', title: 'Bail Strategy & Application', body: 'We file compelling bail applications, present oral arguments effectively, and work toward bail approval for your release.' },
          { num: '4', title: 'Trial Preparation & Representation', body: 'We prepare a comprehensive trial strategy, organize defense evidence, prepare witness testimony, and appear in criminal courts to argue for acquittal.' },
        ]}
        faqs={[
          { q: 'What should I do immediately after arrest?', a: 'You should remain silent and request a lawyer immediately. Anything you say can be used against you, so do not answer police questions without legal representation. Saeed Law Firm provides urgent defense support to protect your rights from the first moment of arrest.' },
          { q: 'How can a criminal lawyer help reduce my charges?', a: 'A criminal lawyer can negotiate with prosecutors, challenge improper evidence, and identify procedural errors that may reduce or dismiss charges. Saeed Law Firm regularly analyzes prosecution files to find weaknesses that can improve your case outcome.' },
          { q: 'What is bail, and how does a lawyer help secure it?', a: 'Bail is a temporary release while your case is pending. A lawyer prepares and files the bail application, argues your eligibility before the judge, and demonstrates factors such as community ties and low flight risk. Our firm advocates strongly for securing timely bail for clients.' },
          { q: 'Can evidence from an illegal search be used against me?', a: 'Usually no. Evidence obtained through unconstitutional or unlawful searches can be excluded from court. Saeed Law Firm challenges such evidence through suppression motions and constitutional arguments.' },
          { q: 'What happens during cross-examination in a criminal trial?', a: 'Cross-examination allows the defense to question prosecution witnesses to test their credibility and expose inconsistencies. Our lawyers use cross-examination to create reasonable doubt and weaken the prosecution\'s version of events.' },
          { q: 'How long does a criminal case typically take?', a: 'Simple criminal cases may conclude within a few months, while complex matters can take 1–3 years. Timeline depends on evidence volume, legal complexity, court workload, and appeals.' },
          { q: 'Can criminal convictions be appealed?', a: 'Yes. Convictions can be appealed to the High Court on legal or factual grounds. Saeed Law Firm prepares appellate briefs, presents arguments, and seeks sentence reduction or reversal.' },
          { q: 'What is the difference between bail and parole?', a: 'Bail is release before trial, while parole is early release after conviction. Both require legal applications and court review. Our lawyers handle both bail petitions and parole applications for clients.' },
        ]}
        ctaHeadline="Book a Free Criminal Lawyer Consultation"
        ctaBody="Criminal charges demand immediate, expert legal response. Contact Saeed Law Firm today. Discuss your charges, understand your legal position, and begin building your defense strategy with experienced criminal defense lawyers."
      />
    </>
  )
}
