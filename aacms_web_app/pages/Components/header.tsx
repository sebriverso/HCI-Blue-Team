import React from 'react';
import SearchBar from './SearchBar';
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
    <main style = {{position: 'sticky', top: 0, background: 'white',}}>
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
          subtopics={['Subtopic 1', 'Subtopic 2', 'Subtopic 3']}
          destination={['./', 'Subtopic 2', 'Subtopic 3']}
          onClick={navigateToPage}
        />
          <ButtonWithSubtopics
          label="Admissions"
          subtopics={['Subtopic 1', 'Subtopic 2', 'Subtopic 3']}
          destination={['Subtopic 1', 'Subtopic 2', 'Subtopic 3']}
          onClick={navigateToPage}
        />
          <ButtonWithSubtopics
          label="Curriculum"
          subtopics={['Subtopic 1', 'Subtopic 2', 'Subtopic 3']}
          destination={['Subtopic 1', 'Subtopic 2', 'Subtopic 3']}
          onClick={navigateToPage}
        />
          <ButtonWithSubtopics
          label="Events"
          subtopics={['AACMS Foundation', 'Subtopic 2', 'Subtopic 3', 'Subtopic 4']}
          destination={['aacmsFoundation', 'Subtopic 2', 'Subtopic 3', 'Subtopic 4']}
          onClick={navigateToPage}
        />
          <ButtonWithSubtopics
          label="Family Resources"
          subtopics={['Subtopic 1', 'Subtopic 2', 'Subtopic 3']}
          destination={['Subtopic 1', 'Subtopic 2', 'Subtopic 3']}
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


       {/* Submenus */}
       <div id="about-submenu" className="submenu" style={{ display: 'none', position: 'absolute', left: '0', top: '100%' }}>
        <ul>
          <li>Submenu Item 1 for About</li>
          <li>Submenu Item 2 for About</li>
          {/* Add more submenu items for About */}
        </ul>
      </div>
      <div id="admissions-submenu" className="submenu" style={{ display: 'none', position: 'absolute', left: '0', top: '100%' }}>
        <ul>
          <li>Submenu Item 1 for Admissions</li>
          <li>Submenu Item 2 for Admissions</li>
          {/* Add more submenu items for Admissions */}
        </ul>
      </div>
      <div id="curriculum-submenu" className="submenu" style={{ display: 'none', position: 'absolute', left: '0', top: '100%' }}>
        <ul>
          <li>Submenu Item 1 for Curriculum</li>
          <li>Submenu Item 2 for Curriculum</li>
          {/* Add more submenu items for Curriculum */}
        </ul>
      </div>
      <div id="events-submenu" className="submenu" style={{ display: 'none', position: 'absolute', left: '0', top: '100%' }}>
        <ul>
          <li>Submenu Item 1 for Events</li>
          <li>Submenu Item 2 for Events</li>
          {/* Add more submenu items for Events */}
        </ul>
      </div>
      <div id="family-resources-submenu" className="submenu" style={{ display: 'none', position: 'absolute', left: '0', top: '100%' }}>
        <ul>
          <li>Submenu Item 1 for Family Resources</li>
          <li>Submenu Item 2 for Family Resources</li>
          {/* Add more submenu items for Family Resources */}
        </ul>
      </div>
    </main>
  );
};
