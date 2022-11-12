import { useEffect, useState } from "react";
import axios from "axios";

const UsersList = () => {
	const [users, setUsers] = useState([]);

	const usersList = async () => {
		const { data } = await axios.get("/api/user");
		setUsers(data.users);
	};

	useEffect(() => {
		usersList();
	}, [users]);

	return (
		<>
			<table className='table table-striped'>
				<thead>
					<tr>
						<th scope='col'>Name</th>
						<th scope='col'>Email</th>
						<th scope='col'>Role</th>
						<th scope='col'>Job Preference</th>
					</tr>
				</thead>
				<tbody>
					{users?.map(
						({
							_id,
							name,
							email,
							role,
							job_preference,
						}) => (
							<tr key={_id}>
								<td>{name}</td>
								<td>{email}</td>
								<td className='option'>{role}</td>
								<td>
									{job_preference.map(
										(job, index) => (
											<span key={index}>
												{job}
												{", "}
											</span>
										)
									)}
								</td>
							</tr>
						)
					)}
				</tbody>
			</table>
		</>
	);
};

export default UsersList;
