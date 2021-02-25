import React from "react";
import EmployeeCard from "./EmployeeCard";

const EmployeeList = ({ listOfEmployees }) => {
	return (
		<div>
			{listOfEmployees.map((employee) => {
				return <EmployeeCard employeeInfo={employee} />;
			})}
		</div>
	);
};

export default EmployeeList;
