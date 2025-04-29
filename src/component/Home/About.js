"use client";

import { motion } from "framer-motion";
import { CheckCircle, Target, TicketXIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Founder & Editor-in-Chief",
      bio: "Former tech journalist with 10+ years of experience covering emerging technologies and digital trends.",
      image: "/api/placeholder/300/300",
    },
    {
      name: "Sophia Chen",
      role: "Lead Content Strategist",
      bio: "Digital marketing expert specializing in content strategy and audience engagement.",
      image: "/api/placeholder/300/300",
    },
    {
      name: "Marcus Rodriguez",
      role: "Technology Editor",
      bio: "Computer scientist turned writer with a passion for explaining complex tech concepts.",
      image: "/api/placeholder/300/300",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="max-w-7xl mx-auto mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              About StayUpdated
            </h2>
            <p className=" text-gray-600  mb-2">
          Thoughtful content for curious minds. Honest writing. Timeless ideas.
        </p>
            
          </div>

          <div className="bg-white rounded-lg  overflow-hidden">
            <div className="md:flex">
              <div className="md:w-2/5 relative h-64 md:h-auto">
                <Image
                  src="/book.jpeg"
                  alt="StayUpdated Team"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 md:w-3/5">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Our Story
                </h3>
                <p className="text-gray-600 mb-4">
                  Founded in 2022, StayUpdated emerged from a simple yet
                  powerful idea: in a world overflowing with information, people
                  need a trusted source that cuts through the noise and delivers
                  what truly matters.
                </p>
                <p className="text-gray-600 mb-4">
                  Our journey began when Alex Johnson, a veteran tech
                  journalist, recognized the growing challenge of information
                  overload. Together with a team of dedicated content
                  specialists, StayUpdated was born to transform how people
                  consume digital content.
                </p>
                <p className="text-gray-600 mb-4">
                  Today, we have ve grown into a vibrant community of writers,
                  editors, and digital enthusiasts committed to keeping our
                  readers informed, engaged, and inspired across technology,
                  culture, sustainability, and personal development.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
 <h1 className=" text-center text-4xl flex gap-4 text-gray-600 justify-center items-center mb-6 "> <Target className=" text-4xl text-blue-700"/> Our Mission</h1>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="max-w-7xl mx-auto mb-16 flex md:flex-row flex-col gap-3.5"
        >
        
          <div className="bg-white p-8 rounded-lg shadow-md md:w-3/4 w-full">
            <div className="flex flex-col md:flex-row items-center mb-8">
              <div className="bg-blue-100 p-4 rounded-full text-blue-600 mb-4 md:mb-0 md:mr-6">
                <i className="fa-solid fa-lightbulb text-3xl"></i>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2 text-[#5f9ae8]">Illuminate</h4>
                <p className="text-gray-600">
                  We shine light on important stories, emerging trends, and
                  innovative ideas that might otherwise go unnoticed in the
                  daily deluge of content.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center mb-8">
              <div className="bg-green-100 p-4 rounded-full text-green-600 mb-4 md:mb-0 md:mr-6">
                <i className="fa-solid fa-magnifying-glass text-3xl"></i>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Investigate</h4>
                <p className="text-gray-600">
                  We dig deeper than headlines, providing context, analysis, and
                  multiple perspectives to help our readers form well-rounded
                  opinions.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center">
              <div className="bg-purple-100 p-4 rounded-full text-purple-600 mb-4 md:mb-0 md:mr-6">
                <i className="fa-solid fa-users text-3xl"></i>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Inspire</h4>
                <p className="text-gray-600">
                  We believe information should lead to action. Our content aims
                  to inspire readers to apply new knowledge in ways that
                  positively impact their lives and communities.
                </p>
              </div>
            </div>
          </div>

          <div className=" md:w-1/4 w-full text-gray-600 bg-white shadow-md p-4"> 
          <h1 className=" text-black text-3xl text-center font-semibold mb-2 flex justify-center gap-3.5">
           Our Philosophy
          </h1>
          <p className=" text-center">We’re guided by a few simple principles:
          </p>
          



<p className=" flex gap-3.5 mt-3.5 p-2"> <CheckCircle className=" text-green-600"/> Authenticity over algorithms

</p>
<p className=" flex gap-3.5 mt-3.5 p-2"> <CheckCircle className=" text-green-600"/> Designed to bring value

</p>
<p className=" flex gap-3.5 mt-3.5 p-2"> <CheckCircle className=" text-green-600"/> Connection over clicks

</p>
<p className=" flex gap-3.5 mt-3.5 p-2"> <CheckCircle className=" text-green-600"/> Depth over hot takes

</p>

</div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Meet Our Team
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-1">
                    {member.name}
                  </h4>
                  <p className="text-blue-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  <Link
                    href="/team"
                    className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                  >
                    <span>Full Profile</span>
                    <i className="fa-solid fa-arrow-right ml-2"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/about"
              className="bg-blue-600 text-white px-6 py-3 rounded-md inline-block font-medium hover:bg-blue-700 transition-colors duration-300 shadow-md"
            >
              Learn More About StayUpdated
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
