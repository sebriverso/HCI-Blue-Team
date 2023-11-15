// ContentText.tsx

import React from 'react';

const ContentText: React.FC<{ content: string }> = ({ content }) => {
    return (
        <div style={{ width: '100%', paddingRight: '10px' }}>
            {/* Block Content */}
            <p style= {{color: '#4434A6', fontSize: '24px', fontFamily: 'League Spartan', paddingTop: '15px'}}> {content} </p>
        </div>
    );
}

export default ContentText;
