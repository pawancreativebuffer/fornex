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

export default function Home() {
  return (
    <>
      <section className="relative lg:h-[100vh] overflow-hidden flex justify-between flex-col pb-15 lg:pb-20 bg-[#000]">
        <iframe
          className="absolute h-full scale-125 opacity-70 lg:opacity-100"
          src="https://app.spline.design/file/cb764323-8ee7-44af-8cd6-671fbc8f6c39?view=preview"
          width="100%"
          height="100%">
        </iframe>

        <Header />
        <HomeBanner />
      </section>

      <HomeServices />
      <HomeSmartHealthcare />
      <HomeMajorServices />
      <HomeSystemWeWork />
      <HomeAutomation />
      <HomeCertifications />
      <HomeAllService />
      <HomePlatform />
      <HomeBilingAndSoftware />
    </>
  );
}

