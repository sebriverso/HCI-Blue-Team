import Image from 'next/image'
import { Inter } from 'next/font/google'
import React from 'react'
import { Header } from './Components/header'
import Footer from './Components/footer'
import { ContentBlock } from './Components/ContentPageElements/ContentBlock'
import { SideMenu } from './Components/ContentPageElements/SideMenu'


const destinations = [
    { id: 'School_Supplies', title: 'School Supplies' },
    { id: 'destination2', title: 'Destination 2' },
    { id: 'destination3', title: 'Destination 3' },
    { id: 'School_Supplies', title: 'School Supplies' },
    { id: 'destination2', title: 'Destination 2' },
    { id: 'destination3', title: 'Destination 3' },
  ];

export default function AdmissionsProcess() {
    return (
      <div>
        <Header text="My Website" />
        <div style={{display: 'flex', alignItems: 'flex-start' }}>
            <SideMenu title='Admissions' destinations={destinations}></SideMenu>
            <ContentBlock title="Admissions Process" content="testing to see how this looks"></ContentBlock>
        </div>
        <Footer></Footer>
      </div>
    );
  }