import Image from 'next/image'
import { Inter } from 'next/font/google'
import React from 'react'
import { Header } from './Components/header'
import HomePage from './Components/homepage'
import Footer from './Components/footer'


const inter = Inter({ subsets: ['latin'] })


export default function Homepage() {
  const isMobile = window.innerWidth < 768; // Example threshold for mobile devices

  
  return (
      <div>
      <Header text="My Website" />
      <HomePage></HomePage>
      <Footer></Footer>
    </div>
  );
}

