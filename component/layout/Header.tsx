import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function Header() {
    return (
        <header className="w-full py-4">
            <div className="max-w-[1400px] mx-auto px-4 flex items-center justify-between">

                {/* Logo */}
                <div className="flex items-center">
                    <Image
                        src="/images/logo.svg"
                        alt="logo"
                        width={0}
                        height={0}
                        className="w-auto h-auto"
                    />
                </div>

                {/* Navigation */}
                <nav className="hidden md:flex items-center gap-8 text-[#2B2E34] font-medium">
                    <Link href="#">Home</Link>
                    <Link href="#">Services</Link>
                    <Link href="#">Clients</Link>
                    <Link href="#">Case Studies</Link>
                    <Link href="#">Blogs</Link>
                </nav>

                {/* Buttons */}
                <div className="flex items-center gap-3">
                    <button className="px-6 py-3 rounded-lg border border-[#60C6B1] text-[#60C6B1] hover:bg-[#60C6B1] hover:text-[#fff] cursor-pointer transition">
                        Contact us
                    </button>

                    <button className="px-4 py-3 rounded-lg border border-[#90C7E5] text-[#fff] bg-[#90C7E5] hover:bg-[#fff] hover:text-[#90C7E5] cursor-pointer transition flex gap-2">
                        Get Consultation
                        <ChevronRight />
                    </button>
                </div>

            </div>
        </header>
    )
}