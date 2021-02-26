import React from "react";
import EmployeeCardDetail from "./EmployeeCardDetail";
import "../css/Modal.css";

const Modal = ({ selectedEmployee }) => {
	return (
		<div className="modal">
			<EmployeeCardDetail selectedEmployee={selectedEmployee}/>
		</div>
	);
};

export default Modal;
