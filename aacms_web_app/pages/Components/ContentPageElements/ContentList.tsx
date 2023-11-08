import React from 'react';

interface ContentListProps {
    content: String[];
}

const ContentList: React.FC<ContentListProps> = ({ content }) => {
    return (
        <div style={{ width: '100%', paddingRight: '10px' }} key={content.length}>
            <p style= {{color: '#4434A6', fontSize: '24px', fontFamily: 'League Spartan', paddingTop: '15px'}}> 

                {/* List Content */}
                <ul style={{listStyleType: 'circle', listStylePosition: 'inside'}}>
                {content.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
                </ul>

            </p>
        </div>
    );
}

export default ContentList;