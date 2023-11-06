import React from 'react';

const Footer = () => {
  return (
    <div style={{ backgroundColor: '#A1DAFD', padding: '20px', textAlign: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <div style={{ flex: '2' }}>
          <h2 style={{ color: '#000000', fontSize: '40px', fontFamily: 'Sanchez', fontWeight: 'bold', justifySelf: 'center', paddingBottom: '20px' }}>Contact Us</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center'}}>
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
        <div style={{ flex: '1' }}>
          <h2 style={{ color: '#000000', fontSize: '40px', fontFamily: 'Sanchez', fontWeight: 'bold', paddingBottom: '40px' }}>School and Office Hours</h2>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', paddingBottom: '55px'}}>
              <p style={{ color: '#000000', fontSize: '20px', fontFamily: 'Sanchez', fontWeight: 'bold' }}>For Students: </p> 
            </div>
            <div style={{ display: 'flex', alignItems: 'center'}}>
              <p style={{ color: '#000000', fontSize: '20px', fontFamily: 'Sanchez', fontWeight: 'bold' }}>Offices: </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
