import Header from '@/component/layout/Header'
import HomeAutomation from '@/component/sections/HomeAutomation';
import HomeBanner from '@/component/sections/HomeBanner';
import HomeCertifications from '@/component/sections/HomeCertifications';
import HomeMajorServices from '@/component/sections/HomeMajorServices';
import HomeServices from '@/component/sections/HomeServices';
import HomeSmartHealthcare from '@/component/sections/HomeSmartHealthcare';
import HomeSystemWeWork from '@/component/sections/HomeSystemWeWork';

export default function Home() {
  return (
    <>
      <section className="relative lg:h-[100vh] overflow-hidden flex justify-between flex-col pb-15 lg:pb-20 bg-[#000]">
        {/* <iframe
          className="absolute h-full scale-125 opacity-70 lg:opacity-100"
          src="https://app.spline.design/file/2134e00c-4e07-4bad-984d-11f6387857f8?view=preview"
          width="100%"
          height="100%">
        </iframe> */}
        <video
          src="/images/banner2.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover opacity-70 lg:opacity-100"
        >
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/100 via-transparent to-black"></div>

        <Header />
        <HomeBanner />
      </section>

      <HomeServices />
      <HomeSmartHealthcare />
      <HomeMajorServices />
      <HomeSystemWeWork />
      <HomeAutomation />
      <HomeCertifications />
    </>
  );
}

