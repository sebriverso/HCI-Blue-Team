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



const FacultyStaff = () => {
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
                    
                      <ContentSubHeader content={"Administration"}/>
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
                      <ContentSubHeader content={"Faculty"}/>
                      <div style={{ display: 'flex', flexDirection: 'row'}}>
                        <div style={{flex: 1, margin:'10px', padding:'10px', backgroundColor:'#DEF2FF', color: '#4434A6'}}>
                          <p><b>Andrea Angstadt</b></p>
                          <p>Director of Health and Wellness</p>
                          <p>aangstadt@arts-cs.org</p>
                        </div>
                        <div style={{flex: 1, margin:'10px', padding:'10px', backgroundColor:'#DEF2FF', color: '#4434A6'}}>
                          <p><b>Angelin Deleon</b></p>
                          <p>Main Office Administrative Assistant/Transportation Coordinator</p>
                          <p>adeleon@arts-cs.org</p>
                        </div>
                        <div style={{flex: 1, margin:'10px', padding:'10px', backgroundColor:'#DEF2FF', color: '#4434A6'}}>
                          <p><b>Jesse Garin</b></p>
                          <p>Dean of Students</p>
                          <p>jgarin@arts-cs.org</p>
                        </div>
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'row'}}>
                        <div style={{flex: 1, margin:'10px', padding:'10px', backgroundColor:'#DEF2FF', color: '#4434A6'}}>
                          <p><b>Mary Gotzon</b></p>
                          <p>Executive Assistant to the Executive Director, Human Resources Assistant</p>
                          <p>mgotzon@arts-cs.org</p>
                        </div>
                        <div style={{flex: 1, margin:'10px', padding:'10px', backgroundColor:'#DEF2FF', color: '#4434A6'}}>
                          <p><b>Christa Greagori</b></p>
                          <p>Education Support Services Special Education Director</p>
                          <p>cgreagori@arts-cs.org</p>
                        </div>
                        <div style={{flex: 1, margin:'10px', padding:'10px', backgroundColor:'#DEF2FF', color: '#4434A6'}}>
                          <p><b>Theodora Loupos</b></p>
                          <p>Community Outreach Liaison</p>
                          <p>tloupos@arts-cs.org</p>
                        </div>
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'row'}}>
                        <div style={{flex: 1, margin:'10px', padding:'10px', backgroundColor:'#DEF2FF', color: '#4434A6'}}>
                          <p><b>Susan Ott</b></p>
                          <p>Communications Director Lunch Program Coordinator</p>
                          <p>sott@arts-cs.org</p>
                        </div>
                        <div style={{flex: 1, margin:'10px', padding:'10px', backgroundColor:'#DEF2FF', color: '#4434A6'}}>
                          <p><b>Shelley Penchick</b></p>
                          <p>Part-Time Nurse</p>
                          <p>spenchick@arts-cs.org</p>
                        </div>
                        <div style={{flex: 1, margin:'10px', padding:'10px', backgroundColor:'#DEF2FF', color: '#4434A6'}}>
                          <p><b>Amy Reid</b></p>
                          <p>Business Manager Registrar</p>
                          <p>areid@arts-cs.org</p>
                        </div>
                      </div>
                      
                      <div style={{ display: 'flex', flexDirection: 'row'}}>
                        <div style={{flex: 1, margin:'10px', padding:'10px', backgroundColor:'#DEF2FF', color: '#4434A6'}}>
                          <p><b>Leslie VanPutten</b></p>
                          <p>Main Office Administrative Assistant</p>
                          <p>sott@arts-cs.org</p>
                        </div>
                        <div style={{flex: 1, margin:'10px', padding:'10px', backgroundColor:'#DEF2FF', color: '#4434A6'}}>
                          <p><b>Cesar Medina</b></p>
                          <p>Senior Custodian</p>
                          <p>cmedina@arts-cs.org</p>
                        </div>
                        <div style={{flex: 1, margin:'10px', padding:'10px', backgroundColor:'#DEF2FF', color: '#4434A6'}}>
                          <p><b>Enrique Jimenez</b></p>
                          <p>Custodian</p>
                        </div>
                        <div style={{flex: 1, margin:'10px', padding:'10px', backgroundColor:'#DEF2FF', color: '#4434A6'}}>
                          <p><b>Karen Pinto</b></p>
                          <p>Custodian</p>
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

export default FacultyStaff;