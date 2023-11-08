import Image from 'next/image'
import { Inter } from 'next/font/google'
import React from 'react'
import { Header } from './Components/header'
import Footer from './Components/footer'
import { ContentBlock } from './Components/ContentPageElements/ContentBlock'
import { SideMenu } from './Components/ContentPageElements/SideMenu'


const destinations = [
    { id: 'Admission_Process', title: 'Admission Process' },
    { id: 'Apply_Online', title: 'Apply Online' },
    { id: 'Interview_Info', title: 'Interview Info' },
    { id: 'Enrollment', title: 'Enrollment' },
    { id: 'Open_Houses', title: 'Open Houses' },
    { id: 'Summer_Programs', title: 'Summer Programs' },
  ];

export default function OpenHouses() {
    return (
      <div>
        <Header text="My Website" />
        <div style={{display: 'flex', alignItems: 'flex-start', paddingBottom: '24px'}}>
            <SideMenu title='Admissions' destinations={destinations}></SideMenu>
            <div style={{display: 'flex', flexDirection: 'column', alignSelf: 'stretch'}}>
                <ContentBlock title="Open Houses" content="testing testing"></ContentBlock>
                
            </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }