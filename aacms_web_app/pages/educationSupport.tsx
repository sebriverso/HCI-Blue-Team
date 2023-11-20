import React from 'react';
import Footer from './Components/footer';
import  Header  from './Components/header';
import  SideMenu  from './Components/ContentPageElements/SideMenu'
import  ContentHeader  from './Components/ContentPageElements/ContentHeader'
import  ContentText from './Components/ContentPageElements/ContentText'
import Link from 'next/link'




const destinations = [
    { id: './programOverview', title: 'Program Overview' },
    { id: './arts', title: 'Arts' },
    { id: './ovationAcademics', title: 'Ovation Accelerated Academics' },
    { id: './test', title: 'PSSA & Keystone Testing' },
    { id: './educationSupport', title: 'Education Support Service' },
    { id: './test', title: 'Special Education' },
  ];  


// Define a functional component
export default function CalendarPage() {
  return (
    <div>
      <Header text="My Website"  />
        <div style={{display: 'flex', alignItems: 'flex-start'}}>
            <SideMenu title='Curriculum' destinations={destinations}></SideMenu>
            <div style={{display: 'flex', flexDirection: 'column', alignSelf: 'stretch'}}>
                
                <div style={{ display: 'flex', flexDirection: 'row', alignSelf: 'stretch' }}>
                        <ContentHeader title="Education Support Services"></ContentHeader>
                    <div style={{ width: '70%'}}>
                    <ContentHeader title="Contact Info"></ContentHeader>
                    </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'row', alignSelf: 'stretch' }}>
                    <div style={{ width: '60%'}}>
                        <ContentText content="AACMS uses a broad set of evidence-based practices to support our students’ academic and behavioral needs. 
                        This includes standards-aligned, culturally responsive high-quality core instruction, universal screenings, data-based decision making, tiered services and supports, parental engagement, and Response to Intervention (RTI)."/>
                    </div> 
                    <div>
                        <ContentText content="Contact Person: Christa Greagori"/>
                        <ContentText content="Email Address: cgreagori@arts-cs.org"/>
                        <ContentText content="Phone Number: (610) 351-0234 ext. 501"/>
                    </div>
                </div>

                <ContentHeader title="Child Find"></ContentHeader>
                <ContentText content="AACMS maintains rigorous procedures for identifying and evaluating students who may need Special Education or other academic or behavioral support services, including counseling and speech therapy."/>
                
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                  <Link href="https://www.arts-cs.org/_theme/files/Education%20Support%20Services/Child-Find-Notice-English_v2020-11-03.pdf">
                    <button className="apply-now-button" style={{ fontSize: '20px', fontFamily: 'League Spartan', marginTop: '20px', width: '200px', fontWeight: 'bold', padding: '8px 16px', border: '', borderRadius: '2px', cursor: 'pointer' }}>
                        Child Find Notice English
                    </button>
                  </Link>
                  <Link href="https://www.arts-cs.org/_theme/files/Education%20Support%20Services/Child-Find-Notice-Spanish.pdf">
                    <button className="apply-now-button" style={{ fontSize: '20px', fontFamily: 'League Spartan', marginTop: '20px', width: '200px', fontWeight: 'bold', padding: '8px 16px', border: '', borderRadius: '2px', cursor: 'pointer' }}>
                        Child Find Notice Spanish
                    </button>
                  </Link>
                </div>
                <ContentText content=""/>
                <ContentText content="Child Find is NOT a Special Education program! Rather, it is a way for our school to monitor student academic performance, provide support, and evaluate and track progress. Students on the Child Find Watch List may participate in informal screenings and receive Response to Intervention supports once each six-day school cycle. Parents may decline RTI services for their child, but the student may remain on the Child Find Watch List."/>

                <ContentHeader title="Universal Screening: AIMSWeb Plus"></ContentHeader>
                <ContentText content="AIMSWeb is a web-based solution for universal screening, progress monitoring, and data management for Grades K-12. AIMSWeb provides guidance to administrators and teachers based on accurate, continuous, and direct student assessment."/>
                <ContentText content="At the foundation of AIMSWeb is general outcome measurement, a form of curriculum-based measurement (CBM), used for universal screening and progress monitoring. This form of brief assessment measures overall performance of key foundational skills at each grade level and draws upon over thirty years of scientific research that demonstrates both versatility to provide accurate prediction of reading and math achievement as well as its sensitivity to growth."/>
                
                <ContentHeader title="Student Risk Screening Scale (SRSS)"/>
                <ContentText content="The Student Risk Screening Scale (SRSS) is a universal screening tool used to identify students who may be at risk for challenging, antisocial behavior. 
                The SRSS is conducted to better inform instruction. It is not used to exclude students from the instructional environment. Rather, it is used to select appropriate supports for students."/>
                <ContentText content="The SRSS is not used independently to determine special education eligibility or make other high stakes decisions. The SRSS, like all universal screening tools, is not used to label students. The SRSS is not intended as an assessment of traits or personality. 
                It should be used as one of multiple data sources to indicate student risk."/>

            </div>
        </div>
      <Footer></Footer>
    </div>
  );
};
