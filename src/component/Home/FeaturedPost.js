import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'

const FeaturedPost = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [email, setEmail] = useState('');
  
    useEffect(() => {
      setIsVisible(true);
    }, []);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      alert('Thank you for subscribing!');
      setEmail('');
    };
  
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
    const featuredPosts = [
        {
          id: 1,
          title: 'The Art of Mindful Living in a Digital Age',
          excerpt: 'Discover how to stay present and mindful in a world of constant digital distractions.',
          category: 'Mindfulness',
          author: 'Emma Thompson',
          date: 'April 25, 2025',
          image: '/api/placeholder/800/500'
        },
        {
          id: 2,
          title: 'Sustainable Living: Small Changes, Big Impact',
          excerpt: 'Learn practical ways to incorporate eco-friendly habits into your daily routine.',
          category: 'Sustainability',
          author: 'Michael Chen',
          date: 'April 22, 2025',
          image: '/api/placeholder/800/500'
        },
      ];
      const latestPosts = [
        {
          id: 3,
          title: 'The Psychology of Habit Formation',
          excerpt: 'Understanding how habits form and how to develop positive ones for personal growth.',
          category: 'Psychology',
          author: 'Dr. Sarah Johnson',
          date: 'April 20, 2025',
          image: '/api/placeholder/400/300'
        },
        {
          id: 4,
          title: 'Essential Books for Creative Thinkers',
          excerpt: 'A curated collection of books that stimulate creativity and innovation.',
          category: 'Books',
          author: 'James Wilson',
          date: 'April 18, 2025',
          image: '/api/placeholder/400/300'
        },
        {
          id: 5,
          title: 'Morning Rituals to Boost Productivity',
          excerpt: 'Start your day right with these proven morning routines for increased focus and energy.',
          category: 'Lifestyle',
          author: 'Olivia Martinez',
          date: 'April 15, 2025',
          image: '/api/placeholder/400/300'
        },
        {
          id: 6,
          title: 'The Science of Deep Work',
          excerpt: 'How focused, distraction-free work can transform your productivity and creativity.',
          category: 'Productivity',
          author: 'Alex Turner',
          date: 'April 12, 2025',
          image: '/api/placeholder/400/300'
        },
        {
          id: 7,
          title: 'Nature-Inspired Interior Design',
          excerpt: 'Bringing the calming elements of nature into your living space.',
          category: 'Home & Design',
          author: 'Sophia Lee',
          date: 'April 10, 2025',
          image: '/api/placeholder/400/300'
        },
        {
          id: 8,
          title: 'Digital Minimalism for Better Focus',
          excerpt: 'Practical steps to reduce digital clutter and improve mental clarity.',
          category: 'Technology',
          author: 'Daniel Brooks',
          date: 'April 8, 2025',
          image: '/api/placeholder/400/300'
        },
      ];
  return (
    <>
    <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Featured Posts</h2>
            <div className="w-16 h-1 bg-purple-600 mx-auto"></div>
          </div>

          <motion.div 
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            {featuredPosts.map((post) => (
              <motion.div 
                key={post.id}
                variants={fadeIn}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-64">
                  <Image 
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-purple-600 text-white text-sm font-medium px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 hover:text-purple-700 transition-colors duration-300">
                    <Link href={`/post/${post.id}`}>{post.title}</Link>
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">By {post.author}</span>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Latest Posts</h2>
            <div className="w-16 h-1 bg-purple-600 mx-auto"></div>
          </div>

          <motion.div 
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {latestPosts.map((post) => (
              <motion.div 
                key={post.id}
                variants={fadeIn}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <Image 
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center mb-3">
                    <span className="text-xs font-medium text-purple-600 bg-purple-100 px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500 ml-auto">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2 hover:text-purple-700 transition-colors duration-300">
                    <Link href={`/post/${post.id}`}>{post.title}</Link>
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>By {post.author}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Link href="/blog" className="inline-flex items-center text-purple-700 hover:text-purple-800 font-medium transition-colors duration-300">
              View All Posts
              <i className="fa-solid fa-arrow-right ml-2"></i>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 relative h-64 md:h-auto">
                  <Image 
                    src="/api/placeholder/400/600"
                    alt="Blog Author"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 md:w-2/3">
                  <motion.div
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                    variants={fadeIn}
                  >
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">About Mindful Musings</h2>
                    <p className="text-gray-600 mb-6">
                      Welcome to Mindful Musings, a sanctuary for thoughtful exploration and gentle contemplation. 
                      Here, we believe in the power of mindful living, creative expression, and continuous learning.
                    </p>
                    <p className="text-gray-600 mb-6">
                      Our journey began in 2023 with a simple mission: to create a space where ideas flow freely,
                      where we can pause amidst life is chaos to reflect on what truly matters.
                    </p>
                    <Link href="/about" className="inline-flex items-center text-purple-700 hover:text-purple-800 font-medium transition-colors duration-300">
                      Learn More About Us
                      <i className="fa-solid fa-arrow-right ml-2"></i>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={fadeIn}
            >
              <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
              <p className="text-purple-100 mb-8">
                Stay updated with our latest articles, insights, and thoughtful reflections.
                No spam, just meaningful content delivered to your inbox.
              </p>
              <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 justify-center">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="px-4 py-3 rounded-md text-gray-800 w-full md:w-auto md:flex-grow focus:outline-none focus:ring-2 focus:ring-purple-300"
                />
                <button
                  type="submit"
                  className="bg-white text-purple-700 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors duration-300"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-sm text-purple-200 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      </>
  )
}

export default FeaturedPost