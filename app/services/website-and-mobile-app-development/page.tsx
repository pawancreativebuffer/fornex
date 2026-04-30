import Header from '@/component/layout/Header';
import Footer from '@/component/layout/Footer';
import Banner from './sections/Banner';
import ProjectSnapshots from './sections/ProjectSnapshots';
import Undeniable from './sections/Undeniable';
import OnePlatform from './sections/OnePlatform';
import Results from './sections/Results';
import ReadyToBuilt from './sections/ReadyToBuilt';
import ProvenDevelopment from './sections/ProvenDevelopment';


export const metadata = {
    title: "Healthcare Website & Mobile App Development | HIPAA-Compliant | ForNex Health",
    description:
        "ForNex Health builds HIPAA-compliant healthcare websites and mobile apps for clinics, hospitals, and healthtech companies. Patient portals, telehealth apps, iOS and Android. Serving US healthcare organizations since 2014.",
    keywords: [
        "healthcare mobile app development",
        "HIPAA compliant app development",
        "healthcare website development",
        "patient portal development",
        "telehealth app development",
        "medical app development company USA"

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
            <ProvenDevelopment />
            <Results />
            <OnePlatform />

            <ProjectSnapshots />
            <ReadyToBuilt />

            <Footer />
        </>
    );
}
