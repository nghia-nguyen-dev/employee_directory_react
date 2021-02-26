import React from "react";
import EmployeeCard from "./EmployeeCard";
import "../css/EmployeeList.css";

const EmployeeList = ({ listOfEmployees, handleCardClick }) => {
	const employees = listOfEmployees.map((employeeData, index) => {
		return (
			<EmployeeCard
				employeeData={employeeData}
				key={index}
				index={index}
				handleCardClick={handleCardClick}
			/>
		);
	});

	return <div className="employee-list">{employees}</div>;
};

export default EmployeeList;
