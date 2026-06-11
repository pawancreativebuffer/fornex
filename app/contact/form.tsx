import { ChevronRight } from "lucide-react";

export default function ContactForm() {
    return (

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
                <button type="submit" className="px-5 py-3 rounded-full border border-[#60c6b1] text-[#fff] bg-[#60c6b1] hover:bg-transparent hover:text-[#60c6b1] cursor-pointer transition flex items-center gap-2 font-medium">
                    Get Free Consultation
                    <ChevronRight size={20} />
                </button>
            </div>
        </form>
    );
}
