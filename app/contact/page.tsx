import Header from '@/component/layout/Header'
import Footer from '@/component/layout/Footer';
import ContactBanner from '@/component/sections/ContactBanner';
import ContactDetails from '@/component/sections/ContactDetails';

export default function ServicePage() {
    return (
        <>
            <section className="relative overflow-hidden flex justify-between flex-col bg-[#1a2b3c]">
                {/* Background Decorative Element */}
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#60C6B1] rounded-full blur-[150px] opacity-70 pointer-events-none"></div>
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500 rounded-full blur-[150px] opacity-70 pointer-events-none"></div>

                <Header />
                <ContactBanner />
            </section>

            <ContactDetails />
            <Footer />
        </>
    )
}