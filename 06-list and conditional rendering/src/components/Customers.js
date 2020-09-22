import React from "react";

class Customers extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            customers : [
                {
                    id : 1,
                    name : 'john',
                    location : 'banglore',
                    age : 32
                },
                {
                    id : 2,
                    name : 'wilson',
                    location : 'pune',
                    age : 41
                },
                {
                    id : 3,
                    name : 'lara',
                    location : 'hyderabad',
                    age : 26
                }
            ]
        }

    }

    render() {
        return (
            <div>
                <h2>Customer</h2>
                {
                    this.state.customers.map((customers) => {
                        return (
                            <div className="card mt-2">
                                <div className="card-body badge-light">
                                    <ul className="list-group">
                                        <li className="list-group-item"> ID : {customers.id}</li>
                                        <li className="list-group-item"> NAME : {customers.name}</li>
                                        <li className="list-group-item"> AGE : {customers.age}</li>
                                        <li className="list-group-item"> LOCATION : {customers.location}</li>
                                    </ul>
                                </div>
                            </div>

                        )
                    })
                }
            </div>
        );
    }
}

export default Customers;