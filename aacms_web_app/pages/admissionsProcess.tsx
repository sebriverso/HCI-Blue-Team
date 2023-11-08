import Image from 'next/image'
import { Inter } from 'next/font/google'
import React from 'react'
import { Header } from './Components/header'
import Footer from './Components/footer'
import { ContentBlock } from './Components/ContentPageElements/ContentBlock'
import { ContentHeader } from './Components/ContentPageElements/ContentHeader'
import { ContentSubHeader } from './Components/ContentPageElements/ContentSubHeader'
import { ContentText } from './Components/ContentPageElements/ContentText'
import { SideMenu } from './Components/ContentPageElements/SideMenu'
import Link from 'next/link'
import PinkButton from './Components/PinkButton'


const destinations = [
    { id: 'Admission_Process', title: 'Admission Process' },
    { id: 'Apply_Online', title: 'Apply Online' },
    { id: 'Interview_Info', title: 'Interview Info' },
    { id: 'Enrollment', title: 'Enrollment' },
    { id: 'Open_Houses', title: 'Open Houses' },
    { id: 'Summer_Programs', title: 'Summer Programs' },
  ];

export default function AdmissionsProcess() {
    return (
      <div>
        <Header text="My Website" />
        <div style={{display: 'flex', alignItems: 'flex-start', paddingBottom: '24px'}}>
            <SideMenu title='Admissions' destinations={destinations}></SideMenu>
            <div style={{display: 'flex', flexDirection: 'column', alignSelf: 'stretch'}}>
                <ContentBlock title="Admissions Process" content="Thank you for your interest in Arts Academy Charter Middle School! All new students must complete the Admissions Process described below prior to enrolling at our school. Please take a moment to review this important information and contact us with any questions."></ContentBlock>
                
                <ContentHeader title="How to Apply"></ContentHeader>
                
                <ContentSubHeader content="Learn More about AACMS"></ContentSubHeader>
                <div style={{display: "flex", paddingRight: '20px'}}>
                  <div style={{display: "flex", flexDirection: 'column'}}>
                    <ContentText content="The best way to learn about our school is by attending an Admissions Open House! During an Open House, you’ll have the opportunity to attend an information session, meet our faculty and staff, and participate in a Q&A session with our team."></ContentText>
                    <ContentText content="You can always use our website to learn more about AACMS, our arts-focused curriculum, student activities and programs, and the admissions process. Please also feel free to contact us by phone or email with any questions – we’re here to help!"></ContentText>
                  </div>

                  <Link href="/openHouses">
                  <button className="apply-now-button" style={{fontSize: '25px', fontFamily: 'League Spartan', width:'200px', fontWeight: 'bold', padding: '8px 16px', border: '', borderRadius: '2px', cursor: 'pointer' }}>
                    Open Houses Page
                  </button>
                  </Link>
                </div>
            </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }