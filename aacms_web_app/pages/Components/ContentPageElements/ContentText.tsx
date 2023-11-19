import React from 'react';

interface ContentTextProps {
    content: string;
    fSize?: string; // New prop for fontSize, default is 24px
    isBold?: boolean; // New prop for bold text, default is false
}

const ContentText: React.FC<ContentTextProps> = ({ content, fSize = '24px', isBold = false }) => {
    const textStyle: React.CSSProperties = {
        color: '#4434A6',
        fontSize: fSize,
        fontFamily: 'League Spartan',
        paddingTop: '15px',
        fontWeight: isBold ? '900' : 'normal', // Use 'bold' if isBold is true, otherwise use 'normal'
    };

    return (
        <div style={{ width: '100%', paddingRight: '10px' }}>
            {/* Block Content */}
            <p style={textStyle}>
                {content}
            </p>
        </div>
    );
}

export default ContentText;