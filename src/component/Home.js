import React, { useContext } from 'react';
import {
  BotIcon as Tool,
  Lock,
  SlidersHorizontal,
  FileCog,
  Calendar,
  Clock,
  Search,
  ChevronRight,
  Share2,
  Heart,
  BookmarkPlus,
  TrendingUp
} from 'lucide-react';
import AIContentSection from './ContentCreation';
import Link from 'next/link';
import blogData from "@/utils/data.json"
import { useRouter } from 'next/router';

export default function BlogComponent({data}) {

 

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 font-sans">
      {/* Blog Header */}
      <header className="mb-8">
        <div className="flex items-center gap-2 text-sm text-blue-600 font-medium mb-2">
          <span>Home</span>
          <ChevronRight className="h-3 w-3" />
          <span>Article</span>
          <ChevronRight className="h-3 w-3" />
          <span>AI Tools</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {data?.title}
        </h1>

        <div className="flex justify-between items-center text-gray-500 text-sm mb-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <span>April 25, 2025</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>18 min read</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="text-gray-400 hover:text-red-500">
              <Heart className="h-5 w-5" />
            </button>
            <button className="text-gray-400 hover:text-blue-500">
              <BookmarkPlus className="h-5 w-5" />
            </button>
            <button className="text-gray-400 hover:text-green-500">
              <Share2 className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
        <img
          src="/photo1.webp"
          alt="AI Tools Overview"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Service Icon Banner */}
      <div className="flex items-center gap-3 mb-8 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
        <Tool className="h-5 w-5 text-blue-500" />
        <h2 className="text-xl font-semibold text-gray-800">
          Explore the Most Powerful AI Tools Available Today
        </h2>
      </div>

      {/* Blog Content */}
      <div className="prose max-w-none mb-8">
        <p className="text-lg font-medium text-gray-700 mb-6">
          Artificial Intelligence (AI) is no longer just a futuristic  the backbone of modern digital workflows. From design to productivity, customer support to automation, AI tools are transforming the way we work, create, and communicate.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">What Are AI Tools?</h2>
        <p className='text-gray-900 mb-4 rounded-md p-2 border-l-4 p-4 border-l-blue-500'>
  AI tools are intelligent software applications designed to simulate human-like thinking and problem-solving using advanced technologies such as machine learning, natural language processing, and neural networks. From chatbots like ChatGPT and virtual assistants like Alexa, to platforms that automate writing, coding, design, and data analysis—AI tools are revolutionizing the way individuals and businesses work. These tools help boost productivity, improve decision-making, and reduce manual effort. Whether you’re a content creator, marketer, developer, or business owner, using AI tools can streamline tasks, offer real-time insights, and enhance creativity across various domains.
</p>

<h2 className="text-2xl font-bold text-gray-900 mb-4">Why You Should Care About AI Tools</h2>
<p className="text-gray-900 mb-4 rounded-md p-4 border-l-4 border-l-blue-500 shadow-l-md">
  In todays fast-paced digital world, AI tools arent just a luxury,theyre a necessity. Whether you are a student streamlining research, a business owner automating customer service, or a content creator generating high-quality posts faster, AI tools can save time, cut costs, and enhance productivity. With advancements in artificial intelligence in 2025, these tools are more accurate, intuitive, and accessible than ever before. They empower users to make data-driven decisions, automate repetitive tasks, and stay competitive in an increasingly tech-driven landscape. Simply put, embracing AI is no longer optional it is how you stay ahead.
