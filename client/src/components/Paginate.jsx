import React from "react";
import { Link } from "react-router-dom";

const Paginate = ({ pages, page }) => {
	return (
		<>
			{pages > 1 && (
				<ul className='pagination'>
					{[...Array(pages).keys()].map((x) => (
						<Link
							key={x + 1}
							to={`/page/${x + 1}`}>
							<li className='page-item'>
								{x + 1}
							</li>
						</Link>
					))}
				</ul>
			)}
		</>
	);
};

export default Paginate;
