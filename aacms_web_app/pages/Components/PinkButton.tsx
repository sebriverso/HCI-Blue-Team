import React from 'react';

const PinkButton = ({ text, fSize }: { text: string,  fSize: string }) => {
  
  const buttonStyle = {
    backgroundColor: '#F590C1',
    color: '#FFFFFF',
    fontFamily: 'League Spartan',
    fontSize: fSize,
    padding: '25px',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '4px',
    height: '100%',
    width: '100%'
  };

  return (
    <button style={buttonStyle}>
      <link href='https://fonts.googleapis.com/css?family=League Spartan' rel='stylesheet'></link>
      {text}
    </button>
  );
}

export default PinkButton;
