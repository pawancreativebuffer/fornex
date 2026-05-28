import Header from '@/component/layout/Header';
import Footer from '@/component/layout/Footer';
import Banner from './sections/Banner';
import ProjectSnapshots from './sections/ProjectSnapshots';
import Undeniable from './sections/Undeniable';
import Results from './sections/Results';
import ResultsData from './sections/ResultsData';
import ReadyToBuilt from './sections/ReadyToBuilt';
import ProvenDevelopment from './sections/ProvenDevelopment';


export const metadata = {
    title: "Healthcare Digital Marketing Services | SEO, PPC & Patient Acquisition | ForNex Health",
    description:
        "ForNex Health delivers HIPAA-compliant digital marketing for healthcare providers. Medical SEO, Google Ads, patient acquisition, and reputation management. Helping US clinics and hospitals grow patient volumes. Get a free strategy consultation.",
    keywords: [
        "healthcare digital marketing",
        "medical SEO",
        "healthcare SEO services",
        "patient acquisition",
        "healthcare Google Ads",
        "medical practice marketing",
        "healthcare content marketing",
        "HIPAA compliant marketing"
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


            <Undeniable />
            <ResultsData />

            <ProvenDevelopment />

            <Results />

            <ProjectSnapshots />

            <ReadyToBuilt />

            <Footer />
        </>
    );
}
