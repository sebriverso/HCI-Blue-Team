import Image from 'next/image'
import { Inter } from 'next/font/google'
import React from 'react'
import { Header } from './Components/header'
import HomePage from './Components/homepage'
import Footer from './Components/footer'
import ContentPage from './Components/ContentPage'


const inter = Inter({ subsets: ['latin'] })

const destinations = [
  { id: 'School_Supplies', title: 'School Supplies' },
  { id: 'destination2', title: 'Destination 2' },
  { id: 'destination3', title: 'Destination 3' },
];

export default function Homepage() {
    
  
  return (
      <div>
      <Header text="My Website" />
      <ContentPage destinations={destinations}></ContentPage>
      <Footer></Footer>
    </div>
  );
}

