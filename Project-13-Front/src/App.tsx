import { Routes, Route } from 'react-router-dom'
import './style/main.css'
import Home from './pages/Home'
import Error from './pages/Error'

export default function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" />
				<Route path="/profile/"  />
				<Route path="*" element={<Error />} />
			</Routes>
		</>
	)
}
