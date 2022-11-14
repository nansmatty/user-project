import { useEffect, useState } from "react";
import axios from "axios";
import CreateUser from "./CreateUser";
import RoleFilterList from "./RoleFilterList";
import DateFilterList from "./DateFilterList";
import DeleteUser from "./DeleteUser";
import UpdateUser from "./UpdateUser";
import { useParams } from "react-router-dom";
import Paginate from "./Paginate";

const UsersList = () => {
	const { pageNumber } = useParams();

	const [users, setUsers] = useState([]);
	const [pages, setPages] = useState();

	const usersList = async () => {
		const { data } = await axios.get(
			"/api/user",
			{ params: { pageNumber: pageNumber || 1 } }
		);
		setUsers(data.users);
		setPages(data.pages);
	};

	useEffect(() => {
		usersList();
	}, [pageNumber]);

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
				<CreateUser
					setUsers={setUsers}
					setPages={setPages}
				/>
				<RoleFilterList setUsers={setUsers} />
				<DateFilterList setUsers={setUsers} />
			</div>
			<div className='row'>
				{users?.map(
					({
						_id,
						name,
						email,
						role,
						job_preference,
					}) => (
						<div key={_id} className='col-4 my-3'>
							<div className='card'>
								<div className='card-body'>
									<h3 className='card-title'>
										{name}
									</h3>
									<h6 className='card-subtitle option mb-2 text-muted'>
										{role}
									</h6>
									<p className='card-text'>
										<strong>Email: </strong>
										<span>{email}</span>
									</p>
									<p className='card-text'>
										<b>Job Preference: </b>
										{job_preference.map(
											(job, index) => (
												<span key={index}>
													{job}
													{", "}
												</span>
											)
										)}
									</p>
									<div className='d-flex gap-3'>
										<UpdateUser
											id={_id}
											setUsers={setUsers}
											setPages={setPages}
										/>
										<DeleteUser
											id={_id}
											setUsers={setUsers}
											setPages={setPages}
										/>
									</div>
								</div>
							</div>
						</div>
					)
				)}
			</div>
			<div>
				<Paginate pages={pages} />
			</div>
		</>
	);
};

export default UsersList;
