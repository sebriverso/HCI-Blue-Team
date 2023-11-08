import React from 'react';
import SearchBar from './searchbar';
import Link from 'next/link'
import { CenturyView } from 'react-calendar';
import ButtonWithSubtopics from './ButtonWithSubheadings';
import { NextRouter } from 'next/router';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

interface HeaderProps {
  text: string;
}

export const Header: React.FC<HeaderProps> = ({ text }) => {

  

  const navigateToPage = (router: AppRouterInstance, destination: string) => {
    router.push(destination);
  };

  return (
    <main style = {{position: 'sticky', top: 0, background: 'white', zIndex: 1}}>
      <link href="https://fonts.cdnfonts.com/css/sanchez-2" rel="stylesheet"></link>
      <link href='https://fonts.googleapis.com/css?family=League Spartan' rel='stylesheet'></link>
      
      
      <h1 style={{ paddingLeft: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div className="button-container" style={{ display: 'flex', gap: '40px', alignItems: 'flex-end' }}>
        
        {/* Logo and Welcome */}
          <Link href="/">
            <button className="AAMS logo home">
                <img src="./aamslogo.png" alt="aams Logo" style={{ maxHeight: '90px' }} />
            </button>
          </Link>
            <text className="admissions-button" style={{ color: '#4434A6', fontSize: '40px', fontFamily: 'Sanchez',fontWeight: 'bold' }}>
              Welcome! 
            </text>
        
        {/* Next Event */}
          <button className="Schedule" style={{paddingBottom: '10px'}}>
            <img src="./schedule.png" alt="Schedule Logo" style={{ maxHeight: '40px', paddingLeft: '4px' }} />
          </button>
          <text className="next-event" style={{ color: '#4434A6', fontSize: '18px', fontFamily: 'League Spartan', fontWeight: 'bold', width: '450px', paddingBottom: '4px'  }}>
          Next Event: Join us for Open Mic Night on Thursday, November 16th from 5pm-7pm. All are welcome to perform! Details in the slide below.
          </text>
        </div>

        {/* Accessibility */}
        <div className="button-container" style={{ display: 'flex', gap: '40px', paddingRight: '20px', height: '50px', alignItems: 'center', marginBottom: '20px' }}>
          <SearchBar onSearch={function (term: string): void {
            throw new Error('Function not implemented.');
          } }></SearchBar>
          <button className="wheelchair">
            <img src="./wheelchair.png" alt="wheelchair Logo" style={{ maxHeight: '50px' }} />
          </button>
        </div> 
      </h1>

      {/* Nav Categories */}
      <h2 style={{ backgroundColor: '#A1DAFD', paddingLeft: '10px', display: 'flex', justifyContent: 'space-between' }}>
        <link href='https://fonts.googleapis.com/css?family=League Spartan' rel='stylesheet'></link>
        <div className="button-container-submenu" style={{ display: 'flex',justifyContent: 'space-between', marginLeft: '40px' }}>
        <ButtonWithSubtopics
          label="About"
          subtopics={['Our Story', 'Board of Directors', 'Employment', 'Faculty and Staff', 'Policies & Title 1']}
          destination={['ourStory', 'test', 'test', 'test', 'test']}
          onClick={navigateToPage}
        />
          <ButtonWithSubtopics
          label="Admissions"
          subtopics={['Admissions Process', 'Apply Online', 'Interview Info', 'Enrollment', 'Open Houses', 'Summer Programs']}
          destination={['admissionsProcess', 'applyNow', 'test', 'test', 'test', 'test']}
          onClick={navigateToPage}
        />
          <ButtonWithSubtopics
          label="Curriculum"
          subtopics={['Program Overview', 'Arts', 'Ovation Accelerated Academics', 'PSSA & Keystone Testing', 'Education Support Service', 'Special Education']}
          destination={['test', 'test', 'test', 'test', 'test', 'test']}
          onClick={navigateToPage}
        />
          <ButtonWithSubtopics
          label="Events"
          subtopics={['AACMS Foundation', 'Donate', 'Fundraise', 'Volunteer', 'Logowear']}
          destination={['aacmsFoundation', 'test', 'test', 'test', 'test']}
          onClick={navigateToPage}
        />
          <ButtonWithSubtopics
          label="Family Resources"
          subtopics={['PowerSchool', 'Schoology', 'Attendance', 'Transportation & Busing', 'Weather Updates', 'School Supplies List', 'Extra Curriculars']}
          destination={['test', 'test', 'test', 'test', 'test', 'test', 'test']}
          onClick={navigateToPage}
        />
        </div>

        {/* Socials */}
        <div className="button-container" style={{justifyContent: 'space-between', alignSelf: 'center'}}>
          <Link href="https://www.youtube.com/channel/UCHTTd2GlF89H8Fc4JbLA-mg" target='_blank'>
            <button className="youtube-button">
              <img src="./youtubeLogo.png" alt="YouTube Logo" style={{ maxHeight: '40px'}} />
            </button>
          </Link>
          <Link href="https://www.instagram.com/artsacademycms/" target='_blank'>
            <button className="instagram-button">
              <img src="./instagram.webp" alt="Instagram Logo" style={{ maxHeight: '40px', paddingLeft: '40px', paddingRight: '40px'}} />
            </button>
          </Link>
          <Link href="https://www.facebook.com/ArtsAcademyCMS" target='_blank'>
            <button className="facebook-button">
              <img src="./facebook.png" alt="Facebook Logo" style={{ maxHeight: '50px', paddingTop: '10px', paddingRight: '70px'}} />
            </button>
          </Link>
        </div>
      </h2>


       
    </main>
  );
};
