import React from 'react';

const EmployeeCard = ({employeeData}) => {

    return (
        <div className="employee-card">
            <img className="employee-card__avatar" src={employeeData.picture.thumbnail}/>
            <div className="content">
                <h2 className="content__name">{employeeData.name.first} {employeeData.name.last}</h2>
                <p className="content__email">{employeeData.email}</p>
            </div>
        </div>
    )
}

export default EmployeeCard;