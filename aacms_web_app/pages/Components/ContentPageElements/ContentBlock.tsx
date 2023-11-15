import React from 'react';

interface ContentBlockProps {
  title: string;
  content: string;
}

const ContentBlock: React.FC<ContentBlockProps> = ({ title, content }) => {
  return (
    <div style={{ width: '100%', paddingTop: '20px', paddingRight: '10px' }}>
      {/* Block Header */}
      <h2 style={{
        borderBottom: '4px solid #A1DAFD',
        borderTop: '4px solid #A1DAFD',
        textAlign: 'left',
        padding: '10px ', color: '#4434A6', fontSize: '40px', fontFamily: 'Sanchez', fontWeight: 'bold'
      }}> {title} </h2>

      {/* Block Content */}
      <p style={{ color: '#4434A6', fontSize: '24px', fontFamily: 'League Spartan', paddingTop: '15px' }}> {content} </p>
    </div>
  );
}

export default ContentBlock;
