// components/BlogCard.js
"use client"
import { ArrowRight } from 'lucide-react';
import blogData from  "@/utils/data.json"
import { useContext } from 'react';
import { useSearch } from './context/searchContext';

 function BlogCard({ image, title, description, slug }) {
  return (
    <div className="w-72 rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2 hover:text-blue-500 transition-colors duration-300">
          {title}
        </h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <a
          href={`/blog/${slug}`}
          className="flex items-center text-blue-500 font-medium hover:text-blue-700 transition-colors duration-300"
        >
          Read More
          <ArrowRight className="ml-2" />
        </a>
      </div>
    </div>
  );
}


  export default function BlogList() {
    const {searchText} = useSearch()
    console.log(searchText);
    
    
    const newData = blogData.filter((item)=>{
      return item?.title?.toLowerCase().includes(searchText.toLowerCase());
    })
    console.log(newData);
    
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-6 gap-6 ">
        {searchText && newData.length > 0 ? (newData.map((post) => (
          <BlogCard
            key={post.slug}
            image={post.image}
            title={post.title}
            description={post.description}
            slug={post.slug}
          />
        ))):(blogData.map((post) => (
          <BlogCard
            key={post.slug}
            image={post.image}
            title={post.title}
            description={post.description}
            slug={post.slug}
          />
        )))}
      </div>
    );
  }
 
//   // pages/blog/index.js
//   import BlogList from '../../components/BlogList';
  
//   export default function BlogPage() {
//     return (
//       <div className="container mx-auto p-6">
//         <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
//           Latest Blog Posts
//         </h1>
//         <BlogList />
//       </div>
//     );
//   }
