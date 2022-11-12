import CreateUser from "./components/CreateUser";
import { ToastContainer } from "react-toastify";
import UsersList from "./components/UsersList";
import FilterList from "./components/FilterList";

const App = () => {
	return (
		<div className='container-fluid'>
			<div className='container d-flex flex-column p-2 '>
				<h3 className='heading1'>User Data</h3>
				<ToastContainer />
				<div className='mb-5 d-flex'>
					<CreateUser />
					<FilterList />
				</div>
				<UsersList />
			</div>
		</div>
	);
};

export default App;
