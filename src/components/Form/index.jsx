import React, { useState } from 'react';
import Navigation from '../Navigation';
import Estate from './Estate';
import Personal from './Personal';
import Final from './Final';
import Footer from '../Footer';

const Form = () => {
	const [step, setStep] = useState(1);
	const [formData, setFormData] = useState({
		estateType: '',
		region: '',
		district: '',
		fullName: '',
		email: '',
		phone: '',
	});
	const [message, setMessage] = useState({
		email: '',
		phone: '',
		error: '',
	});

	const changeStep = () => {
		if (step === 1) {
			setStep((step) => step + 1);
		}
		if (step === 3) {
			setStep(() => 1);
		}
	};

	const isFilled = (data) => {
		let valid = true;
		for (const item in data) {
			if (item.length === 0) {
				valid = false;
				setStep(() => 1);
				setMessage(() => [{ ...message, error: 'Vyplńte prosím všechna uvedená pole' }]);
				break;
			}
		}
		return valid;
	};

	const isValid = (email, phone) => {
		const regExEmail =
			/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
		const regExPhone = /^(\\+420)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/;

		if (!email.toLowerCase().match(regExEmail)) {
			setMessage(() => [{ ...message, email: 'Zadejte emailovou adresu' }]);
			return false;
		}

		if (!phone.match(regExPhone)) {
			setMessage(() => [{ ...message, phone: 'Zadejte telefonní číslo včetně předčíslí +420' }]);
			return false;
		}

		return true;
	};

	const submit = async () => {
		isValid(formData.email, formData.phone);
		isFilled(formData);

		// if (isFilled && isValid) {
		// URL_LOCAL=http://localhost:3000/lead
		fetch('https://on-reas-api.herokuapp.com/lead', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				...formData,
			}),
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error('Network response was not OK');
				}
			})
			.catch((error) => {
				console.error('There has been a problem with your fetch operation:', error);
			});

		setStep((step) => step + 1);
		// }
	};

	return (
		<>
			<Navigation />
			<div className="wrapper">
				<form className="form" method="POST">
					<div className="form__container">
						<progress max="3" value={step} />
						<div className="form__header">
							{step === 1 && (
								<>
									<h1 className="form__header-title">Nemovitost</h1> <small>Vyplňte prosím všechna uvedená pole</small>
								</>
							)}
							{step === 2 && (
								<>
									<h1 className="form__header-title">Osobní údaje</h1> <small>Vyplňte prosím všechna uvedená pole</small>
								</>
							)}
						</div>
						<div className="form__body">
							{step === 1 && <Estate formData={formData} setFormData={setFormData} />}
							{step === 2 && <Personal formData={formData} setFormData={setFormData} />}
							{step === 3 && <Final />}
						</div>

						<div className="form__footer">
							<div className="form__footer-container">
								{step === 1 && (
									<button className="btn" onClick={changeStep}>
										Další
									</button>
								)}
								{step === 2 && (
									<button type="submit" className="btn" onClick={submit}>
										Odeslat
									</button>
								)}
								{step === 3 && (
									<button className="btn" onClick={changeStep}>
										Zpět
									</button>
								)}
							</div>
						</div>
					</div>
				</form>
			</div>
			<Footer />
		</>
	);
};

export default Form;
