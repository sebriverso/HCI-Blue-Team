import React from 'react';
import Link from 'next/link'
import Slideshow from './Slideshow';
import Calendar from 'react-calendar';
import MyCalendar from './Calendar';


const HomePage = () => {
  return (
    <div style={{ marginLeft: '20px',marginRight: '20px'}}>
      <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '20px', paddingBottom: '40px' }}>
        {/* Slideshow Section */}
        <div style={{ flex: '3', maxWidth: '500px', marginRight: '30px'}}>
          <Slideshow />
        </div>

        {/* Main Content Section */}
        <div style={{ flex: '5', maxWidth: '600px', paddingRight: '20px' }}>
          <h2 style={{ color: '#4434A6', fontSize: '40px', fontFamily: 'Sanchez',fontWeight: 'bold', marginBottom: '8px', textAlign: 'center' }}>Arts Academy Charter<br></br>Middle School</h2>
          <p style={{ color: '#4434A6', fontSize: '25px', fontFamily: 'League Spartan', marginBottom: '16px' }}>
            AACMS is an arts-focused public middle school for students in grades five through eight with a passion for the arts. Any Pennsylvania student is eligible to enroll via an application and interview process. 
            <br></br><br></br>Learn more about how your child can join our community of student artists below!
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20%'}}>
            <Link href="/applyNow">
            <button className="apply-now-button" style={{fontSize: '30px', fontFamily: 'League Spartan',fontWeight: 'bold', padding: '8px 16px', border: '', borderRadius: '2px', cursor: 'pointer' }}>
                Apply Now
              </button>
            </Link>
            <Link href="/admissionsProcess">
              <button className="learn-more-button" style={{fontSize: '30px', fontFamily: 'League Spartan', fontWeight: 'bold', padding: '8px 16px', border: '2px solid #4434A6', borderRadius: '2px', cursor: 'pointer' }}>
                  Learn More
              </button>
            </Link>
          </div>
        </div>

        {/* Quick Navigation Section */}
        <div style={{flex: '2', maxWidth: '300px', paddingLeft: '40px', alignItems: 'center'}}>
          <h2 style={{ color: '#4434A6', fontSize: '25px', fontFamily: 'Sanchez',fontWeight: 'bold', marginBottom: '8px' }}>Quick Navigation</h2>
          <div>
            <button style={{ backgroundColor: '#4434A6', color: '#FFFFFF', width: '85%',fontFamily: 'League Spartan',fontWeight: 'bold', padding: '8px 16px', border: 'none', borderRadius: '4px', marginBottom: '20px', cursor: 'pointer' }}>
              Weekly Newletter
              </button>
            <button style={{ backgroundColor: '#4434A6', color: '#FFFFFF', width: '85%',fontFamily: 'League Spartan',fontWeight: 'bold', padding: '8px 16px', border: 'none', borderRadius: '4px', marginBottom: '20px', cursor: 'pointer' }}>
              Calendar
            </button>
            <button style={{ backgroundColor: '#4434A6', color: '#FFFFFF', width: '85%',fontFamily: 'League Spartan',fontWeight: 'bold', padding: '8px 16px', border: 'none', borderRadius: '4px', marginBottom: '20px', cursor: 'pointer' }}>
              PowerSchool
            </button>
            <button style={{ backgroundColor: '#4434A6', color: '#FFFFFF', width: '85%',fontFamily: 'League Spartan',fontWeight: 'bold', padding: '8px 16px', border: 'none', borderRadius: '4px', marginBottom: '20px', cursor: 'pointer' }}>
              Schoology
            </button>
            <button style={{ backgroundColor: '#4434A6', color: '#FFFFFF', width: '85%',fontFamily: 'League Spartan',fontWeight: 'bold', padding: '8px 16px', border: 'none', borderRadius: '4px', marginBottom: '20px', cursor: 'pointer' }}>
              Menus
            </button>
            <button style={{ backgroundColor: '#4434A6', color: '#FFFFFF', width: '85%',fontFamily: 'League Spartan',fontWeight: 'bold', padding: '8px 16px', border: 'none', borderRadius: '4px', marginBottom: '20px', cursor: 'pointer' }}>
              Transportation
            </button>
          </div>
        </div>
        
      </div>

      {/* Calendar */}
      <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '40px', paddingBottom: '40px', paddingLeft: '20px', paddingRight: '10px' }}>
        <div style={{ flex: '4', marginRight: '20px'  }}>
          <MyCalendar />
        </div>

      {/* Weekly Newsletter */}
      <div style={{ flex: '4', paddingTop: '76px', height: '550px', width: '80%' }}>
        <img
            src="./flyer.png"
            alt="flyer"
            style={{ objectFit: 'contain', width: '100%', height: '100%'}}
        />
      </div>
      {/* Extra Space */}
      <div style={{flex: '2', maxWidth: '300px', paddingLeft: '40px', alignItems: 'center'}}>
      </div>
    </div> 
    </div>
  );
};

export default HomePage;
