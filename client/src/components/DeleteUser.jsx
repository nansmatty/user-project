import React from "react";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";
import { toast } from "react-toastify";

const DeleteUser = ({
	id,
	setUsers,
	setPages,
	setPage,
}) => {
	const usersList = async () => {
		const { data } = await axios.get("/api/user");
		setUsers(data.users);
		setPages(data.pages);
		setPage(data.page);
	};

	const handleDelete = async (id) => {
		await axios.delete(`/api/user/${id}`);
		toast.error("User Deleted");
		usersList();
	};

	return (
		<>
			{/* Button trigger modal */}
			<div>
				<button
					type='button'
					className='btn btn-danger d-flex align-items-center'
					data-bs-toggle='modal'
					data-bs-target='#deleteModal'>
					<AiFillDelete /> <strong>Delete</strong>
				</button>
			</div>

			{/* Modal */}
			<div
				className='modal fade'
				id='deleteModal'
				tabIndex='-1'
				aria-hidden='true'>
				<div className='modal-dialog modal-dialog-centered'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h1
								className='modal-title fs-5'
								id='exampleModalLabel'>
								Delete User
							</h1>
							<button
								type='button'
								className='btn-close'
								data-bs-dismiss='modal'
								aria-label='Close'></button>
						</div>
						<div className='modal-body'>
							<h6>
								Do you really want delete the
								user?
							</h6>
						</div>
						<div className='modal-footer'>
							<button
								type='button'
								className='btn btn-secondary'
								data-bs-dismiss='modal'>
								Close
							</button>
							<button
								type='button'
								onClick={() => handleDelete(id)}
								className='btn btn-danger'
								data-bs-dismiss='modal'>
								Delete
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default DeleteUser;
