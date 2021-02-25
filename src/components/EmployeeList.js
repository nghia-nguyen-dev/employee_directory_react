import React from "react";
import EmployeeCard from "./EmployeeCard";

const EmployeeList = ({ listOfEmployees }) => {

	return (
		<div>
			{listOfEmployees.map((employeeData) => {
				return <EmployeeCard employeeData={employeeData} />;
			})}
		</div>
	);
    
};

export default EmployeeList;
