import React from 'react';
import SearchBar from './searchbar';

interface HeaderProps {
  text: string;
}

export const Header: React.FC<HeaderProps> = ({ text }) => {
  return (
    <main>
      <h1 style={{  paddingLeft: '10px', display: 'flex', justifyContent: 'space-between' }}>
        <div className="button-container" style={{ display: 'flex', gap: '40px', alignItems: 'flex-end' }}>
        <button className="AAMS logo home">
            <img src="./aamslogo.png" alt="aams Logo" style={{ maxHeight: '90px' }} />
          </button>
          <text className="admissions-button" style={{ color: '#4434A6', fontSize: '40px', fontFamily: 'Sanchez',fontWeight: 'bold' }}>
            Welcome! 
          </text>
          <button className="Schedule" style={{paddingBottom: '10px'}}>
            <img src="./schedule.png" alt="Schedule Logo" style={{ maxHeight: '35px' }} />
          </button>
          <text className="admissions-button" style={{ color: '#4434A6', fontSize: '20px', fontFamily: 'Sanchez',fontWeight: 'bold', width: '450px', paddingBottom: '10px'  }}>
          Next Event: Join us for Open Mic Night on Thursday, November 16th from 5pm–7pm. All are welcome to perform! Details in the slide below.
          </text>
        </div>
        <div className="button-container" style={{ display: 'flex', gap: '40px', paddingRight: '20px' }}>
          <SearchBar onSearch={function (term: string): void {
            throw new Error('Function not implemented.');
          } }></SearchBar>
          <button className="wheelchair">
            <img src="./wheelchair.png" alt="wheelchair Logo" style={{ maxHeight: '50px' }} />
          </button>
        </div>
          
        
      </h1>

      <h2 style={{ backgroundColor: 'lightblue', paddingLeft: '10px', display: 'flex', justifyContent: 'space-between' }}>
        <div className="button-container" style={{ display: 'flex', gap: '40px' }}>
          <button className="home-button" style={{ color: '#4434A6', fontSize: '24px', fontFamily: 'Sanchez',fontWeight: 'bold' }}>
            Home
          </button>
          <button className="admissions-button" style={{  paddingRight: '24px',  color: '#4434A6', fontSize: '24px', fontFamily: 'Sanchez',fontWeight: 'bold' }}>Admissions</button>
          <button className="events-button" style={{  paddingRight: '24px',  color: '#4434A6', fontSize: '24px', fontFamily: 'Sanchez',fontWeight: 'bold'  }}>Events</button>
          <button className="curriculum-button" style={{ paddingRight: '24px',  color: '#4434A6', fontSize: '24px', fontFamily: 'Sanchez',fontWeight: 'bold'  }}>Curriculum</button>
          <button className="family-resources-button" style={{  paddingRight: '24px',  color: '#4434A6', fontSize: '24px', fontFamily: 'Sanchez',fontWeight: 'bold'  }}>Family Resources</button>
        </div>
        <div className="button-container" >
          <button className="youtube-button">
            <img src="./youtubeLogo.png" alt="YouTube Logo" style={{ maxHeight: '50px' }} />
          </button>
          <button className="instagram-button">
            <img src="./instagram.png" alt="Instagram Logo" style={{ maxHeight: '50px' }} />
          </button>
          <button className="facebook-button">
            <img src="./facebook.png" alt="Facebook Logo" style={{ maxHeight: '50px' }} />
          </button>
        </div>
      </h2>
    </main>
  );
};
