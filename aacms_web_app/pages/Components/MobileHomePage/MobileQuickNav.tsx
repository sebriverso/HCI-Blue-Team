import React, { useState } from 'react';

const MobileQuickNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div
        style={{
          backgroundColor: '#F8F8F8',
          width: '30px',
          height: '90px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          cursor: 'pointer',
          borderRadius: '4px 0 0 4px',
        }}
        onClick={toggleMenu}
      >
         <div style={{ width: '20px', height: '4px', backgroundColor: '#000000' }}></div>
        <div style={{ width: '20px', height: '4px', backgroundColor: '#000000' }}></div>
        <div style={{ width: '20px', height: '4px', backgroundColor: '#000000' }}></div>
      </div>
      {isOpen && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#F8F8F8',
            padding: '20px',
            position: 'absolute',
            top: '60px',
            right: '0',
            width: '300px',
            boxShadow: '-2px 0 5px rgba(0, 0, 0, 0.1)',
          }}
        >
          <button
            style={{
              backgroundColor: '#4434A6',
              color: '#FFFFFF',
              width: '85%',
              fontFamily: 'League Spartan',
              fontWeight: 'bold',
              padding: '8px 16px',
              border: 'none',
              borderRadius: '4px',
              marginBottom: '20px',
              cursor: 'pointer',
            }}
          >
            Weekly Newsletter
          </button>
          <button
            style={{
              backgroundColor: '#4434A6',
              color: '#FFFFFF',
              width: '85%',
              fontFamily: 'League Spartan',
              fontWeight: 'bold',
              padding: '8px 16px',
              border: 'none',
              borderRadius: '4px',
              marginBottom: '20px',
              cursor: 'pointer',
            }}
          >
            Calendar
          </button>
          <button
            style={{
              backgroundColor: '#4434A6',
              color: '#FFFFFF',
              width: '85%',
              fontFamily: 'League Spartan',
              fontWeight: 'bold',
              padding: '8px 16px',
              border: 'none',
              borderRadius: '4px',
              marginBottom: '20px',
              cursor: 'pointer',
            }}
          >
            PowerSchool
          </button>
          <button
            style={{
              backgroundColor: '#4434A6',
              color: '#FFFFFF',
              width: '85%',
              fontFamily: 'League Spartan',
              fontWeight: 'bold',
              padding: '8px 16px',
              border: 'none',
              borderRadius: '4px',
              marginBottom: '20px',
              cursor: 'pointer',
            }}
          >
            Schoology
          </button>
          <button
            style={{
              backgroundColor: '#4434A6',
              color: '#FFFFFF',
              width: '85%',
              fontFamily: 'League Spartan',
              fontWeight: 'bold',
              padding: '8px 16px',
              border: 'none',
              borderRadius: '4px',
              marginBottom: '20px',
              cursor: 'pointer',
            }}
          >
            Menus
          </button>
          <button
            style={{
              backgroundColor: '#4434A6',
              color: '#FFFFFF',
              width: '85%',
              fontFamily: 'League Spartan',
              fontWeight: 'bold',
              padding: '8px 16px',
              border: 'none',
              borderRadius: '4px',
              marginBottom: '20px',
              cursor: 'pointer',
            }}
          >
            Transportation
          </button>
        </div>
      )}
    </div>
  );
};

export default MobileQuickNav;
