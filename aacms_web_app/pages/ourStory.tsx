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



const OurStory = () => {
    const destinations = [
        {id: './ourStory', title: 'Our Story'},
        {id: './boardOfDirectors', title: 'Board of Directors'},
        {id: './ourStory', title: 'Employment'},
        {id: './ourStory', title: 'Faculty and Staff'},
        {id: './ourStory', title: 'Policies'}
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
                        <ContentHeader title="About Our School" />
                        <ContentText content="Arts Academy Charter Middle School (AACMS) is an arts-focused public school of choice serving eastern Pennsylvania students in grades five through eight. Our student body of approximately 350 represents over twenty local school districts." />
                        <ContentText content="We believe children who study the arts grow to become organized, resilient, and compassionate adults. That's why our unique approach to public education balances academic study with artistic exploration—every day. Our highly-qualified teachers endeavor to create an inclusive community of student artists that celebrates each individual's talents while striving for a shared goal of academic and artistic excellence. As such, we support the needs of all our students, including those with disabilities." />
                        <ContentText content="We encourage anyone interested in learning more about our school to explore our website and contact us with any questions." />

                        <div style={{ display: 'flex', flexDirection: 'row', alignSelf: 'stretch' }}>
                            <ContentSubHeader content="Our Mission" />
                            <ContentSubHeader content="Our Vision" />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', alignSelf: 'stretch' }}>
                            <ContentText content="The Arts Academy Charter Middle School provides opportunities for students to explore their artistic passions and talents in a supportive, challenging and rigorous academic and artistic environment." />
                            <ContentText content="The Arts Academy Charter Middle School is the signature model of success in combining arts-focused education through enriching the lives of students and inspiring them to greater achievement." />
                        </div>

                        <ContentHeader title="Our Story" />
                        <ContentText content="Opened in August 2012, Arts Academy Charter Middle School was created to serve the unique educational needs of Lehigh Valley and eastern Pennsylvania middle school students with a passion for and interest in the performing and visual arts. AACMS was originally conceived and founded by Dr. Thomas Lubben, who founded the school now known as the Lehigh Valley Charter High School for the Arts (LVCA) in 2003." />
                        <ContentText content="The process of opening AACMS began in 2010 with the establishment of a Founding Board and an initial search for the school's location. A site in Salisbury Township was eventually identified, and the Salisbury Township School District's Board of Directors approved the application for Arts Academy Charter School in February 2012. William Fitzpatrick and Jan Labellarte were named Executive Director and Principal, respectively, and the founding faculty members were interviewed and hired over the next several months. Many of the opening-day faculty and staff members remain with the school to this day, a testament to their belief in arts education and willingness to work for the best interest of our students." />
                        <ContentText content="AACMS opened its doors to students on August 28, 2012, after two years of planning and months of effort by its faculty and staff. We owe our existence today to the determination and will of the faculty, staff, students, and families who came together to lay the foundation for the unique form of public education our students still enjoy." />
                        <ContentText content="AACMS has continued to evolve since its opening, though our core mission of providing a welcoming and rigorous educational environment has remained unchanged. The Salisbury Township School District Board of Directors has renewed the schools charter twice—in 2015 and 2020. AACMS achieved accreditation from the Middle States Commission on Elementary and Secondary Schools in December 2017 after a year-long application, self-study and review process. Elaine Hersh, a fifth grade teacher at AACMS since its opening, succeeded Jan Labellarte as Principal in July 2015. In 2018, AACMS implemented a seventh art focus—Literary & Media Arts—in addition to opening a new Keyboard Studies concentration as part of the Instrumental Music department." />

                        <ContentHeader title="A Message From the Executive Director" />
                        <ContentText content="Thank you for your interest in the Arts Academy Charter Middle School." />
                        <ContentText content="Serving the needs and dreams of student artists from more than 21 parent school districts, the Arts Academy opened its doors in August, 2012. Our dedicated faculty and staff were privileged to work with more than 350 students in grades 5 through 8." />
                        <ContentText content="As a public charter school we are able to offer a fully-accredited academic program with special focus on seven artistic disciplines: Dance, Instrumental Music, Vocal Music, Literary & Media Arts, Theater, Visual Arts and Figure Skating. Our classroom size is 25 or less, thus affording our talented teachers the opportunity to give greater attention to the individual needs of each student." />
                        <ContentText content="We remain steadfast in our belief that the arts matter. Further, we remain fully committed to fostering the dreams and aspirations of every student in our care while maintaining the highest level of academic achievement." />
                        <ContentText content="Your inquiries and issues are welcome. Please feel free to contact our school at any time. Of course, you can contact me directly if you feel the need." />
                        <ContentText content="Very truly yours," />
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
                            <p style={{ color: '#4434A6', fontSize: '24px', fontFamily: 'League Spartan', paddingTop: '15px' }}> William M. Fitzpatrick</p>
                            <p style={{ color: '#4434A6', fontSize: '24px', fontFamily: 'League Spartan' }}> Executive Director</p>
                        </div>
                    </div>
                </div><Footer /></>
            ) : (

                <><MobileHeader text={''} /><OurStoryMobile></OurStoryMobile><MobileBottomNav /></>
            )}
            
        </div>
    );
}

export default OurStory;