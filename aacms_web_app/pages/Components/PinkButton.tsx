import React from 'react';

const PinkButton = ({ text }: { text: string }) => {
  const buttonStyle = {
    backgroundColor: '#F590C1',
    color: '#FFFFFF',
    fontFamily: 'Roboto',
    fontSize: '16px',
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
