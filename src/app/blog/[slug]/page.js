"use client"
import BlogComponent from "@/component/Home";
import { useRouter } from "next/router";
import React from "react";
import blogData from "@/utils/data.json"
import { use } from 'react';

export default function DifferentBlogPage({ params }) {
  // Unwrap params with React.use()
  const unwrappedParams = use(params);
  const { slug } = unwrappedParams;
  
  console.log(typeof slug);
  console.log(blogData);
  
  // Add return statement to filter callback
  const particularBlog = blogData && blogData.filter((item) => {
    return item?.slug === slug; // Note the return and === instead of ==
  });
  
  console.log(particularBlog);
  
  // Add safety check for particularBlog[0]
  return (
    <>
      {particularBlog && particularBlog.length > 0 ? (
        <BlogComponent data={particularBlog[0]} />
      ) : (
        <div>Blog not found</div>
      )}
    </>
  );
}
