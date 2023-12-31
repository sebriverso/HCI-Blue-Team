import React from 'react';

const Footer = () => {
  return (
    <div style={{ backgroundColor: '#A1DAFD', padding: '20px', textAlign: 'center', marginTop: '24px' }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <div style={{ flex: '3' }}>

          {/* Contact Us */}
          <h2 style={{ color: '#000000', fontSize: '40px', fontFamily: 'Sanchez', fontWeight: 'bold', justifySelf: 'center', paddingBottom: '20px' }}>Contact Us</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center'}}>
              <img src="location.png" alt="Contact Icon 1" style={{ maxWidth: '15%', height: 'auto' }} />
              <p style={{ color: '#000000', fontSize: '20px', fontFamily: 'Sanchez', fontWeight: 'bold', marginLeft: '10px', width: '300px' }}>1610 East Emmaus Avenue Allentown, PA 18103</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center'}}>
              <img src="phone.png" alt="Contact Icon 2" style={{ maxWidth: '15%', height: 'auto' }} />
              <p style={{ color: '#000000', fontSize: '20px', fontFamily: 'Sanchez', fontWeight: 'bold', marginLeft: '10px', width: '300px' }}>(610) 351-0234</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center'}}>
              <img src="email.png" alt="Contact Icon 3" style={{ maxWidth: '15%', height: 'auto' }} />
              <p style={{ color: '#000000', fontSize: '20px', fontFamily: 'Sanchez', fontWeight: 'bold', marginLeft: '10px', width: '300px' }}>mainoffice@arts-cs.org</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center'}}>
              <img src="fax.png" alt="Contact Icon 4" style={{ maxWidth: '15%', height: 'auto' }} />
              <p style={{ color: '#000000', fontSize: '20px', fontFamily: 'Sanchez', fontWeight: 'bold', marginLeft: '10px', width: '300px' }}>(610) 351-0307</p>
            </div>
          </div>
        </div>

        {/* School and Office Hours */}
        <div style={{ flex: '2' }}>
          <h2 style={{ color: '#000000', fontSize: '40px', fontFamily: 'Sanchez', fontWeight: 'bold', paddingBottom: '35px' }}>School and Office Hours</h2>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', paddingBottom: '38px'}}>
              <p style={{ color: '#000000', fontSize: '20px', fontFamily: 'Sanchez', fontWeight: 'bold' }}>For Students: </p> 
              <p style={{ color: '#000000', fontSize: '20px', fontFamily: 'Sanchez', marginLeft: '10px'}}>7:45 am - 2:00 pm</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center'}}>
              <p style={{ color: '#000000', fontSize: '20px', fontFamily: 'Sanchez', fontWeight: 'bold' }}>Offices: </p>
              <p style={{ color: '#000000', fontSize: '20px', fontFamily: 'Sanchez', marginLeft: '10px'}}>7:30 am - 3:30 pm</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
