'use client'
import React from 'react'
import courseData from '../data/music_courses.json'
import Link from 'next/link' 
import { BackgroundGradient } from './ui/background-gradient'
// import { useLayoutEffect } from "react";
// import {ScrollTrigger} from 'gsap-trial/ScrollTrigger'
// import gsap from "gsap";
// import { useRef } from "react";

interface Course{
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,
}

const FeaturedCourses = () => {

    const featuredCourses = courseData.courses.filter((course:Course)=> course.isFeatured)

    // const heroSec = useRef(null);

    // useLayoutEffect(()=>{
    //   gsap.registerPlugin(ScrollTrigger);
    
    //   const timeline = gsap.timeline({
    //     scrollTrigger: document.documentElement,
    //     start: "top",
    //     end: "+100vh",
    //     scroll: true,
    //     markers: true
    //   })

    //   timeline
    //   .from(heroSec.current , {clipPath: "inset(15%)"})
    // } , [])
    
  return (
    <div className='py-12 bg-gray-900 opacity-[--progress]' data-scroll data-scroll-css-progress>
        <div>
            <div className='text-center'>
                <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED COURSES</h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Learn With the Best</p>
            </div>
        </div>
        <div className='mt-10'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center'>
                {
                    featuredCourses.map((course:Course)=>(
                        <div className='flex justify-center' key={course.id}>
                            <BackgroundGradient  className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                                    <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.title}</p>
                                    <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{course.description}</p>
                                    <Link href={`/courses/${course.slug}`} className='py-4 px-6 scale-100 bg-white hover:scale-90 border-b-2 hover:shadow-black hover:shadow-md text-black transition-all duration-200 rounded-lg border-blue-500'>
                                    Learn More
                                    </Link>
                                </div>
                            </BackgroundGradient>
                        </div>
                    ))
                }
            </div>
        </div>
        <div className='mt-20 text-center'>
            <Link href={'/courses'} className='py-4 px-6 scale-100 bg-white hover:scale-50 border-b-2 hover:shadow-black hover:shadow-md text-black transition-all duration-200 rounded-lg border-blue-500'>
                View All Courses
            </Link>
        </div>
    </div>
  )
}

export default FeaturedCourses