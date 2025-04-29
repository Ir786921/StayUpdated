'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Executive",
      company: "TechVision",
      image: "/api/placeholder/100/100",
      quote: "StayUpdated has become my go-to source for industry insights. The analysis goes deeper than any other publication, helping me make informed decisions for our marketing strategy."
    },
    {
      name: "David Chen",
      role: "Graduate Student",
      company: "Stanford University",
      image: "/api/placeholder/100/100",
      quote: "As a researcher, I need reliable information that's also accessible. StayUpdated strikes that perfect balance between academic rigor and engaging content that's actually enjoyable to read."
    },
    {
      name: "Maya Patel",
      role: "Startup Founder",
      company: "EcoSolutions",
      image: "/api/placeholder/100/100",
      quote: "The sustainability coverage on StayUpdated has been invaluable for our company. They highlight innovations that fly under the radar elsewhere, and I've discovered several business partnerships through articles I read here."
    },
    {
      name: "James Wilson",
      role: "Community Organizer",
      company: "Urban Future Initiative",
      image: "/api/placeholder/100/100",
      quote: "I appreciate how StayUpdated connects global trends to local impacts. Their reporting has helped our community group frame issues in ways that resonate with both residents and city officials."
    }
  ];

  useEffect(() => {
    let interval;
    if (isAutoplay) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoplay, testimonials.length]);

  const handleNext = () => {
    setIsAutoplay(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setIsAutoplay(false);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleDotClick = (index) => {
    setIsAutoplay(false);
    setCurrentIndex(index);
  };

  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">What Our Readers Say</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-xl shadow-lg p-6 md:p-10">
            {/* Quotation mark decoration */}
            <div className="absolute top-6 left-6 text-blue-100 opacity-80">
              <i className="fa-solid fa-quote-left text-6xl"></i>
            </div>

            <div className="relative z-10">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <p className="text-xl text-gray-600 italic mb-8">
                  {testimonials[currentIndex].quote}
                </p>
                
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-blue-500">
                    <Image 
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg">{testimonials[currentIndex].name}</h4>
                    <p className="text-gray-500">{testimonials[currentIndex].role}, {testimonials[currentIndex].company}</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Navigation buttons */}
            <div className="flex justify-between items-center mt-8">
              <button 
                onClick={handlePrev}
                className="bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full p-3 transition-colors duration-300 focus:outline-none"
                aria-label="Previous testimonial"
              >
                <i className="fa-solid fa-arrow-left"></i>
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      currentIndex === index ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={handleNext}
                className="bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full p-3 transition-colors duration-300 focus:outline-none"
                aria-label="Next testimonial"
              >
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
          >
            <div className="bg-blue-100 p-4 rounded-full text-blue-600 mb-4">
              <i className="fa-solid fa-users text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">500K+</h3>
            <p className="text-gray-600">Monthly Readers</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
          >
            <div className="bg-green-100 p-4 rounded-full text-green-600 mb-4">
              <i className="fa-solid fa-newspaper text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">3,500+</h3>
            <p className="text-gray-600">Published Articles</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
          >
            <div className="bg-purple-100 p-4 rounded-full text-purple-600 mb-4">
              <i className="fa-solid fa-globe text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">120+</h3>
            <p className="text-gray-600">Countries Reached</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}