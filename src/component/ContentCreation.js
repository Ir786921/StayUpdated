import React from 'react';
import {
  VideoIcon,
  SearchIcon,
  PenLineIcon,
  Layers3Icon,
} from 'lucide-react';

const tools = [
  {
    id: 1,
    icon: <VideoIcon className="text-blue-600 w-7 h-7" />,
    name: 'Pictory',
    subtitle: 'Transforming Text into Engaging Videos',
    features: [
      'AI Text Summarizer',
      'Stock Media Library',
      'Voiceover Options',
      'Branding Tools',
      'Subtitles & Captions',
    ],
    useCase: `Suppose you're a content marketer who writes in-depth blog articles every week. With Pictory, you can automatically turn each post into a short-form explainer video — complete with branded visuals, background music, and narration. This allows you to publish the article on your blog and simultaneously share its video version on YouTube, Instagram Reels, or LinkedIn, drastically expanding your reach without hiring a video editor.`,
    benefits: [
      'Time-saving automation of video creation',
      'Content repurposing boosts ROI',
      'Increased engagement across platforms',
      'Improved accessibility via subtitles and voiceovers',
    ],
  },
  {
    id: 2,
    icon: <SearchIcon className="text-green-600 w-7 h-7" />,
    name: 'Surfer SEO',
    subtitle: 'AI-Powered SEO Optimization for Content Writers',
    features: [
      'Content Editor with real-time keyword suggestions',
      'SERP Analyzer for competitor comparison',
      'Audit Tool for optimizing existing content',
      'Keyword Clustering for topic relevance',
    ],
    useCase: `Suppose you're writing a blog post targeting “best AI tools for students.” Surfer SEO analyzes the top-performing content and gives you a blueprint — for headings, keyword usage, and structure. You can integrate this with Jasper or write directly in Surfer's editor for SEO-optimized content.`,
    benefits: [
      'Improved Google rankings through proven strategies',
      'Eliminates SEO guesswork with real-time data',
      'Revives underperforming content with its audit tool',
      'Increases dwell time by aligning with user intent',
    ],
  },
  {
    id: 3,
    icon: <PenLineIcon className="text-rose-500 w-7 h-7" />,
    name: 'Peppertype.ai',
    subtitle: 'Fast-Track Your Content Ideation and Copy Creation',
    features: [
      'Content Idea Generator',
      'Multiple Copy Variations',
      'Adjustable Tone Modulation',
      'Instant Export for social scheduling',
    ],
    useCase: `Running a campaign and need multiple ad variations? Peppertype can instantly generate Facebook ad copies with various tones and angles. Similarly, it helps bloggers with fresh blog topics and outlines when stuck with writer's block.`,
    benefits: [
      'Helps overcome creative blocks',
      'Produces content variations quickly for A/B testing',
      'Supports multiple formats: blogs, ads, product copy',
      'Beginner-friendly and super intuitive',
    ],
  },
  {
    id: 4,
    icon: <Layers3Icon className="text-indigo-600 w-7 h-7" />,
    name: 'Content at Scale',
    subtitle: 'Publish Ready-to-Rank Long-Form AI Blogs Instantly',
    features: [
      'One-Click Blog Generation',
      'Passes AI-content detection tools',
      'Built-in Internal Linking & Meta Generation',
      'Plagiarism-Free Originality',
    ],
    useCase: `Managing a content agency and need 30 optimized blogs for a client? This tool creates fully formatted articles with titles, subheadings, meta descriptions, and calls to action in one click — significantly reducing the need for writers and editors.`,
    benefits: [
      'Saves hundreds of hours in bulk content production',
      'SEO-ready out of the box',
      'Minimizes human editing while maximizing ranking potential',
      'Delivers natural-sounding content undetectable as AI',
    ],
  },
];

const AIContentSection = () => {
  return (
    <section className="px-6 py-12 bg-gray-50 text-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center">
          🚀 Top AI Tools for Content Creation in 2025
        </h2>
        <div className="space-y-12">
          {tools.map((tool) => (
            <div
              key={tool.id}
              className="bg-white rounded-xl shadow-md p-6 transition-transform duration-300 hover:scale-[1.01] hover:shadow-lg border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 bg-gray-100 rounded-full">
                  {tool.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">{tool.name}</h3>
                  <p className="text-sm text-gray-500">{tool.subtitle}</p>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-lg mb-1 text-gray-800">✨ Key Features:</h4>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  {tool.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-lg mb-1 text-gray-800">📘 Use Case:</h4>
                <p className="text-gray-700">{tool.useCase}</p>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-1 text-gray-800">💡 Benefits:</h4>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  {tool.benefits.map((benefit, idx) => (
                    <li key={idx}>{benefit}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIContentSection;
