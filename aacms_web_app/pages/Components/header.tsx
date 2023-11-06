import React from 'react';
import SearchBar from './SearchBar';
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
        <button className="AAMS logo home">
            <img src="./aamslogo.png" alt="aams Logo" style={{ maxHeight: '90px' }} />
          </button>
          <text className="admissions-button" style={{ color: '#4434A6', fontSize: '40px', fontFamily: 'Sanchez',fontWeight: 'bold' }}>
            Welcome! 
          </text>
          <button className="Schedule" style={{paddingBottom: '10px'}}>
            <img src="./schedule.png" alt="Schedule Logo" style={{ maxHeight: '40px', paddingLeft: '4px' }} />
          </button>
          <text className="next-event" style={{ color: '#4434A6', fontSize: '18px', fontFamily: 'League Spartan', fontWeight: 'bold', width: '450px', paddingBottom: '4px'  }}>
          Next Event: Join us for Open Mic Night on Thursday, November 16th from 5pm-7pm. All are welcome to perform! Details in the slide below.
          </text>
        </div>

        <div className="button-container" style={{ display: 'flex', gap: '40px', paddingRight: '20px', height: '50px', alignItems: 'center', marginBottom: '20px' }}>
          <SearchBar onSearch={function (term: string): void {
            throw new Error('Function not implemented.');
          } }></SearchBar>
          <button className="wheelchair">
            <img src="./wheelchair.png" alt="wheelchair Logo" style={{ maxHeight: '50px' }} />
          </button>
        </div>
          
        
      </h1>

      <h2 style={{ backgroundColor: '#A1DAFD', paddingLeft: '10px', display: 'flex', justifyContent: 'space-between' }}>
        <link href='https://fonts.googleapis.com/css?family=League Spartan' rel='stylesheet'></link>
        <div className="button-container" style={{ display: 'flex', gap: '40px' }}>
          <button className="about-button" style={{ paddingRight: '24px', color: '#4434A6', fontSize: '24px', fontFamily: 'League Spartan',fontWeight: 'bold', paddingLeft: '48px' }}>About</button>
          <button className="admissions-button" style={{  paddingRight: '24px',  color: '#4434A6', fontSize: '24px', fontFamily: 'League Spartan',fontWeight: 'bold' }}>Admissions</button>
          <button className="events-button" style={{  paddingRight: '24px',  color: '#4434A6', fontSize: '24px', fontFamily: 'League Spartan',fontWeight: 'bold'  }}>Events</button>
          <button className="curriculum-button" style={{ paddingRight: '24px',  color: '#4434A6', fontSize: '24px', fontFamily: 'League Spartan',fontWeight: 'bold'  }}>Curriculum</button>
          <button className="family-resources-button" style={{  paddingRight: '24px',  color: '#4434A6', fontSize: '24px', fontFamily: 'League Spartan',fontWeight: 'bold'  }}>Family Resources</button>
        </div>
        <div className="button-container" style={{justifyContent: 'space-between', alignItems: 'center'}}>
          <button className="youtube-button">
            <img src="./youtubeLogo.png" alt="YouTube Logo" style={{ maxHeight: '120px', paddingBottom: '13px'}} />
          </button>
          <button className="instagram-button">
            <img src="./instagram.png" alt="Instagram Logo" style={{ maxHeight: '60px' }} />
          </button>
          <button className="facebook-button">
            <img src="./facebook.png" alt="Facebook Logo" style={{ maxHeight: '47px', paddingBottom: '10px', paddingRight: '30px'}} />
          </button>
        </div>
      </h2>
    </main>
  );
};
