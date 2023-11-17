import Image from 'next/image';
import { Inter } from 'next/font/google';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import  Header  from './Components/header';
import Footer from './Components/footer';
import  ContentBlock  from './Components/ContentPageElements/ContentBlock';
import  SideMenu  from './Components/ContentPageElements/SideMenu';
import ApplyNowMobile from './Components/MobileContentPage/applyNowMobile';
import MobileBottomNav from './Components/MobileHomePage/MobileFooter';
import  MobileHeader  from './Components/MobileHomePage/MobileHeader';
import  ContentHeader  from './Components/ContentPageElements/ContentHeader';
import  ContentSubHeader  from './Components/ContentPageElements/ContentSubHeader';
import  ContentText  from './Components/ContentPageElements/ContentText';
import  Accordion  from './Components/ContentPageElements/ContentAccordion';


const sections = [
  { title: 'Dance', content: [
    'A comprehensive program offering classes in a variety of styles as well as dance history and dance in other cultures.']},
  { title: 'Instrumental Music', content: [
    'Instruction for students who play band and orchestra instruments as well as guitar and piano keyboard.'] },
  { title: 'Literary Arts', content: [
    'An exploration of topics in creative writing and journalism, including a students newspaper and literary magazine.'] },
  { title: 'Theater', content: [
    'An exploration of topics in creative writing and journalism, including a students newspaper and literary magazine.'] },
  { title: 'Visual Arts', content: [
    'A study of basic drawing technique leads to work in painting, sculpture, photography, and other visual media.'] },
  { title: 'Vocal Music', content: [
    'An ensemble-focused program with opportunities for solo and small group performance throughout the school year.'] }
];


const destinations = [
  { id: './programOverview', title: 'Program Overview' },
  { id: './arts', title: 'Arts' },
  { id: './test', title: 'Ovation Accelerated Academics' },
  { id: './test', title: 'PSSA & Keystone Testing' },
  { id: './test', title: 'Education Support Service' },
  { id: './test', title: 'Special Education' },
];

export default function Arts() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.outerWidth < 600);
    };

    handleResize();
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
            <SideMenu title='Curriculum' destinations={destinations} />
            <div style={{ display: 'flex', flexDirection: 'column', alignSelf: 'stretch' }}>
              <Accordion sections={sections} />
              </div> 
          </div>
          <Footer />
        </>
      ) : (
        <>
          <MobileHeader text={''} />
          <ApplyNowMobile />
          <MobileBottomNav />
        </>
      )}
    </div>
  );
}
