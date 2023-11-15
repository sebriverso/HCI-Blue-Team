import Image from 'next/image';
// import { Inter } from 'next/font/google'; // Remove if not using Google Fonts
import React, { useEffect, useState } from 'react';
import  Header  from './Components/header';
import Footer from './Components/footer';
import  ContentBlock  from './Components/ContentPageElements/ContentBlock';
import  SideMenu  from './Components/ContentPageElements/SideMenu';
import  MobileHeader  from './Components/MobileHomePage/MobileHeader';
import MobileBottomNav from './Components/MobileHomePage/MobileFooter';
import OpenHousesMobile from './Components/MobileContentPage/openHousesMobile';
import Link from 'next/link';
import  ContentSubHeader  from './Components/ContentPageElements/ContentSubHeader';
import  ContentText  from './Components/ContentPageElements/ContentText';

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
            <div style={{display: 'flex', flexDirection: 'column', alignSelf: 'stretch'}}>
                <ContentBlock title="Open Houses" content="We welcome students and families interested in our school to attend any of our Admissions Open House events. During these events, attendees can participate in an Information Session, meet teachers and staff members, and ask questions about our school and the admissions process."></ContentBlock>
                <ContentSubHeader content="2023-2024 Open House Schedule"/>
                <ContentText content="The 2024-2025 Admissions Open House Dates are TBD. Advance registration is required."/> 
                <p style={{color: '#4434A6', fontSize: '25px', fontFamily: 'League Spartan', paddingTop: '5px'}}>
                  <div style={{display: "flex", justifyContent: 'center'}}>
                    <Link href="https://www.signupgenius.com/go/70A0F4BA8A729ABF85-open">
                      <button className="apply-now-button" style={{fontSize: '20px', fontFamily: 'League Spartan', marginTop: '20px', width:'200px', fontWeight: 'bold', padding: '8px 16px', border: '', borderRadius: '2px', cursor: 'pointer' }}>
                            Register Now
                      </button>
                    </Link>
                  </div>
                  <br></br>If you need to reschedule or cancel your Admissions Open House selection, or have any questions, please contact the Registrar’s Office at registrar@arts-cs.org  at least 1 hour before the Open House begins.
                </p>
                <ContentSubHeader content="Talent & Tour Days"/>
                <ContentText content="During Talent & Tour Day, interested students and families will have a chance to tour our building, attend an Information Session, and meet many of our teachers and staff members. We will also be accepting applications and conducting new student interviews throughout the day. AACMS will welcome visitors for Talent & Tour Day."></ContentText>
                <ContentText content="At this time, there are no upcoming Talent & Tour Days. Registration will be available online or through walk-in during event hours."></ContentText>
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
