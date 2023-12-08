import Image from 'next/image'
import { Inter } from 'next/font/google'
import React, { useEffect, useState } from 'react'
import  Header  from './Components/header'
import Footer from './Components/footer'
import  SideMenu  from './Components/ContentPageElements/SideMenu'
import ContentHeader  from './Components/ContentPageElements/ContentHeader'
import ContentText from './Components/ContentPageElements/ContentText'
import  ContentSubHeader  from './Components/ContentPageElements/ContentSubHeader'
import ContentList from './Components/ContentPageElements/ContentList'
import MobileBottomNav from './Components/MobileHomePage/MobileFooter'
import  MobileHeader  from './Components/MobileHomePage/MobileHeader'
import Link from 'next/link'

const  AacmsFoundationMobile: React.FC = () =>  {
    return (
            <div style={{ marginBottom: '80px'}}>
                <div style={{ flexDirection: 'column', alignSelf: 'center'}}>
                    <ContentHeader title="AACMS Foundation" />
                    <ContentText content="The Arts Academy Charter Middle School Foundation is a 501 (c) (3) non-profit, tax-exempt organization whose primary goal is to raise funds to promote, enhance, and supplement the educational and co-curricular programs for the benefit of students and staff at the Arts Academy Charter Middle School in order to provide opportunities for students to explore their artistic passions and talents in a supportive, challenging and rigorous academic and artistic environment."  />
                    <ContentText content="The AACMS Foundation is a certified PA Charitable Organization." />
                    <ContentText content="The AACMS Foundation currently has two programs, noted below, approved by the PA Educational Improvement Tax Credit (EITC) program." />
                    <ContentText content="Determination letter PENNSYLVANIA EDUCATIONAL IMPROVEMENT TAX CREDIT (EITC)" />

                    <ContentHeader title="What is the PA Educational Improvement Tax Credit Program?" />
                    <ContentText content="Businesses who wish to support the Arts Academy Charter Middle School (AACMS) may be eligible for a tax credit through Pennsylvania's Educational Improvement Tax Credit Program." />
                    <ContentText content="The AACMS Foundation is a recognized Educational Improvement Organization (EIO) under Pennsylvania's Educational Improvement Tax Credit Program." />
                    <ContentText content="This program provides companies with a direct tax credit of up to 90 percent for a two-year commitment toward the amount a business owes in state taxes. Contributions to the AACMS through the EITC program leave companies with a much smaller state tax bill, while supporting the AACMS’ vital, high-quality educational programs serving public school children from the Lehigh Valley and neighboring regions. For more information, please visit the EITC website." />

                    <ContentHeader title="Why the Arts Academy Charter Middle School?" />
                    <ContentText content="Since its inception, the AACMS has partnered with the community to increase education and arts access and opportunities for regional Pennsylvania public school students. The AACMS' innovative educational programs provide rigorous art-infused academics and six arts programs: Dance, Instrumental Music, Vocal Music, Theater, Visual Arts, and Figure Skating. Students from more than 25 Pennsylvania public school districts, some as far as 40 miles, attend." />
                    <ContentText content="AACMS performing student troupes regularly perform throughout the community at retirement communities, regional festivals, sporting events, and arts events. The AACMS is a tuition-free school, and students do not pay art, equipment, or material fees. Our students want to come to school, and are eager to learn. Here's what our students have to say about the school:" />
                    <ContentText content="&#34;The AACMS makes me feel that school is not a place where I am trapped for seven hours a day. Before I came here I thought school would be a place where I would be mentally harassed for the rest of my life. Now that I am at the AACMS, I feel like I am not the only person who was a singer and actor. I am surrounded by people like me. I am comfortable here. I feel secure and safe. This school has made me more positive.&#34; -Vincent K., 8th grade vocal music student" />
                    <ContentText content="&#34;The AACMS has exposed me to the real world in a great way. I am now making friendships with all kinds of different people. Unlike my old school, the teachers are all very kind, patient and open to new ideas, making me very eager to learn. I used to consider school annoying, boring and an interruption, but the teachers have made it fun. Every teacher has their own special talent. They bring fun to learning and the arts, a perfect balance.&#34; -Katherine C., 6th grade figure skating student" />
                    <ContentText content="&#34;What I like best about the AACMS is how all teachers and staff are all kind and understanding.&#34; -Angel R., 5th grade instrumental music and visual arts student" />

                    <ContentHeader title="AACMS Has Two EITC Approved Educational Improvement Programs" />
                    <ContentSubHeader content="Arts in Education Program" />
                    <ContentText content="The AACMS provides an innovative approach to education by tapping into the students' existing passion for the arts to enhance their traditional academic studies." />
                    <ContentText content="The AACMS integrates the arts in classrooms by using concepts and techniques learned in arts classes to reinforce academic materials. New academic materials are presented in a multi-sensory manner, so students can link the information to arts concepts they already know and understand." />
                    <ContentText content="Students are encouraged to use creative ways to approach assignments, presentations and problem solving, and learn valuable time management skills to balance their academic and arts classwork. They also learn the value of creative problem solving, discipline, hard work, teamwork, the phases of project management, and how to improvise." />
                    <ContentText content="They establish life skills and habits that will help them succeed in higher education, and whatever they choose to do in the future. AACMS students thrive in an innovative atmosphere with like-minded peers, and attain a broader view of the world around them through their study of the arts alongside traditional academics." />
                    <ContentSubHeader content="Ovations Achievement Program" />
                    <ContentText content="The AACMS Ovations Achievement Program is an option for seventh and eighth grade students in the English and Science subject areas who demonstrate advanced skills, comprehension and interest." />
                    <ContentText content="The Ovations Achievement Program classes cover more materials at an accelerated pace, with a more concentrated focus. Ovations Science students follow the same curriculum and standards as all other students, but also study advanced-level materials and work on independent short and long-term assignments." />
                    <ContentText content="The Ovations Achievement Program provides innovative and extended learning activities that require students to increase their use of critical thinking skills, including analysis, synthesis, and problem solving. Students are encouraged to dig deeper and engage in lively, collaborative classroom discussions." />
                
                    <ContentHeader title="How Does It Work?" />
                    <ContentText content="Your company's charitable giving becomes a low-cost gift when you redirect your state business taxes to the participating approved EITC program of your choice." />
                    <ContentList key={'mobile'} content={[
                        "A one-year commitment will earn you a state tax credit of 75% of your contribution. A business that agrees to provide the same amount for two consecutive tax years will earn a credit of 90%.",
                        "Tax credits may be applied against the tax liability of a business for the tax year in which the contribution was made.",
                        "The non-credited portion of the gift can be claimed as a charitable contribution for federal tax purposes.",
                        "Businesses may request up to $750,000 in tax credits per year."]} />
                    <ContentText content="Eligible entities include businesses subject to the following taxes:" />
                    <ContentList content={[
                        "Corporate Net Income Tax",
                        "Capital Stock/Foreign Franchise Tax",
                        "Bank Shares Tax",
                        "Title Insurance and Trust Company Shares Tax",
                        "Insurance Premiums Tax",
                        "Mutual Thrift Tax",
                        "Gross Receipts Tax",
                        "Tax under the Insurance Company Law of 1921",
                        "Personal Income Tax"]} />

                    <ContentHeader title="How Does a Company Apply?" />
                    <ContentText  content="All applicants are required to submit applications electronically through www.newpa.com. The business application guide explains the process of applying. Businesses must apply specifically for Educational Improvement Organization (EIO) credits if they wish to support the AACMS' programs." />
                    <ContentSubHeader content="New Businesses May Apply Beginning July 1st" />
                    <ContentText  content="EITC applications are approved on a first-come, first-served basis by date submitted. The Department of Community and Economic Development will send an approval letter to businesses awarded educational improvement tax credits. The business then has 60 days to send its philanthropic contribution to the Arts Academy Charter Middle School Foundation, Development Department, 1610 East Emmaus Avenue, Allentown, PA 18103." />
                    <ContentText  content="The AACMS will issue a gift acknowledgment which the business must send to the Department of Community and Economic Development within 90 days of the original approval letter. After sharing this written acknowledgment with the department, the business will receive the amount of tax credits outlined in the original approval letter." />

                    <ContentHeader title="For More Information" />
                    <ContentText  content="For specific information on how the Pennsylvania Educational Improvement Tax Credit (EITC) program can benefit your business, please contact your accountant or financial advisor. For additional information about the AACMS' EITC approved programs, please contact the AACMS." />
                </div>
            </div>
    )
};

