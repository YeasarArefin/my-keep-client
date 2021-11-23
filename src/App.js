import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Singup from './pages/login-register/Singup';
import Navbar from './pages/Navbar/Navbar';
import AuthProvider from './context/AuthProvider';
import Singin from './pages/login-register/Singin';
import Notes from './pages/Notes/Notes';
import NoteField from './pages/Notes/NoteField';
import PrivateRoute from './pages/protected-routes/PrivateRoute';
import UpdateNote from './pages/Notes/UpdateNote';

function App() {

	return (

		<AuthProvider>

			<Router>

				<Navbar />

				<Routes>

					<Route path='/' element={<PrivateRoute><Notes /></PrivateRoute>} />
					<Route path='/notes' element={<PrivateRoute><Notes /></PrivateRoute>} />
					<Route path='/notes/update/:_id' element={<PrivateRoute><UpdateNote /></PrivateRoute>} />
					<Route path='/addnote' element={<PrivateRoute><NoteField /></PrivateRoute>} />
					<Route path='/singup' element={<Singup />} />
					<Route path='/singin' element={<Singin />} />

				</Routes>

			</Router>

		</AuthProvider>

	);
}

export default App;
