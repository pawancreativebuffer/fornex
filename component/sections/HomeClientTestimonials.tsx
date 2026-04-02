'use client';

import { useState, useEffect, useCallback } from 'react';
import { Quote, Star, ArrowLeft, ArrowRight } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        text: "Bit PI has revolutionized the way I manage projects. Its comprehensive suite of tools, user-friendly interface, and robust performance have significantly enhanced our productivity and collaboration. A must-have for any team!",
        name: "Jack William",
        role: "CEO of MarketingPoint",
        image: "/images/one.jpg",
        rating: 5
    },
    {
        id: 2,
        text: "The integration and ease of use of this platform are simply unparalleled. Our team has seen a 40% increase in productivity since we started using it. The support team is also incredibly responsive and helpful.",
        name: "Sarah Jenkins",
        role: "Project Manager at TechFlow",
        image: "/images/two.jpg",
        rating: 5
    },
    {
        id: 3,
        text: "As a startup founder, I need tools that scale with us. This solution has been with us from day one and continues to exceed our expectations. The analytics dashboard is a game-changer for our decision-making.",
        name: "Michael Chen",
        role: "Founder & CTO at Innovate",
        image: "/images/three.jpg",
        rating: 5
    }
];

export default function HomeClientTestimonials() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }, []);

    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            nextSlide();
        }, 5000); // 5 seconds autoplay

        return () => clearInterval(interval);
    }, [nextSlide, isPaused]);

    return (
        <section className="relative w-full overflow-hidden bg-gradient-to-r from-[#60c6b1] to-[#90c7e5] py-10 lg:py-15 mt-10 lg:mt-15">
            <div className="max-w-[1400px] mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Section: Content */}
                    <div className="flex flex-col gap-8">
                        <div className="space-y-6">
                            <h2 className="text-4xl lg:text-6xl font-bold leading-[1.1] text-white tracking-tight ">
                                Trusted by Healthcare Leaders Across the Industry
                            </h2>
                            <p className="text-white/70 text-base font-regular leading-relaxed max-w-[500px]">
                                From private practices to enterprise health systems — here's what our clients say after going live.
                            </p>
                        </div>
                    </div>

                    {/* Right Section: Testimonial Slider */}
                    <div className="relative group">
                        {/* Navigation Arrows (Matching Image Layout) */}
                        <div className="hidden lg:flex justify-end mb-5 right-0 gap-4 pr-2">
                            <button
                                onClick={prevSlide}
                                className="text-white hover:text-white transition-colors flex items-center gap-2 group/btn cursor-pointer"
                            >
                                <ArrowLeft className="w-8 h-8 transition-transform group-hover/btn:-translate-x-1" strokeWidth={1} />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="text-white hover:text-white transition-colors flex items-center gap-2 group/btn cursor-pointer"
                            >
                                <ArrowRight className="w-8 h-8 transition-transform group-hover/btn:translate-x-1" strokeWidth={1} />
                            </button>
                        </div>

                        {/* Mobile Navigation */}
                        <div className="flex lg:hidden justify-end mb-6 gap-6">
                            <button onClick={prevSlide} className="text-gray-500 hover:text-white transition-colors">
                                <ArrowLeft className="w-8 h-8" strokeWidth={1} />
                            </button>
                            <button onClick={nextSlide} className="text-gray-500 hover:text-white transition-colors">
                                <ArrowRight className="w-8 h-8" strokeWidth={1} />
                            </button>
                        </div>

                        {/* Testimonial Card */}
                        <div
                            onMouseEnter={() => setIsPaused(true)}
                            onMouseLeave={() => setIsPaused(false)}
                            className="relative p-8 lg:p-14 bg-[#1A1A1A]/80 backdrop-blur-xl border border-white/5 rounded-[40px] overflow-hidden transition-all duration-700 hover:border-white/10 hover:shadow-2xl hover:shadow-[#90c7e5]/5 group/card"
                        >
                            {/* Quote Icon */}
                            <Quote size={80} className="text-white/10 absolute top-8 left-8" />

                            <div
                                key={currentSlide}
                                className="animate-slide-up relative z-10 space-y-12 h-full flex flex-col justify-between"
                            >
                                <p className="text-gray-300 text-xl lg:text-[26px] leading-[1.6] font-medium min-h-[160px]">
                                    "{testimonials[currentSlide].text}"
                                </p>

                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-10 border-t border-white/5">
                                    <div className="flex items-center gap-5">
                                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#90c7e5]/30 group-hover:scale-110 transition-transform duration-500">
                                            <img
                                                src={testimonials[currentSlide].image}
                                                alt={testimonials[currentSlide].name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold text-xl">{testimonials[currentSlide].name}</h4>
                                            <p className="text-[#90c7e5] text-sm font-medium">{testimonials[currentSlide].role}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <div className="flex">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    size={18}
                                                    className={`fill-current ${i < testimonials[currentSlide].rating ? "text-[#90c7e5]" : "text-gray-700"}`}
                                                />
                                            ))}
                                        </div>
                                        <span className="text-gray-400 font-bold ml-2">5.0</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
