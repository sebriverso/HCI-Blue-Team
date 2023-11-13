import Image from 'next/image'
import { Inter } from 'next/font/google'
import React from 'react'
import { Header } from './Components/header'
import Footer from './Components/footer'
import { ContentBlock } from './Components/ContentPageElements/ContentBlock'
import { SideMenu } from './Components/ContentPageElements/SideMenu'
import ContentList from './Components/ContentPageElements/ContentList'
import { ContentHeader } from './Components/ContentPageElements/ContentHeader'
import { ContentSubHeader } from './Components/ContentPageElements/ContentSubHeader'
import { ContentText } from './Components/ContentPageElements/ContentText'
import Link from 'next/link'

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
                <ContentBlock title="Apply Online" content="All future AACMS students must begin the enrollment process by completing and submitting a New Student Application. Applications should be submitted along with copies of each of the supporting documents listed below. AACMS schedules each applicant for a New Student Interview after receiving his or her application. "></ContentBlock>
                <ContentHeader title="Application Process"></ContentHeader>
                <ContentSubHeader content="How to Apply"></ContentSubHeader>
                <ContentText content="We now accept applications online!  
                  Before you complete the application, you will need to create an account with our enrollment platform."/> 
                <ContentText content="You can use a single account to submit applications for multiple students. If your child is accepted to AACMS, you will use the same account to complete the enrollment process online."/>
                <ContentText content="Please be sure to keep the contact information in your enrollment account up to date.  AACMS will use this information to contact you to schedule the applicant's New Student Interview and provide updates on the student's application and enrollment status."></ContentText>
                <div style={{display: "flex", justifyContent: 'center'}}>
                  <Link href="https://registration.powerschool.com/family/Login?ReturnUrl=http%3A%2F%2Fregistration.powerschool.com%2Ffamily%2Fdirectaction&AutoLogOut=False">
                    <button className="apply-now-button" style={{fontSize: '20px', fontFamily: 'League Spartan', marginTop: '20px', width:'200px', fontWeight: 'bold', padding: '8px 16px', border: '', borderRadius: '2px', cursor: 'pointer' }}>
                          Register Here
                    </button>
                  </Link>
                </div>
                <ContentText content="We continue to offer paper applications for those who cannot complete the form online; you can pick up a copy from the AACMS Main Office during regular business hours."></ContentText>
            </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }