'use client'
import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import WhyChooseUs from '@/components/WhyChooseUs';
import TestimonialCards from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import Instructors from "@/components/Instructors";
import Footer from "@/components/Footer";
import { useEffect } from "react";


export default function Home() {

  useEffect( ()=>{
    (
      async()=>{
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  } ,[])
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChooseUs/>
      <TestimonialCards/>
      <UpcomingWebinars/>
      <Instructors/>
      <Footer/>
    </main>
  );
}
