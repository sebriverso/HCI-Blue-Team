import Image from 'next/image';
// import { Inter } from 'next/font/google'; // Remove if not using Google Fonts
import React, { useEffect, useState } from 'react';
import { Header } from './Components/header';
import Footer from './Components/footer';
import { ContentBlock } from './Components/ContentPageElements/ContentBlock';
import { SideMenu } from './Components/ContentPageElements/SideMenu';
import { MobileHeader } from './Components/MobileHomePage/MobileHeader';
import MobileBottomNav from './Components/MobileHomePage/MobileFooter';
import OpenHousesMobile from './Components/MobileContentPage/openHousesMobile';

const destinations = [
  { id: './admissionsProcess', title: 'Admission Process' },
  { id: './applyNow', title: 'Apply Online' },
  { id: './openHouses', title: 'Interview Info' },
  { id: './openHouses', title: 'Enrollment' },
  { id: './openHouses', title: 'Open Houses' },
  { id: './openHouses', title: 'Summer Programs' },
];

export default function OpenHouses() {
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
        <>
          <Header text="My Website" />
          <div style={{ display: 'flex', alignItems: 'flex-start' }}>
            <SideMenu title='Admissions' destinations={destinations}></SideMenu>
            <div style={{ display: 'flex', flexDirection: 'column', alignSelf: 'stretch' }}>
              <ContentBlock title="Open Houses" content="testing testing"></ContentBlock>
            </div>
          </div>
          <Footer></Footer>
        </>
      ) : (
        <>
          <MobileHeader text={''}/>
            <OpenHousesMobile></OpenHousesMobile>
          <MobileBottomNav />
        </>
      )}
    </div>
  );
}
