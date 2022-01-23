import React from 'react';

const Estate = ({ formData, setFormData }) => {
	return (
		<div className="form__body-container">
			<input
				type="text"
				list="estateType"
				placeholder="Typ nemovitosti..."
				value={formData.estateType}
				onChange={(event) => setFormData({ ...formData, estateType: event.target.value })}
			/>
			<datalist id="estateType">
				<option value="Byt"></option>
				<option value="Dům"></option>
				<option value="Pozemek"></option>
			</datalist>
			<input
				type="text"
				list="region"
				placeholder="Kraj..."
				value={formData.region}
				onChange={(event) => setFormData({ ...formData, region: event.target.value })}
			/>
			<datalist id="region">
				<option value="Hlavní město Praha"></option>
				<option value="Středočeský kraj"></option>
				<option value="Jihočeský kraj"></option>
				<option value="Plzeňský kraj"></option>
				<option value="Karlovarský kraj"></option>
				<option value="Ústecký kraj"></option>
				<option value="Liberecký kraj"></option>
				<option value="Královéhradecký kraj"></option>
				<option value="Pardubický kraj"></option>
				<option value="Kraj Vysočina"></option>
				<option value="Jihomoravský kraj"></option>
				<option value="Zlínský kraj"></option>
				<option value="Olomoucký kraj"></option>
				<option value="Moravskoslezský kraj"></option>
			</datalist>
			<input
				type="text"
				list="district"
				placeholder="Okres..."
				value={formData.district}
				onChange={(event) => setFormData({ ...formData, district: event.target.value })}
			/>
			{formData.region === 'Hlavní město Praha' && (
				<datalist id="district">
					<option value="Praha"></option>)
				</datalist>
			)}
			{formData.region === 'Středočeský kraj' && (
				<datalist id="district">
					<option value="Benešov"></option>
					<option value="Beroun"></option>
					<option value="Kladno"></option>
					<option value="Kolín"></option>
					<option value="Kutná Hora"></option>
					<option value="Mělník"></option>
					<option value="Mladá Boleslav"></option>
					<option value="Nymburk"></option>
					<option value="Praha-východ"></option>
					<option value="Praha-západ"></option>
					<option value="Příbram"></option>
					<option value="Rakovník"></option>
				</datalist>
			)}
			{formData.region === 'Jihočeský kraj' && (
				<datalist id="district">
					<option value="České Budějovice"></option>
					<option value="Český Krumlov"></option>
					<option value="Jindřichův Hradec"></option>
					<option value="Písek"></option>
					<option value="Prachatice"></option>
					<option value="Strakonice"></option>
					<option value="Tábor"></option>
				</datalist>
			)}
			{formData.region === 'Plzeňský kraj' && (
				<datalist id="district">
					<option value="Domažlice"></option>
					<option value="Klatovy"></option>
					<option value="Plzeň-jih"></option>
					<option value="Plzeň-město"></option>
					<option value="Plzeň-sever"></option>
					<option value="Rokycany"></option>
					<option value="Tachov"></option>
				</datalist>
			)}
			{formData.region === 'Karlovarský kraj' && (
				<datalist id="district">
					<option value="Cheb"></option>
					<option value="Karlovy Vary"></option>
					<option value="Sokolov"></option>
				</datalist>
			)}
			{formData.region === 'Ústecký kraj' && (
				<datalist id="district">
					<option value="Děčín"></option>
					<option value="Chomutov"></option>
					<option value="Litoměřice"></option>
					<option value="Louny"></option>
					<option value="Most"></option>
					<option value="Teplice"></option>
					<option value="Ústí nad Labem"></option>
				</datalist>
			)}
			{formData.region === 'Liberecký kraj' && (
				<datalist id="district">
					<option value="Česká Lípa"></option>
					<option value="Jablonec nad Nisou"></option>
					<option value="Liberec"></option>
					<option value="Semily"></option>
				</datalist>
			)}
			{formData.region === 'Královéhradecký kraj' && (
				<datalist id="district">
					<option value="Hradec Králové"></option>
					<option value="Jičín"></option>
					<option value="Náchod"></option>
					<option value="Rychnov nad Kněžnou"></option>
					<option value="Trutnov"></option>
				</datalist>
			)}
			{formData.region === 'Pardubický kraj' && (
				<datalist id="district">
					<option value="Chrudim"></option>
					<option value="Pardubice"></option>
					<option value="Svitavy"></option>
					<option value="Ústí nad Orlicí"></option>
				</datalist>
			)}
			{formData.region === 'Kraj Vysočina' && (
				<datalist id="district">
					<option value="Jihlava"></option>
					<option value="Třebíč"></option>
					<option value="Havlíčkův Brod"></option>
					<option value="Žďár nad Sázavou"></option>
					<option value="Velké Meziříčí"></option>
					<option value="Humpolec"></option>
					<option value="Nové město na Moravě"></option>
				</datalist>
			)}
			{formData.region === 'Jihomoravský kraj' && (
				<datalist id="district">
					<option value="Blansko"></option>
					<option value="Brno-město"></option>
					<option value="Brno-venkov"></option>
					<option value="Břeclav"></option>
					<option value="Hodonín"></option>
					<option value="Vyškov"></option>
					<option value="Znojmo"></option>
				</datalist>
			)}
			{formData.region === 'Zlínský kraj' && (
				<datalist id="district">
					<option value="Kroměříž"></option>
					<option value="Uherské Hradiště"></option>
					<option value="Vsetín"></option>
					<option value="Zlín"></option>
				</datalist>
			)}
			{formData.region === 'Olomoucký kraj' && (
				<datalist id="district">
					<option value="Jeseník"></option>
					<option value="Olomouc"></option>
					<option value="Prostějov"></option>
					<option value="Přerov"></option>
					<option value="Šumperk"></option>
				</datalist>
			)}
			{formData.region === 'Moravskoslezský kraj' && (
				<datalist id="district">
					<option value="Bruntál"></option>
					<option value="Frýdek Místek"></option>
					<option value="Karviná"></option>
					<option value="Nový Jičín"></option>
					<option value="Opava"></option>
					<option value="Ostrava-město"></option>
				</datalist>
			)}
		</div>
	);
};

export default Estate;
