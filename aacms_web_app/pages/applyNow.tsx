import Image from 'next/image'
import { Inter } from 'next/font/google'
import React, { useEffect, useState } from 'react'
import { Header } from './Components/header'
import Footer from './Components/footer'
import { ContentBlock } from './Components/ContentPageElements/ContentBlock'
import { SideMenu } from './Components/ContentPageElements/SideMenu'
import ContentList from './Components/ContentPageElements/ContentList'
import ApplyNowMobile from './Components/MobileContentPage/applyNowMobile'
import MobileBottomNav from './Components/MobileHomePage/MobileFooter'
import { MobileHeader } from './Components/MobileHomePage/MobileHeader'


const destinations = [
    { id: './admissionsProcess', title: 'Admission Process' },
    { id: './applyNow', title: 'Apply Online' },
    { id: './applyNow', title: 'Interview Info' },
    { id: './applyNow', title: 'Enrollment' },
    { id: './openHouses', title: 'Open Houses' },
    { id: './applyNow', title: 'Summer Programs' },
  ];

export default function ApplyNow() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.outerWidth < 600);
    };

    handleResize(); // Initial check on component mount

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

    return (
      <div>
        {!isMobile ? (
        <><Header text="My Website" /><div style={{ display: 'flex', alignItems: 'flex-start' }}>
            <SideMenu title='Admissions' destinations={destinations}></SideMenu>
            <div style={{ display: 'flex', flexDirection: 'column', alignSelf: 'stretch' }}>
              <ContentBlock title="Apply Online" content="testing testing"></ContentBlock>
              <ContentBlock title="Process" content="insert application process here"></ContentBlock>

            </div>
          </div><Footer></Footer></>
        ) : (

          <><MobileHeader text={''} /><ApplyNowMobile></ApplyNowMobile><MobileBottomNav /></>

        )
        }
      </div>
    );
  }