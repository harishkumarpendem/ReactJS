import React from 'react';
import Customers from "./components/Customers";
import EmployeeList from "./components/EmployeeList";
import EmployeesCard from "./components/EmployeesCard";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
          <a href="/" className="navbar-brand">Lists and Conditional Rendering</a>
      </nav>
        {/*<Customers />*/}
       {/* <EmployeeList />*/}
       <EmployeesCard />
    </div>

  );
}

export default App;
