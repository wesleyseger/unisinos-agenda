import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

import './styles.css';

export default function NewScheduleModal({ show, onHide }) {
	const [dateSelected, setDateSelected] = useState(null);
	const [timeSelected, setTimeSelected] = useState(null);
	const [title, setTitle] = useState('');

	function addSchedule() {
		var events = JSON.parse(localStorage.getItem('storedEvents')) || [];
		events.push({ date: dateSelected, time: timeSelected, title: title });
		localStorage.setItem('storedEvents', JSON.stringify(events));

		setDateSelected();
		setTimeSelected();
		setTitle();

		onHide();
	}

	return (
		<Modal
			show={show}
			onHide={onHide}
			size="lg"
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title>Novo Agendamento</Modal.Title>
			</Modal.Header>
			<Modal.Body className="new-schedule-body">

				<div className="picker">
					<span>
						<label>Selecione um dia:</label>
						<input type="date" value={dateSelected} onChange={e => setDateSelected(e.target.value)}></input>
					</span>
					<span>
						<label>Selecione um horário:</label>
						<input type="time" value={timeSelected} onChange={e => setTimeSelected(e.target.value)}></input>
					</span>
				</div>
				<span>
					<label>Informe a sua atividade:</label>
					<textarea onChange={(e) => setTitle(e.target.value)}></textarea>
				</span>

			</Modal.Body>
			<Modal.Footer>
				<Button
					variant="success"
					onClick={() => addSchedule()}
				>
					Adicionar
				</Button>
				<Button
					variant="danger"
					onClick={() => onHide()}
				>
					Cancelar
				</Button>
			</Modal.Footer>
		</Modal >
	);
}