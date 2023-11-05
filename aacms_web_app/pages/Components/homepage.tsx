import React from 'react';
import Slideshow from './Slideshow';
import Calendar from 'react-calendar';
import MyCalendar from './Calendar';


const HomePage = () => {
  return (
    <div>
    <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '40px', paddingBottom: '40px' }}>
      {/* Slideshow Section */}
      <div style={{ flex: '2', maxWidth: '500px', marginRight: '30px'}}>
        <Slideshow />
      </div>

      {/* Main Content Section */}
      <div style={{ flex: '3', maxWidth: '600px', paddingRight: '20px' }}>
        <h2 style={{ color: '#4434A6', fontSize: '50px', fontFamily: 'Sanchez',fontWeight: 'bold', marginBottom: '8px', textAlign: 'center' }}>Arts Academy Charter Middle School</h2>
        <p style={{ color: '#4434A6', fontSize: '30px', fontFamily: 'Sanchez',fontWeight: 'bold', marginBottom: '16px' }}>
          AACMS is an arts-focused public middle school for students in grades five through eight with a passion for the arts. Any Pennsylvania student is eligible to enroll via an application and interview process. Learn more about how your child can join our community of student artists below!
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <button style={{ backgroundColor: '#F590C1', fontSize: '20px', fontFamily: 'Sanchez',fontWeight: 'bold', color: 'white', padding: '8px 16px', border: '', borderRadius: '4px', cursor: 'pointer' }}>
            Apply Now
          </button>

        <button style={{ color: '#4434A6', fontSize: '20px', fontFamily: 'Sanchez',fontWeight: 'bold', padding: '8px 16px', border: '2px solid #4434A6', borderRadius: '4px', cursor: 'pointer' }}>
            Learn More
        </button>

          
        </div>
      </div>

      {/* Quick Navigation Section */}
      <div style={{ flex: '2', maxWidth: '300px', paddingLeft: '20px' }}>
        <h2 style={{ color: '#4434A6', fontSize: '30px', fontFamily: 'Sanchez',fontWeight: 'bold', marginBottom: '8px' }}>Quick Navigation</h2>
        <div>
          <button style={{ backgroundColor: '#4434A6', color: '#FFFFFF', width: '100%',fontFamily: 'Sanchez',fontWeight: 'bold', padding: '8px 16px', border: 'none', borderRadius: '4px', marginBottom: '20px', cursor: 'pointer' }}>
            Button 1
          </button>
          <button style={{ backgroundColor: '#4434A6', color: '#FFFFFF', width: '100%',fontFamily: 'Sanchez',fontWeight: 'bold', padding: '8px 16px', border: 'none', borderRadius: '4px', marginBottom: '20px', cursor: 'pointer' }}>
            Button 2
          </button>
          <button style={{ backgroundColor: '#4434A6', color: '#FFFFFF', width: '100%',fontFamily: 'Sanchez',fontWeight: 'bold', padding: '8px 16px', border: 'none', borderRadius: '4px', marginBottom: '20px', cursor: 'pointer' }}>
            Button 3
          </button>
          <button style={{ backgroundColor: '#4434A6', color: '#FFFFFF', width: '100%',fontFamily: 'Sanchez',fontWeight: 'bold', padding: '8px 16px', border: 'none', borderRadius: '4px', marginBottom: '20px', cursor: 'pointer' }}>
            Button 4
          </button>
          <button style={{ backgroundColor: '#4434A6', color: '#FFFFFF', width: '100%',fontFamily: 'Sanchez',fontWeight: 'bold', padding: '8px 16px', border: 'none', borderRadius: '4px', marginBottom: '20px', cursor: 'pointer' }}>
            Button 5
          </button>
          <button style={{ backgroundColor: '#4434A6', color: '#FFFFFF', width: '100%',fontFamily: 'Sanchez',fontWeight: 'bold', padding: '8px 16px', border: 'none', borderRadius: '4px', marginBottom: '20px', cursor: 'pointer' }}>
            Button 6
          </button>
        </div>
      </div>
      
    </div>
    <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '40px', paddingBottom: '40px', paddingLeft: '80px', paddingRight: '10px' }}>
  <div style={{ flex: '1', marginRight: '130px'  }}>
    <MyCalendar />
  </div>
  <div style={{ flex: '1', height: '700px', width: '100%', position: 'relative' }}>
    <img
      src="./flyer.png"
      alt="flyer"
      style={{ objectFit: 'contain', width: '100%', height: '100%'}}
    />
  </div>
</div>

      
    </div>
    
  );
};

export default HomePage;
