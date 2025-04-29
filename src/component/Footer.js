import Link from 'next/link'
import React from 'react'

const Footer = () => {
    const categories = [
        { name: 'Mindfulness', icon: 'fa-solid fa-brain', color: 'bg-purple-100 text-purple-600' },
        { name: 'Sustainability', icon: 'fa-solid fa-leaf', color: 'bg-green-100 text-green-600' },
        { name: 'Psychology', icon: 'fa-solid fa-heart-pulse', color: 'bg-red-100 text-red-600' },
        { name: 'Books', icon: 'fa-solid fa-book', color: 'bg-blue-100 text-blue-600' },
        { name: 'Lifestyle', icon: 'fa-solid fa-mug-hot', color: 'bg-yellow-100 text-yellow-600' },
        { name: 'Productivity', icon: 'fa-solid fa-list-check', color: 'bg-indigo-100 text-indigo-600' },
      ];
  return (
    <footer className="bg-gray-800 text-gray-300 py-12">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-8">
        {/* Logo & About */}
        <div>
          <div className="flex items-center mb-4">
            <span className="text-purple-400 mr-2">
              <i className="fa-solid fa-feather-pointed text-xl"></i>
            </span>
            <span className="text-xl font-bold text-white font-serif">Mindful Musings</span>
          </div>
          <p className="text-sm text-gray-400 mb-4">
            A sanctuary for thoughtful exploration and gentle contemplation.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <i className="fa-brands fa-pinterest"></i>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="text-gray-400 hover:text-white transition-colors duration-300">Home</Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-400 hover:text-white transition-colors duration-300">About</Link>
            </li>
            <li>
              <Link href="/blog" className="text-gray-400 hover:text-white transition-colors duration-300">All Posts</Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Categories</h3>
          <ul className="space-y-2">
            {categories.slice(0, 4).map((category, index) => (
              <li key={index}>
                <Link href={`/category/${category.name.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors duration-300">
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-start">
              <i className="fa-solid fa-envelope mt-1 mr-3 text-purple-400"></i>
              <span>hello@mindfulmusings.com</span>
            </li>
            <li className="flex items-start">
              <i className="fa-solid fa-location-dot mt-1 mr-3 text-purple-400"></i>
              <span>123 Serenity Lane, Mindful City</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-12 pt-8 text-sm text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Mindful Musings. All rights reserved.</p>
      </div>
    </div>
  </footer>
  )
}

export default Footer