import React from 'react'
import EmployeeList from './EmployeeList'
import Header from './Header'
import SearchBar from './SearchBar'


function HomePage(props) {
  return (
    <div className='homepage'>
        <Header/>
        <SearchBar/>
        <EmployeeList data={props.data}/>
    </div>
  )
}

export default HomePage