import Header from '@/component/layout/Header'
import HomeBanner from '@/component/sections/HomeBanner';

export default function Home() {
  return (
    <>
      <section className="relative h-[100vh] overflow-hidden flex justify-between flex-col pb-20">
        <iframe
          className="absolute h-full scale-125"
          src="https://app.spline.design/file/2134e00c-4e07-4bad-984d-11f6387857f8?view=preview"
          width="100%"
          height="100%">
        </iframe>

        <Header />
        <HomeBanner />
      </section>

      <div className="h-[50px]">wefwf</div>
    </>
  );
}
