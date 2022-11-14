import { ToastContainer } from "react-toastify";
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
				<UsersList />
			</div>
		</div>
	);
};

export default App;
