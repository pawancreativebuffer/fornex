import { Facebook, Linkedin, Instagram, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function ContactDetails() {
    return (
        <section className="w-full py-10 lg:py-15 relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                    {/* Left Side: Content and Info */}
                    <div className="w-full lg:w-1/2 flex flex-col">
                        <div className="flex flex-col relative z-30 animate-slide-up mb-10">
                            <div className="flex items-center gap-2 text-[#90c7e5] font-medium text-sm lg:text-base mb-4">
                                <div className="w-2.5 h-2.5 bg-[#90c7e5] rounded-full shadow-[0_0_10px_rgba(144,199,229,0.5)]" />
                                <span>Get In Touch</span>
                            </div>
                            <h2 className="text-4xl lg:text-6xl font-bold leading-[1.1] text-[#1a2b3c] mb-4 lg:mb-8">
                                We are always ready to help you and <span className="bg-gradient-to-r from-[#60c6b1] to-[#90c7e5] bg-clip-text text-transparent">answer your questions </span>
                            </h2>
                            <p className="text-gray-500 text-base font-regular leading-relaxed">
                                Pacific hake false trevally queen parrotfish black prickleback mosshead warbonnet sweeper! Greenling sleeper.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 mt-4">
                            {/* Call Center */}
                            <div className="animate-slide-up" style={{ animationDelay: '100ms' }}>
                                <h4 className="text-[22px] font-bold text-[#1a2b3c] mb-4">Call Center</h4>
                                <div className="space-y-1">
                                    <p className="text-[#60C6B1] text-base">
                                        +91-8528835744
                                    </p>
                                    <p className="text-gray-500 text-base">
                                        +91-8528835744
                                    </p>
                                </div>
                            </div>

                            {/* Our Location */}
                            <div className="animate-slide-up" style={{ animationDelay: '200ms' }}>
                                <h4 className="text-[22px] font-bold text-[#1a2b3c] mb-4">Our Location</h4>
                                <div className="space-y-1">
                                    <p className="text-gray-500 text-base">
                                        USA, New York - 1060
                                    </p>
                                    <p className="text-gray-500 text-base">
                                        Str. First Avenue 1
                                    </p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="animate-slide-up" style={{ animationDelay: '300ms' }}>
                                <h4 className="text-[22px] font-bold text-[#1a2b3c] mb-4">Email</h4>
                                <div className="space-y-1">
                                    <p className="text-gray-500 text-base hover:text-[#60C6B1] transition-colors cursor-pointer">
                                        info@fornexhealth.com
                                    </p>
                                </div>
                            </div>

                            {/* Social Network */}
                            <div className="animate-slide-up" style={{ animationDelay: '400ms' }}>
                                <h4 className="text-[22px] font-bold text-[#1a2b3c] mb-4">Social network</h4>
                                <div className="flex items-center gap-2 order-3 md:order-1">
                                    <Link href="#" className="w-9 h-9 flex items-center justify-center bg-gray-200/60 hover:bg-[#64d2b1] hover:text-[#fff] rounded-full transition-all text-gray-400">
                                        <Facebook size={18} />
                                    </Link>
                                    <Link href="#" className="w-9 h-9 flex items-center justify-center bg-gray-200/60 hover:bg-[#64d2b1] hover:text-[#fff] rounded-full transition-all text-gray-400">
                                        <span className="font-bold text-[18px]">X</span>
                                    </Link>
                                    <Link href="#" className="w-9 h-9 flex items-center justify-center bg-gray-200/60 hover:bg-[#64d2b1] hover:text-[#fff] rounded-full transition-all text-gray-400">
                                        <Instagram size={18} />
                                    </Link>
                                    <Link href="#" className="w-9 h-9 flex items-center justify-center bg-gray-200/60 hover:bg-[#64d2b1] hover:text-[#fff] rounded-full transition-all text-gray-400">
                                        <Linkedin size={18} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Contact Form */}
                    <div className="w-full lg:w-1/2 animate-slide-right">
                        <div className="bg-[#eff8f6] border border-[#60C6B1]/20 rounded-[40px] p-8 lg:p-12 shadow-sm">
                            <h3 className="text-3xl lg:text-4xl font-bold text-[#1a2b3c] mb-4">Get in Touch</h3>
                            <p className="text-gray-500 text-base font-regular leading-relaxed mb-10">
                                Define your goals and identify areas where AI can add value to your business
                            </p>

                            <form className="space-y-6" method="post">
                                <div className="relative group">
                                    <input
                                        type="text"
                                        placeholder="Full name"
                                        className="w-full bg-transparent border-b border-gray-300 py-3 focus:border-[#60C6B1] focus:outline-none transition-all placeholder:text-gray-400 text-[#1a2b3c]"
                                    />
                                </div>
                                <div className="relative group">
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="w-full bg-transparent border-b border-gray-300 py-3 focus:border-[#60C6B1] focus:outline-none transition-all placeholder:text-gray-400 text-[#1a2b3c]"
                                    />
                                </div>
                                <div className="relative group">
                                    <input
                                        type="text"
                                        placeholder="Subject"
                                        className="w-full bg-transparent border-b border-gray-300 py-3 focus:border-[#60C6B1] focus:outline-none transition-all placeholder:text-gray-400 text-[#1a2b3c]"
                                    />
                                </div>
                                <div className="relative group">
                                    <textarea
                                        placeholder="Message"
                                        rows={4}
                                        className="w-full bg-transparent border-b border-gray-300 py-3 focus:border-[#60C6B1] focus:outline-none transition-all placeholder:text-gray-400 text-[#1a2b3c] resize-none"
                                    ></textarea>
                                </div>

                                <div className="pt-4">
                                    <button className="px-5 py-3 rounded-full border border-[#60c6b1] text-[#fff] bg-[#60c6b1] hover:bg-transparent hover:text-[#60c6b1] cursor-pointer transition flex items-center gap-2 font-medium">
                                        Get Free Consultation
                                        <ChevronRight size={20} />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Map Section */}
                <div className="mt-15 lg:mt-15 w-full animate-slide-up" style={{ animationDelay: '500ms' }}>
                    <div className="w-full h-[400px] lg:h-[500px] rounded-[30px] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 shadow-xl border border-gray-100">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19868.2163484831!2d-0.12999554999999998!3d51.503324000000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2slastminute.com%20London%20Eye!5e0!3m2!1sen!2suk!4v1712563200000!5m2!1sen!2suk"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>

            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#60C6B1]/5 rounded-full blur-[120px] -mr-64 -mt-64" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#90c7e5]/5 rounded-full blur-[120px] -ml-64 -mb-64" />
        </section>
    );
}
