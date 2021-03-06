import React from "react";
import "../css/EmployeeCard.css";

const EmployeeCard = ({ employeeData, index, handleCardClick }) => {
	return (
		<div
			className="employee-card"
			data-key={index}
			onClick={() => handleCardClick(employeeData, index)}
		>
			<img
				className="employee-card__avatar"
				src={employeeData.picture.thumbnail}
			/>
			<div className="content">
				<h2 className="content__name">
					{employeeData.name.first} {employeeData.name.last}
				</h2>
				<p className="content__email">{employeeData.email}</p>
			</div>
		</div>
	);
};

export default EmployeeCard;
