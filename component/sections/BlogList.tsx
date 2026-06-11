"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface Blog {
    id: number;
    title: string;
    desc: string;
    image: string;
    link: string;
}

interface BlogListProps {
    blogs: Blog[];
}

export default function BlogList({ blogs }: BlogListProps) {
    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 9;

    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

    const totalPages = Math.ceil(blogs.length / blogsPerPage);

    const handlePageChange = (pageNumber: number) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <div className="w-full">
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {currentBlogs.map((blog, index) => (
                    <div
                        key={`${blog.id}-${index}`}
                        className="flex-shrink-0 w-full bg-white rounded-[1.5rem] border border-[#f2f4f7] overflow-hidden group hover:border-[#60C6B1]/30 hover:shadow-[0_40px_60px_-40px_rgba(0,0,0,0.12)] transition-all duration-500 snap-center flex flex-col h-full"
                    >
                        {/* Card Image */}
                        <div className="h-56 w-full relative overflow-hidden shrink-0">
                            <div className="w-full h-full overflow-hidden">
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>

                        {/* Card Content */}
                        <div className="p-5 pb-6 flex flex-col items-start gap-4 flex-grow">
                            <h3 className="text-[22px] lg:text-[24px] font-bold line-clamp-2 text-[#1D2128] leading-tight group-hover:text-[#60C6B1] transition-colors duration-300">
                                {blog.title}
                            </h3>
                            <p className="text-base leading-relaxed text-[#64748B] line-clamp-2 flex-grow">
                                {blog.desc}
                            </p>

                            <div className="flex items-center justify-between w-full mt-auto pt-4">
                                <Link href={blog.link} className='flex w-full items-center justify-between'>
                                    <button className="text-[#60C6B1] font-medium text-sm lg:text-[15px] group/btn flex items-center gap-1 transition-all duration-300">
                                        Learn more
                                        <span className="w-0 group-hover/btn:w-4 overflow-hidden transition-all duration-300 ease-in-out border-b border-[#60C6B1]"></span>
                                    </button>
                                    <div className="w-12 h-12 bg-[#60C6B1]/10 text-[#60C6B1] rounded-full flex items-center justify-center group-hover:bg-[#60C6B1] group-hover:text-white transition-all duration-500 shadow-sm">
                                        <ArrowRight size={22} className="group-hover:translate-x-0.5 transition-transform duration-300" />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 mt-15">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={`w-10 h-10 flex items-center justify-center rounded-full border transition-all duration-300 cursor-pointer ${currentPage === 1
                            ? 'border-gray-200 text-gray-400 cursor-not-allowed'
                            : 'border-[#60C6B1] text-[#60C6B1] hover:bg-[#60C6B1] hover:text-white shadow-sm hover:shadow-md'
                            }`}
                        aria-label="Previous page"
                    >
                        <ChevronLeft size={20} />
                    </button>

                    <div className="flex items-center gap-2">
                        {Array.from({ length: totalPages }).map((_, index) => {
                            const pageNumber = index + 1;
                            return (
                                <button
                                    key={pageNumber}
                                    onClick={() => handlePageChange(pageNumber)}
                                    className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300  cursor-pointer font-medium ${currentPage === pageNumber
                                        ? 'bg-[#60C6B1] text-white shadow-md'
                                        : 'text-[#64748B] hover:bg-[#60C6B1]/10 hover:text-[#60C6B1]'
                                        }`}
                                >
                                    {pageNumber}
                                </button>
                            );
                        })}
                    </div>

                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className={`w-10 h-10 flex items-center justify-center rounded-full border transition-all duration-300 cursor-pointer ${currentPage === totalPages
                            ? 'border-gray-200 text-gray-400 cursor-not-allowed'
                            : 'border-[#60C6B1] text-[#60C6B1] hover:bg-[#60C6B1] hover:text-white shadow-sm hover:shadow-md'
                            }`}
                        aria-label="Next page"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
            )}
        </div>
    );
}
