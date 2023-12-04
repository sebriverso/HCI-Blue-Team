import React, { useEffect, useState } from 'react'
import  Header  from './Components/header'
import Footer from './Components/footer'
import  SideMenu  from './Components/ContentPageElements/SideMenu'
import  ContentHeader  from './Components/ContentPageElements/ContentHeader'
import  ContentText  from './Components/ContentPageElements/ContentText'
import  ContentSubHeader  from './Components/ContentPageElements/ContentSubHeader'
import MobileBottomNav from './Components/MobileHomePage/MobileFooter'
import  MobileHeader  from './Components/MobileHomePage/MobileHeader'
import OurStoryMobile from './Components/MobileContentPage/ourStoryMobile'



const Employment = () => {
    const destinations = [
        {id: './ourStory', title: 'Our Story'},
        {id: './boardOfDirectors', title: 'Board of Directors'},
        {id: './employment', title: 'Employment'},
        {id: './facultyStaff', title: 'Faculty and Staff'},
        {id: './policies', title: 'Policies'}
    ];
    //Scott Kiefer
    const people = [

        {name: "Kimberly H. Jamison", position: "President"},
        {name: "Susan Harlan", position: "Vice President"},
        {name: "Scott Kiefer", position: "Treasurer"},
        {name: "Denisette Irizarry", position: "Member"},
        {name: "Anu Sachdev", position: "Member"},
        {name: "Chelsea Morrese", position: "Member"},


    ]
    const dates = [
        'August 21, 2023',
        'September 18, 2023',
        'October 16, 2023',
        'November 20, 2023',
        'December 18, 2023',
        'January 22, 2024',
        'February 26, 2024',
        'March 18, 2024',
        'April 15, 2024',
        'May 20, 2024',
        'June 17, 2024',
        'July 15, 2024 (if needed)',
      ];
    const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    console.log("use effect")
    const handleResize = () => {
      console.log("resise")
      console.log(window.outerWidth)
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
            <><Header text='AACMS' /><div style={{ display: 'flex', alignItems: 'flex-start' }}>
                    <SideMenu title='About' destinations={destinations} />
                    <div style={{ display: 'flex', flexDirection: 'column', alignSelf: 'stretch' }}>
                        <ContentHeader title="Employment Opportunities" />
                        <ContentText content="Thank you for your interest in employment at Arts Academy Charter Middle School!

Arts Academy Charter Middle School is an Equal Opportunity Employer. Accordingly, all applicants for employment and all persons employed in any capacity by the Arts Academy Charter Middle School are treated without regard to race, color, national origin, religious affiliation, age, gender, sexual orientation, or physical and mental disability." />
                        <ContentHeader title="Faculty Positions" />
                        <ContentText content={"Available Faculty Positions (as of October 1, 2023) Special Ed Teacher: There are also positions open for Paraprofessionals. AACMS accepts applications for faculty and staff positions through the online PAREAP system.  Please visit the appropriate job listing on PAREAP to complete your application. In addition to the positions listed on PAREAP, AACMS is also seeking Daily Substitute Teachers in all subject areas. To apply as a Daily ﻿Substitute, please contact our HR rep, Mary Gotzon at mgotzon@arts-cs.org."}></ContentText>

                        <ContentHeader title="Non-Teaching Positions" />
                        <ContentText content={"Available Staff positions are posted below.  Applicants for these positions should complete the application and submit electronically to Mary Gotzon at mgotzon@arts-cs.org."}></ContentText>
                        <ContentHeader title={"Background Checks & Clearances"} ></ContentHeader>
                        <ContentText content={"Pennsylvania law requires all faculty and staff members to complete the following background checks and clearances prior to starting employment: Child Abuse Clearance (Act 151)  -  Submit on-line at https://www.compass.state.pa.us/CWIS Criminal Background Check (Act 34)  -  Submit on-line at https://epatch.pa.gov.  FBI Fingerprint Clearance (Act 24) -  Digital Fingerprinting | Identogo Commonwealth of PA Sexual Misconduct/Abuse Disclosure (Act 168)"}></ContentText>
                        
                        
                    </div>
                </div><Footer /></>
            ) : (

                <><MobileHeader text={''} /><OurStoryMobile></OurStoryMobile><MobileBottomNav /></>
            )}
            
        </div>
    );
}

export default Employment;