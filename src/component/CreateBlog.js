"use client"
import { useState, useRef } from 'react';
import { Calendar, Image, AlignLeft, ListFilter, User, FileText, Tag, Save, X, Upload, Layout, Settings, Eye, Share2, ChevronRight, ChevronDown, Plus } from 'lucide-react';

export default function BlogEditor() {
  const [formData, setFormData] = useState({
    title: 'Blog title here',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam ipsum, sollicitudin vel magna et, imperdiet diam.',
    category: 'Technology',
    author: 'Text author',
    date: new Date().toISOString().split('T')[0],
    content: [
      { type: 'paragraph', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam ipsum, sollicitudin vel magna et, imperdiet diam.' }
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
        return <h2 key={index} className="text-3xl font-bold mt-8 mb-4 text-gray-800">{block.content || 'Heading'}</h2>;
      
      case 'subheading':
        return <h3 key={index} className="text-2xl font-semibold mt-6 mb-3 text-gray-700">{block.content || 'Subheading'}</h3>;
      
      case 'paragraph':
        return <p key={index} className="text-lg leading-relaxed mb-4 text-gray-600">{block.content || 'Paragraph text goes here'}</p>;
      
      case 'list':
        return (
          <ul key={index} className="list-disc pl-6 mb-4 space-y-2">
            {(block.content ? block.content.split('\n') : ['List item']).map((item, i) => (
              <li key={i} className="text-lg text-gray-600">{item}</li>
            ))}
          </ul>
        );
      
      case 'quote':
        return (
          <blockquote key={index} className="border-l-4 border-indigo-500 pl-4 py-2 mb-4 italic text-xl text-gray-600">
            {block.content || 'Quote text'}
          </blockquote>
        );
      
      default:
        return <p key={index} className="text-lg mb-4">{block.content || 'Content'}</p>;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Left Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <h2 className="font-semibold text-lg text-gray-800">Edit post</h2>
        </div>
        
        <div className="flex border-b border-gray-200">
          <button 
            className={`flex-1 py-3 text-sm font-medium ${activeTab === 'add' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('add')}
          >
            Add
          </button>
          <button 
            className={`flex-1 py-3 text-sm font-medium ${activeTab === 'contents' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('contents')}
          >
            Contents
          </button>
          <button 
            className={`flex-1 py-3 text-sm font-medium ${activeTab === 'theme' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('theme')}
          >
            Theme
          </button>
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
                  <FileText className="mr-2 h-4 w-4 text-gray-500" />
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Enter blog title"
                  className="w-full p-2 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div className="space-y-2">
                <label className="flex items-center text-sm font-medium text-gray-700">
                  <AlignLeft className="mr-2 h-4 w-4 text-gray-500" />
                  Excerpt
                </label>
                <textarea
                  name="excerpt"
                  value={formData.excerpt}
                  onChange={handleInputChange}
                  placeholder="Brief summary"
                  className="w-full p-2 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500 h-20"
                />
              </div>
              
              <div className="space-y-2">
                <label className="flex items-center text-sm font-medium text-gray-700">
                  <User className="mr-2 h-4 w-4 text-gray-500" />
                  Author
                </label>
                <input
                  type="text"
                  name="author"
                  value={formData.author}
                  onChange={handleInputChange}
                  placeholder="Author name"
                  className="w-full p-2 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div className="space-y-2">
                <label className="flex items-center text-sm font-medium text-gray-700">
                  <Tag className="mr-2 h-4 w-4 text-gray-500" />
                  Category
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full p-2 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
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
                  <Calendar className="mr-2 h-4 w-4 text-gray-500" />
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full p-2 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
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
          <div 
            className="p-4 cursor-pointer border-b border-gray-100 hover:bg-gray-50" 
            onClick={() => toggleSection('relatedPosts')}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Layout size={18} className="text-gray-500 mr-2" />
                <span className="font-medium text-gray-800">Related posts listing</span>
              </div>
              {expandedSection === 'relatedPosts' ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
            </div>
          </div>
          
          {/* Page Footer Section */}
          <div 
            className="p-4 cursor-pointer border-b border-gray-100 hover:bg-gray-50" 
            onClick={() => toggleSection('pageFooter')}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Layout size={18} className="text-gray-500 mr-2" />
                <span className="font-medium text-gray-800">Page footer</span>
              </div>
              {expandedSection === 'pageFooter' ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Top Navigation */}
        <div className="bg-white border-b border-gray-200 flex items-center justify-between p-4">
          <div className="flex space-x-4">
            <button className={`p-2 text-sm font-medium ${activeTab === 'content' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`} onClick={() => setActiveTab('content')}>
              Content
            </button>
            <button className={`p-2 text-sm font-medium ${activeTab === 'settings' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`} onClick={() => setActiveTab('settings')}>
              Settings
            </button>
            <button className={`p-2 text-sm font-medium ${activeTab === 'optimize' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`} onClick={() => setActiveTab('optimize')}>
              Optimize
            </button>
            <div className="relative">
              <button className={`p-2 text-sm font-medium ${activeTab === 'publishing' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`} onClick={() => setActiveTab('publishing')}>
                Publishing options
              </button>
              <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs px-1 rounded">new</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="px-3 py-1 border border-gray-300 rounded text-sm flex items-center">
              <span className="text-gray-600 mr-1">Distraction Free Mode</span>
              <input type="checkbox" className="ml-1" />
            </div>
            
            <div className="flex space-x-2">
              <button className="p-2 rounded border border-gray-300">
                <Eye size={16} />
              </button>
              <button className="p-2 rounded bg-orange-500 text-white">
                Publish
              </button>
            </div>
          </div>
        </div>
        
        {/* Blog Content Preview */}
        <div className="flex-1 overflow-y-auto bg-gray-50 p-8">
          <div className="max-w-3xl mx-auto bg-white p-8 shadow-sm rounded-sm">
            {/* Title */}
            <h1 className="text-4xl font-bold text-gray-900 mb-2">{formData.title}</h1>
            
            {/* Author */}
            <p className="text-gray-600 mb-4">{formData.author}</p>
            
            {/* Social Links */}
            <div className="flex space-x-3 mb-6">
              <button className="p-1 text-gray-500 hover:text-blue-500">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </button>
              <button className="p-1 text-gray-500 hover:text-blue-800">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"></path>
                </svg>
              </button>
              <button className="p-1 text-gray-500 hover:text-blue-600">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                </svg>
              </button>
            </div>
            
            {/* Featured Image */}
            <div className="rounded-lg overflow-hidden mb-6">
              <img 
                src={imagePreview} 
                alt="Featured" 
                className="w-full h-60 object-cover" 
              />
            </div>
            
            {/* Content Blocks */}
            <div className="prose prose-lg max-w-none">
              {formData.content.map((block, index) => renderContentBlock(block, index))}
            </div>
            
            {/* Content Editor */}
            <div className="mt-8 border-t border-gray-200 pt-6">
              <div className="mb-4 flex justify-between items-center">
                <h3 className="font-medium text-gray-800">Content Blocks</h3>
                <button onClick={() => addContentBlock('paragraph', formData.content.length - 1)} className="flex items-center text-blue-600 text-sm">
                  <Plus size={16} className="mr-1" /> Add Block
                </button>
              </div>
              
              <div className="space-y-4">
                {formData.content.map((block, index) => (
                  <div key={index} className="border border-gray-200 rounded-md p-3 bg-white shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                      <select
                        value={block.type}
                        onChange={(e) => {
                          const updatedContent = [...formData.content];
                          updatedContent[index].type = e.target.value;
                          setFormData(prev => ({ ...prev, content: updatedContent }));
                        }}
                        className="text-sm border border-gray-300 rounded p-1 bg-white text-gray-700"
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