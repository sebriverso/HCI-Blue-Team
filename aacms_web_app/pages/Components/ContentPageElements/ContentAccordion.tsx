import React, { useState } from 'react';

interface AccordionSection {
  title: string;
  content: React.ReactNode;
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
          style={{ width: '95%', marginBottom: '10px', border: '2px solid #A1DAFD' }}
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
            <div style={{ color: '#4434A6', fontSize: '20px', fontFamily: 'League Spartan', padding: '10px' }}>
              {section.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
