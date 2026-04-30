import Header from '@/component/layout/Header';
import Footer from '@/component/layout/Footer';
import TopPoints from './sections/TopPoints';
import Banner from './sections/Banner';
import Undeniable from './sections/Undeniable';
import OnePlatform from './sections/OnePlatform';
import WhyInfo from './sections/WhyInfo';
import Results from './sections/Results';
import KeyLearnings from './sections/KeyLearning';
import ReadyToBuilt from './sections/ReadyToBuilt';


export const metadata = {
    title: "EHR & EMR Integration Services | FHIR R4 | HL7 | Epic, Cerner, Athenahealth | ForNex Health",
    description:
        "ForNex Health provides expert EHR and EMR integration services using FHIR R4, HL7, and SMART on FHIR. Connect Epic, Cerner, Athenahealth, and 20+ systems. HIPAA-compliant. Trusted by 100+ US healthcare organizations.",
    keywords: [
        "EHR integration services",
        "EMR integration",
        "FHIR R4 integration",
        "HL7 integration",
        "Epic integration",
        "Cerner integration",
        "Athenahealth integration",
        "healthcare interoperability",
        "SMART on FHIR"

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
            <OnePlatform />
            <Results />
            <KeyLearnings />
            <ReadyToBuilt />
            <Footer />
        </>
    );
}
