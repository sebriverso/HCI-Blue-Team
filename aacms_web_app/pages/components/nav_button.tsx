import React from 'react';

interface HeaderProps {
  text: string;
}

// Navigation button component
export const Header: React.FC<HeaderProps> = ({text}) => {
  return (
    <main>
      
      <h1>
        <div>
          <text>Welcome!</text>
        </div>
      </h1>
      
      <h2 style={{ backgroundColor: 'lightblue', padding: '10px' }}>
        <div>
          
        </div>
        
        <div className="button-container">
          <button className="home-button">Home</button>
          <button className="admissions-button" style={{ margin: '0 30px' }}>Admissions</button>
          <button className="events-button" style={{ margin: '0 30px' }}>Events</button>
          <button className="curriculum-button" style={{ margin: '0 30px' }}>Curriculum</button>
          <button className="family-resources-button" style={{ margin: '0 30px' }}>Family Resources</button>
          <button className="family-resources-button" style={{ margin: '80 30px' }}>
            <img src="http://localhost:3000/youtubeLogo.png"></img>
          </button>
        </div>
      </h2>
    </main>
  );
};

