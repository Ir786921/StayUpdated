'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What makes StayUpdated different from other news sites?",
      answer: "StayUpdated goes beyond traditional news reporting by offering carefully curated content that emphasizes quality over quantity. We focus on the context behind the headlines, providing in-depth analysis and practical insights that help our readers truly understand issues that matter. Additionally, our community-focused approach means we actively incorporate reader feedback into our editorial process."
    },
    {
      question: "How often is new content published?",
      answer: "We publish new articles daily across our main categories. Feature articles and in-depth analysis pieces are typically published three times per week. Breaking news and trending topics are covered as they happen, with regular updates throughout the day. Our weekly newsletter, delivered every Sunday, compiles the most important stories you might have missed."
    },
    {
      question: "Can I contribute content to StayUpdated?",
      answer: "Absolutely! We welcome guest contributors who bring unique perspectives and expertise to our platform. If you're interested in writing for StayUpdated, visit our 'Write for Us' page where you'll find our submission guidelines, preferred topics, and the application process. We particularly value contributions from industry experts, researchers, and those with firsthand experience in our coverage areas."
    },
    {
      question: "Do you offer a mobile app?",
      answer: "Yes, the StayUpdated mobile app is available for both iOS and Android devices. Our app offers a seamless reading experience, personalized content recommendations, offline reading capabilities, and push notifications for breaking news or topics you follow. You can download it from the App Store or Google Play Store by searching for 'StayUpdated'."
    },
    {
      question: "How can I get in touch with the editorial team?",
      answer: "You can reach our editorial team through several channels. For general inquiries, use our contact form on the website or email us at editor@stayupdated.com. For news tips or story suggestions, email tips@stayupdated.com. We also respond to reader comments on our articles and messages through our social media channels. For press-related inquiries, please contact press@stayupdated.com."
    },
    {
      question: "Is StayUpdated content accessible for readers with disabilities?",
      answer: "Accessibility is a core commitment at StayUpdated. Our website is designed to meet WCAG 2.1 AA standards, including proper heading structures, alt text for images, keyboard navigation, and compatibility with screen readers. We provide transcripts for our podcasts and captions for video content. If you encounter any accessibility issues or have suggestions for improvement, please contact our accessibility team at access@stayupdated.com."
    },
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Frequently Asked Questions</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Get answers to the most common questions about StayUpdated and how to make the most of our platform.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="mb-4"
            >
              <button
                onClick={() => handleToggle(index)}
                className={`w-full text-left p-6 rounded-lg flex justify-between items-center ${
                  activeIndex === index 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                } transition-colors duration-300`}
              >
                <span className="font-bold text-lg">{faq.question}</span>
                <span className="text-xl">
                  {activeIndex === index ? (
                    <i className="fa-solid fa-minus"></i>
                  ) : (
                    <i className="fa-solid fa-plus"></i>
                  )}
                </span>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="bg-white p-6 border border-gray-200 rounded-b-lg shadow-sm">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="p-8 bg-gray-100 rounded-lg max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Have a different question?</h3>
            <p className="text-gray-600 mb-6">
              Can not find what you are looking for? We are here to help! Get in touch with our support team.
            </p>
            <a 
              href="/contact" 
              className="bg-blue-600 text-white px-6 py-3 rounded-md inline-block font-medium hover:bg-blue-700 transition-colors duration-300 shadow-md"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}