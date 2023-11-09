import Image from 'next/image'
import { Inter } from 'next/font/google'
import React, { useEffect, useState } from 'react'
import { Header } from './Components/header'
import HomePage from './Components/homepage'
import Footer from './Components/footer'
import MobileHomePage from './Components/MobileHomePage'
import { MobileHeader } from './Components/MobileHomePage/MobileHeader'
import MobileBottomNav from './Components/MobileHomePage/MobileFooter'


const inter = Inter({ subsets: ['latin'] })


export default function Homepage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    console.log("use effect")
    const handleResize = () => {
      console.log("resise")
      console.log(window.outerWidth)
      setIsMobile(window.outerWidth < 600);
    };

    handleResize(); // Initial check on component mount

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  //<Header text="My Website" />
  //<Footer />
  return (
    <div>
      {!isMobile ? (
        <>
          <Header text={''} />
          <HomePage />
          <Footer />
        </>
      ) : (
        <>
          <MobileHeader text={''} />
          <MobileHomePage />
          <MobileBottomNav />
        </>
      )}
    </div>
    

      
  );
}

