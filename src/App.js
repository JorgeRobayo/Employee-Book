import { useState } from 'react';
import './App.css';
import empDisplay from './models/emplist';
import HomePage from './components/HomePage';
import EmployeePage from './components/EmployeePage';
// import EmployeeListItem from './components/EmployeeListItem';

function App() {
  let [data, setData] = useState(empDisplay)

  return (
    <div className="App">
      <HomePage data={data}/>
      <EmployeePage data={data}/>
    </div>
  );
}

export default App;



