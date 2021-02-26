import React from "react";
import EmployeeCardDetail from "./EmployeeCardDetail";
import "../css/Modal.css";

const Modal = ({ selectedEmployee, closeModal }) => {
	return (
		<div className="modal" onClick={closeModal}>
			<EmployeeCardDetail selectedEmployee={selectedEmployee}/>
		</div>
	);
};

export default Modal;
