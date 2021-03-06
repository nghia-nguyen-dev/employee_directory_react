import React from "react";
import EmployeeCardDetail from "./EmployeeCardDetail";
import "../css/Modal.css";
import leftArrow from "../icons/left_arrow.png";
import rightArrow from "../icons/right_arrow.png";

const Modal = ({ selectedEmployee, handleModalClick }) => {
    console.log(selectedEmployee)
	return (
		<div className="modal" onClick={(e) => handleModalClick(e.target.className)}>
			<EmployeeCardDetail selectedEmployee={selectedEmployee} />
			<div className="modal__icons">
				<img className="modal__icons__arrows modal__icons__arrows-left" src={leftArrow} />
				<img className="modal__icons__arrows modal__icons__arrows-right" src={rightArrow} />
			</div>
		</div>
	);
};

export default Modal;
