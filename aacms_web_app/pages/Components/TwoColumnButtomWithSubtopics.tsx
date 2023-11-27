import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { useRouter } from 'next/navigation';
import { NextRouter } from 'next/router';
import React, { useState } from 'react';

interface ButtonWithSubtopicsProps {
  label: string;
  subtopics: string[];
  subtopics2: string[];
  destination: string[];
  destination2: string[];
  onClick: (router: AppRouterInstance, topic: string) => void;
}

const TwoColumnButtonWithSubtopics: React.FC<ButtonWithSubtopicsProps> = ({ label, subtopics,subtopics2, destination,destination2, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [submenuHovered, setSubmenuHovered] = useState(false);
  const router = useRouter();

  function handleClick(topic: string) {
    onClick(router, topic);
    setUnhovered();
  }

  function setUnhovered() {
    setIsHovered(false);
    setSubmenuHovered(false);
  }

  return (
    <div
      style={{
        position: 'relative',
        display: 'inline-block',
        backgroundColor: '#A1DAFD',
        minWidth: '150px',
        marginRight: '40px',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button
        style={{
          position: 'absolute',
          width: '100%',
          textAlign: 'center',
          color: '#4434A6',
          fontSize: '24px',
          fontFamily: 'League Spartan',
          fontWeight: 'bold',
          padding: '15px',
          cursor: 'pointer',
          borderRadius: '4px',
          whiteSpace: 'nowrap',
        }}
        onClick={() => handleClick(destination[0])} // Call handleClick when main button is clicked
      >
        {label}
      
      </button>
      {isHovered && (
        <ul
          style={{
            listStyleType: 'none',
            margin: 0,
            padding: 0,
            position: 'absolute',
            top: '100%',
            color: '#4434A6',
            fontSize: '24px',
            fontFamily: 'League Spartan',
            fontWeight: 'bold',
            left: 0,
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
            borderRadius: '4px',
            whiteSpace: 'nowrap', // Add this line
            
          }}
        >
          <div style={{ display: 'flex' }}>
            <div>
      {subtopics?.map((subtopic, index) => (
        <li
          key={index}
          style={{
            backgroundColor: '#DEF2FF',
            padding: '8px 16px',
            borderBottom: '1px solid #ccc',
            borderRight: '1px solid #ccc',
            color: '#4434A6',
            fontSize: '16px',
            fontFamily: 'League Spartan',
            fontWeight: 'bold',
            cursor: 'pointer',
            textAlign: 'left',
            whiteSpace: 'nowrap', // Add this line
          }}
          onClick={() => handleClick(destination[index])} // Pass subtopic to handleClick
        >
          {subtopic}
        </li>
      ))}
      </div>
<div>
      {subtopics2?.map((subtopic, index) => (
        <li
          key={index}
          style={{
            backgroundColor: '#DEF2FF',
            padding: '8px 16px',
            borderBottom: '1px solid #ccc',
            color: '#4434A6',
            fontSize: '16px',
            fontFamily: 'League Spartan',
            fontWeight: 'bold',
            cursor: 'pointer',
            textAlign: 'left',
            marginRight: '8px', // Add some margin between items
          }}
          onClick={() => handleClick(destination2[index])} // Pass subtopic to handleClick
        >
          {subtopic}
        </li>
      ))}
      </div>
    </div>
        </ul>
      )}
    </div>
  );
};

export default TwoColumnButtonWithSubtopics;
