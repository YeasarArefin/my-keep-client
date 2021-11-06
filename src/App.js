import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Singup from './pages/login-register/Singup';
import Navbar from './pages/Navbar/Navbar';
import AuthProvider from './context/AuthProvider';
import Singin from './pages/login-register/Singin';

function App() {
	return (

		<AuthProvider>

			<Router>

				<Navbar />

				<Routes>

					<Route path='/singup' element={<Singup />} />
					<Route path='/singin' element={<Singin />} />

				</Routes>

			</Router>

		</AuthProvider>

	);
}

export default App;
