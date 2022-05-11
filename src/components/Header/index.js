import React, { useState } from 'react';
import NewScheduleModal from '../NewScheduleModal';

import './styles.css';

export default function Header() {
	const [newScheduleModalShow, setNewScheduleModalShow] = useState(false);

	return (
		<div className="header">

			<button onClick={() => setNewScheduleModalShow(true)}>
				Novo agendamento
			</button>

			<h5 className='pe-2'>AGENDA</h5>

			<NewScheduleModal
				show={newScheduleModalShow}
				onHide={() => setNewScheduleModalShow(false)}
			/>
		</div>
	)
}
