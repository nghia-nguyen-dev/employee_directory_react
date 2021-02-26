import React from "react";
import "../css/EmployeeCardDetail.css";

const EmployeeCardDetail = ({ selectedEmployee: {phone,email,location,name,picture} }) => {
    // console.log(selectedEmployee)
	return (
		<div className="employee-card-detail">
			<img src={picture.medium} alt="employee picture"/>
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
