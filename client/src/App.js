import { ToastContainer } from "react-toastify";
import UsersList from "./components/UsersList";
// import RoleFilterList from "./components/RoleFilterList";
// import CreateUser from "./components/CreateUser";
// import DateFilterList from "./components/DateFilterList";

const App = () => {
	return (
		<div className='container-fluid'>
			<div className='container d-flex flex-column p-2 '>
				<h3 className='heading1'>User Data</h3>
				<ToastContainer />

				<UsersList />
			</div>
		</div>
	);
};

export default App;
