import React from 'react';
import Link from 'next/link'
import Slideshow from './Slideshow';
import Calendar from 'react-calendar';
import MyCalendar from './Calendar';


const HomePage = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '20px', paddingBottom: '40px' }}>
    <div style={{ flex: '2',marginLeft: '20px',marginRight: '20px'}}> 
      <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '20px', paddingBottom: '40px' }}>
        {/* Slideshow Section */}
        <div style={{ flex: '3', maxWidth: '500px', marginRight: '30px'}}>
          <Slideshow  images = {[
            './slideshow1.png',
            './aacms_img1.jpg',
            './aacms_img2.jpg'
            ]}/>
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
        
        
      </div>

      {/* Calendar */}
      <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '40px', paddingBottom: '40px', paddingLeft: '20px', paddingRight: '10px' }}>
        <div style={{ flex: '4', marginRight: '20px'  }}>
          <MyCalendar title="Calendar"/>
        </div>

      {/* Weekly Newsletter */}
      <div style={{ flex: '4', paddingTop: '76px', height: '550px', width: '80%' }}>
        <img
            src="./flyer.png"
            alt="flyer"
            style={{ objectFit: 'contain', width: '100%', height: '100%'}}
        />
      </div>
      
    </div> 
    </div>
    <div style={{flex: '1', height: '100%', maxWidth: '300px', paddingLeft: '40px', alignItems: 'center', position: 'sticky', top: 162}}>
          <h2 style={{ color: '#4434A6', fontSize: '25px', fontFamily: 'Sanchez',fontWeight: 'bold', marginBottom: '8px' }}>Quick Navigation</h2>
          <div style={{position: 'sticky', top: '0'}}>
            <button style={{ backgroundColor: '#4434A6', color: '#FFFFFF', width: '85%',fontFamily: 'League Spartan',fontWeight: 'bold', padding: '8px 16px', border: 'none', borderRadius: '4px', marginBottom: '20px', cursor: 'pointer' }}>
              Weekly Newletter
              </button>
            <Link href="/calendar">
              <button style={{ backgroundColor: '#4434A6', color: '#FFFFFF', width: '85%',fontFamily: 'League Spartan',fontWeight: 'bold', padding: '8px 16px', border: 'none', borderRadius: '4px', marginBottom: '20px', cursor: 'pointer' }}>
                Calendar
              </button>
            </Link>
            <Link href="https://registration.powerschool.com/family/Login?ReturnUrl=http%3A%2F%2Fregistration.powerschool.com%2Ffamily%2Fdirectaction&AutoLogOut=False">
              <button style={{ backgroundColor: '#4434A6', color: '#FFFFFF', width: '85%',fontFamily: 'League Spartan',fontWeight: 'bold', padding: '8px 16px', border: 'none', borderRadius: '4px', marginBottom: '20px', cursor: 'pointer' }}>
                PowerSchool
              </button>
            </Link>
            <Link href="https://login.microsoftonline.com/common/oauth2/authorize?response_type=code&client_id=f97b3686-bc70-4fee-b56d-f45878420d15&redirect_uri=https%3A%2F%2Fapp.schoology.com%2Flogin%2Fexternal_accounts%2Freceive%2Fmicrosoft&state=c2NoZW1lPWh0dHBzJmhvc3Q9YXJ0cy1jcy5zY2hvb2xvZ3kuY29tJnBhdGg9JTJGbG9naW4lMkZleHRlcm5hbF9hY2NvdW50cyUyRnJlY2VpdmUlMkZtaWNyb3NvZnQmcXVlcnk9c2Nob29sX25pZCUzRDI1MjkzMDAxODUmc2Nob29sX25pZD0yNTI5MzAwMTg1JnNfY3VzdG9tX2RvbWFpbj1odHRwcyUzQSUyRiUyRmFydHMtY3Muc2Nob29sb2d5LmNvbSZkZXN0aW5hdGlvbj1sb2dpbiUyRmV4dGVybmFsX2FjY291bnRzJTJGc2VuZCUyRm1pY3Jvc29mdCUzRnNjaG9vbF9uaWQlM0QyNTI5MzAwMTg1JnRzPTE2OTk5MDc3ODUmdG9rZW49WkpYMk5FOUo2VEFSUUhOVDQyMkI4Nzc1QzdCM0VFRENBRTZCRDQ5MDVBMzMzMjBEJmhhc2g9NWI5OGIyODE2YmQ1Y2Q4MDNiOWRkMDk5MGQ2NTk3YmQ%3D&scope=openid%26email&nonce=655288c94be9f">
              <button style={{ backgroundColor: '#4434A6', color: '#FFFFFF', width: '85%',fontFamily: 'League Spartan',fontWeight: 'bold', padding: '8px 16px', border: 'none', borderRadius: '4px', marginBottom: '20px', cursor: 'pointer' }}>
                Schoology
              </button>
            </Link>
            <button style={{ backgroundColor: '#4434A6', color: '#FFFFFF', width: '85%',fontFamily: 'League Spartan',fontWeight: 'bold', padding: '8px 16px', border: 'none', borderRadius: '4px', marginBottom: '20px', cursor: 'pointer' }}>
              Menus
            </button>
            <button style={{ backgroundColor: '#4434A6', color: '#FFFFFF', width: '85%',fontFamily: 'League Spartan',fontWeight: 'bold', padding: '8px 16px', border: 'none', borderRadius: '4px', marginBottom: '20px', cursor: 'pointer' }}>
              Transportation
            </button>
          </div>
        </div>
    </div>
  );
};

export default HomePage;
