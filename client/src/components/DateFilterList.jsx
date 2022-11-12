import React from "react";
import { useState } from "react";

const DateFilterList = () => {
	const [startDate, setStartDate] = useState("");
	const [endDate, setEndDate] = useState("");

	const handleSubmit = async (event) => {
		event.preventDefault();
		console.log({ startDate, endDate });
	};

	return (
		<>
			<div className='mx-5'>
				<form
					className='d-flex'
					onSubmit={handleSubmit}>
					<div className='mx-2'>
						<input
							type='date'
							value={startDate}
							onChange={(e) =>
								setStartDate(e.target.value)
							}
							className='form-control'
						/>
					</div>
					<div>
						<h6 className='form-control'>TO</h6>
					</div>
					<div className='mx-2'>
						<input
							type='date'
							value={endDate}
							onChange={(e) =>
								setEndDate(e.target.value)
							}
							className='form-control'
						/>
					</div>
					<div>
						<button
							type='submit'
							className='btn btn-secondary'>
							<b>Filter by Date</b>
						</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default DateFilterList;
