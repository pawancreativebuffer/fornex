import Header from '@/component/layout/Header';
import Footer from '@/component/layout/Footer';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default async function ManhattanPage() {
    return (
        <>
            <section className="relative overflow-hidden flex justify-between flex-col bg-[#1a2b3c]">
                {/* Background Decorative Element */}
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#60C6B1] rounded-full blur-[150px] opacity-70 pointer-events-none"></div>
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500 rounded-full blur-[150px] opacity-70 pointer-events-none"></div>

                <Header />

                <div className="w-full max-w-[1400px] mx-auto px-4 py-20 flex flex-col flex-wrap items-center justify-center gap-5 relative z-50">
                    <h1 className="text-shadow-lg/20 max-w-[1100px] font-[700] text-[50px] lg:text-[60px] text-[#fff] leading-[60px] lg:leading-[70px] mx-auto text-center">
                        ManhattanPage
                    </h1>
                    <p className="text-gray-400 max-w-[1100px] text-[16px] font-regular leading-relaxed text-center">
                        ManhattanPage
                    </p>
                    <div className="flex w-full justify-center">
                        <Link href='/contact' className="px-5 py-3 mx-auto rounded-full border border-[#60C6B1] text-[#fff] bg-[#60C6B1] hover:bg-[transparent] hover:text-[#60C6B1] cursor-pointer transition flex items-center gap-2 font-medium">
                            Get in Touch
                            <ChevronRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
