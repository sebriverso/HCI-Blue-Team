// pages/SamplePage.tsx

// Import React and Next.js components
import React from 'react';
import { Header } from './components/nav_button';
import ContentPage from './Components/ContentPage';
import Footer from './Components/footer';

// Define a functional component
const SamplePage: React.FC = () => {

  const destinations = [
    { id: 'School_Supplies', title: 'School Supplies' },
    { id: 'destination2', title: 'Destination 2' },
    { id: 'destination3', title: 'Destination 3' },
  ];
  
  return (
    <div>
      <Header text="My Website" />
      <ContentPage destinations={destinations}></ContentPage>
      <Footer></Footer>
    </div>
  );
};

export default SamplePage;
