import React from 'react';

const Personal = ({ formData, setFormData }) => {
	return (
		<div className="form__body-container">
			<input
				type="text"
				placeholder="Jméno..."
				value={formData.fullName}
				onChange={(event) => setFormData({ ...formData, fullName: event.target.value })}
			/>
			<input
				type="text"
				placeholder="Email..."
				value={formData.email}
				onChange={(event) => setFormData({ ...formData, email: event.target.value })}
			/>
			{/* {message && <div className="message">{message.email}</div>} */}
			<input
				type="text"
				placeholder="Telefon... (včetně +420)"
				value={formData.phone}
				onChange={(event) => setFormData({ ...formData, phone: event.target.value })}
			/>
			{/* {message && <div className="message">{message.phone}</div>} */}
		</div>
	);
};

export default Personal;
