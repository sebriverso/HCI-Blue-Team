import Image from 'next/image'
import { Inter } from 'next/font/google'
import React from 'react'
import { ContentBlock } from '../ContentPageElements/ContentBlock';

export default function OpenHousesMobile() {
    return (
        <div style={{ alignItems: 'center',marginBottom: '80px'}}>
            <div style={{display: 'flex', flexDirection: 'column', alignSelf: 'stretch'}}>
                <ContentBlock title="Open Houses" content="testing testing"></ContentBlock>
            </div>
        </div>
    );
  }