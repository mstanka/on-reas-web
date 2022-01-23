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
			<input
				type="text"
				placeholder="Telefon..."
				value={formData.phone}
				onChange={(event) => setFormData({ ...formData, phone: event.target.value })}
			/>
		</div>
	);
};

export default Personal;
