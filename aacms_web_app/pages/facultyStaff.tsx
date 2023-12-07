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



const facultyStaff = () => {
    const destinations = [
        {id: './ourStory', title: 'Our Story'},
        {id: './boardOfDirectors', title: 'Board of Directors'},
        {id: './employment', title: 'Employment'},
        {id: './facultyStaff', title: 'Faculty and Staff'},
        {id: './policies', title: 'Policies'}
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
                    <div style={{ display: 'flex', flexDirection: 'column', alignSelf: 'stretch', width: '100%' }}>
                      <ContentHeader title="Faculty & Staff" />
                      <ContentText content={"This page lists all current AACMS Administration, Faculty, and Staff members."}></ContentText>
                    
                      <div style={{ display: 'flex', flexDirection: 'row'}}>
                        <div style={{flex: 1, margin:'10px', padding:'10px', backgroundColor:'#DEF2FF', color: '#4434A6'}}>
                          <p><b>William Fitzpatrick</b></p>
                          <p>Executive Director</p>
                          <p>wfitzpatrick@arts-cs.org</p>
                        </div>
                        <div style={{flex: 1, margin:'10px', padding:'10px', backgroundColor:'#DEF2FF', color: '#4434A6'}}>
                          <p><b>Elaine Hersh</b></p>
                          <p>Chief Academic Officer</p>
                          <p>ehersh@arts-cs.org.</p>
                        </div>
                        <div style={{flex: 1, margin:'10px', padding:'10px', backgroundColor:'#DEF2FF', color: '#4434A6'}}>
                          <p><b>Bill Cecchini</b></p>
                          <p>Principal</p>
                          <p>wcecchini@arts-cs.org</p>
                        </div>
                      </div>
                    </div>
                </div><Footer /></>
            ) : (

                <><MobileHeader text={''} /><OurStoryMobile></OurStoryMobile><MobileBottomNav /></>
            )}
            
        </div>
    );
}

export default facultyStaff;