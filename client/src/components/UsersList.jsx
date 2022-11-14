import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { AiFillDelete } from "react-icons/ai";
import CreateUser from "./CreateUser";
import RoleFilterList from "./RoleFilterList";
import DateFilterList from "./DateFilterList";
import DeleteUser from "./DeleteUser";

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
				<div className='me-2'>
					<button
						type='button'
						className='btn btn-warning'
						onClick={usersList}>
						<b>Show All</b>
					</button>
				</div>
				<CreateUser setUsers={setUsers} />
				<RoleFilterList setUsers={setUsers} />
				<DateFilterList setUsers={setUsers} />
			</div>
			<table className='table table-striped'>
				<thead>
					<tr>
						<th scope='col'>Name</th>
						<th scope='col'>Email</th>
						<th scope='col'>Role</th>
						<th scope='col'>Job Preference</th>
						<th scope='col'>Action</th>
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
								<td>
									{/* <button className=''></button> */}
									<DeleteUser
										id={_id}
										setUsers={setUsers}
									/>
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
