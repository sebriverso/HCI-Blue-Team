import React from 'react';
import Footer from './Components/footer';
import  Header  from './Components/header';
import MyCalendar from './Components/Calendar';
import  SideMenu  from './Components/ContentPageElements/SideMenu'
import  ContentHeader  from './Components/ContentPageElements/ContentHeader'
import  ContentSubHeader  from './Components/ContentPageElements/ContentSubHeader'
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
export default function ProgramOverview() {
  return (
    <div>
      <Header text="My Website"  />
        <div style={{display: 'flex', alignItems: 'flex-start'}}>
            <SideMenu title='Curriculum' destinations={destinations}></SideMenu>
            <div style={{display: 'flex', flexDirection: 'column', alignSelf: 'stretch'}}>
                <ContentHeader title="Program Overview"/>
                <ContentText content="At Arts Academy Charter Middle School, we believe children who study the arts grow to become organized, resilient, and compassionate adults. That’s why we have developed a unique approach to public education, which balances academic study with artistic exploration. Our program includes one to three class periods (50 to 150 minutes) of artistic instruction each day in addition to rigorous Common Core academic courses."/>
                
                <ContentHeader title="School Day & Class Schedules"/>
                <ContentText content="Our school day runs from 7:50am to 2:00pm, with the building open to students at 7:25am. The school day is divided into eight class periods, during which students participate in their artistic and academic courses. Doors close at 2:30pm following dismissal."/>
                <ContentText content="AACMS uses a six-day revolving cycle to schedule classes, meaning each school day is assigned a number from 1 to 6. Weekends, breaks, and emergency closing days are not numbered, meaning our schedule always resumes exactly where it left off."/>


                <ContentHeader title="What We Teach"/>
                <ContentText content="Our students participate in academic and artistic instruction every school day."/>

                <div style={{ display: 'flex', flexDirection: 'row', alignSelf: 'stretch' }}>
                  <ContentSubHeader content="Common Core Academics" />
                  <ContentSubHeader content="Artistic Instruction" />
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', alignSelf: 'stretch' }}>
                  <ContentText fSize='20px' content="Our rigorous Common Core academic program includes instruction in English Language Arts, Mathematics, Science, Social Studies, World Languages, and Physical Education." />
                  <ContentText fSize='20px' content="We offer instruction in six artistic disciplines that is designed for students with experience as well as those just starting to explore their artistic passions and interests." />
                </div>


                <ContentHeader title="Education Support Services"/>
                <div style={{ display: 'flex', flexDirection: 'row', alignSelf: 'stretch' }}>
                  <ContentSubHeader content="Education Support" />
                  <ContentSubHeader content="Ovations Courses" />
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', alignSelf: 'stretch' }}>
                  <ContentText content="We routinely assess student progress and offer support to those struggling in an academic class." />
                  <ContentText content="Accelerated courses for students who demonstrate interest and aptitude for English Language Arts, Mathematics, or Science." />
                </div>


                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                  <Link href='./educationSupport'>
                    <button className="apply-now-button" style={{ fontSize: '20px', fontFamily: 'League Spartan', marginTop: '20px', width: '200px', fontWeight: 'bold', padding: '8px 16px', border: '', borderRadius: '2px', cursor: 'pointer' }}>
                      More about Education Support
                    </button>
                  </Link>
                  <Link href='./ovationAcademics'>
                    <button className="apply-now-button" style={{ fontSize: '20px', fontFamily: 'League Spartan', marginTop: '20px', width: '200px', fontWeight: 'bold', padding: '8px 16px', border: '', borderRadius: '2px', cursor: 'pointer' }}>
                      More about Ovation Courses
                    </button>
                  </Link>
                </div>

                <ContentHeader title="Extra-curricular Activities"/>
                <ContentText content="Learning doesn’t stop at the end of the school day. AACMS offers a variety of after-school activities, including performance ensembles, special-interest clubs, and academic support. See our Clubs & Activities page for a current list of offerings."/>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                  <button className="apply-now-button" style={{ fontSize: '20px', fontFamily: 'League Spartan', marginTop: '20px', width: '200px', fontWeight: 'bold', padding: '8px 16px', border: '', borderRadius: '2px', cursor: 'pointer' }}>
                    Learn More
                  </button>
                </div>


            </div>
        </div>
      <Footer></Footer>
    </div>
  );
};