import React from "react";
import EmployeeCardDetail from "./EmployeeCardDetail";
import "../css/Modal.css";
import leftArrow from '../icons/left_arrow.png';
import rightArrow from '../icons/right_arrow.png'

const Modal = ({ selectedEmployee, closeModal }) => {
	return (
		<div className="modal" onClick={closeModal}>
			<EmployeeCardDetail selectedEmployee={selectedEmployee}/>
            <div className="modal__icons">
                <img className="modal__icons__arrows" src={leftArrow}/>
                <img className="modal__icons__arrows" src={rightArrow}/>
            </div>
		</div>
	);
};

export default Modal;
