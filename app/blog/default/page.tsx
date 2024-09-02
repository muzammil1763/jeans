'use client'
import React, { useState } from 'react'
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';

import { useRouter } from 'next/navigation'
import * as Icon from "@phosphor-icons/react/dist/ssr";

const BlogDefault = () => {
   

    return (
        <>
            
            <div className='blog default md:py-20 py-10'>
                <div className="container">
                    <div className="flex justify-between max-md:flex-col gap-y-12">
                        <div className="left xl:w-3/4 md:w-2/3 pr-2">
                            <div className="list-blog flex flex-col md:gap-10 gap-8">
                              
                            </div>
                         
                        </div>
                        <div className="right xl:w-1/4 md:w-1/3 xl:pl-[52px] md:pl-8">
                            <form className='form-search relative w-full h-12'>
                                <input className='py-2 px-4 w-full h-full border border-line rounded-lg' type="text" placeholder='Search' />
                                <button>
                                    <Icon.MagnifyingGlass className='heading6 text-secondary hover:text-black duration-300 absolute top-1/2 -translate-y-1/2 right-4 cursor-pointer' />
                                </button>
                            </form>
                            <div className="recent md:mt-10 mt-6 pb-8 border-b border-line">
                                <div className="heading6">Recent Posts</div>
                                <div className="list-recent pt-1">
                                    
                                </div>
                            </div>
                            <div className="filter-category md:mt-10 mt-6 pb-8 border-b border-line">
                                <div className="heading6">Categories</div>
                                <div className="list-cate pt-1">
                                    <div
                                        className={`cate-item flex items-center justify-between cursor-pointer mt-3 `}
                                        
                                    >
                                        <div className='capitalize has-line-before hover:text-black text-secondary'>Fashion</div>
                                        <div className="text-secondary2">
                                           
                                        </div>
                                    </div>
                                    <div
                                        className={`cate-item flex items-center justify-between cursor-pointer mt-3 `}
                                      
                                    >
                                        <div className='capitalize has-line-before hover:text-black text-secondary'>cosmetic</div>
                                        <div className="text-secondary2">
                                            
                                        </div>
                                    </div>
                                    <div
                                        className={`cate-item flex items-center justify-between cursor-pointer mt-3 `}
                                    
                                    >
                                        <div className='capitalize has-line-before hover:text-black text-secondary'>toys kid</div>
                                        <div className="text-secondary2">
                                           
                                        </div>
                                    </div>
                                    <div
                                        className={`cate-item flex items-center justify-between cursor-pointer mt-3 `}
                                       
                                    >
                                        <div className='capitalize has-line-before hover:text-black text-secondary'>yoga</div>
                                        <div className="text-secondary2">
                                            
                                        </div>
                                    </div>
                                    <div
                                        className={`cate-item flex items-center justify-between cursor-pointer mt-3 `}
                                       
                                    >
                                        <div className='capitalize has-line-before hover:text-black text-secondary'>organic</div>
                                        <div className="text-secondary2">
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                </div>
            </div>
           
        </>
    )
}

export default BlogDefault