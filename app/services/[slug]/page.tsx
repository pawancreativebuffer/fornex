import { services } from '../allServices';
import Header from '@/component/layout/Header';
import Footer from '@/component/layout/Footer';
import {
  CheckCircle2,
  Star,
  Zap,
  ShieldCheck,
  Users,
  BarChart3,
  Lightbulb,
  Layers,
  TrendingUp,
  Stethoscope,
  Smartphone,
  Receipt,
  ChevronRight,
  Check
} from 'lucide-react';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: 'Service Not Found' };

  return {
    title: `${service.hero.title} | Fornex Healthcare`,
    description: service.hero.subtitle,
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Map slugs to main icons
  const iconMap: Record<string, any> = {
    "healthcare-software-development": Stethoscope,
    "ehr-emr-integration": Layers,
    "website-mobile-app-development": Smartphone,
    "medical-billing-rcm": Receipt,
    "healthcare-digital-marketing": TrendingUp,
  };

  const offeringIcons = [Layers, Zap, ShieldCheck, Users, BarChart3, Lightbulb];

  return (
    <>
      <section className="relative overflow-hidden flex justify-between flex-col bg-[#1a2b3c]">
        {/* Background Decorative Element */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#60C6B1] rounded-full blur-[150px] opacity-70 pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500 rounded-full blur-[150px] opacity-70 pointer-events-none"></div>

        <Header />

        <div className="w-full max-w-[1400px] mx-auto px-4 py-20 flex flex-wrap items-center justify-center gap-5 relative z-50">
          <h1 className="text-shadow-lg/20 max-w-[1100px] font-[700] text-[50px] lg:text-[60px] text-[#fff] leading-[60px] lg:leading-[70px] mx-auto text-center">
            {service.hero.title}
          </h1>
          <p className="text-gray-400 max-w-[1100px] text-[16px] font-regular leading-relaxed text-center">
            {service.hero.subtitle}
          </p>
          <div className="flex w-full justify-center">
            <Link href='/contact' className="px-5 py-3 mx-auto mt-5 rounded-full border border-[#60C6B1] text-[#fff] bg-[#60C6B1] hover:bg-[transparent] hover:text-[#60C6B1] cursor-pointer transition flex items-center gap-2 font-medium">
              {service.cta.action}
              <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {service.introduction && (
        <section className="py-10 lg:py-15 relative overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
              <div className="animate-slide-left">
                <p className="text-gray-500 text-[16px] font-regular leading-relaxed">
                  {service.introduction}
                </p>
                {service.approach && (
                  <div className="mt-10 p-6 border-l-4 border-[#60C6B1] bg-gray-50 rounded-r-3xl">
                    <p className="text-[#1a2b3c] text-[16px] italic font-regular">
                      {service.approach}
                    </p>
                  </div>
                )}
              </div>

              <div className="grid gap-2 animate-slide-right">
                {service.challenges && service.challenges.map((challenge, idx) => (
                  <div key={idx} className="flex items-center gap-6 p-2 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-all">
                    <div className="w-7 h-7 rounded-xl text-[#60C6B1] flex items-center justify-center shrink-0">
                      <Check size={24} />
                    </div>
                    <span className="text-[#1a2b3c] text-[18px] font-semibold">{challenge}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {service.offerings && (
        <section className="py-10 lg:py-15 bg-[#f7fbfe]">
          <div className="max-w-[1400px] mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
              {service.offerings.map((offering, idx) => {
                const Icon = offeringIcons[idx % offeringIcons.length];
                return (
                  <div key={idx} className="bg-white p-6 rounded-[1rem] border border-gray-100 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-500 group">
                    <div className="w-16 h-16 rounded-2xl bg-[#f0fdfa] text-[#60C6B1] flex items-center justify-center mb-6 group-hover:bg-[#60C6B1] group-hover:text-white transition-all shadow-sm">
                      <Icon size={32} />
                    </div>
                    <h3 className="text-[22px] lg:text-[24px] font-bold text-[#1a2b3c] mb-3">{offering.title}</h3>
                    <p className="text-[#64748B] text-base leading-relaxed">{offering.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {(service.benefits || service.audience) && (
        <section className="py-10 lg:py-15">
          <div className="max-w-[1400px] mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-2">
                {service.benefits && service.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-5 p-2 bg-gray-50 rounded-[2rem] border border-gray-100 hover:bg-white hover:border-[#60C6B1] transition-all group">
                    <div className="w-10 h-10 rounded-full bg-white text-[#60C6B1] flex items-center justify-center shrink-0 shadow-sm group-hover:bg-[#60C6B1] group-hover:text-white transition-all">
                      <CheckCircle2 size={24} />
                    </div>
                    <span className="text-[18px] font-semibold text-[#1a2b3c]">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="bg-[#1a2b3c] p-5 lg:p-8 rounded-[2rem] text-white relative overflow-hidden">
                {/* Background Decorative Element */}
                <div className="absolute -top-24 -right-24 w-70 h-70 bg-[#60C6B1] rounded-full blur-[150px] opacity-70 pointer-events-none"></div>
                <div className="absolute -bottom-24 -left-24 w-70 h-70 bg-blue-500 rounded-full blur-[150px] opacity-70 pointer-events-none"></div>

                <div className="grid gap-2 z-[10] relative">
                  {service.audience && service.audience.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4 p-2 bg-white/5 border border-white/10 rounded-xl hover:bg-[#60C6B1] hover:text-[#1a2b3c] transition-all cursor-default">
                      <Users size={24} />
                      <span className="text-[18px] font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {service.process && (
        <section className="py-10 lg:py-15 bg-gradient-to-r from-[#60c6b1] to-[#90c7e5] text-white">
          <div className="max-w-[1400px] mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
              {service.process.map((step, idx) => (
                <div key={idx} className="p-2 rounded-[1.5rem] bg-white/10 backdrop-blur-md border border-white/20 hover:border-[#fff] transition-all group">
                  <div className="text-6xl font-black text-white/40 mb-3 group-hover:text-[#fff] transition-all text-center">0{idx + 1}</div>
                  <h3 className="text-[22px] font-semibold text-center">{step}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {service.whyChooseUs && (
        <section className="py-10 lg:py-15">
          <div className="max-w-[1400px] mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-2">
                {service.whyChooseUs.map((reason, idx) => (
                  <div key={idx} className="flex items-center gap-5 group">
                    <div className="w-10 h-10 rounded-xl bg-teal-50 text-[#60C6B1] flex items-center justify-center shrink-0 group-hover:bg-[#60C6B1] group-hover:text-white transition-all shadow-sm">
                      <Star size={20} fill="currentColor" />
                    </div>
                    <span className="text-[18px] font-semibold text-[#1a2b3c]">{reason}</span>
                  </div>
                ))}
              </div>
              <div className="bg-[#eff8f6] border border-[#60C6B1]/20 rounded-[30px] p-8 shadow-sm">
                {service.cta && (
                  <div className="text-center">
                    <h2 className="text-[24px] font-bold leading-tight m-auto max-w-[500px]">
                      {service.cta.text}
                    </h2>

                    <div className='flex justify-center'>
                      <Link href='/contact' className="px-5 py-3 mx-auto mt-5 rounded-full border border-[#60C6B1] text-[#fff] bg-[#60C6B1] hover:bg-[transparent] hover:text-[#60C6B1] cursor-pointer transition flex items-center gap-2 font-medium">
                        {service.cta.action}
                        <ChevronRight size={20} />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </>
  );
}
