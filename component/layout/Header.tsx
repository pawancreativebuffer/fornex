"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Menu, X } from "lucide-react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navLinks = [
        { name: "Home", href: "#" },
        { name: "Services", href: "#" },
        { name: "Clients", href: "#" },
        { name: "Case Studies", href: "#" },
        { name: "Blogs", href: "#" },
    ];

    return (
        <header className="w-full py-4 relative z-50">
            <div className="max-w-[1400px] mx-auto px-4 flex items-center justify-between">

                {/* Logo */}
                <div className="flex items-center">
                    <Image
                        src="/images/logo.svg"
                        alt="logo"
                        width={120}
                        height={40}
                        className="w-auto h-8 md:h-10"
                    />
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-8 text-[#2B2E34] text-[16px] font-medium">
                    {navLinks.map((link) => (
                        <Link key={link.name} href={link.href} className="hover:text-[#60C6B1] transition-colors">
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Desktop Buttons & Mobile Toggle */}
                <div className="flex items-center gap-3">
                    <div className="hidden sm:flex items-center gap-3">
                        <button className="px-6 py-3 rounded-lg border border-[#60C6B1] text-[#60C6B1] hover:bg-[#60C6B1] hover:text-[#fff] cursor-pointer transition font-medium">
                            Contact us
                        </button>

                        <button className="px-4 py-3 rounded-lg border border-[#90C7E5] text-[#fff] bg-[#90C7E5] hover:bg-[#fff] hover:text-[#90C7E5] cursor-pointer transition flex items-center gap-2 font-medium">
                            Get Consultation
                            <ChevronRight size={18} />
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="lg:hidden p-2 text-[#2B2E34] hover:bg-gray-100 rounded-lg transition-colors"
                        aria-label="Toggle Menu"
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Overlay */}
            <div className={`
                fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out lg:hidden
                ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
            `} style={{ top: '72px' }}>
                <div className="flex flex-col h-full p-6 bg-[#f9fbfb]">
                    <nav className="flex flex-col gap-6 text-[#2B2E34] text-lg font-medium mb-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="border-b border-gray-100 pb-2 hover:text-[#60C6B1]"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex flex-col gap-4">
                        <button className="w-full px-6 py-4 rounded-lg border border-[#60C6B1] text-[#60C6B1] font-semibold">
                            Contact us
                        </button>
                        <button className="w-full px-4 py-4 rounded-lg bg-[#90C7E5] text-white flex items-center justify-center gap-2 font-semibold">
                            Get Consultation
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
