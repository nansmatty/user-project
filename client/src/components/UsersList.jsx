import { useEffect, useState } from "react";
import axios from "axios";
import CreateUser from "./CreateUser";
import RoleFilterList from "./RoleFilterList";
import DateFilterList from "./DateFilterList";

const UsersList = () => {
	const [users, setUsers] = useState([]);

	const usersList = async () => {
		const { data } = await axios.get("/api/user");
		setUsers(data.users);
	};

	useEffect(() => {
		usersList();
	}, []);

	return (
		<>
			<div className='mb-5 d-flex'>
				<CreateUser setUsers={setUsers} />
				<RoleFilterList
					users={users}
					setUsers={setUsers}
				/>
				<DateFilterList
					users={users}
					setUsers={setUsers}
				/>
			</div>
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
