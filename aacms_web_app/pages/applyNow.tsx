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

export default function ApplyNow() {
    return (
      <div>
        <Header text="My Website" />
        <div style={{display: 'flex', alignItems: 'flex-start'}}>
            <SideMenu title='Admissions' destinations={destinations}></SideMenu>
            <div style={{display: 'flex', flexDirection: 'column', alignSelf: 'stretch'}}>
                <ContentBlock title="Apply Online" content="testing testing"></ContentBlock>
                <ContentBlock title="Process" content="to apply go to our website and click on the button and there will be a place to apply hopefully"></ContentBlock>
            </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }