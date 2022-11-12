import { useMemo, useState } from "react";
import Select from "react-select";
import options from "../states.json";
import makeAnimated from "react-select/animated";
import axios from "axios";
import { useEffect } from "react";

const CreateUser = () => {
	const [rolesData, setRolesData] = useState([]);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [role, setRole] = useState("");
	const [job_preference, setJobPreference] =
		useState([]);
	const [multiSelect, setMultiSelect] = useState(
		[]
	);

	const animatedComponents = makeAnimated();

	const states = useMemo(
		() => options.stateList,
		[]
	);

	const handleRoles = async () => {
		const { data } = await axios.get(`/api/role`);
		setRolesData(data);
	};

	const handleRoleChange = (event) => {
		setRole(event.target.value);
	};

	const handleMultiSelectChange = (val) => {
		setMultiSelect(val);
	};

	const handleJobPreference = () => {
		multiSelect?.map((select) =>
			setJobPreference((prev) => [
				...prev,
				select.value,
			])
		);

		console.log("JOB: " + job_preference);
	};

	useEffect(() => {
		handleRoles();
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		handleJobPreference();
		console.log({
			name,
			email,
			role,
			job_preference,
		});
	};

	return (
		<>
			{/* Button trigger modal */}
			<button
				type='button'
				className='btn btn-primary'
				data-bs-toggle='modal'
				data-bs-target='#createModal'>
				<b>Add User</b>
			</button>

			{/* Modal */}
			<div
				className='modal fade'
				id='createModal'
				tabIndex='-1'
				aria-hidden='true'>
				<div className='modal-dialog modal-dialog-centered'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h1
								className='modal-title fs-5'
								id='exampleModalLabel'>
								Create User
							</h1>
							<button
								type='button'
								className='btn-close'
								data-bs-dismiss='modal'
								aria-label='Close'></button>
						</div>
						<form onSubmit={handleSubmit}>
							<div className='modal-body'>
								<div className='mb-3'>
									<label className='form-label'>
										Name
									</label>
									<input
										type='text'
										value={name}
										onChange={(e) =>
											setName(e.target.value)
										}
										required
										className='form-control'
										placeholder='John Doe'
									/>
								</div>
								<div className='mb-3'>
									<label className='form-label'>
										Email address
									</label>
									<input
										type='email'
										value={email}
										required
										onChange={(e) =>
											setEmail(e.target.value)
										}
										className='form-control'
										placeholder='name@example.com'
									/>
								</div>
								<div className='mb-3'>
									<label className='form-label'>
										Role
									</label>
									<select
										className='form-select option'
										value={role}
										onChange={handleRoleChange}>
										{rolesData?.map(
											({ _id, role_name }) => (
												<option
													className='option'
													key={_id}
													value={_id}>
													{role_name}
												</option>
											)
										)}
									</select>
								</div>
								<div className='mb-3'>
									<label className='form-label'>
										Job Preference
									</label>
									<Select
										value={multiSelect}
										isMulti
										components={
											animatedComponents
										}
										isSearchable
										placeholder='Choose any 3 states as job location'
										options={states}
										onChange={
											handleMultiSelectChange
										}
										isOptionDisabled={() =>
											multiSelect.length >= 3
										}
									/>
								</div>
							</div>
							<div className='modal-footer'>
								<button
									type='button'
									className='btn btn-secondary'
									data-bs-dismiss='modal'>
									Close
								</button>
								<button
									type='submit'
									className='btn btn-primary'>
									Submit
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default CreateUser;