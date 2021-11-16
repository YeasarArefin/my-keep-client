import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Singup from './pages/login-register/Singup';
import Navbar from './pages/Navbar/Navbar';
import AuthProvider from './context/AuthProvider';
import Singin from './pages/login-register/Singin';
import Notes from './pages/Notes/Notes';
import NoteField from './pages/Notes/NoteField';

function App() {
	return (

		<AuthProvider>

			{/* <Router>

				<Navbar />

				<Switch>

					<Route exact path='/'  >
					<Notes />
					<Route/>
					<Route exact path='/notes' component={<Notes />} />
					<Route exact path='/addnote' component={<NoteField />} />
					<Route exact path='/singup' component={<Singup />} />
					<Route exact path='/singin' component={<Singin />} />

				</Switch>

			</Router> */}

			<Router>

				<Navbar />

				<Switch>

					<Route exact path='/'>
						<Notes />
					</Route>

					<Route exact path='/notes'>
						<Notes />
					</Route>

					<Route exact path='/addnote'>
						<NoteField />
					</Route>

					<Route exact path='/singin'>
						<Singup />
					</Route>

					<Route exact path='/singup'>
						<Singin />
					</Route>

				</Switch>

			</Router>

		</AuthProvider>

	);
}

export default App;
