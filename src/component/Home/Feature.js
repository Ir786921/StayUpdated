'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function FeaturesSection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const features = [
    {
      title: "Expert Contributors",
      description: "Articles written by industry experts, thought leaders, and seasoned journalists who bring depth and authority to every topic.",
      icon: "fa-solid fa-user-tie",
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Fact-Checked Content",
      description: "Rigorous fact-checking process ensures all information is accurate, current, and presented with appropriate context.",
      icon: "fa-solid fa-check-double",
      color: "bg-green-100 text-green-600"
    },
    {
      title: "In-depth Analysis",
      description: "Going beyond headlines to provide comprehensive perspectives and nuanced understanding of complex topics.",
      icon: "fa-solid fa-magnifying-glass-chart",
      color: "bg-purple-100 text-purple-600"
    },
    {
      title: "Interactive Content",
      description: "Engaging infographics, data visualizations, and interactive elements that make complex information accessible.",
      icon: "fa-solid fa-chart-line",
      color: "bg-indigo-100 text-indigo-600"
    },
    {
      title: "Personalized Experience",
      description: "Custom content recommendations based on your interests and reading history to surface relevant information.",
      icon: "fa-solid fa-user-gear",
      color: "bg-red-100 text-red-600"
    },
    {
      title: "Multi-Format Content",
      description: "Content available in text, audio, and video formats to suit different learning preferences and situations.",
      icon: "fa-solid fa-photo-film",
      color: "bg-amber-100 text-amber-600"
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Why Choose StayUpdated</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            More than just news, StayUpdated delivers a premium content experience designed to inform, engage, and inspire.
          </p>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={fadeIn}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              <div className={`${feature.color} p-4 inline-block rounded-lg mb-4`}>
                <i className={`${feature.icon} text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl overflow-hidden shadow-xl"
        >
          <div className="md:flex">
            <div className="md:w-1/2 p-10 text-white">
              <h3 className="text-2xl font-bold mb-4">Premium Membership Benefits</h3>
              <p className="mb-6 text-blue-100">
                Upgrade your StayUpdated experience with exclusive benefits designed for our most dedicated readers.
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <i className="fa-solid fa-circle-check mt-1 mr-3"></i>
                  <span>Ad-free reading experience across all platforms</span>
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-circle-check mt-1 mr-3"></i>
                  <span>Full access to our archive of 3,500+ articles</span>
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-circle-check mt-1 mr-3"></i>
                  <span>Exclusive in-depth reports and research papers</span>
                </li>
                <li className="flex items-start">
                  <i className="fa-solid fa-circle-check mt-1 mr-3"></i>
                  <span>Early access to podcasts, webinars and events</span>
                </li>
              </ul>

              <Link href="/membership" className="bg-white text-blue-600 px-6 py-3 rounded-md inline-block font-medium hover:bg-gray-100 transition-colors duration-300 shadow-md">
                Learn More
              </Link>
            </div>
            <div className="md:w-1/2 relative hidden md:block">
              <Image 
                src="/api/placeholder/600/600"
                alt="Premium Membership Benefits"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}