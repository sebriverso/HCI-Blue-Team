import React from 'react';
import Link from 'next/link'
import Slideshow from './Slideshow';
import Calendar from 'react-calendar';
import MyCalendar from './Calendar';
import MobileQuickNav from './MobileHomePage/MobileQuickNav';


const MobileHomePage = () => {

  const images = [
    './slideshow1.png',
    './aacms_img1.jpg',
    './aacms_img2.jpg'
  ];
  return (
    <div style={{ marginLeft: '20px',marginRight: '20px', marginBottom: '80px'}}>
      <div style={{ paddingTop: '20px', paddingBottom: '40px' }}>
        

        {/* Main Content Section */}
        <div >
          <h2 style={{ color: '#4434A6', fontSize: '40px', fontFamily: 'Sanchez',fontWeight: 'bold', marginBottom: '8px', textAlign: 'center' }}>Arts Academy Charter<br></br>Middle School</h2>
          {/* Slideshow Section */}
            <Slideshow images={images}></Slideshow>
          <p style={{ color: '#4434A6', fontSize: '25px', fontFamily: 'League Spartan', marginBottom: '16px',  textAlign: 'center' }}>
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

        
        
      </div>

      {/* Calendar */}
      <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <div style={{  width: '80%',}}>
          <MyCalendar title={''} />
        </div>
        <Link href="/applyNow">
            <button className="apply-now-button" style={{fontSize: '30px', fontFamily: 'League Spartan',fontWeight: 'bold', padding: '8px 16px',  marginTop: '30px', border: '', borderRadius: '2px', cursor: 'pointer' }}>
                Acess Here
              </button>
        </Link>

      {/* Weekly Newsletter */}
      <div style={{ justifyContent: 'center',paddingTop: '40px', width: '80%', }}>
        <img
            src="./flyer.png"
            alt="flyer"
            style={{ objectFit: 'contain', width: '100%', height: '100%'}}
        />
      </div>
      <h2 style={{ textAlign: 'center', color: '#4434A6', fontSize: '40px', paddingTop: '40px', fontFamily: 'Sanchez',fontWeight: 'bold' }}>Social Media</h2>
      <div className="button-container" style = {{gap: '20%', paddingTop: '30px'}} >
          <Link href="https://www.youtube.com/channel/UCHTTd2GlF89H8Fc4JbLA-mg" target='_blank'>
            <button className="youtube-button">
              <img src="./youtubeLogo.png" alt="YouTube Logo" style={{ maxHeight: '40px', margin: '10px'}} />
            </button>
          </Link>
          <Link href="https://www.instagram.com/artsacademycms/" target='_blank'>
            <button className="instagram-button">
              <img src="./instagram.webp" alt="Instagram Logo" style={{ maxHeight: '40px', margin: '10px'}} />
            </button>
          </Link>
          <Link href="https://www.facebook.com/ArtsAcademyCMS" target='_blank'>
            <button className="facebook-button">
              <img src="./facebook.png" alt="Facebook Logo" style={{ maxHeight: '40px', margin: '10px' }} />
            </button>
          </Link>
        </div>
        <div style={{ padding: '10px', textAlign: 'center', marginTop: '24px' }}>
    <div>
    <h2 style={{ color: '#000000', fontSize: '30px', fontFamily: 'Sanchez', fontWeight: 'bold', paddingBottom: '10px' }}>School and Office Hours</h2>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', paddingBottom: '10px'}}>
        <p style={{ color: '#000000', fontSize: '16px', fontFamily: 'Sanchez', fontWeight: 'bold' }}>For Students: </p> 
        <p style={{ color: '#000000', fontSize: '16px', fontFamily: 'Sanchez', marginLeft: '10px'}}>7:45 am - 2:00 pm</p>
      </div>
      <div style={{ display: 'flex', alignItems: 'center'}}>
        <p style={{ color: '#000000', fontSize: '16px', fontFamily: 'Sanchez', fontWeight: 'bold' }}>Offices: </p>
        <p style={{ color: '#000000', fontSize: '16px', fontFamily: 'Sanchez', marginLeft: '10px'}}>7:30 am - 3:30 pm</p>
      </div>
    </div>
  </div>
  <div style={{ marginBottom: '20px' }}>

    {/* Contact Us */}
    <h2 style={{ color: '#000000', fontSize: '30px', fontFamily: 'Sanchez', fontWeight: 'bold', justifySelf: 'center', paddingBottom: '10px' }}>Contact Us</h2>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '10px' }}>
      <div style={{ display: 'flex', alignItems: 'center'}}>
        <img src="location.png" alt="Contact Icon 1" style={{ maxWidth: '15%', height: 'auto' }} />
        <p style={{ color: '#000000', fontSize: '16px', fontFamily: 'Sanchez', fontWeight: 'bold', marginLeft: '10px', maxWidth: '250px', textAlign: 'left' }}>1610 East Emmaus Avenue Allentown, PA 18103</p>
      </div>
      <div style={{ display: 'flex', alignItems: 'center'}}>
        <img src="phone.png" alt="Contact Icon 2" style={{ maxWidth: '15%', height: 'auto' }} />
        <p style={{ color: '#000000', fontSize: '16px', fontFamily: 'Sanchez', fontWeight: 'bold', marginLeft: '10px', maxWidth: '250px', textAlign: 'left' }}>(610) 351-0234</p>
      </div>
      <div style={{ display: 'flex', alignItems: 'center'}}>
        <img src="email.png" alt="Contact Icon 3" style={{ maxWidth: '15%', height: 'auto' }} />
        <p style={{ color: '#000000', fontSize: '16px', fontFamily: 'Sanchez', fontWeight: 'bold', marginLeft: '10px', maxWidth: '250px', textAlign: 'left' }}>mainoffice@arts-cs.org</p>
      </div>
      <div style={{ display: 'flex', alignItems: 'center'}}>
        <img src="fax.png" alt="Contact Icon 4" style={{ maxWidth: '15%', height: 'auto' }} />
        <p style={{ color: '#000000', fontSize: '16px', fontFamily: 'Sanchez', fontWeight: 'bold', marginLeft: '10px', maxWidth: '250px', textAlign: 'left' }}>(610) 351-0307</p>
      </div>
    </div>
  </div>

  {/* School and Office Hours */}
  
</div>

      {/* Extra Space */}
      <div style={{flex: '2', maxWidth: '300px', paddingLeft: '40px', alignItems: 'center'}}>
      </div>
    </div> 
    </div>
  );
};

export default MobileHomePage;
