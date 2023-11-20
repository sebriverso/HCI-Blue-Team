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

const destinations = [
  { id: './admissionsProcess', title: 'Admission Process' },
  { id: './applyNow', title: 'Apply Online' },
  { id: './interviewInfo', title: 'Interview Info' },
  { id: './Enrollment', title: 'Enrollment' },
  { id: './openHouses', title: 'Open Houses' },
  { id: './applyNow', title: 'Summer Programs' },
];

export default function InterviewInfo() {
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
                title="New Student Interviews"
                content="Each applicant to AACMS must complete a New Student Interview as part of the admissions process. Students will be contacted via email with their assigned date and time for their interview.

                All New Student Interviews will be conducted in-person.  If you would like to request a virtual interview, please email us at registrar@arts-cs.org.  You will be contacted to set up a date outside of the in-person interviews.
                
                Interviews are evaluated using a 10-point scoring rubric. The student’s artistic demonstration, artistic potential, and interest and enthusiasm will be considered on the rubric. Comments from parents/guardians are not considered on the rubric."
              />
              <ContentHeader title="Scheduling Online Interviews" />
              <ContentText content="One of the AACMS arts teachers will contact parents/guardians by email to schedule the Online Interview. Please be sure to check the email address you provided on the application regularly for updates on the interview process.  

Please allow about 15-20 minutes to complete the entire Online Interview meeting.  A parent/guardian MUST participate in the online meeting along with the applicant.

AACMS will use Zoom Cloud Meetings to conduct the Online Interview. Parents/guardians will receive an invitation to the meeting via email and should access the meeting using an Internet-enabled device with a camera. For the best results, we strongly suggest joining the meeting with a desktop or laptop computer if one is available.  

 "
              />
              <ContentHeader title={'What to Expect During the Interview'}></ContentHeader>

              <ContentText content="During the interview, the applicant and his/her parents will meet virtually with two AACMS teachers. The student should be prepared to talk about his/her artistic background and interests and briefly demonstrate his/her artistic skills and talents in their primary artistic interest (as described below). Parents/guardians and students will also have the opportunity to ask questions about the enrollment process and student life at AACMS during the Interview.  

Please carefully review the Interview expectations for your child’s primary art form selection, described below. A prepared performance or demonstration is ideal; however, given the young age of our students, a simple presentation may suffice. The essential element we seek in all applicants is a passion for and interest in one or more artistic disciplines."
              />
              
              <ContentSubHeader content="For Performing Arts Applicants" />
              <ContentText content = "During the Interview, the applicant should be prepared to give a 1-2 minute demonstration of his/her talents and skills in the primary art focus selected on the application.  "></ContentText>
              <ContentSubHeader content="Dance" />
              <ContentText content="Please prepare and film a 1-2 minute solo dance. Your solo may be in any style, and my be taught to you by another dancer or teacher or choreographed yourself. "></ContentText>
              <ContentSubHeader content="Figure Skating" />
              <ContentText content="Applicants for the Figure Skating program will meet with the Figure Skating Coach via an online meeting and discuss their interest in skating and any prior experience, if applicable. Videos of prior performances are welcome but not required. 
"></ContentText>
              <ContentSubHeader content="Insturmental Music" />
              <ContentText content="Please prepare and film a 1-2 minute solo performed on your primary instrument, preferably a short piece or exercise from your method book you have learned recently. Students should also be prepared to sight-read a short musical passage during the Interview meeting."></ContentText>
              <ContentSubHeader content="Theater" />
              <ContentText content="Please prepare and film a 1-2 minute solo performance. A monologue is recommended, and your performance may include singing and/or dancing if desired. Resumes and/or digital portfolios will also be accepted.  Click here to suggested monologues.
"></ContentText>
              <ContentSubHeader content="Vocal Music" />
              <ContentText content="Please prepare and film a 1-2 minute solo in a style of your choice. The song should be one you have already learned and sing well. Students should also be prepared to sight-sing a simple piece of music during the Interview meeting"></ContentText>
              <ContentSubHeader content="For Literary & Media Arts and Visual Arts Applicants" />
              <ContentText content="Applicants for the Literary & Media Arts and Visual Arts programs are asked to provide samples of their work prior to the Interview. Specific requirements for these applicants are listed below. Please note we will not keep copies of your art samples after the interview process is completed. "></ContentText>
              <ContentSubHeader content="Visual Arts" />
              <ContentText content="Please submit photos of one to two pieces of artwork you have created within the last year. Ideally, these will be projects completed on your own time rather than at school. Work can include anything from doodles in a sketchbook to digital animations. Be prepared to discuss your artwork with the Visual Arts teacher during the Interview meeting. "></ContentText>
              <ContentSubHeader content="Literary Media & Arts" />
              <ContentText content="Please submit one to two samples of your original writing, which can be typed or handwritten. Please be prepared to discuss your original writing with the Literary & Media Arts faculty during the Interview meeting. "></ContentText>

              <ContentHeader title={'After The Interview'}></ContentHeader>
              <ContentText content = "AACMS will send Admissions Decision letters to parents/guardians via email according to the schedule outlined on our Admissions Process page. Applicants will receive one of three results: Accepted, Waitlisted, or Not Accepted. Parents/guardians of accepted students must confirm their enrollment with AACMS upon receiving this letter.  "></ContentText>
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
