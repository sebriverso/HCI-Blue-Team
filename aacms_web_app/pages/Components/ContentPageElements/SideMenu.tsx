import { useRouter } from 'next/router';
import React from 'react';
import SideMenuItem from '../SideMenuItem';

export interface Destination {
  id: string;
  title: string;
}

interface SideMenuProps {
  title: string;
  destinations: Destination[];
}

const SideMenu: React.FC<SideMenuProps> = ({ title, destinations }) => {
  const router = useRouter();

  const navigateToPage = (destination: string) => {
    router.push(destination);
  };

  function handleClick(topic: string) {
    navigateToPage(topic);
  }

  return (
    /* Surrounding padding */
    <div style={{ display: 'flex', padding: '15px', paddingBottom: '0px', position: 'sticky', top: 152 }}>
      <link href="https://fonts.cdnfonts.com/css/sanchez-2" rel="stylesheet"></link>
      <link href='https://fonts.googleapis.com/css?family=League Spartan' rel='stylesheet'></link>

      {/* Navigation Side Menu */}
      <div style={{ width: '200px', backgroundColor: '#A1DAFD', padding: '20px' }}>
        <h2 style={{ color: '#4434A6', fontSize: '24px', fontFamily: 'Sanchez', fontWeight: 'bold', textAlign: 'center' }}>{title}</h2>

        <ul style={{ listStyleType: 'none', padding: 0, }}>
          {destinations && destinations.map(destination => (
            <SideMenuItem key={destination.id} destination={destination} handleClick={() => handleClick(destination.id)}></SideMenuItem>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SideMenu;
