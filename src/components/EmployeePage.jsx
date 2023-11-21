import React from 'react'
import EmployeeListItem from './EmployeeListItem'
import Header from './Header'
import SearchBar from './SearchBar'

function EmployeePage(props) {
  const firstEmployee = props.data[0]
  return (
    <div className='employeepage'>
      <Header/>
      <EmployeeListItem emplist={firstEmployee}/>
      <h4>Call Office</h4>
      <p>{firstEmployee.officeNumber}</p>
      <h4>Call Mobile</h4>
      <p>{firstEmployee.mobileNumber}</p>
      <h4>SMS</h4>
      <p>{firstEmployee.smsNumber}</p>
      <h4>Email</h4>
      <p>{firstEmployee.email}</p>
    </div>
  )
}

export default EmployeePage