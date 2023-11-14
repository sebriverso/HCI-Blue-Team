import Image from 'next/image'
import { Inter } from 'next/font/google'
import React from 'react'
import { ContentBlock } from '../ContentPageElements/ContentBlock';

const destinations = [
    { id: './admissionsProcess', title: 'Admission Process' },
    { id: './applyNow', title: 'Apply Online' },
    { id: './applyNow', title: 'Interview Info' },
    { id: './applyNow', title: 'Enrollment' },
    { id: './openHouses', title: 'Open Houses' },
    { id: './applyNow', title: 'Summer Programs' },
  ];

export default function ApplyNowMobile() {
    return (
        <div style={{display: 'flex-start', alignItems: 'flex-start',marginBottom: '80px'}}>
            <div style={{display: 'flex', flexDirection: 'column', alignSelf: 'center'}}>
                <ContentBlock title="Apply Online" content="testing testing"></ContentBlock>
                <ContentBlock title="Process" content="insert application process here"></ContentBlock>
                
            </div>
        </div>
    );
  }