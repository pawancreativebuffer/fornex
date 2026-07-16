"use client";

import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { submitContactForm } from "./action";

export default function ContactForm() {
    const [result, setResult] = useState("");

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setResult("Sending....");

        const formData = new FormData(event.currentTarget);
        const object = Object.fromEntries(formData.entries());

        try {
            const res = await submitContactForm(object);

            if (res?.success) {
                setResult("Form Submitted Successfully!");
                (event.target as HTMLFormElement).reset();
            } else {
                setResult(res?.message || "Something went wrong.");
            }
        } catch (error) {
            setResult("Something went wrong!");
        }
    };

    return (
        <form className="space-y-6" onSubmit={onSubmit}>
            <div className="relative group">
                <input
                    type="text"
                    name="name"
                    required
                    placeholder="Full name"
                    className="w-full bg-transparent border-b border-gray-300 py-3 focus:border-[#60C6B1] focus:outline-none transition-all placeholder:text-gray-400 text-[#1a2b3c]"
                />
            </div>
            <div className="relative group">
                <input
                    type="email"
                    name="email"
                    required
                    placeholder="Email"
                    className="w-full bg-transparent border-b border-gray-300 py-3 focus:border-[#60C6B1] focus:outline-none transition-all placeholder:text-gray-400 text-[#1a2b3c]"
                />
            </div>
            <div className="relative group">
                <input
                    type="text"
                    name="subject"
                    required
                    placeholder="Subject"
                    className="w-full bg-transparent border-b border-gray-300 py-3 focus:border-[#60C6B1] focus:outline-none transition-all placeholder:text-gray-400 text-[#1a2b3c]"
                />
            </div>
            <div className="relative group">
                <textarea
                    name="message"
                    required
                    placeholder="Message"
                    rows={4}
                    className="w-full bg-transparent border-b border-gray-300 py-3 focus:border-[#60C6B1] focus:outline-none transition-all placeholder:text-gray-400 text-[#1a2b3c] resize-none"
                ></textarea>
            </div>

            <div className="pt-4 flex items-center gap-4">
                <button type="submit" className="px-5 py-3 rounded-full border border-[#60c6b1] text-[#fff] bg-[#60c6b1] hover:bg-transparent hover:text-[#60c6b1] cursor-pointer transition flex items-center gap-2 font-medium">
                    Get Free Consultation
                    <ChevronRight size={20} />
                </button>
                {result && <span className="text-sm font-medium text-[#1a2b3c]">{result}</span>}
            </div>
        </form>
    );
}
