import React from 'react';
import { Card, Badge } from 'react-bootstrap';
import moment from 'moment';
import Event from '../Event';

import './styles.css';

const Day = ({ year, month, day, currentMonth, currentEvents }) => {

    let styles;
    if (currentMonth) {
        styles = {
            badge: moment().format('YYYY-MM-DD') === `${year}-${month}-${day}` ? "success" : "primary",
            opacity: "1",
        }
    }

    else {
        styles = {
            badge: "secondary",
            opacity: ".5"
        }
    }

    return (
        <Card className="card--day" style={{
            opacity: styles.opacity
        }}
        >
            <Card.Body>
                <Card.Title>
                    <a href={`/events/${year}-${month}-${day}`}><Badge pill bg={styles.badge}>{day}</Badge></a>
                </Card.Title>
                {
                    currentEvents.filter(a => a.date === `${year}-${month}-${day}`).map(event => (
                        <Event hour={event.time} title={event.title} />
                    ))
                }

            </Card.Body>
        </Card >
    )
}

export default Day;