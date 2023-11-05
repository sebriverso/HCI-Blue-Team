import Image from 'next/image'
import { Inter } from 'next/font/google'
import React from 'react'
import { Header } from './components/nav_button'
import HomePage from './Components/homepage'
import Footer from './Components/footer'


const inter = Inter({ subsets: ['latin'] })


export default function Homepage() {
    
  
  return (
      <div>
      <Header text="My Website" />
      <HomePage></HomePage>
      <Footer></Footer>
    </div>
  );
}

