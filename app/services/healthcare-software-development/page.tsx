import Header from '@/component/layout/Header';
import Footer from '@/component/layout/Footer';
import TopPoints from './sections/TopPoints';
import Banner from './sections/Banner';
import ProjectSnapshots from './sections/ProjectSnapshots';
import Undeniable from './sections/Undeniable';
import OnePlatform from './sections/OnePlatform';
import WhyInfo from './sections/WhyInfo';
import Results from './sections/Results';
import ResultsData from './sections/ResultsData';
import KeyLearnings from './sections/KeyLearning';
import FaqSection from './sections/Faq';
import ReadyToBuilt from './sections/ReadyToBuilt';


export const metadata = {
    title: "Custom Healthcare Software Development Company | HIPAA-Compliant Solutions | ForNex Health",
    description:
        "ForNex Health delivers custom healthcare software development services with 10+ years of expertise. HIPAA, SOC 2, and FHIR R4 compliant platforms for hospitals, clinics, and healthtech startups across the US. Get a free consultation.",
    keywords: [
        "healthcare software development",
        "custom healthcare software",
        "HIPAA compliant software development",
        "EHR software development",
        "healthcare app development company USA",
        "clinical software solutions",
        "health tech development"
    ],
};

export default async function MriSafeProgrammingPage() {
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
            <WhyInfo />
            <Undeniable />
            <Results />
            <KeyLearnings />
            <OnePlatform />
            <ResultsData />
            <ProjectSnapshots />
            <FaqSection />
            <ReadyToBuilt />

            <Footer />
        </>
    );
}
