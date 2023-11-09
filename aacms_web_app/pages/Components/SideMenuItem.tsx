import React, { useState } from 'react';
import { Destination } from './ContentPageElements/SideMenu';


interface HoverableListItemProps {
  destination: Destination;
  handleClick: (id: string) => void;
}

const SideMenuItem: React.FC<HoverableListItemProps> = ({ destination, handleClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li
      key={destination.id}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => handleClick(destination.id)}
      style={{
        cursor: 'pointer',
        backgroundColor: isHovered ? '#DEF2FF' : '#A1DAFD',
        fontFamily: 'League Spartan',
        marginBottom: '10px', color: '#4434A6', fontSize: '24px'
      }}
    >
      {destination.title}
    </li>
  );
};

export default SideMenuItem;
