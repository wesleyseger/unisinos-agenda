import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import './styles.css';
import moment from 'moment';
import arrowLeft from '../../assets/arrow-left.png';
import BigEventCard from '../../components/BigEventCard';

export default function EventsDay({ match }) {
  const [events, setEvents] = useState([]);
  const [today, setToday] = useState('');

  useEffect(() => {
    var storedEvents = JSON.parse(localStorage.getItem('storedEvents')) || [];
    setEvents(storedEvents.filter((a) => a.date === match.params.day));
    setToday(moment(match.params.day).format('dddd[,] DD [de] MMMM'));
  }, [match.params.day])

  return (
    <>
      <Header />
      <div className="selector-container ps-5 mt-3">
        <a className="back-button" href="/">
          <img src={arrowLeft} alt="" />Voltar
        </a>
      </div>

      <div className="todo-list ps-5 mt-3">
        <h2>{today}</h2>
        {
          events.map(event => (
            <BigEventCard event={event} />
          ))
        }
      </div>
    </>
  )

}