import Header from '@/component/layout/Header';
import Footer from '@/component/layout/Footer';
import TopPoints from './sections/TopPoints';
import Banner from './sections/Banner';
import ProjectSnapshots from './sections/ProjectSnapshots';
import BeforeDev from './sections/BeforeDev';
import Undeniable from './sections/Undeniable';
import CoreProblem from './sections/CoreProblem';
import Fragmentation from './sections/Fragmentations';
import OnePlatform from './sections/OnePlatform';
import Ecosystem from './sections/Ecosystem';
import Collage from './sections/Collage';
import TechStack from './sections/TechStack';
import Results from './sections/Results';
import HomeClientTestimonials from '@/component/sections/HomeClientTestimonials';
import ThreePortal from './sections/ThreePortal';
import SideBySide from './sections/SideBySide';
import WhatNext from './sections/WhatNext';
import Tailored from './sections/Tailored';

export const metadata = {
    title: "Carevation - Healthcare SaaS Platform",
    description: "Carevation is a complete healthcare SaaS platform that helps healthcare providers to manage their operations more efficiently.",
    keywords: ["Carevation", "Fornex", "Fornex Health", "Fornex", "Carevation", "Fornex Health", "Fornex", "Carevation", "Fornex Health", "Fornex", "Carevation", "Fornex Health", "Fornex", "Carevation", "Fornex Health"],
};

export default async function CarevationPage() {
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
            <ProjectSnapshots />

            <BeforeDev />
            <Collage />
            <CoreProblem />

            <Undeniable />
            <Results />

            <OnePlatform />
            <ThreePortal />

            <Fragmentation />
            <Tailored />

            <TechStack />
            <SideBySide />


            <Ecosystem />
            <WhatNext />

            <HomeClientTestimonials />
            <Footer />
        </>
    );
}
