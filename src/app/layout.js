"use client"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/Navbar";
import SearchContext from "@/component/context/searchContext";
import Footer from "@/component/Footer";




const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({ children }) {

  
  return (
    <>
    <html>
      <body>
         <SearchContext>
         <Navbar  />
         <main className="pt-20">{children}</main>
         <Footer/>
         </SearchContext>
       
         
      </body>
    </html>
   
  </>
  );
}
