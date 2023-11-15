import React from 'react';
import Footer from './Components/footer';
import  Header  from './Components/header';
import MyCalendar from './Components/Calendar';
import  SideMenu  from './Components/ContentPageElements/SideMenu'
import  ContentHeader  from './Components/ContentPageElements/ContentHeader'
import  ContentText from './Components/ContentPageElements/ContentText'
import Link from 'next/link'




const destinations = [
    {id: './calendar', title: 'Calendar'},
    {id: './aacmsFoundation', title: 'AACMS Foundation'},
    {id: './aacmsFoundation', title: 'Donate'},
    {id: './aacmsFoundation', title: 'Fundraise'},
    {id: './aacmsFoundation', title: 'Volunteer'},
    {id: './aacmsFoundation', title: 'Logowear'}
];


// Define a functional component
export default function CalendarPage() {
  return (
    <div>
      <Header text="My Website"  />
        <div style={{display: 'flex', alignItems: 'flex-start'}}>
            <SideMenu title='Events' destinations={destinations}></SideMenu>
            <div style={{display: 'flex', flexDirection: 'column', alignSelf: 'stretch'}}>
                <ContentHeader title="School Calendar"></ContentHeader>
                <ContentText content="AACMS is a small school with a very busy schedule! Below are our 2023-2024 Academic School Calendar and our Events Calendar."/>
                
                <p style={{color: '#4434A6', fontSize: '25px', fontFamily: 'League Spartan', paddingTop: '5px'}}>
                  <div style={{display: "flex", justifyContent: 'center'}}>
                    <Link href="https://www.arts-cs.org/_theme/files/Academic%20Calendar%202023-2024%20(1).pdf">
                      <button className="apply-now-button" style={{fontSize: '20px', fontFamily: 'League Spartan', marginTop: '20px', width:'200px', fontWeight: 'bold', padding: '8px 16px', marginBottom: "30px", border: '', borderRadius: '2px', cursor: 'pointer' }}>
                            2023-2024 School Calendar
                      </button>
                    </Link>
                  </div>
                </p>
                <MyCalendar title="" />
            </div>
        </div>
      <Footer></Footer>
    </div>
  );
};
