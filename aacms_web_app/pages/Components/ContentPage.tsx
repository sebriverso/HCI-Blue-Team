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
    <div style={{ display: 'flex', padding: '15px', paddingRight: '0px', paddingBottom: '60px' }}>
      <div style={{ width: '30%', backgroundColor: '#A1DAFD', padding: '20px' }}>
        <h2 style={{ color: '#4434A6', fontSize: '24px', fontFamily: 'Sanchez',fontWeight: 'bold' }}>Destinations</h2>
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
    <p style= {{color: '#4434A6', fontSize: '24px', fontFamily: 'Sanchez'}}>To help students, parents, and families prepare for classes, this page provides lists of required and recommended school supplies for each grade level. Having the necessary supplies and materials for instruction each day is crucial for our students’ academic and artistic success.
Last-minute changes and additions may not be shown on this page immediately so it is always best to double-check with your child’s teachers. Our teachers regularly communicate updated supply needs with parents/guardians via email or paper notice.
The supply lists on this page are for academic supplies. Your child's arts teacher(s) will send home a supply list when school starts.</p>
<h2 style={{
    textAlign: 'center',
    padding: '10px 0',color: '#4434A6', fontSize: '40px', fontFamily: 'Sanchez',fontWeight: 'bold' }}>Supplies by Grade Level</h2>

<p style= {{color: '#4434A6', fontSize: '24px', fontFamily: 'Sanchez'}}>Please contact your child's teacher or the AACMS Main Office with any questions about these school supply lists.</p>
<div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{
        width: '70%',
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '20px',
        padding: '20px'
      }}>
        <PinkButton text="Button 1" />
        <PinkButton text="Button 2" />
        <PinkButton text="Button 3" />
        <PinkButton text="Button 4" />
      </div>

      <div style={{ height: '30%', paddingRight: '0px' }}>
        <p style={{ color: '#4434A6', fontSize: '24px', fontFamily: 'Sanchez' }}>
        If you are able, Please consider donating any of the below items to each of your child’s classrooms. These community supplies are used by all students and depleted frequently. Thank you!
        </p>
        <p style={{ color: '#4434A6', fontSize: '24px', fontFamily: 'Sanchez', textAlign: "center" }}>
        Tissue Boxes
        </p>
        <p style={{ color: '#4434A6', fontSize: '24px', fontFamily: 'Sanchez', textAlign: "center" }}>
        Clorox Wipes
        </p>
        <p style={{ color: '#4434A6', fontSize: '24px', fontFamily: 'Sanchez', textAlign: "center" }}>
        Hand Sanitizer
        </p>
      </div>
    </div>

      </div>

    

    </div>
  );
}

export default ContentPage;
