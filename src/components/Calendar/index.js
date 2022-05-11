import React, { useState, useEffect } from 'react';
import './styles.css';

import WEEKDAYS from '../../config/weekdays';
import { getDaysInMonth, getPrevMonthYear, getNextMonthYear } from '../../config/utils';

import Day from '../../components/Day';
import moment from 'moment';

const Calendar = ({ monthSelected }) => {
    const [currentEvents, setCurrentEvents] = useState([]);

    useEffect(() => {
        var events = JSON.parse(localStorage.getItem('storedEvents')) || [];
        setCurrentEvents(events);
    }, [])

    let [year, month] = monthSelected.split("-"),

        numDays = getDaysInMonth(month, year),
        startsAt = moment(`${month}-${year}`, 'MM-YYYY').startOf('month').weekday(),

        next = getNextMonthYear(month, year),

        previous = {
            ...getPrevMonthYear(month, year), // Retorna { year, month }
        }

    previous.numDays = getDaysInMonth(previous.month, previous.year);

    let getDays = () => {

        const days = [];
        for (let j = startsAt - 1; j >= 0; j--) {
            days.push({
                date: moment(`${previous.month}-${previous.numDays - j}-${previous.year}`, 'MM-DD-YYYY'),
                currentMonth: false
            });
        }

        for (let i = 1; i <= numDays; i++) {
            days.push({
                date: moment(`${month}-${i}-${year}`, 'MM-DD-YYYY'),
                currentMonth: true
            })
        }

        const daysToAdd = 6 - days[days.length - 1].date.weekday();
        for (let k = 1; k <= daysToAdd; k++) {
            days.push({
                date: moment(`${next.month}-${k}-${next.year}`, 'MM-DD-YYYY'),
                currentMonth: false
            })
        }

        return days;
    }


    return (

        <div className='p-5  '>
            <div className="calendar shadow-sm">
                {WEEKDAYS.map((day, i) => <span className='px-3' key={i}>{day}</span>)}
            </div>

            <div className="calendar shadow" id="calendar">
                {
                    getDays().map((day, i) =>
                        <Day
                            key={i}
                            day={day.date.format("DD")}
                            year={day.date.format("YYYY")}
                            month={day.date.format("MM")}
                            currentEvents={currentEvents}
                            currentMonth={day.currentMonth}
                        />
                    )
                }
            </div>
        </div>

    );
}

export default Calendar;