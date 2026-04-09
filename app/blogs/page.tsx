import Header from '@/component/layout/Header';
import Footer from '@/component/layout/Footer';

export default function BlogPage() {
    return (
        <>
            <section className="relative overflow-hidden flex justify-between flex-col bg-[#1a2b3c]">
                {/* Background Decorative Element */}
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#60C6B1] rounded-full blur-[150px] opacity-70 pointer-events-none"></div>
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500 rounded-full blur-[150px] opacity-70 pointer-events-none"></div>

                <Header />

                <div className="w-full max-w-[1400px] mx-auto px-4 py-15 flex flex-wrap items-center justify-center gap-8 relative z-50">
                    <h1 className="w-full text-shadow-lg/20 font-[700] text-[50px] lg:text-[60px] text-[#fff] leading-[60px] lg:leading-[70px] mx-auto text-center">
                        ForNex Health <span className="text-[#60C6B1]">Blog & Insights</span>
                    </h1>
                    <p className="text-gray-400 max-w-[1100px] text-[16px] font-regular leading-relaxed text-center">
                        Stay updated with the latest trends, insights, and news in the world of healthcare and technology. Our blog features expert articles, industry updates, and helpful resources to keep you informed and empowered.
                    </p>
                </div>
            </section>

            <Footer />
        </>
    );
}
