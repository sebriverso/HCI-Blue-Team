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



const BoardOfDirectors = () => {
    const destinations = [
        {id: './ourStory', title: 'Our Story'},
        {id: './boardOfDirectors', title: 'Board of Directors'},
        {id: './ourStory', title: 'Employment'},
        {id: './ourStory', title: 'Faculty and Staff'},
        {id: './ourStory', title: 'Policies'}
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
                        <ContentHeader title="Board of Directors" />
                        <ContentText content="The AACMS Board of Directors meets on the third Monday of each month. All meetings are held in room 103 at Arts Academy Charter Middle School, 1610 East Emmaus Avenue, Allentown, PA 18103. Meetings begin at 6:00 pm. Members of the school community are welcome and encouraged to attend." />
                        <ContentHeader title="Meeting Schedule" />
                        <div style={{ display: 'flex', flexDirection: 'row', alignSelf: 'stretch' }}>
                            <div style = {{display: 'flex', flexDirection: 'column', alignSelf: 'stretch'}}>
                            <ContentText content="All Board of Directors Meetings begin at 6:00 pm." />
                            { dates.map((date, index) => (
                            <ContentText key={index} content={date} />
                            ))
                            }


                            </div>
                            <div style = {{display: 'flex', flexDirection: 'column', alignSelf: 'stretch'}}>
                            <ContentText content="The AACMS Board of Directors will conduct its 2023 meetings in-person at the school." />
                            <ContentText content="If you have any questions about attending the meeting, please contact Mary Gotzon, Assistant to the Executive Director, at mgotzon@arts-cs.org." />
                            <ContentText content="Monthly Board Agendas will be posted on the home page when available." />
                            </div>
                        </div>

                        <ContentHeader title="Current Members" />

                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'stretch' }}>
                            {people.map((person, index) => (
                            <div key={index} style={{ display: 'flex', flexDirection: 'column', flex: '1', margin: '8px' }}>
                                <ContentText content={person.name} />
                                <ContentText content={person.position} />
                            </div>
                            ))}
                        </div>
                        
                    </div>
                </div><Footer /></>
            ) : (

                <><MobileHeader text={''} /><OurStoryMobile></OurStoryMobile><MobileBottomNav /></>
            )}
            
        </div>
    );
}

export default BoardOfDirectors;