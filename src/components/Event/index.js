import React from 'react';
import { Card, Badge } from 'react-bootstrap';

import './styles.css';

const Event = ({ hour, title }) => {
    return (
        <Card.Text className="mb-2">
            <Badge className="badge--event" bg="warning" text="dark">{hour} - {title}</Badge>
        </Card.Text>
    );
}

export default Event;