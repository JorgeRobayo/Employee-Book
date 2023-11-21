import React from 'react'
import EmployeeListItem from './EmployeeListItem'
import Header from './Header'
import SearchBar from './SearchBar'

function EmployeePage(props) {
  const firstEmployee = props.data[0]
  return (
    <div className='employeepage'>
      <Header />
      {/* <EmployeeListItem emplist={firstEmployee} /> */}

      <div className='name'>
        <h4>James</h4>
        <p>{firstEmployee.position}</p>
      </div>

      <div className='officeNum'>
        <h4 >Call Office</h4>
        <p>{firstEmployee.officeNumber}</p>
      </div>

      <div className='mobileNum'>
        <h4>Call Mobile</h4>
        <p>{firstEmployee.mobileNumber}</p>
      </div>

      <div className='smsNum'>
        <h4>SMS</h4>
        <p>{firstEmployee.smsNumber}</p>
      </div>

      <div className='email'> 
        <h4 >Email</h4>
        <p>{firstEmployee.email}</p>
      </div>
      
    </div>
  )
}

export default EmployeePage