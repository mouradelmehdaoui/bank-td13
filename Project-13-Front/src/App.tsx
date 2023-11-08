import { Routes, Route } from 'react-router-dom'
import './style/main.css'
import Home from './pages/Home'
import Error from './pages/Error'
import SignIn from './pages/SignIn'
import User from './pages/User'


export default function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<SignIn />} />
				<Route path="/profile/" element={<User />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</>
	)
}
