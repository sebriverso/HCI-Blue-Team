import React from 'react';


export const ContentHeader = ({ title }: { title: string }) => {
    return (
        <div style={{ width: '100%', paddingTop: '20px', paddingRight: '10px'}}>
            {/* Block Header */}
            <h2 style={{
                borderBottom: '4px solid #A1DAFD',
                borderTop: '4px solid #A1DAFD',
                textAlign: 'left',
                padding: '10px ', color: '#4434A6', fontSize: '40px', fontFamily: 'Sanchez', fontWeight: 'bold' }}> {title} </h2>
        </div>
    );
}