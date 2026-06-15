"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight, Calendar, Search, ChevronDown } from 'lucide-react';

interface Blog {
    id: number;
    title: string;
    desc: string;
    image: string;
    link: string;
    date: string;
}

interface BlogListProps {
    blogs: Blog[];
}

export default function BlogList({ blogs }: BlogListProps) {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [sortOrder, setSortOrder] = useState('latest');
    const blogsPerPage = 12;

    const filteredBlogs = blogs
        .filter(blog => {
            if (!searchQuery) return true;
            const query = searchQuery.toLowerCase();
            return (
                blog.title.toLowerCase().includes(query) ||
                (blog.date && blog.date.toLowerCase().includes(query)) ||
                blog.desc.toLowerCase().includes(query)
            );
        })
        .sort((a, b) => {
            if (!a.date || !b.date) return 0;
            const dateA = new Date(a.date).getTime();
            const dateB = new Date(b.date).getTime();
            
            if (sortOrder === 'latest') {
                return dateB - dateA;
            } else {
                return dateA - dateB;
            }
        });

    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

    const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

    const handlePageChange = (pageNumber: number) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <div className="w-full">
            {/* Filter Area */}
            <div className="mb-10 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="relative w-full md:w-[400px]">
                    <input 
                        type="text"
                        placeholder="Search by title, date or keywords..."
                        className="w-full px-5 py-3.5 rounded-[1.5rem] border border-gray-200 focus:outline-none focus:border-[#60C6B1] focus:ring-1 focus:ring-[#60C6B1] pl-12 transition-all duration-300 shadow-sm"
                        value={searchQuery}
                        onChange={(e) => {
                            setSearchQuery(e.target.value);
                            setCurrentPage(1); // Reset to first page on new search
                        }}
                    />
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                </div>
                <div className="relative w-full md:w-[200px]">
                    <select
                        value={sortOrder}
                        onChange={(e) => {
                            setSortOrder(e.target.value);
                            setCurrentPage(1); // Reset to first page on sort
                        }}
                        className="w-full px-5 py-3.5 rounded-[1.5rem] border border-gray-200 focus:outline-none focus:border-[#60C6B1] focus:ring-1 focus:ring-[#60C6B1] transition-all duration-300 shadow-sm bg-white cursor-pointer appearance-none text-[#1D2128]"
                    >
                        <option value="latest">Latest First</option>
                        <option value="oldest">Oldest First</option>
                    </select>
                    <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                </div>
            </div>

            {filteredBlogs.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                    <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                        <Search className="text-gray-400" size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-[#1D2128] mb-2">No blogs found</h3>
                    <p className="text-[#64748B]">Try adjusting your search query or clear the filter.</p>
                </div>
            ) : (
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

                                {blog.date && (
                                    <div className="flex items-center gap-2 text-[#64748B] text-sm">
                                        <Calendar size={14} className="text-[#60C6B1]" />
                                        <span>{blog.date}</span>
                                    </div>
                                )}

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
            )}

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
