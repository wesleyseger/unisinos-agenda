import React, { useState, useEffect } from 'react';
import './styles.css';

import Header from '../../components/Header';
import Calendar from '../../components/Calendar';

export default function Home() {
  const [monthSelected, setMonthSelected] = useState('2022-04');

  useEffect(() => {
    // let date = new Date();
    // console.log(`${date.getFullYear()}-${(date.getMonth() + 1).padEnd(2, '0')}`);
    // // setMonthSelected();
  }, [])

  return (
    <>
      <Header />

      <div className="selector-container ps-5 mt-3">
        <input
          className='float-start ms-2'
          type="month"
          value={monthSelected}
          onChange={e => setMonthSelected(e.target.value)}
        >
        </input>
      </div>

      <Calendar
        monthSelected={monthSelected}
      />
    </>
  )
}