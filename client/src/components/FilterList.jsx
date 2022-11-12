import React, {
	useEffect,
	useState,
} from "react";
import axios from "axios";

const FilterList = () => {
	const [rolesData, setRolesData] = useState([]);
	const [role, setRole] = useState("");

	const handleRoles = async () => {
		const { data } = await axios.get(`/api/role`);
		setRolesData(data);
	};

	const handleRoleChange = (event) => {
		setRole(event.target.value);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		const { data } = await axios.get(
			`/api/user/role/${role}`
		);

		console.log(data.users);
	};

	useEffect(() => {
		handleRoles();
	}, []);

	return (
		<>
			<div className='mx-5'>
				<form
					className='d-flex'
					onSubmit={handleSubmit}>
					<div className='mx-2'>
						<select
							className='form-select option'
							value={role}
							onChange={handleRoleChange}>
							{rolesData?.map(
								({ _id, role_name }) => (
									<option
										className='option'
										key={_id}
										value={role_name}>
										{role_name}
									</option>
								)
							)}
						</select>
					</div>
					<button
						className='btn btn-secondary'
						type='submit'>
						<b>Filter by Role</b>
					</button>
				</form>
			</div>
		</>
	);
};

export default FilterList;