</p>

        <h2 className="text-xl text-gray-900 font-semibold mt-6 mb-2 flex gap-3.5"><TrendingUp/>  Let’s explore the top AI tools making waves right now:</h2>
      </div>

      {/* AI Tools List */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3.5 mb-4">
          <SlidersHorizontal className="h-6 w-6 text-blue-500" />
          Best AI Tools to Use in 2025
        </h3>

        <ul className="bg-white rounded-xl p-6  space-y-6">
          <li>
            <h3 className="font-semibold text-gray-800 mb-1">1. ChatGPT by OpenAI</h3>
            <p className="text-gray-600 rounded-md p-4 border-l-4 border-l-blue-500 shadow-l-md">
              Probably the most well-known AI chatbot, ChatGPT is now deeply integrated with tools like code interpreter, DALL·E, and browsing capabilities. It’s not just for chatting anymore—it’s a coding assistant, content writer, and even design tool.
            </p>
          </li>
          <li>
            <h3 className="font-semibold text-gray-800 mb-1">2. Notion AI</h3>
            <p className="text-gray-600 rounded-md p-4 border-l-4 border-l-blue-500 shadow-l-md">
              Built right into the Notion workspace, Notion AI helps with summarizing notes, generating action items, rewriting content, and managing documents more efficiently than ever.
            </p>
          </li>
          <li>
            <h3 className="font-semibold text-gray-800 mb-1">3. Midjourney</h3>
            <p className="text-gray-600 rounded-md p-4 border-l-4 border-l-blue-500 shadow-l-md">
              A powerful generative AI art tool, Midjourney produces stunning visuals from simple prompts. Designers, marketers, and creatives are using it for concept art, ads, and even storyboards.
            </p>
          </li>
          <li>
            <h3 className="font-semibold text-gray-800 mb-1">4. GrammarlyGO</h3>
            <p className="text-gray-600 rounded-md p-4 border-l-4 border-l-blue-500 shadow-l-md">
              Grammarly’s AI upgrade includes contextual rewriting, tone adjustments, and goal-based writing support. Great for students and professionals alike.
            </p>
          </li>
          <li>
            <h3 className="font-semibold text-gray-800 mb-1">5. RunwayML</h3>
            <p className="text-gray-600 rounded-md p-4 border-l-4 border-l-blue-500 shadow-l-md">
              Need to remove objects from videos or change backgrounds? RunwayML’s AI video editing suite is a game changer for creators, filmmakers, and agencies.
            </p>
          </li>
          <li>
            <h3 className="font-semibold text-gray-800 mb-1">6. Synthesia</h3>
            <p className="text-gray-600 rounded-md p-4 border-l-4 border-l-blue-500 shadow-l-md">
              This AI video generator allows you to create talking head videos from text using avatars and voice synthesis. Perfect for training, marketing, or tutorials.
            </p>
          </li>
          <li>
            <h3 className="font-semibold text-gray-800 mb-1">7. Jasper AI</h3>
            <p className="text-gray-600 rounded-md p-4 border-l-4 border-l-blue-500 shadow-l-md">
              A favorite among marketers, Jasper excels at creating blogs, ads, social media posts, and even SEO-optimized content that ranks.
            </p>
          </li>
        </ul>
      </div>

     

      {/* Benefits Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 ">Benefits of Using AI Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg">
            <h3 className="font-semibold text-gray-800 mb-2">Save Time</h3>
            <p className="text-gray-600">
              Automate repetitive tasks like editing, organizing, or writing with minimal human input.
            </p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg">
            <h3 className="font-semibold text-gray-800 mb-2">Boost Creativity</h3>
            <p className="text-gray-600">
              Tools like Midjourney or ChatGPT help you brainstorm ideas, explore new styles, or break through creative blocks.
            </p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg">
            <h3 className="font-semibold text-gray-800 mb-2">Better Accuracy</h3>
            <p className="text-gray-600">
              AI-based grammar tools or code generators reduce human errors and speed up quality assurance.
            </p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg">
            <h3 className="font-semibold text-gray-800 mb-2">SEO Optimization</h3>
            <p className="text-gray-600">
              Tools like SurferSEO or Jasper help you optimize blog content for specific keywords, improving visibility.
            </p>
          </div>
        </div>
      </div>

      {/* Common Use Cases */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Common AI Use Cases in 2025</h2>
        <div className="bg-white rounded-xl p-6 shadow-md">
          <ul className="list-disc pl-5 mb-0 text-gray-700 space-y-2">
            <li>Writing blogs, product descriptions, or captions using AI copywriters</li>
            <li>Generating images, logos, or videos via generative AI</li>
            <li>Analyzing user feedback with sentiment analysis tools</li>
            <li>Building chatbots for websites or apps to automate customer service</li>
            <li>Creating resumes, cover letters, and job applications</li>
            <li>Optimizing email campaigns and A/B testing subject lines</li>
            <li>Translating languages and real-time interpretation with tools like DeepL or Google Translate AI</li>
          </ul>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mb-12 bg-gradient-to-r from-blue-500 to-blue-700 text-white p-8 rounded-xl">
        <h2 className="text-2xl font-bold mb-4">Start Exploring AI Tools Today</h2>
        <p className="mb-6">
          Don’t get left behind—AI is shaping the future across every industry. Try one of these tools today and unlock new productivity, creativity, and growth.
        </p>
        <button className="bg-white text-blue-600 font-medium px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
          Discover More AI Tools
        </button>
      </div>

      {/* Related Posts */}
      <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Explore Related AI Resources</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {data?.relatedPost?.map((item,i)=>{
        return (
          <div key={i} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
          <img src={item.img} alt={item.title} className="w-full h-40 object-cover" />
          <div className="p-4">
            <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.desc}</p>
            <Link href="/blog/" className="text-blue-600 font-medium text-sm flex items-center">
              Learn more <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </div>
        )
      })}
      </div>
      </div>
      
       
      
     

      {/* Hidden Keywords for SEO */}
      <div className="sr-only">
        <h2>Keywords</h2>
        <p>
          AI tools 2025, best AI tools, top AI software, AI productivity apps, generative AI, AI content writing,
          ChatGPT tools, Notion AI, Midjourney alternatives, AI for designers, AI for developers, AI business tools,
          marketing automation AI, artificial intelligence in productivity, top AI Chrome extensions, AI art, Jasper AI,
          Runway ML, Synthesia, DeepL, SurferSEO, AI automation platforms, no-code AI tools.
        </p>
      </div>
    </div>
  );
}
