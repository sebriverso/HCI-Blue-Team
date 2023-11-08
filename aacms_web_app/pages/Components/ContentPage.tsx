import React from 'react';
import PinkButton from './PinkButton';

interface Destination {
  id: string;
  title: string;
}

interface ContentPageProps {
  destinations: Destination[];
}

const ContentPage: React.FC<ContentPageProps> = ({ destinations }) => {
  const handleJumpToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ display: 'flex', padding: '15px', paddingBottom: '60px' }}>
      <link href="https://fonts.cdnfonts.com/css/sanchez-2" rel="stylesheet"></link>
      <link href='https://fonts.googleapis.com/css?family=League Spartan' rel='stylesheet'></link>
      <div style={{ width: '20%', backgroundColor: '#A1DAFD', padding: '20px' }}>
        <h2 style={{ color: '#4434A6', fontSize: '24px', fontFamily: 'Sanchez', fontWeight: 'bold', textAlign: 'center'}}>Family Resources</h2>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {destinations.map(destination => (
            <li key={destination.id} onClick={() => handleJumpToSection(destination.id)} style={{ cursor: 'pointer', marginBottom: '10px', color: '#4434A6', fontSize: '24px', fontFamily: 'Sanchez' }}>
              {destination.title}
            </li>
          ))}
        </ul>
      </div>
      <div style={{ width: '70%', padding: '20px', paddingRight: '0px' }}>
      <h2 style={{borderBottom: '4px solid #A1DAFD',
        borderTop: '4px solid #A1DAFD',
        textAlign: 'center',
        padding: '10px 0',color: '#4434A6', fontSize: '40px', fontFamily: 'Sanchez',fontWeight: 'bold' }}>School Supplies</h2>
    
      <p style= {{color: '#4434A6', fontSize: '24px', fontFamily: 'League Spartan'}}>To help students, parents, and families prepare for classes, this page provides lists of required and recommended school supplies for each grade level. 
    Having the necessary supplies and materials for instruction each day is crucial for our students&apos; academic and artistic success.
    Last-minute changes and additions may not be shown on this page immediately so it is always best to double-check with your child&apos;s teachers. 
    Our teachers regularly communicate updated supply needs with parents/guardians via email or paper notice.
    <br></br><br></br>The supply lists on this page are for academic supplies. Your child&apos;s arts teacher(s) will send home a supply list when school starts.</p>
<h2 style={{
    textAlign: 'center',
    padding: '10px 0',color: '#4434A6', fontSize: '40px', fontFamily: 'Sanchez',fontWeight: 'bold' }}>Supplies by Grade Level</h2>

<p style= {{color: '#4434A6', fontSize: '24px', fontFamily: 'League Spartan'}}>Please contact your child&apos;s teacher or the AACMS Main Office with any questions about these school supply lists.</p>
<div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{
        width: '70%',
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '20px',
        padding: '20px'
      }}>
        <PinkButton text="Button 1" fSize={'24px'} />
        <PinkButton text="Button 2" fSize={'24px'} />
        <PinkButton text="Button 3" fSize={'24px'}/>
        <PinkButton text="Button 4" fSize={'24px'}/>
      </div>

      <div style={{ height: '30%', paddingRight: '0px' }}>
        <p style={{ color: '#4434A6', fontSize: '24px', fontFamily: 'League Spartan' }}>
        If you are able, Please consider donating any of the below items to each of your child&apos;s classrooms. These community supplies are used by all students and depleted frequently. Thank you!
        </p>
        <p style={{ color: '#4434A6', fontSize: '24px', fontFamily: 'League Spartan', textAlign: "center" }}>
        <br></br>Tissue Boxes
        </p>
        <p style={{ color: '#4434A6', fontSize: '24px', fontFamily: 'League Spartan', textAlign: "center" }}>
        Clorox Wipes
        </p>
        <p style={{ color: '#4434A6', fontSize: '24px', fontFamily: 'League Spartan', textAlign: "center" }}>
        Hand Sanitizer
        </p>
      </div>
    </div>

      </div>

    

    </div>
  );
}

export default ContentPage;
