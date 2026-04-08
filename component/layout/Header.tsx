"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import Image from "next/image";
import { ChevronRight, Menu, X } from "lucide-react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "Clients", href: "/clients" },
        { name: "Blogs", href: "/blogs" },
    ];

    return (
        <header className="w-full lg:py-6 lg:px-4 relative z-70 max-w-[1400px] mx-auto">
            <div className="px-4 lg:px-6 py-3 flex items-center justify-between gap-4 
            bg-white/100 backdrop-blur-lg border border-white/60 lg:rounded-full 
            shadow-[0_10px_30px_rgba(0,0,0,0.4)]">

                {/* Logo */}
                <div className="flex items-center">
                    <Image
                        src="/images/logo.svg"
                        alt="logo"
                        width={0}
                        height={0}
                        className="w-auto h-12 md:h-auto"
                    />
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-7 text-[#2B2E34] text-[16px] font-medium">
                    <nav className="hidden lg:flex items-center gap-7 text-[#2B2E34] text-[16px] font-medium">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;

                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`transition-colors ${isActive
                                        ? 'text-[#60C6B1]'
                                        : 'text-[#2B2E34] hover:text-[#60C6B1]'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </nav>
                </nav>

                {/* Desktop Buttons & Mobile Toggle */}
                <div className="flex items-center gap-3">
                    <div className="hidden lg:flex items-center gap-3">
                        <Link href="/contact" className="px-8 py-3 rounded-full border border-[#60C6B1] text-[#60C6B1] hover:bg-[#60C6B1] hover:text-[#fff] cursor-pointer transition font-medium">
                            Contact us
                        </Link>

                        <button className="px-5 py-3 rounded-full border border-[#6896af] text-[#fff] bg-[#6896af] hover:bg-[#fff] hover:text-[#6896af] cursor-pointer transition flex items-center gap-2 font-medium">
                            Get Consultation
                            <ChevronRight size={20} />
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="lg:hidden p-0 text-[#2B2E34] hover:bg-gray-100 rounded-lg transition-colors"
                        aria-label="Toggle Menu"
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Overlay */}
            <div className={`
                fixed inset-0 z-40 transition-transform duration-300 ease-in-out top-[73px] md:top-[90px] bottom-0 lg:hidden bg-[#f9fbfb] overflow-auto
                ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>

                <div className="flex flex-col p-4">
                    <nav className="flex flex-col gap-3 text-[#2B2E34] text-[16px] font-medium mb-5">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="border-b border-gray-100 pb-3 hover:text-[#60C6B1]"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex flex-col gap-4">
                        <Link href="/contact" className="w-full px-6 py-4 rounded-full border border-[#60C6B1] text-[#60C6B1] font-semibold">
                            Contact us
                        </Link>
                        <button className="w-full px-4 py-4 rounded-full bg-[#6896af] text-white flex items-center justify-center gap-2 font-semibold">
                            Get Consultation
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
