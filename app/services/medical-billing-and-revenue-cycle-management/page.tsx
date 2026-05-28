import Header from '@/component/layout/Header';
import Footer from '@/component/layout/Footer';
import Banner from './sections/Banner';
import ProjectSnapshots from './sections/ProjectSnapshots';
import Undeniable from './sections/Undeniable';
import OnePlatform from './sections/OnePlatform';
import WhyInfo from './sections/WhyInfo';
import Results from './sections/Results';
import ReadyToBuilt from './sections/ReadyToBuilt';
import WeWork from './sections/WeWork';


export const metadata = {
    title: "Medical Billing & Revenue Cycle Management Services | Reduce Denials | ForNex Health",
    description:
        "ForNex Health delivers end-to-end medical billing and revenue cycle management services for US healthcare providers. AI-powered denial management, claim scrubbing, and RCM optimization. Reduce denials by 80%. Get a free RCM assessment.",
    keywords: [
        "medical billing services USA",
        "revenue cycle management",
        "RCM services, claim denial management",
        "medical billing company, healthcare billing outsourcing",
        "HIPAA compliant billing, AI medical billing"

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

            <WhyInfo />

            <Undeniable />
            <Results />

            <WeWork />

            <ProjectSnapshots />
            <OnePlatform />

            <ReadyToBuilt />


            <Footer />
        </>
    );
}
