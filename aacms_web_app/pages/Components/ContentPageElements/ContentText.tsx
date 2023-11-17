import React from 'react';

interface ContentTextProps {
    content: string;
    fSize?: string; // New prop for fontSize
}

const ContentText: React.FC<ContentTextProps> = ({ content, fSize = '24px' }) => {
    return (
        <div style={{ width: '100%', paddingRight: '10px' }}>
            {/* Block Content */}
            <p style={{ color: '#4434A6', fontSize: fSize, fontFamily: 'League Spartan', paddingTop: '15px' }}>
                {content}
            </p>
        </div>
    );
}

export default ContentText;
