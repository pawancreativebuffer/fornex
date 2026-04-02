import Header from '@/component/layout/Header'
import HomeAutomation from '@/component/sections/HomeAutomation';
import HomeBanner from '@/component/sections/HomeBanner';
import HomeCertifications from '@/component/sections/HomeCertifications';
import HomeMajorServices from '@/component/sections/HomeMajorServices';
import HomeServices from '@/component/sections/HomeServices';
import HomeSmartHealthcare from '@/component/sections/HomeSmartHealthcare';
import HomeSystemWeWork from '@/component/sections/HomeSystemWeWork';
import HomeAllService from '@/component/sections/HomeAllService';
import HomePlatform from '@/component/sections/HomePlatform';
import HomeBilingAndSoftware from '@/component/sections/HomeBilingAndSoftware';
import HomeClients from '@/component/sections/HomeClients';
import HomeClientTestimonials from '@/component/sections/HomeClientTestimonials';
import HomeFaq from '@/component/sections/HomeFaq';
import HomeBlog from '@/component/sections/HomeBlog';
import Footer from '@/component/layout/Footer';
import HomeBannerImages from '@/component/sections/HomeBannerImages';

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden flex justify-between flex-col bg-[#1a2b3c] pb-40 md:pb-80">
        {/* Background Decorative Element */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#60C6B1] rounded-full blur-[150px] opacity-50 pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500 rounded-full blur-[150px] opacity-50 pointer-events-none"></div>


        <Header />
        <HomeBanner />
      </section>

      <HomeBannerImages />
      <HomeServices />
      <HomeSmartHealthcare />
      <HomeMajorServices />
      <HomeSystemWeWork />
      <HomeClients />
      <HomeAutomation />
      <HomeCertifications />
      <HomeAllService />
      <HomePlatform />
      <HomeBilingAndSoftware />
      <HomeClientTestimonials />
      <HomeFaq />
      <HomeBlog />
      <Footer />
    </>
  );
}

