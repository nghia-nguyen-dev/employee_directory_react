import React from "react";
import EmployeeCard from "./EmployeeCard";
import '../css/EmployeeList.css'

const EmployeeList = ({ listOfEmployees }) => {

	return (
		<div className="employee-list">
			{listOfEmployees.map((employeeData) => {
				return <EmployeeCard employeeData={employeeData} />;
			})}
		</div>
	);

};

export default EmployeeList;