const destinations = [
    { id: './admissionsProcess', title: 'Admission Process' },
    { id: './applyNow', title: 'Apply Online' },
    { id: './interviewInfo', title: 'Interview Info' },
    { id: './Enrollment', title: 'Enrollment' },
    { id: './openHouses', title: 'Open Houses' },
    { id: './summerPrograms', title: 'Summer Programs' },
  ];

const SummerPrograms:  React.FC = ()  => {

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
            <><Header text='AACMS' /><div style={{ display: 'flex', alignItems: 'flex-start' }}>
                    <SideMenu title='Summer Programs' destinations={destinations} />
                    <div style={{ display: 'flex', flexDirection: 'column', alignSelf: 'stretch' }}>
                        <ContentHeader title="Summer Workshops" />
                        <ContentText content="Looking for a way to beat summer boredom?   Our Summer Workshops are the perfect way to help your child develop new skills and meet new friends. And, for students joining us for the first time in the fall, it’s an ideal way to transition into the new school year!" />
                        <ContentText  content=" We're also offering an Instrumental Music Summer Lesson Program!" />
                        <Link href={'https://www.arts-cs.org/lessons'}>
                        <ContentText  content="Learn More" />
                        </Link>
                        <ContentHeader title={'2022 Summer Workshops Information'}></ContentHeader>
                        <ContentText  content="AACMS will offer four unique artistic and academic programs this summer! Please note that program offerings are subject to change based on enrollment and availability." />
                        <ContentText  content="2022 Program Dates & Times" />
                        <ContentText  content="Program Dates: July 25-29 (Monday-Friday)" />
                        <ContentText  content="Program Times: 9:00am-12:00pm daily" />
                        <ContentText  content="Program Costs: $75 per participant" />
                        <ContentText  content="Eligible Participants: Students entering grades 4-8 at any school in Fall 2022" />
                        <ContentText  content="Program Location: In-person at AACMS" />
                        <ContentText  content="Registration Deadline:  Monday, July 18, 2022." />

                        <ContentHeader title="How to Register" />
                        <ContentText  content="Registration and payment for the Summer Workshops are online this year. If you prefer to pay by check, you must download, complete, and print the PDF registration form and mail it to AACMS according to the instructions on the form." />
                        <ContentText  content="Online registration and payment are completed in two steps:
Complete the online registration form by clicking the link above.  
After submitting the registration form, return to this page and click the Pay Online link to submit your payment." />
                        <ContentText  content="Both of these steps must be completed for your child’s registration to be finalized. We will send you an email reminder about payment within a few days of receiving your online registration." />

                        <ContentHeader title="Our 2022 Summer Workshops include:" />
                        <ContentSubHeader content="Dance Intensive" />
                        <ContentText  content="A creative, collaborative, and inspirational exploration of ballet, jazz, modern, contemporary, and/or musical theater dance styles. Dancers will focus on technique and combinations during the camp. (Requirements: leotard, convertible or footless tights, ballet slippers or jazz shoes.)" />
                        
                        <ContentSubHeader content="Dance Intensive" />
                        <ContentText  content="Registration Deadline:  Monday, July 18, 2022." />
                        <ContentSubHeader content="NEW! Turing Tumble" />
                        <ContentText  content="Participants will discover, see, and feel how computers work in this new workshop based on the Turing Tumble game! Students will design and building mechanical computers, experiencing firsthand how computers and coding work. This program will allow students from all backgrounds and interests to discover how creativity and technology can combine to create marvelous mechanical machines." />
                        <ContentSubHeader content="NEW! The Actor's Back Pocket" />
                        <ContentText  content="No matter if you are interested in plays, musicals, camera work, or live theater, you’ll grow from your work with the actor’s back pocket. Students will participate in focused games, open scene work and collaboration with others to refine the skills that make them a unique and powerful presence onstage in any role. Students will gain confidence in creating comedy from scratch and walk away with learn life-long collaborative skills." />
                        <ContentSubHeader content="NEW! Summer CSI: AACMS" />
                        <ContentText content={'Put your science and problem-solving skills to the test with Summer CSI: AACMS!'}></ContentText>
                        
                        <ContentText content={'The Kidnapped Cookie Mystery (Grades 4-5): Use your sleuthing scientific skills to solve the Kidnapped Cookie Mystery! Kids will scope out the clues and use the scientific method to reveal the crooks who stole the cookies from the cookie jar! Was it YOU? '}></ContentText>
                        
                        <ContentText content={'Forensics Field Work (Grades 6-8): So many crimes! So many clues! How do we know what is a clue and what is not? Join us for a week of problem-solving using observation, inference and good old-fashioned sleuthing work. We’ll be using magnifying lenses, microscopes and more to solve our mysteries.'}></ContentText>
                        <Link href={'https://ci.ovationtix.com/35469/store/products/78616'}>
                            <ContentSubHeader content={'Pay Online'}></ContentSubHeader>
                        </Link>
                        <Link href={'https://www.arts-cs.org/_theme/files/Board/AACMS%20Summer%20Workshop%202022.pdf'}>
                            <ContentSubHeader content={'PDF Flyer & Form'}></ContentSubHeader>
                        </Link>
                        <ContentText content={'If you have any questions or concerns about your child’s Summer Workshop registration, please contact the AACMS Events Office at events@arts-cs.org.'}></ContentText>
                    </div>
                </div><Footer /></>
            ) : (

                <><MobileHeader text={''} /> <AacmsFoundationMobile /> <MobileBottomNav /></>
            )}
        </div>
    );
}

export default SummerPrograms 