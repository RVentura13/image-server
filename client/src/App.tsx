import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Users } from './pages/admin/Users';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					path='/admin/users'
					element={<Users />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
