import React from 'react';

const ContentSubHeader: React.FC<{ content: string }> = ({ content }) => {
    return (
        <div style={{ width: '100%', paddingRight: '10px' }}>
            {/* SubHeader Content */}
            <p style={{ color: '#4434A6', fontSize: '36px', fontFamily: 'League Spartan', paddingTop: '15px', fontWeight: 'bold' }}>{content}</p>
        </div>
    );
}

export default ContentSubHeader;
