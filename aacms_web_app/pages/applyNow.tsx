import Image from 'next/image'
import { Inter } from 'next/font/google'
import React from 'react'
import { Header } from './Components/header'
import Footer from './Components/footer'
import { ContentBlock } from './Components/ContentPageElements/ContentBlock'
import { SideMenu } from './Components/ContentPageElements/SideMenu'
import ContentList from './Components/ContentPageElements/ContentList'


const destinations = [
    { id: './admissionsProcess', title: 'Admission Process' },
    { id: './applyNow', title: 'Apply Online' },
    { id: './applyNow', title: 'Interview Info' },
    { id: './applyNow', title: 'Enrollment' },
    { id: './openHouses', title: 'Open Houses' },
    { id: './applyNow', title: 'Summer Programs' },
  ];

export default function ApplyNow() {
    return (
      <div>
        <Header text="My Website" />
        <div style={{display: 'flex', alignItems: 'flex-start'}}>
            <SideMenu title='Admissions' destinations={destinations}></SideMenu>
            <div style={{display: 'flex', flexDirection: 'column', alignSelf: 'stretch'}}>
                <ContentBlock title="Apply Online" content="testing testing"></ContentBlock>
                <ContentBlock title="Process" content="insert application process here"></ContentBlock>
                
            </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }