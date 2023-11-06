import React from 'react';
import SearchBar from './SearchBar';
import Link from 'next/link'
import { CenturyView } from 'react-calendar';

interface HeaderProps {
  text: string;
}

export const Header: React.FC<HeaderProps> = ({ text }) => {
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
        <div className="button-container" style={{ display: 'flex', gap: '40px' }}>
          <button className="about-button" style={{ paddingRight: '24px', color: '#4434A6', fontSize: '24px', fontFamily: 'League Spartan',fontWeight: 'bold', paddingLeft: '48px' }}>About</button>
          <button className="admissions-button" style={{  paddingRight: '24px',  color: '#4434A6', fontSize: '24px', fontFamily: 'League Spartan',fontWeight: 'bold' }}>Admissions</button>
          <button className="events-button" style={{  paddingRight: '24px',  color: '#4434A6', fontSize: '24px', fontFamily: 'League Spartan',fontWeight: 'bold'  }}>Events</button>
          <button className="curriculum-button" style={{ paddingRight: '24px',  color: '#4434A6', fontSize: '24px', fontFamily: 'League Spartan',fontWeight: 'bold'  }}>Curriculum</button>
          <button className="family-resources-button" style={{  paddingRight: '24px',  color: '#4434A6', fontSize: '24px', fontFamily: 'League Spartan',fontWeight: 'bold'  }}>Family Resources</button>
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
