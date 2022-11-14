import React from "react";
import { Link } from "react-router-dom";

const Paginate = ({ pages }) => {
	return (
		<>
			{pages > 1 && (
				<ul className='pagination'>
					<Link
						className='linkPaginateItem'
						to={`/page/1`}>
						<li className='page-item paginationItem'>
							{"<<"}
						</li>
					</Link>
					{[...Array(pages).keys()].map((x) => (
						<Link
							key={x + 1}
							className='linkPaginateItem'
							to={`/page/${x + 1}`}>
							<li className='page-item paginationItem'>
								{x + 1}
							</li>
						</Link>
					))}
					<Link
						className='linkPaginateItem'
						to={`/page/${pages}`}>
						<li className='page-item paginationItem'>
							<span>{">>"}</span>
						</li>
					</Link>
				</ul>
			)}
		</>
	);
};

export default Paginate;
