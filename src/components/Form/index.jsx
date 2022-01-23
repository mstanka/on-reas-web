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
		phone: '+420',
		other: '',
	});
	const [message, setMessage] = useState('');

	const goNextStep = () => {
		setStep((step) => step + 1);
	};

	const validate = (email, phone) => {
		if (email) {
			if (!email.toLowerCase().match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
				setMessage(() => 'Zadejte emailovou adresu');
				return false;
			}
		}
		if (phone) {
			if (!(phone.substring(0, 4) === '+420' && phone.length === 10)) {
				setMessage(() => 'Zadejte telefonní číslo včetně předčíslí +420');
				return false;
			}
		}

		return true;
	};

	const submit = () => {
		setStep((step) => step + 1);
		validate(formData.email, formData.phone);

		if (message) {
			setStep(() => 2);
			alert(message);
		}
		if (validate) {
			fetch('http://localhost:3000/lead', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					formData,
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
		}
	};

	return (
		<>
			<Navigation />
			<div className="wrapper">
				<form className="form" method="POST">
					<div className="form__container">
						<progress max="3" value={step} />
						<div className="form__header">
							{step === 1 && <h1>Nemovitost</h1>}
							{step === 2 && <h1>Osobní údaje</h1>}
						</div>
						<div className="form__body">
							{step === 1 && <Estate formData={formData} setFormData={setFormData} />}
							{step === 2 && <Personal formData={formData} setFormData={setFormData} />}
							{step === 3 && <Final />}
						</div>

						<div className="form__footer">
							<div className="form__footer-container">
								{step === 1 && (
									<button className="btn" onClick={goNextStep}>
										Další
									</button>
								)}
								{step === 2 && (
									<button type="submit" className="btn" onClick={submit}>
										Odeslat
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
