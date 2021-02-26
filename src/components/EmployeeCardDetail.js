import React from "react";
import "../css/EmployeeCardDetail.css";

const EmployeeCardDetail = ({
    // Destructuring the selectedEmployee obj in param
	selectedEmployee: {
		employee: { picture, name, location, email, phone },
		index,
	},
}) => {
    // Function body
	return (
		<div className="employee-card-detail" data-key={index}>
			<img src={picture.medium} alt="employee picture" />
			<h2>{`${name.first} ${name.last}`}</h2>
			<div className="employee-card-detail__contact">
				<p>{email}</p>
				<p>{phone}</p>
				<p>{`${location.city}, ${location.country}`}</p>
			</div>
		</div>
	);
};

export default EmployeeCardDetail;
