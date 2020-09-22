import React from "react";
import {employees} from './EmployeesData';

class EmployeeList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            employees : employees
        }

    }

    render() {
        return (
            <div>
               <div className="container mt-3 text-center">
                   <div className="row">
                       <div className="col">
                           <table className="table table-hover table-success table-striped">
                               <thead className="bg-success text-white">
                               <tr>
                                   <th>ID</th>
                                   <th>NAME</th>
                                   <th>LOCATION</th>
                                   <th>AGE</th>
                               </tr>
                               </thead>
                               <tbody>
                               {
                                   this.state.employees.map((employees, index) =>  {
                                       return (
                                           <tr>
                                               <td>{index + 1}</td>
                                               <td>{employees.name}</td>
                                               <td>{employees.location}</td>
                                               <td>{employees.age}</td>
                                           </tr>
                                       )
                                   })
                               }
                               </tbody>
                           </table>
                       </div>
                   </div>
               </div>
            </div>
        );
    }

}

export default EmployeeList;