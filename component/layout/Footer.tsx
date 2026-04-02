"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, MapPin, Phone, Mail, ArrowUp, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const footerLinks = {
        company: [
            { name: "About Us", href: "#" },
            { name: "Our Team", href: "#" },
            { name: "Careers", href: "#" },
            { name: "Press", href: "#" },
            { name: "Contact", href: "#" },
        ],
        services: [
            { name: "Healthcare Software Development", href: "#" },
            { name: "Medical Billing & RCM", href: "#" },
            { name: "EHR Integration", href: "#" },
            { name: "Health Tech Startup Services", href: "#" },
            { name: "Digital Marketing", href: "#" },
            { name: "Patient Portal Development", href: "#" },
        ],
    };

    return (
        <footer className="bg-[#1a1d21] text-gray-400 pt-10 lg:pt-15">
            <div className="max-w-[1400px] mx-auto px-4">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
                    {/* Logo Column */}
                    <div className="lg:col-span-1">
                        <Image
                            src="/images/f-logo.svg"
                            alt="Fornex Health Logo"
                            width={100}
                            height={60}
                            className="mb-8"
                        />
                    </div>

                    {/* Company Column */}
                    <div className="lg:col-span-1">
                        <h4 className="text-white font-[600] text-[18px] mb-8 tracking-wider uppercase">Company</h4>
                        <ul className="flex flex-col gap-y-2">
                            {footerLinks.company.map((link) => (
                                <li key={link.name} className="mb-0">
                                    <Link href={link.href} className="flex items-center gap-2 hover:text-[#64d2b1] transition-colors group">
                                        <ChevronRight size={14} className="text-[#64d2b1]" />
                                        <span className="text-[14px] hover:translate-x-1 transition-transform">
                                            {link.name}
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services Column */}
                    <div className="lg:col-span-1">
                        <h4 className="text-white font-[600] text-[18px] mb-8 tracking-wider uppercase">Services</h4>
                        <ul className="flex flex-col gap-y-2">
                            {footerLinks.services.map((link) => (
                                <li key={link.name} className="mb-0">
                                    <Link href={link.href} className="flex items-center gap-2 hover:text-[#64d2b1] transition-colors group">
                                        <ChevronRight size={14} className="text-[#64d2b1]" />
                                        <span className="text-[14px] hover:translate-x-1 transition-transform">
                                            {link.name}
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter Column */}
                    <div className="lg:col-span-1">
                        <div className="bg-[#24272b] p-6 lg:p-8 rounded-2xl border border-gray-800 shadow-xl">
                            <h4 className="text-white font-bold text-[18px] mb-4 tracking-wider uppercase">Newsletter</h4>
                            <p className="text-[14px] text-gray-400 mb-6 leading-relaxed">
                                Sign up for our latest news & articles. We won't give you spam mails.
                            </p>
                            <form className="space-y-4">
                                <input
                                    type="email"
                                    placeholder="Email Address *"
                                    className="w-full bg-[#1a1d21] border border-gray-700 rounded-full px-4 py-3 text-sm focus:outline-none focus:border-[#64d2b1] transition-colors text-white placeholder:text-gray-600"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="w-full bg-[#64d2b1] text-[#1a1d21] font-[500] py-3 rounded-full hover:bg-[#52b396] transition-colors cursor-pointer text-sm"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Middle Section: Get In Touch */}
                <div className="border-t border-gray-800/80 py-6 flex flex-col items-start gap-2">
                    <p className="text-gray-500 font-[600] uppercase text-[16px]">Get In Touch</p>

                    <div className="w-full flex flex-col md:flex-row justify-between items-center gap-10">
                        <div className="flex flex-wrap items-center gap-x-10 gap-y-6">
                            <div className="flex items-center gap-3">
                                <MapPin size={18} className="text-[#64d2b1]" />
                                <span className="text-[14px]">123 Healthcare Blvd, Suite 500, San Francisco, CA 9410</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone size={18} className="text-[#64d2b1]" />
                                <span className="text-[14px]">+1 (555) 123-4567</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail size={18} className="text-[#64d2b1]" />
                                <span className="text-[14px]">info@fornexhealth.com</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 group cursor-pointer" onClick={scrollToTop}>
                            <span className="text-white font-semibold text-[16px] group-hover:text-[#64d2b1] transition-colors">Back to Top</span>
                            <div className="bg-[#64d2b1] p-2.5 rounded-lg group-hover:scale-110 transition-transform">
                                <ArrowUp size={20} className="text-[#1a1d21]" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-800/80 py-5 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4 text-[13px]">
                    {/* Social Media Icons */}
                    <div className="flex items-center gap-2 order-3 md:order-1">
                        <Link href="#" className="w-9 h-9 flex items-center justify-center bg-gray-800/60 hover:bg-[#64d2b1] hover:text-[#1a1d21] rounded-full transition-all text-gray-400">
                            <Facebook size={18} />
                        </Link>
                        <Link href="#" className="w-9 h-9 flex items-center justify-center bg-gray-800/60 hover:bg-[#64d2b1] hover:text-[#1a1d21] rounded-full transition-all text-gray-400">
                            <span className="font-bold text-[18px]">X</span>
                        </Link>
                        <Link href="#" className="w-9 h-9 flex items-center justify-center bg-gray-800/60 hover:bg-[#64d2b1] hover:text-[#1a1d21] rounded-full transition-all text-gray-400">
                            <Instagram size={18} />
                        </Link>
                        <Link href="#" className="w-9 h-9 flex items-center justify-center bg-gray-800/60 hover:bg-[#64d2b1] hover:text-[#1a1d21] rounded-full transition-all text-gray-400">
                            <Linkedin size={18} />
                        </Link>
                    </div>

                    {/* Legal Links */}
                    <div className="flex items-center gap-4 text-gray-500 text-[14px] order-2">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <span className="text-gray-800">|</span>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                        <span className="text-gray-800">|</span>
                        <Link href="#" className="hover:text-white transition-colors">HIPAA Compliance</Link>
                    </div>

                    {/* Copyright notice */}
                    <div className="text-[14px] text-gray-500 order-1 md:order-3">
                        © 2026 Fornex Health. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}