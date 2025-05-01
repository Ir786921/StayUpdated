"use client";
import { Menu, Plus, Search, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useSearch } from "./context/searchContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const {searchText,setSearchText} = useSearch();
 
 

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href={"/"} className="text-2xl font-bold text-blue-600">StayUpdated</Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/blog" className="text-gray-700 hover:text-blue-500 transition">Articles</Link>
          <Link href="/newsletter" className="text-gray-700 hover:text-blue-500 transition">Newsletter</Link>
          <Link href="/create-blog" className="hover:text-blue-100 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition flex items-center justify-center">
          <Plus className="w-4 h-4 mr-2" />
          Start Writing</Link>

          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              value={searchText}
              onChange={(e)=>{
                setSearchText(e.target.value)

              }}
              className="pl-10 pr-4 py-2 border text-black rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-2.5 text-gray-500" size={18} />
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">
            Subscribe
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-3">
          <a href="#articles" className="block text-gray-700 hover:text-blue-500">Articles</a>
          <a href="#newsletter" className="block text-gray-700 hover:text-blue-500">Newsletter</a>
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              value={searchText}
              onChange={(e)=>{
                setSearchText(e.target.value)

              }}
              className="w-full pl-10 pr-4 py-2 text-black border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-2.5 text-black" size={18} />
          </div>
          <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">
            Subscribe
          </button>
        </div>
      )}
    </nav>
  );
}
