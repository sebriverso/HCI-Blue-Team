import Image from 'next/image';
import { Inter } from 'next/font/google';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import  Header  from './Components/header';
import Footer from './Components/footer';
import  ContentBlock  from './Components/ContentPageElements/ContentBlock';
import  SideMenu  from './Components/ContentPageElements/SideMenu';
import ApplyNowMobile from './Components/MobileContentPage/applyNowMobile';
import MobileBottomNav from './Components/MobileHomePage/MobileFooter';
import  MobileHeader  from './Components/MobileHomePage/MobileHeader';
import  ContentHeader  from './Components/ContentPageElements/ContentHeader';
import  ContentSubHeader  from './Components/ContentPageElements/ContentSubHeader';
import  ContentText  from './Components/ContentPageElements/ContentText';
import Accordion from './Components/ContentPageElements/ContentAccordion';

const destinations = [
  { id: './admissionsProcess', title: 'Admission Process' },
  { id: './applyNow', title: 'Apply Online' },
  { id: './interviewInfo', title: 'Interview Info' },
  { id: './Enrollment', title: 'Enrollment' },
  { id: './openHouses', title: 'Open Houses' },
  { id: './summerPrograms', title: 'Summer Programs' },
];

export default function Enrollment() {
    const accordionSections = [
        {
          title: 'What is a Snap Code and where do I find it?',
          content: [
            "The Snap Code is a unique identifier that matches you to your child's enrollment information. Your child’s Snap Code was sent to you via email. The AACMS Main Office is unable to look up your Snap Code, but we can re-send the email with the Snap Code and a direct link to access your child’s Registration or Intent to Enroll form. Please contact us for help.",
          ],
        },
        {
          title: 'Do I have to answer all the questions?',
          content: [
            'Required questions are marked as "Required" on the form. You must complete all of the required questions in order to submit the form.',
          ],
        },
        {
          title: 'What if I make a mistake?',
          content: [
            'If you would like to make a change, click on the underlined field or click “Previous” to return to an earlier page.',
          ],
        },
        {
          title: 'I’ve completed the form, now what?',
          content: [
            'When you have finished entering your information, click “Submit.” This will send all of the information you’ve entered to the school. If you cannot click on this button, you will need to make sure that you have answered all required questions.',
          ],
        },
        {
          title: 'What if I have more than one student at AACMS? Do I need to do this for each child?',
          content: [
            'Yes, because you will need to provide information specific to each child. If you are completing more than one Registration or Intent to Enroll form at a time, you will be able to reuse certain information without typing it again by following the on-screen prompts on the second form.',
          ],
        },
        {
          title: 'I don’t know what a question is asking.',
          content: [
            'Please contact the AACMS Main Office at (610) 351-0234 or mainoffice@arts-cs.org for help.',
          ],
        },
        {
          title: 'Help! I’m having technical difficulties.',
          content: [
            'For most technical support issues, please visit the PowerSchool Community Support page, which can be accessed by clicking the Contact Us link within the form or by clicking this link.',
          ],
        },
        {
          title: 'I can’t remember my login for the AACMS Parent Portal or PowerSchool Enrollment.',
          content: [
            'You can reset your password by clicking the “Having trouble signing in?” link on the sign-in page. If this doesn’t work, please contact the Main Office for assistance.',
          ],
        },
      ];
      

      
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.outerWidth < 600);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {!isMobile ? (
        <>
          <Header text="My Website" />
          <div style={{ display: 'flex', alignItems: 'flex-start' }}>
            <SideMenu title='Admissions' destinations={destinations} />
            <div style={{ display: 'flex', flexDirection: 'column', alignSelf: 'stretch' }}>
              <ContentBlock
                title= "Enrollment"
                content="The information on this page applies to returning AACMS students and new students who have been accepted to AACMS after completing the application and interview process. If you have not yet applied or interviewed for AACMS, please return to the Admissions Process page for more information on how to do so.

                All of our enrollment forms are now completed online. If you have any questions or concerns about completing the online forms, please contact the Registrar’s Office for help."
              />
              <ContentHeader title={'For New Students'}></ContentHeader>
              <ContentText content = "Parents/guardians of students new to AACMS must complete the Registration Packet in order to finalize the student’s enrollment. Each parent/guardian will receive information specific to their child via email shortly after the student has been accepted."></ContentText>
              <ContentHeader title={'For Returning Students'}></ContentHeader>
              <ContentText content = "Each winter, all rising sixth, seventh, and eighth grade students are required to complete the Intent to Enroll Form. This form allows parents/guardians to indicate whether their child is returning to AACMS for the upcoming school year and is the only way to request changes to the students’ primary or secondary art focus selections."></ContentText>
              <ContentHeader title={'Need Help?'}></ContentHeader>
              <ContentText content = "Please see below for answers to some frequently asked questions on the enrollment process."></ContentText>

              <Accordion sections={accordionSections}></Accordion>
              <ContentHeader title={'Questions or Concerns'}></ContentHeader>
              <ContentText content = "If you have any questions about the application, interview, or enrollment process, please contact us! registrar@arts-cs.org or (610) 351-0234 ext. 512"></ContentText>



              



              
            </div>
          </div>
          <Footer />
        </>
      ) : (
        <>
          <MobileHeader text={''} />
          <ApplyNowMobile />
          <MobileBottomNav />
        </>
      )}
    </div>
  );
}
