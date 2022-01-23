import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Form from './components/Form';
import Home from './routes/Home'

import './scss/main.scss';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route index element={<Home />} />
				<Route path="chci-nabidku" element={<Form />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;