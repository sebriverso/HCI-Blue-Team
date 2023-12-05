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
  { id: './testing', title: 'PSSA & Keystone Testing' },
  { id: './educationSupport', title: 'Education Support Service' },
  { id: './specialEducation', title: 'Special Education' },
];  


// Define a functional component
export default function ProgramOverview() {
  return (
    <div>
      <Header text="My Website"  />
        <div style={{display: 'flex', alignItems: 'flex-start'}}>
            <SideMenu title='PSSA & Keystone Testing' destinations={destinations}></SideMenu>
            <div style={{display: 'flex', flexDirection: 'column', alignSelf: 'stretch'}}>
                <ContentHeader title="PSSA & Keystone Testing"/>
                <ContentText content="Like all public schools, AACMS is required by the Pennsylvania Department of Education to administer the Pennsylvania System of School Assessment (PSSA) exams to our students each spring. Testing dates vary by school year. Please avoid scheduling vacations or other planned student absences during PSSA Testing; students who are absent from school during testing will be required to complete the assessment on an alternate date."/>
                <Link href={'https://www.arts-cs.org/_theme/files/Board/PSSA%20Information%20for%20Parents%20or%20Guardians(2).pdf'}>
                <ContentText content="PSSA Information for Parents or Guardians Click Here"/>

                </Link>
                <ContentHeader title="Testing Dates"/>
                <ContentText content="The Pennsylvania Department of Education establishes a period of time each spring during which all public schools must administer PSSA exams.  The testing information for the current school year TBA."/>
                <ContentText content="ELA PSSAs (All School) - "/>
                <ContentText content="Math PSSAs (All School) - "/>
                <ContentText content="Science PSSAs (8th Grade Only) - "/>
                <ContentText content="PSSA Makeups - "/>
                <ContentText content="Algebra 1 Keystone Exams (Select 8th Grade Students) -  "/>
                <ContentText content="Algebra 1 Makeups - "/>


                


            </div>
        </div>
      <Footer></Footer>
    </div>
  );
};