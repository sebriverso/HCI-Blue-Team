import React from 'react';
import Link from 'next/link'
import { CenturyView } from 'react-calendar';
import { NextRouter, useRouter } from 'next/router';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import ButtonWithSubtopics from '../ButtonWithSubheadings';

interface HeaderProps {
  text: string;
}

export const MobileHeader: React.FC<HeaderProps> = ({ text }) => {

  

  const router = useRouter();
  const navigateToPage = (destination: string) => {
    router.push(destination);
  };


  /*
          <button className="Schedule" style={{paddingBottom: '10px'}}>
            <img src="./schedule.png" alt="Schedule Logo" style={{ maxHeight: '40px', paddingLeft: '4px' }} />
          </button>
          <text className="next-event" style={{ color: '#4434A6', fontSize: '18px', fontFamily: 'League Spartan', fontWeight: 'bold', width: '450px', paddingBottom: '4px'  }}>
          Next Event: Join us for Open Mic Night on Thursday, November 16th from 5pm-7pm. All are welcome to perform! Details in the slide below.
          </text>
          <text className="admissions-button" style={{ color: '#4434A6', fontSize: '40px', fontFamily: 'Sanchez',fontWeight: 'bold' }}>
              AACMS
            </text>
  */
  return (
    <main style = {{position: 'sticky', top: 0, background: 'white', zIndex: 1, backgroundColor: 'white', boxShadow: '0px 4px 5px rgba(0, 0, 0, 0.1)'}}>
      <link href="https://fonts.cdnfonts.com/css/sanchez-2" rel="stylesheet"></link>
      <link href='https://fonts.googleapis.com/css?family=League Spartan' rel='stylesheet'></link>
      
      
      <h1 style={{ paddingLeft: '10px', display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
        <div className="button-container" style={{ display: 'flex', gap: '40px', alignItems: 'flex-end' }}>
        
        {/* Logo and Welcome */}
          <Link href="/">
            <button className="AAMS logo home">
                <img src="./aamslogo.png" alt="aams Logo" style={{ maxHeight: '90px' }} />
            </button>
          </Link>
            
        
        
        </div>

    
      </h1>

      


       
    </main>
  );
};
