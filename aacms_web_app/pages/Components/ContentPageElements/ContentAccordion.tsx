import React, { useState } from 'react';

interface AccordionSection {
  title: string;
  content: string[];
}

interface AccordionProps {
  sections: AccordionSection[];
}

const Accordion: React.FC<AccordionProps> = ({ sections }) => {
  const [openSectionIndex, setOpenSectionIndex] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);


  const toggleSection = (index: number) => {
    setOpenSectionIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      {sections?.map((section, index) => (
        <div
          key={index}
          style={{ width: '100%', paddingRight: '10px', marginBottom: '10px', border: '2px solid #A1DAFD' }}
        >
          <p
            style={{
              color: '#4434A6',
              fontSize: '29px',
              fontFamily: 'League Spartan',
              padding: '10px',
              paddingLeft: '15px',
              cursor: 'pointer',
              background: openSectionIndex === index ? '#DEF2FF' : 'none',
            }}
            onClick={() => toggleSection(index)}
          >
            {section.title}
          </p>

          {/* Collapsible Content */}
          {openSectionIndex === index && (
            <p style={{ color: '#4434A6', fontSize: '20px', fontFamily: 'League Spartan', paddingTop: '15px' }}>
            <ul style={{ listStyleType: 'none', listStylePosition: 'inside' }}>
              {section?.content?.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
