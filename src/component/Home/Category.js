import React, { useEffect, useState } from 'react'
import {motion} from "framer-motion"
import {
  Brain,
  Leaf,
  HeartPulse,
  Book,
  Coffee,
  ListChecks,
} from 'lucide-react';

const Category = () => {
        const [isMenuOpen, setIsMenuOpen] = useState(false);
        const [isVisible, setIsVisible] = useState(false);
        const [email, setEmail] = useState('');
      
            useEffect(() => {
              setIsVisible(true);
            }, []);
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
    
      
      const categories = [
        { name: 'Technology', icon: <Brain/>, color: 'bg-purple-100 text-purple-600' },
        { name: 'Healthcare', icon: <Leaf/>, color: 'bg-green-100 text-green-600' },
        { name: 'Grooming', icon: <HeartPulse/>, color: 'bg-red-100 text-red-600' },
        { name: 'Books', icon: <Book/>, color: 'bg-blue-100 text-blue-600' },
        { name: 'Lifestyle', icon: <Coffee/>, color: 'bg-yellow-100 text-yellow-600' },
        { name: 'Fashion', icon: <ListChecks/>, color: 'bg-indigo-100 text-indigo-600' },
      ];
      
  return (
    <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Explore Categories</h2>
        <div className="w-16 h-1 bg-purple-600 mx-auto"></div>
      </div>

      <motion.div 
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={staggerContainer}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
      >
        {categories.map((category, index) => (
          <motion.div 
            key={index}
            variants={fadeIn}
            className={`${category.color} rounded-lg p-6 text-center hover:shadow-md transition-all duration-300 transform hover:-translate-y-1`}
          >
            <div className="mb-4 items-center flex justify-center">
              {category.icon}
            </div>
            <h3 className="font-bold">{category.name}</h3>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
  )
}

export default Category