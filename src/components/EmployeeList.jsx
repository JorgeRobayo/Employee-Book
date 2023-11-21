import React from 'react'
import EmployeeListItem from './EmployeeListItem'

function EmployeeList(props) {
  return (
    <div className='employeelist'> 
        {props.data.map((employee, index) => (
        <EmployeeListItem key={index} emplist={employee} />
      ))}
    </div>
  )
}

export default EmployeeList