import React from "react";
import EmployeeCard from "./EmployeeCard";
import "../css/EmployeeList.css";

const EmployeeList = ({ listOfEmployees, handleClick }) => {

	const employees = listOfEmployees.map((employeeData, index) => {
		return (
			<EmployeeCard
				employeeData={employeeData}
				key={index}
				index={index}
                handleClick={handleClick}
			/>
		);
	});

	return <div className="employee-list">{employees}</div>;
};

export default EmployeeList;
