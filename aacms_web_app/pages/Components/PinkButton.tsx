import React from 'react';

const PinkButton = ({ text, fSize }: { text: string,  fSize: string }) => {
  const buttonStyle = {
    backgroundColor: '#F590C1',
    color: '#FFFFFF',
    fontFamily: 'Roboto',
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
      {text}
    </button>
  );
}

export default PinkButton;
