import { useEffect } from "react";
import axios from "axios";
import CreateUser from "./components/CreateUser";

const App = () => {
	return (
		<div className='container-fluid'>
			<div className='container d-flex flex-column p-2 justify-content-center align-items-center'>
				<h3 className='heading1'>User Data</h3>
				<div>
					<CreateUser />
				</div>
			</div>
		</div>
	);
};

export default App;
