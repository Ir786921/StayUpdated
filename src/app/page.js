'use client'
import BlogList from "@/component/BlogComponet";
import BlogComponent from "@/component/Home";
import AboutSection from "@/component/Home/About";
import Category from "@/component/Home/Category";
import FAQSection from "@/component/Home/FAQ";
import FeaturedPost from "@/component/Home/FeaturedPost";
import Hero from "@/component/Home/Hero";
import TestimonialsSection from "@/component/Home/TestimonialSection";


export default function Home() {
  return (
   <>
   <Hero/> 
   <AboutSection/>
   <FeaturedPost/>
   <Category/>
   <TestimonialsSection/>
   <FAQSection/>
   </>
      );
}
