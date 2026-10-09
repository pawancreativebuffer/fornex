import Header from '@/component/layout/Header';
import Footer from '@/component/layout/Footer';
import TopPoints from './sections/TopPoints';
import Banner from './sections/Banner';
import Summary from './sections/Summary';
import ClientRequirement from './sections/ClientRequirement';
import WhatMadeThisDifficult from './sections/WhatMadeThisDifficult';
import OurApproach from './sections/OurApproach';
import Engineering from './sections/Engineering';
import SecurityAndIsolation from './sections/SecurityAndIsolation';
import TeamAndExpertise from './sections/TeamAndExpertise';
import Results from './sections/Results';
import WhyThisMatters from './sections/WhyThisMatters';
import HealthcareDataServices from './sections/HealthcareDataServices';
import LetsTalk from './sections/LetsTalk';
import Faqs from './sections/Faqs';
import Appendix from './sections/Appendix';


export const metadata = {
    title: "HerMD - De-identifying 25,000 Patient Records | Fornex Health",
    description: "HIPAA Safe Harbor de-identification, clinical text redaction and data restructuring across 350GB of healthcare data for HerMD.",
    keywords: ["HerMD", "Patient Data De-identification", "HIPAA Safe Harbor", "Healthcare Analytics", "Fornex Health"],
};

export default async function HerMDPage() {
    return (
        <>
            <section className="relative overflow-hidden flex justify-between flex-col bg-[#1a2b3c]">
                {/* Background Decorative Element */}
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#60C6B1] rounded-full blur-[150px] opacity-70 pointer-events-none"></div>
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500 rounded-full blur-[150px] opacity-70 pointer-events-none"></div>

                <Header />
                <Banner />
            </section>

            <TopPoints />
            <Summary />
            <ClientRequirement />
            <WhatMadeThisDifficult />
            <OurApproach />
            <Engineering />
            <SecurityAndIsolation />
            <TeamAndExpertise />
            <Results />
            <WhyThisMatters />
            <HealthcareDataServices />
            <LetsTalk />
            <Faqs />
            <Appendix />

            <Footer />
        </>
    );
}
