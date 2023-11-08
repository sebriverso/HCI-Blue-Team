import React from 'react';


export const ContentSubHeader = ({ content }: { content: string }) => {
    return (
        <div style={{ width: '100%', paddingRight: '10px' }}>
            {/* SubHeader Content */}
            <p style= {{color: '#4434A6', fontSize: '36px', fontFamily: 'League Spartan', paddingTop: '15px', fontWeight: 'bold'}}> {content} </p>
        </div>
    );
}