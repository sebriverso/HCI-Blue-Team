import Image from 'next/image'
import { Inter } from 'next/font/google'
import React from 'react'
import { Header } from './Components/header'
import Footer from './Components/footer'
import { ContentBlock } from './Components/ContentPageElements/ContentBlock'
import { SideMenu } from './Components/ContentPageElements/SideMenu'


const destinations = [
    { id: './admissionsProcess', title: 'Admission Process' },
    { id: './applyNow', title: 'Apply Online' },
    { id: './openHouses', title: 'Interview Info' },
    { id: './openHouses', title: 'Enrollment' },
    { id: './openHouses', title: 'Open Houses' },
    { id: './openHouses', title: 'Summer Programs' },
  ];

export default function OpenHouses() {
    return (
      <div>
        <Header text="My Website" />
        <div style={{display: 'flex', alignItems: 'flex-start'}}>
            <SideMenu title='Admissions' destinations={destinations}></SideMenu>
            <div style={{display: 'flex', flexDirection: 'column', alignSelf: 'stretch'}}>
                <ContentBlock title="Open Houses" content="testing testing"></ContentBlock>
                
            </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }