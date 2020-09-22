import React from "react";
import {employees} from "./EmployeesData";

class EmployeesCard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            employees : employees,
            option : null,
            filteredEmployees : []
        }
    }

    updateInput = (e) => {
        let selectedEmployees = [];
        if(e.target.value === 'male') {
            selectedEmployees = this.employees.filter(employee => employees.gender === 'male');
        }
        if(e.target.value === 'female') {
            selectedEmployees = this.employees.filter(employee => employees.gender === 'female');
        }
        this.setState({
            ...employees,
            option : e.target.value,
            filteredEmployees : selectedEmployees
        })
    }

    render() {
        return (
            <div>
                <pre>{JSON.stringify(this.state.filteredEmployees)}</pre>
                <div className="container-fluid mt-3">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <form>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input type="radio" id="customRadioInline1" name="customRadioInline1"
                                               className="custom-control-input"
                                        value="male"
                                        onChange={this.updateInput} />
                                            <label className="custom-control-label" htmlFor="customRadioInline1">Male Employees</label>
                                    </div>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input type="radio" id="customRadioInline2" name="customRadioInline1"
                                               className="custom-control-input"
                                               value="female"
                                               onChange={this.updateInput} />
                                            <label className="custom-control-label" htmlFor="customRadioInline2">Female Employees</label>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h2>Total Employees = {this.state.employees.length}</h2>
                        </div>
                    </div>
                    <div className="row">
                        {
                            this.state.employees.map((employees, index) => {
                                return (
                                        <div className="col-md-4 mt-2">
                                            <div className="card">
                                                <div className="card-header bg-success text-white">
                                                    {employees.id}
                                                </div>
                                                <div className="card-body">
                                                    <ul>
                                                        <li>{employees.name}</li>
                                                        <li>{employees.age}</li>
                                                        <li>{employees.gender}</li>
                                                    </ul>
                                                </div>
                                                <div className="card-footer">
                                                    {employees.location}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }

}



export default EmployeesCard;