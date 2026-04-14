import Header from '@/component/layout/Header';
import Footer from '@/component/layout/Footer';
import TopPoints from './sections/TopPoints';
import Banner from './sections/Banner';
import ProjectSnapshots from './sections/ProjectSnapshots';
import BeforeDev from './sections/BeforeDev';
import Undeniable from './sections/Undeniable';

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
            <ProjectSnapshots />
            <BeforeDev />
            <Undeniable />
            <Footer />
        </>
    );
}
