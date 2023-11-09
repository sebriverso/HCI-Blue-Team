import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faUserGraduate, faBook, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const MobileBottomNav = () => {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        backgroundColor: '#FFFFFF',
        display: 'flex',
        justifyContent: 'space-around',
        paddingTop: '10px',
        boxShadow: '0px -2px 5px rgba(0, 0, 0, 0.1)',
        marginTop: '40px'
      }}
    >
      <button style={{
        border: 'none',
        background: 'none',
        cursor: 'pointer',
        borderRight: '1px solid #E0E0E0',
        width: '20%',
        boxSizing: 'border-box',
      }}>
        <div style={{ textAlign: 'center' }}>
          <FontAwesomeIcon icon={faInfoCircle} size="2x" color="#4434A6" />
          <div style={{ color: '#4434A6', fontSize: '10px', fontFamily: 'League Spartan', fontWeight: 'bold' }}>
            About
          </div>
        </div>
      </button>

      <button style={{
        border: 'none',
        background: 'none',
        cursor: 'pointer',
        borderRight: '1px solid #E0E0E0',
        width: '20%',
        boxSizing: 'border-box',
      }}>
        <div style={{ textAlign: 'center' }}>
          <FontAwesomeIcon icon={faUserGraduate} size="2x" color="#4434A6" />
          <div style={{ color: '#4434A6', fontSize: '10px', fontFamily: 'League Spartan', fontWeight: 'bold' }}>
            Admissions
          </div>
        </div>
      </button>

      <button style={{
        border: 'none',
        background: 'none',
        cursor: 'pointer',
        borderRight: '1px solid #E0E0E0',
        width: '20%',
        boxSizing: 'border-box',
      }}>
        <div style={{ textAlign: 'center' }}>
          <FontAwesomeIcon icon={faBook} size="2x" color="#4434A6" />
          <div style={{ color: '#4434A6', fontSize: '10px', fontFamily: 'League Spartan', fontWeight: 'bold' }}>
            Curriculum
          </div>
        </div>
      </button>
      <button style={{
        border: 'none',
        background: 'none',
        cursor: 'pointer',
        borderRight: '1px solid #E0E0E0',
        width: '20%',
        boxSizing: 'border-box',
      }}>
        <div style={{ textAlign: 'center' }}>
          <FontAwesomeIcon icon={faCalendarAlt} size="2x" color="#4434A6" />
          <div style={{ color: '#4434A6', fontSize: '10px', fontFamily: 'League Spartan', fontWeight: 'bold' }}>
            Events
          </div>
        </div>
      </button>
      <button style={{
        border: 'none',
        background: 'none',
        cursor: 'pointer',
        width: '20%',
        boxSizing: 'border-box',
      }}>
        <div style={{ textAlign: 'center' }}>
          <FontAwesomeIcon icon={faUsers} size="2x" color="#4434A6" />
          <div style={{ color: '#4434A6', fontSize: '10px', fontFamily: 'League Spartan', fontWeight: 'bold' }}>
            Family Resources
          </div>
        </div>
      </button>
    </div>
  );
};

export default MobileBottomNav;
