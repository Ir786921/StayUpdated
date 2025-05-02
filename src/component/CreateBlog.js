"use client"
import { useState, useRef } from 'react';
import { Calendar, Image, AlignLeft, ListFilter, User, FileText, Tag, Save, X, Upload, Layout, Settings, Eye, Share2, ChevronRight, ChevronDown, Plus, PenToolIcon, Calendar1, BookCopy } from 'lucide-react';

export default function BlogEditor() {
  const [formData, setFormData] = useState({
    title: 'Blog title here',
    excerpt: 'Brief notes about your content goes here',
    category: 'Technology',
    author: 'Text author',
    date: new Date().toISOString().split('T')[0],
    content: [
      { type: 'paragraph', content: 'Paragraph will come here...' }
    ],
    image: null
  });
  
  const [imagePreview, setImagePreview] = useState("/api/placeholder/600/400");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [activeTab, setActiveTab] = useState('content');
  const [expandedSection, setExpandedSection] = useState('blogContent');
  const fileInputRef = useRef(null);
  
  const categories = [
    "Technology", "Travel", "Food", "Health", 
    "Lifestyle", "Business", "Art", "Science", 
    "Education", "Personal"
  ];
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name !== 'content') {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };
  
  const handleContentChange = (index, value) => {
    const updatedContent = [...formData.content];
    updatedContent[index].content = value;
    setFormData(prev => ({ ...prev, content: updatedContent }));
  };
  
  const addContentBlock = (type, index) => {
    const newBlock = { type, content: '' };
    const updatedContent = [...formData.content];
    updatedContent.splice(index + 1, 0, newBlock);
    setFormData(prev => ({ ...prev, content: updatedContent }));
  };
  
  const removeContentBlock = (index) => {
    if (formData.content.length > 1) {
      const updatedContent = formData.content.filter((_, i) => i !== index);
      setFormData(prev => ({ ...prev, content: updatedContent }));
    }
  };
  
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({ ...prev, image: file }));
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    console.log("Blog post data:", formData);
    // Here you would typically send the data to your API
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 3000);
  };
  
  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const renderContentBlock = (block, index) => {
    switch (block.type) {
      case 'heading':
        return <h2 key={index} className="text-3xl font-bold mt-8 mb-4 text-white">{block.content || 'Heading'}</h2>;
      
      case 'subheading':
        return <h3 key={index} className="text-2xl font-semibold mt-6 mb-3 text-gray-200">{block.content || 'Subheading'}</h3>;
      
      case 'paragraph':
        return <p key={index} className="text-lg leading-relaxed mb-4 text-gray-200">{block.content || 'Paragraph text goes here'}</p>;
      
      case 'list':
        return (
          <ul key={index} className="list-disc pl-6 mb-4 space-y-2">
            {(block.content ? block.content.split('\n') : ['List item']).map((item, i) => (
              <li key={i} className="text-lg text-gray-200">{item}</li>
            ))}
          </ul>
        );
      
      case 'quote':
        return (
          <blockquote key={index} className="border-l-4 border-indigo-500 pl-4 py-2 mb-4 italic text-xl text-gray-200">
            {block.content || 'Quote text'}
          </blockquote>
        );
      
      default:
        return <p key={index} className="text-lg mb-4">{block.content || 'Content'}</p>;
    }
  };

  return (
    <div className="flex md:flex-row flex-col h-screen bg-gray-50">
      {/* Left Sidebar */}
      <div className=" bg-white border-r border-gray-200 flex flex-col md:w-1/5 w-full">
        <div className="p-4 border-b border-gray-200">
          <h2 className="font-semibold text-lg text-gray-800">Create post</h2>
        </div>
        
        
        
        <div className="flex-1 overflow-y-auto">
          {/* Blog Content Section */}
          <div 
            className="p-4 cursor-pointer border-b border-gray-100 hover:bg-gray-50" 
            onClick={() => toggleSection('blogContent')}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Layout size={18} className="text-gray-500 mr-2" />
                <span className="font-medium text-gray-800">Blog Content</span>
              </div>
              {expandedSection === 'blogContent' ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
            </div>
          </div>
          
          {expandedSection === 'blogContent' && (
            <div className="p-4 pl-8 space-y-4 bg-gray-50 border-b border-gray-100">
              <div className="space-y-2">
                <label className="flex items-center text-sm font-medium text-gray-700">
                  <FileText className="mr-2 h-4 w-4 text-blue-500" />
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Enter blog title"
                  className="w-full text-gray-500 p-2 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div className="space-y-2">
                <label className="flex items-center text-sm font-medium text-gray-700">
                  <AlignLeft className="mr-2 h-4 w-4 text-blue-500" />
                  Excerpt
                </label>
                <textarea
                  name="excerpt"
                  value={formData.excerpt}
                  onChange={handleInputChange}
                  placeholder="Brief summary"
                  className="w-full p-2 text-gray-500 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500 h-20"
                />
              </div>
              
              <div className="space-y-2">
                <label className="flex items-center text-sm font-medium text-gray-700">
                  <User className="mr-2 h-4 w-4 text-blue-500" />
                  Author
                </label>
                <input
                  type="text"
                  name="author"
                  value={formData.author}
                  onChange={handleInputChange}
                  placeholder="Author name"
                  className="w-full p-2 text-gray-500 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div className="space-y-2">
                <label className="flex items-center text-sm font-medium text-gray-700">
                  <Tag className="mr-2 h-4 w-4 text-blue-500" />
                  Category
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full p-2 text-sm text-gray-500 border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select a category</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="flex items-center text-sm font-medium text-gray-700">
                  <Calendar className="mr-2 h-4 w-4 text-blue-500" />
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full text-gray-500 p-2 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          )}
          
          {/* Page Header Section */}
          <div 
            className="p-4 cursor-pointer border-b border-gray-100 hover:bg-gray-50" 
            onClick={() => toggleSection('pageHeader')}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Layout size={18} className="text-gray-500 mr-2" />
                <span className="font-medium text-gray-800">Page Header</span>
              </div>
              {expandedSection === 'pageHeader' ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
            </div>
          </div>
          
          {expandedSection === 'pageHeader' && (
            <div className="p-4 pl-8 space-y-4 bg-gray-50 border-b border-gray-100">
              <div className="space-y-2">
                <label className="flex items-center text-sm font-medium text-gray-700">
                  <Image className="mr-2 h-4 w-4 text-gray-500" />
                  Featured Image
                </label>
                <div 
                  className="border border-dashed border-gray-300 rounded p-4 text-center cursor-pointer hover:border-blue-500 transition duration-300"
                  onClick={() => fileInputRef.current.click()}
                >
                  {imagePreview ? (
                    <div className="relative">
                      <img 
                        src={imagePreview} 
                        alt="Preview" 
                        className="w-full h-32 object-cover rounded" 
                      />
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setImagePreview(null);
                          setFormData(prev => ({ ...prev, image: null }));
                          if (fileInputRef.current) fileInputRef.current.value = '';
                        }}
                        className="absolute top-1 right-1 bg-white rounded-full p-1 shadow-md hover:bg-red-100"
                      >
                        <X className="h-4 w-4 text-red-500" />
                      </button>
                    </div>
                  ) : (
                    <>
                      <Upload className="mx-auto h-8 w-8 text-gray-400" />
                      <p className="mt-1 text-xs text-gray-500">Upload image</p>
                    </>
                  )}
                  <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </div>
              </div>
            </div>
          )}
          
          {/* Related Posts Section */}
         
        </div>
      </div>
      
      {/* Main Content Area */}
      <div className="flex flex-col md:w-4/5 w-full">
        {/* Top Navigation */}
        <div className="bg-white/90 backdrop-blur-sm border-b border-gray-200 flex items-center justify-between p-4 shadow-sm transition-all duration-300">
    <div className="flex text-indigo-600 items-center space-x-3">
      <BookCopy/>
      <h1 className="font-medium text-lg tracking-tight">Write and Preview your blog</h1>
    </div>
    <div className="flex space-x-2">
      <button className="p-2 px-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300">
        Publish
      </button>
    </div>
  </div>
        {/* Blog Content Preview */}
        <div className="flex-1 overflow-y-auto p-4 w-full ">
          <div className="w-full p-8 shadow-sm rounded-sm bg-gradient-to-b from-gray-800 to-gray-900">
            <p className=' bg-gradient-to-r from-indigo-600 to-purple-600 p-1 w-36 text-center px-1 mb-2 rounded-full'>{formData?.category}</p>
            {/* Title */}
            <h1 className="text-4xl font-bold text-gray-300 mb-2">{formData.title}</h1>
             
            <p className="text-xl font-bold text-gray-300 mb-2">{formData?.excerpt}</p>

            {/* Author */}
           <div className=' flex justify-between'>
           <p className="text-gray-300 mb-4 flex justify-center items-center gap-3.5 text-lg"><PenToolIcon className=' text-indigo-600'/> {formData.author}</p>
           <p className="text-gray-300 mb-4 flex justify-center items-center gap-3.5"><Calendar1 className=' text-indigo-600'/> {formData?.date}</p>
           </div>
            
            {/* Social Links */}
          
            
            {/* Featured Image */}
            <div className="border border-neutral-400 rounded-xl overflow-hidden mb-6 shadow-md transition-all duration-300 hover:shadow-xl transform hover:scale-[1.01]">
        <img 
          src={imagePreview} 
          alt="Add Image From SideBar " 
          className="w-full h-72 object-cover" 
        />
      </div>
            
            {/* Content Blocks */}
            <div className="prose prose-lg max-w-none">
              {formData.content.map((block, index) => renderContentBlock(block, index))}
            </div>
            
            {/* Content Editor */}
            <div className="mt-8 border-t border-gray-200 pt-6">
              <div className="mb-4 flex justify-between items-center">
                <h3 className="font-medium text-white">Content Blocks</h3>
                <button onClick={() => addContentBlock('paragraph', formData.content.length - 1)} className="flex items-center text-blue-600 text-sm">
                  <Plus size={16} className="mr-1" /> Add Block
                </button>
              </div>
              
              <div className="space-y-4">
                {formData.content.map((block, index) => (
                  <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="flex justify-between items-center mb-2">
                    <select
                  value={block.type}
                  onChange={(e) => {
                    const updatedContent = [...formData.content];
                    updatedContent[index].type = e.target.value;
                    setFormData(prev => ({ ...prev, content: updatedContent }));
                  }}
                  className="text-sm border border-gray-300 dark:border-gray-600 rounded-md p-2 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-300"
                >
                  <option value="paragraph">Paragraph</option>
                  <option value="heading">Heading</option>
                  <option value="subheading">Subheading</option>
                  <option value="list">Bullet List</option>
                  <option value="quote">Quote</option>
                </select>
                      
                      <div className="flex space-x-2">
                        <button
                          type="button"
                          onClick={() => addContentBlock(block.type, index)}
                          className="p-1 text-gray-500 hover:text-blue-600 rounded"
                        >
                          <Plus size={16} />
                        </button>
                        <button
                          type="button"
                          onClick={() => removeContentBlock(index)}
                          disabled={formData.content.length === 1}
                          className={`p-1 rounded ${formData.content.length === 1 ? 'text-gray-300' : 'text-gray-500 hover:text-red-500'}`}
                        >
                          <X size={16} />
                        </button>
                      </div>
                    </div>
                    
                    <textarea
                      value={block.content}
                      onChange={(e) => handleContentChange(index, e.target.value)}
                      placeholder={`Write your ${block.type} here...`}
                      className="w-full p-2 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500 h-24"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Success Message */}
      {showSuccessMessage && (
        <div className="fixed bottom-6 right-6 bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded shadow-md">
          <div className="flex">
            <div className="py-1">
              <svg className="h-6 w-6 text-green-500 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <p className="font-bold">Success!</p>
              <p className="text-sm">Your blog post has been published.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}