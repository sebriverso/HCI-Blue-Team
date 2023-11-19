import Image from 'next/image';
import { Inter } from 'next/font/google';
import React, { useEffect, useRef, useState } from 'react';
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


//use this to scroll to div: document.getElementById('myDiv').scrollIntoView();

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
  const danceSectionRef = useRef(null);

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

  const scrollToSection = (className: string) => {
    const targetSection = document.querySelector(`.${className}`) as HTMLElement | null;
    if (targetSection) {
      targetSection.style.paddingTop = '140px';
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      {!isMobile ? (
        <>
          <Header text="My Website" />
          <div style={{ display: 'flex', alignItems: 'flex-start' }}>
            <SideMenu title='Curriculum' destinations={destinations} />
            
            
            {/* Accordion Testing
            <div style={{ display: 'flex', flexDirection: 'column', alignSelf: 'stretch' }}>
              <Accordion sections={sections} />
            </div> 
            */}


            {/* Arts Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', alignSelf: 'stretch' }}>
              <ContentHeader title="Artistic Disciplines" />
              <ContentText  content="AACMS offers instruction in seven artistic disciplines, with classes designed and led by passionate teachers who are also experienced performers.  Through consistent instruction and practice, our students develop the fundamental skills they need to grow and flourish as artists regardless of their area of interest." fSize='20px'/>

              <div style={{ display: "flex", flexDirection: 'row', justifyContent: 'center' }}>

                  {/* Column 1 */}
                  <div style={{ display: 'flex', flexDirection: 'column', padding: '10px', alignSelf: 'stretch' }}>
                    
                    <button className="apply-now-button" style={{ fontSize: '20px', fontFamily: 'League Spartan', width: '200px', fontWeight: 'bold', padding: '8px 16px', border: '', borderRadius: '2px', cursor: 'pointer' }}
                      onClick={() => scrollToSection('danceSection')}>
                        Dance
                    </button>
                    
                    
                    <button className="apply-now-button" style={{ fontSize: '20px', fontFamily: 'League Spartan', marginTop: '20px', width: '200px', fontWeight: 'bold', padding: '8px 16px', border: '', borderRadius: '2px', cursor: 'pointer' }}
                      onClick={() => scrollToSection('instrumSection')}>
                        Instrumental Music
                    </button>
                  </div>

                  {/* Column 2 */}
                  <div style={{ display: 'flex', flexDirection: 'column', padding: '10px', alignSelf: 'stretch' }}>
                    <button className="apply-now-button" style={{ fontSize: '20px', fontFamily: 'League Spartan', width: '200px', fontWeight: 'bold', padding: '8px 16px', border: '', borderRadius: '2px', cursor: 'pointer' }}
                      onClick={() => scrollToSection('litArtsSection')}>
                        Literary Arts
                    </button>
                    
                    
                    <button className="apply-now-button" style={{ fontSize: '20px', fontFamily: 'League Spartan', marginTop: '20px', width: '200px', fontWeight: 'bold', padding: '8px 16px', border: '', borderRadius: '2px', cursor: 'pointer' }}
                      onClick={() => scrollToSection('theaterSection')}>
                        Theater
                    </button>
                    
                    
                    <button title='Not Currently Available' style={{ background: '#B0B0B0', color: 'white', fontSize: '20px', fontFamily: 'League Spartan', marginTop: '20px', width: '200px', fontWeight: 'bold', padding: '8px 16px', border: '', borderRadius: '2px', cursor: 'pointer' }} disabled
                      onClick={() => scrollToSection('skatingSection')}>
                        Figure Skating
                    </button>
                    
                  
                  </div>

                  {/* Column 3 */}
                  <div style={{ display: 'flex', flexDirection: 'column', padding: '10px', alignSelf: 'stretch' }}>
                    <button className="apply-now-button" style={{ fontSize: '20px', fontFamily: 'League Spartan', width: '200px', fontWeight: 'bold', padding: '8px 16px', border: '', borderRadius: '2px', cursor: 'pointer' }}
                      onClick={() => scrollToSection('visArtsSection')}>
                        Visual Arts
                    </button>
                    <button className="apply-now-button" style={{ fontSize: '20px', fontFamily: 'League Spartan', marginTop: '20px', width: '200px', fontWeight: 'bold', padding: '8px 16px', border: '', borderRadius: '2px', cursor: 'pointer' }}
                      onClick={() => scrollToSection('vocalSection')}>
                        Vocal Music
                    </button>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignSelf: 'stretch' }}>
                  <ContentHeader title="Selecting Arts Disciplines at AACMS"/>
                  <ContentText content="The First Arts Focus" isBold={true} />


                </div>

                {/* Content Sections */}
                <div className='danceSection'> 
                  <ContentHeader title="Dance" />
                </div>
                  <ContentText content="The highly qualified dance instructors of AACMS’s Dance Department provide their talented students with a variety of challenging dance technique and history classes, meaningful performance experiences, and an appropriate sense of health and attitude. Over their four years at AACMS, Dance students receive instruction in a variety of dance styles—including ballet, modern, jazz, contemporary, tap, and musical theatre—while also studying strength and conditioning, improvisation, dance composition, dance in world cultures, and dance history."/>
          

                <div className='litArtsSection' style={{ display: 'flex', flexDirection: 'column', alignSelf: 'stretch' }}>
                  <ContentHeader title="Literary Arts" />
                </div>
                  <ContentText content="Our new Literary and Media Arts curriculum is divided into two broad areas of instruction: Journalism and Creative Writing. This writing-intensive art form is offered as a primary arts focus for grades seven and eight, as a secondary art focus for grades six and seven, and to fifth graders as an arts workshop."/>
                  <div style={{ display: 'flex', flexDirection: 'row'}}>
                      <ContentSubHeader content="Journalism" />
                      <ContentSubHeader content="Creative Writing" />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'row'}}>
                      <ContentText fSize='20px' content="Media Arts is the study of journalism divided into two main areas of instruction, newswriting and production. Students will develop an understanding of the function and role of the media, learn the basics of newswriting, editing and layout, and produce the school newspaper, Arts OutLoud, and the literary arts magazine, YouthInk using their InDesign and Photoshop instruction. Students will also write, produce, and perform in podcasts and videocasts." />
                      <ContentText fSize='20px' content="The creative writing courses will instruct and encourage students to write short works of fiction, drama, and poetry, as well as creative non-fiction narratives. Students will explore creativity, writings styles, and original voice through writing prompt activities and exemplar literature study. Students will build a supportive community of writers and write several works for their personal writing portfolios. Our student authors will present their writings in a school-wide literary magazine, through various online publication opportunities, and at live readings throughout the school year." />
                  </div>


                <div className='visArtsSection'> 
                  <ContentHeader title="Visual Arts" />


                </div>
                <div className='instrumSection'> 
                  <ContentHeader title="Instrumental Arts" />


                </div>
                <div className='theaterSection'> 
                  <ContentHeader title="Theater" />


                </div>
                <div className='vocalSection'> 
                  <ContentHeader title="Vocal Music" />


                </div>
                <div className='skatingSection'> 
                  <ContentHeader title="Figure Skating" />

                </div>


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
