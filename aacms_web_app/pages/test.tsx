// pages/SamplePage.tsx
// Import React and Next.js components
import React from 'react';
import ContentPage from './Components/ContentPage';
import Footer from './Components/footer';
import { Header } from './Components/header';
import HomePage from './Components/homepage';

// Define a functional component
const SamplePage: React.FC = () => {

  const destinations = [
    { id: 'School_Supplies', title: 'School Supplies' },
    { id: 'destination2', title: 'Destination 2' },
    { id: 'destination3', title: 'Destination 3' },
  ];

  const headerStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    backgroundColor: '#ffffff',
    padding: '10px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
  };

  return (
    <div>
      <Header text="My Website"  />
      
      <HomePage></HomePage>
      <Footer></Footer>
    </div>
  );
};

export default SamplePage;
