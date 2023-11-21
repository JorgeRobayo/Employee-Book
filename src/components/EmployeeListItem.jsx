import React from 'react'


function EmployeeListItem(props) {

const {image, name, position, officeNumber, mobileNumber, smsNumber, email} = props.emplist

  return (
    <div>
      <div>
      <h4>{name}</h4>
      <p>Position: {position}</p>
      </div>
    </div>
  )
}

export default EmployeeListItem