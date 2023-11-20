import Image from 'next/image'
import { Inter } from 'next/font/google'
import React, { useEffect, useState } from 'react'
import  Header  from './Components/header'
import Footer from './Components/footer'
import  ContentBlock from './Components/ContentPageElements/ContentBlock'
import  ContentHeader  from './Components/ContentPageElements/ContentHeader'
import  ContentSubHeader  from './Components/ContentPageElements/ContentSubHeader'
import  ContentText  from './Components/ContentPageElements/ContentText'
import  SideMenu  from './Components/ContentPageElements/SideMenu'
import Link from 'next/link'
import PinkButton from './Components/PinkButton'
import AdmissionProcessMobile from './Components/MobileContentPage/admissionsProcessMobile'
import MobileBottomNav from './Components/MobileHomePage/MobileFooter'
import  MobileHeader  from './Components/MobileHomePage/MobileHeader'


const destinations = [
  { id: './admissionsProcess', title: 'Admission Process' },
  { id: './applyNow', title: 'Apply Online' },
  { id: './interviewInfo', title: 'Interview Info' },
  { id: './Enrollment', title: 'Enrollment' },
  { id: './openHouses', title: 'Open Houses' },
  { id: './applyNow', title: 'Summer Programs' },
];

export default function AdmissionsProcess() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.outerWidth < 600);
    };

    handleResize(); // Initial check on component mount

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

    return (
      <div>
        {!isMobile ? (
        <><Header text="My Website" /><div style={{ display: 'flex', alignItems: 'flex-start' }}>
            <SideMenu title='Admissions' destinations={destinations}></SideMenu>
            <div style={{ display: 'flex', flexDirection: 'column', alignSelf: 'stretch' }}>
              <ContentBlock title="Admissions Process" content="Thank you for your interest in Arts Academy Charter Middle School! All new students must complete the Admissions Process described below prior to enrolling at our school. Please take a moment to review this important information and contact us with any questions."></ContentBlock>

              <ContentHeader title="How to Apply"></ContentHeader>

              <div style={{ display: 'flex', flexDirection: 'row', alignSelf: 'stretch' }}>
                <ContentSubHeader content="1. Discover AACMS" />
                <ContentSubHeader content="2. Apply" />
              </div>

              <div style={{ display: "flex", flexDirection: 'row' }}>
                <div style={{ display: 'flex ', flex: 2, flexDirection: 'column' }}>
                  <ContentText  content="The best way to learn about our school is by attending an Admissions Open House! During an Open House, you’ll have the opportunity to attend an information session, meet our faculty and staff, and participate in a Q&A session with our team. Our website also provides useful information for exploring AACMS including:"></ContentText>
                </div>

                <div style={{ display: 'flex 2', flex: 2, flexDirection: 'column' }}>
                  <ContentText  content="Our Apply Now page walks you through the steps of applying."></ContentText>
                  <Link href="/applyNow">
                    <div style={{ display: "flex", justifyContent: 'center' }}>
                      <button className="apply-now-button" style={{ fontSize: '20px', fontFamily: 'League Spartan', width: '200px', fontWeight: 'bold', marginTop: '10px', padding: '8px 16px', border: '', borderRadius: '2px', cursor: 'pointer' }}>
                        Apply Now
                      </button>
                    </div>
                  </Link>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: 'row' }}>

                {/* Column 1 */}
                <div style={{ display: 'flex', flexDirection: 'column', padding: '10px', marginLeft: '30px', alignSelf: 'stretch' }}>
                  <Link href="/openHouses">
                    <button className="apply-now-button" style={{ fontSize: '20px', fontFamily: 'League Spartan', width: '200px', fontWeight: 'bold', padding: '8px 16px', border: '', borderRadius: '2px', cursor: 'pointer' }}>
                      Core Curriculum
                    </button>
                  </Link>
                  <Link href="/openHouses">
                    <button className="apply-now-button" style={{ fontSize: '20px', fontFamily: 'League Spartan', marginTop: '20px', width: '200px', fontWeight: 'bold', padding: '8px 16px', border: '', borderRadius: '2px', cursor: 'pointer' }}>
                      Summer Programs
                    </button>
                  </Link>
                </div>

                {/* Column 2 */}
                <div style={{ display: 'flex', flexDirection: 'column', padding: '10px', alignSelf: 'stretch' }}>
                  <Link href="/openHouses">
                    <button className="apply-now-button" style={{ fontSize: '20px', fontFamily: 'League Spartan', width: '200px', fontWeight: 'bold', padding: '8px 16px', border: '', borderRadius: '2px', cursor: 'pointer' }}>
                      Our Arts
                    </button>
                  </Link>
                  <Link href="/openHouses">
                    <button className="apply-now-button" style={{ fontSize: '20px', fontFamily: 'League Spartan', marginTop: '20px', width: '200px', fontWeight: 'bold', padding: '8px 16px', border: '', borderRadius: '2px', cursor: 'pointer' }}>
                      Open Houses
                    </button>
                  </Link>
                </div>
              </div>

              <ContentSubHeader content="3. Interview" />
              <ContentText  content="Each applicant meets with two AACMS teachers for a New Student Interview, discussing themselves and their talents. Review guidelines for specific arts department requirements. Interviews typically occur from February to June."></ContentText>

              <ContentSubHeader content="4. Admissions Decisions" />
              <ContentText  content="AACMS will provide an admissions decision to each applicant according to the following schedule:"></ContentText>


              {/* Interview Table */}
              <div style={{ display: 'flex', marginLeft: '10%' }}>
                <div style={{ flex: 1 }}>
                  <ContentText  content="Round" />
                  <ContentText  content="1" />
                  <ContentText  content="2" />
                  <ContentText  content="3" />
                </div>
                <div style={{ flex: 2 }}>
                  <ContentText  content="Interview Dates" />
                  <ContentText  content="February - March 18" />
                  <ContentText  content="March 27 - April 28" />
                  <ContentText  content="May 1 - June 9" />
                </div>
                <div style={{ flex: 2 }}>
                  <ContentText  content="Decisions Sent" />
                  <ContentText  content="April 1, 2024" />
                  <ContentText  content="May 12, 2024" />
                  <ContentText  content="June 12, 2024" />
                </div>
                <div style={{ flex: 1 }}></div>
              </div>
              <ContentText  content="Each applicant will receive a letter via email with one of three decisions: Accepted, Waitlisted, or Not Accepted. Admissions decisions are NOT available prior to the distribution dates outlined above." />
              <ContentText  content="Please note: Summer and fall applicants will be contacted for New Student Interviews based on program and grade level availability. These applicants may be waitlisted until space becomes available in their grade level or artistic discipline." />

              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <p style={{ color: '#4434A6', fontSize: '25px', fontFamily: 'League Spartan', paddingTop: '15px' }}> If you have any questions about the application, interview, or enrollment process, please contact us!</p>
                <p style={{ color: '#4434A6', fontSize: '27px', fontWeight: '900', fontFamily: 'League Spartan', paddingTop: '5px' }}> (610) 351-0234 ext. 512</p>
              </div>
            </div>
          </div><Footer></Footer></>
        ): (

          <><MobileHeader text={''} /><AdmissionProcessMobile></AdmissionProcessMobile><MobileBottomNav /></>
        )
        }
      </div>
    );
  }