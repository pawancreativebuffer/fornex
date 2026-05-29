import Header from '@/component/layout/Header'
import Footer from '@/component/layout/Footer';
import ServicesBanner from './sections/ServicesBanner';
import WhoWeAre from './sections/WhoWeAre';

export const metadata = {
    title: "About Us | Fornex Health - Healthcare Technology Built Different",
    description: "Fornex Health is a SOC 2 Type II certified healthcare technology company with 15+ years of expertise. We build HIPAA-compliant EHR, billing, AI, and digital health platforms exclusively for healthcare. Meet the team behind 100+ successful deployments.",
    keywords: ["Fornex Healthcare", " SOC 2 Type II certified healthcare technology ", "Healthcare", "About Fornex", "Pawan Panwar", "Solutions", "EHR Integration", "Medical Billing", "Smart Healthcare", "Medical Software Development"],
};

export default function AboutPage() {
    return (
        <>
            <section className="relative overflow-hidden flex justify-between flex-col bg-[#1a2b3c]">
                {/* Background Decorative Element */}
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#60C6B1] rounded-full blur-[150px] opacity-70 pointer-events-none"></div>
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500 rounded-full blur-[150px] opacity-70 pointer-events-none"></div>

                <Header />
                <ServicesBanner />
            </section>

            <WhoWeAre />

            <Footer />
        </>
    )
}