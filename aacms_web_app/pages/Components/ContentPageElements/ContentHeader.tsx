import React from 'react';

const ContentHeader: React.FC<{ title: string }> = ({ title }) => {
    return (
        <div style={{ width: '100%', paddingTop: '20px', paddingRight: '10px'}}>
            {/* Block Header */}
            <h2 style={{
                borderBottom: '4px solid #A1DAFD',
                borderTop: '4px solid #A1DAFD',
                textAlign: 'left',
                padding: '10px ', color: '#4434A6', fontSize: '35px', fontFamily: 'Sanchez', fontWeight: 'bold' }}> {title} </h2>
        </div>
    );
}

export default ContentHeader;
