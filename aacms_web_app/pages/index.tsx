import Image from 'next/image'
import { Inter } from 'next/font/google'
import React from 'react'
import { Header } from './components/nav_button'


const inter = Inter({ subsets: ['latin'] })

export default function Homepage() {
    
  
  return (
      <div>
      <Header text="My Website" />
    </div>
  );
}

export function Body() {
}
