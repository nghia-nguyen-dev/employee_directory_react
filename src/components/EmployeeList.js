import React from "react";
import EmployeeCard from "./EmployeeCard";
import '../css/EmployeeList.css'

const EmployeeList = ({ listOfEmployees }) => {

	return (
		<div className="employee-list">
			{listOfEmployees.map((employeeData, index) => {
				return <EmployeeCard employeeData={employeeData} key={index} index={index}/>;
			})}
		</div>
	);

};

export default EmployeeList;
