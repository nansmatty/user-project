import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import UsersList from "./components/UsersList";

const App = () => {
	return (
		<div className='container-fluid'>
			<div className='container d-flex flex-column p-2 '>
				<h3 className='heading1'>User Data</h3>
				<ToastContainer
					position='bottom-center'
					theme='colored'
				/>
				<Routes>
					<Route
						path='/'
						element={<UsersList />}
					/>
					<Route
						path='/page/:pageNumber'
						element={<UsersList />}
					/>
				</Routes>
			</div>
		</div>
	);
};

export default App;
