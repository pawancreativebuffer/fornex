'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const services = [
    // {
    //     id: 0,
    //     title: "Carevation",
    //     description: "Caregivers struggled to manage appointments, medications, and medical records across scattered tools, causing coordination challenges. ForNex Health built a centralized caregiving platform to organize health records, appointments, medications, and daily care tasks.",
    //     image: "/images/one.jpg",
    // },
    {
        id: 0,
        title: "Manhattan Cardiovascular Associates",
        description: "High claim denial rate (22%) causing $180,000/month in revenue loss. Outdated EHR with no patient portal integration. ForNex implemented denial management workflows, automated claim scrubbing, and a patient-facing portal integrated with their existing eClinicalWorks EHR.",
        image: "/images/three.jpg",
        link: '#'
    },
    {
        id: 1,
        title: "Apollo 360 Health",
        description: "Needed a HIPAA-compliant telehealth platform and EHR integration from scratch. 6-month launch deadline. ForNex developed a custom patient portal, video consultation module, and FHIR R4 integration with Athenahealth — deployed on AWS HIPAA architecture.",
        image: "/images/four.jpg",
        link: '#'
    },
    {
        id: 2,
        title: "Oasis Notes",
        description: "Providers struggled with fragmented documentation and inefficient workflows while accessing patient records across multiple system screens. ForNex Health optimized workflows and unified patient records, enabling faster access to history, labs, diagnoses, and medications.",
        image: "/images/two.jpg",
        link: '#'
    },
    {
        id: 3,
        title: "Super School Org",
        description: "Super School Org needed an engaging, mobile-first solution to help parents stay connected to their child's educational journey in real time. We developed a seamless mobile app that allows parents to track progress, receive updates, communicate with teachers, and access resources from anywhere, anytime.",
        image: "/images/five.png",
        link: '#'
    },
    {
        id: 4,
        title: "MRI Safe Programming & Scheduling",
        description: "A specialized healthcare solution designed to ensure safe MRI procedures for patients with pacemakers. The system enables clinicians to program devices into MRI-safe modes, verify compatibility, and manage pre-MRI workflows with structured scheduling and safety checks.",
        image: "/images/one.jpg",
        link: 'clients/mri-safe-programming'
    },
];

export default function HomeMajorServices() {
    const [activeIndex, setActiveIndex] = useState(1);

    return (
        <section className="w-full px-4 lg:px-2 my-10">
            <div className="flex flex-col md:flex-row w-full h-[700px] md:h-[500px] gap-2">
                {services.map((service, index) => (
                    <div
                        key={service.id}
                        className={`relative overflow-hidden rounded-[2rem] transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] cursor-pointer group ${activeIndex === index ? 'flex-[12] md:flex-[5]' : 'flex-[1.5] md:flex-[1]'
                            }`}
                        onMouseEnter={() => setActiveIndex(index)}
                        onClick={() => setActiveIndex(index)}
                    >
                        {/* Main Image Background */}
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                            style={{ backgroundImage: `url(${service.image})` }}
                        />

                        {/* Overlay with dynamic transparency */}
                        <div className={`absolute inset-0 transition-opacity duration-700 ${activeIndex === index
                            ? 'bg-gradient-to-t from-black/90 via-black/70 to-transparent opacity-100'
                            : 'bg-black/70 group-hover:bg-black/70'
                            }`} />

                        {/* Content Layout */}
                        <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end">
                            {/* Active Content */}
                            <div className={`transition-all duration-700 z-[10] delay-100 ${activeIndex === index ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                                }`}>
                                <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-regular text-white mb-4 tracking-wider uppercase">
                                    Case Study 0{index + 1}
                                </span>
                                <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight max-w-md">
                                    {service.title}
                                </h3>
                                <p className="text-white/80 text-base font-regular max-w-xl mb-8 leading-relaxed line-clamp-3">
                                    {service.description}
                                </p>
                                <div className='flex'>
                                    <Link href={service.link} className="flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold text-sm transition-all duration-300 transform group-hover:translate-x-1">
                                        Read Full Case Study <ArrowRight size={18} />
                                    </Link>
                                </div>
                            </div>

                            {/* Collapsed Content (Vertical Title) */}
                            <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${activeIndex === index ? 'opacity-0' : 'opacity-100'
                                }`}>
                                <div className="relative h-full w-full flex items-center justify-center">
                                    <h3 className="text-white pl-14 pr-5 md:pl-0 md:pr-0 text-xs md:text-xl font-bold text-center md:min-w-[330px] md:-rotate-90 origin-center tracking-wide uppercase opacity-80 group-hover:opacity-100 transition-all duration-300">
                                        {service.title}
                                    </h3>
                                </div>
                            </div>

                            {/* Static Index Number for Collapsed State */}
                            <div className={`absolute top-2 left-2 md:top-4 md:left-4 transition-all duration-500 ${activeIndex === index ? 'opacity-0 scale-50' : 'opacity-100 scale-100'
                                }`}>
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/30 bg-white/10 backdrop-blur-md flex items-center justify-center shadow-xl">
                                    <span className="text-white font-mono text-base md:text-lg font-[400]">0{index + 1}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

