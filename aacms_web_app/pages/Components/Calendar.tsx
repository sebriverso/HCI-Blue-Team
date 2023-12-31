import * as React from 'react';
import 'date-fns';
import { useState } from 'react';
import { Schedulely } from 'schedulely';
import 'schedulely/dist/index.css';

const MyCalendar = ({ title }: { title: string }) => {
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <div>
      <h2 style={{ textAlign: 'center', color: '#4434A6', fontSize: '40px', fontFamily: 'Sanchez',fontWeight: 'bold' }}>{title}</h2>
      <div style={{ border: '2px solid #ccc', borderRadius: '8px', display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '100%', position: 'static', zIndex: '-1' }}>
          <Schedulely events={[]} />
        </div>
      </div>
    </div>
  );
};

export default MyCalendar;
