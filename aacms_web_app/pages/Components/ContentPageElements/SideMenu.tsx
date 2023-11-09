import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { useRouter } from 'next/navigation';
import React from 'react';

interface Destination {
  id: string;
  title: string;
}

interface SideMenuProps {
  title: string
  destinations: Destination[];
}

export const SideMenu: React.FC<SideMenuProps> = ({ title, destinations }) => {

  const router = useRouter();

  const navigateToPage = (router: AppRouterInstance, destination: string) => {
    router.push(destination);
  };

  function handleClick(topic: string) {
    navigateToPage(router, topic);
  }
    const handleJumpToSection = (id: string) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };
  
    return (

      /* Surrounding padding */
      <div style={{ display: 'flex', padding: '15px', paddingBottom: '0px', position: 'sticky', top: 152 }}>
        <link href="https://fonts.cdnfonts.com/css/sanchez-2" rel="stylesheet"></link>
        <link href='https://fonts.googleapis.com/css?family=League Spartan' rel='stylesheet'></link>
        
        { /* Navigation Side Menu */ }
        <div style={{ width: '200px', backgroundColor: '#A1DAFD', padding: '20px' }}>
          <h2 style={{ color: '#4434A6', fontSize: '24px', fontFamily: 'Sanchez',fontWeight: 'bold', textAlign: 'center'}}>{title}</h2>

          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {destinations.map(destination => (
              <li key={destination.id} onClick={() => handleClick(destination.id)} style={{ cursor: 'pointer', marginBottom: '10px', color: '#4434A6', fontSize: '24px', fontFamily: 'League Spartan' }}>
                {destination.title}
              </li>
            ))}
          </ul>
        
        </div>
    </div>
    )
}