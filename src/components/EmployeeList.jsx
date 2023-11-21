import React from 'react'
import EmployeeListItem from './EmployeeListItem'

function EmployeeList(props) {
  return (
    <div className='employeelist'>
      {props.data.map((employee, index) => (
        <div className='employeeListItem'>
          <EmployeeListItem key={index} emplist={employee} />
        </div>

      ))}
    </div>
  )
}

export default EmployeeList