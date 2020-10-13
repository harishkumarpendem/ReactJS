import React, { Fragment, useState } from 'react';

let HookCounter4 = () => {
    let [item, setItem] = useState([])

    const addItem = () => {
        setItem([...item, {
            id: item.length,
            value : Math.floor(Math.random() *10) + 1
        }])
    }
    return(
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">
                                <h3>List of arrays</h3>
                            </div>
                            <div className="card-body">
                                <button onClick = {addItem}>add a number</button>
                                <ul>
                                    {
                                        item.map(item => (
                                            <li key = {item.id}>{item.value}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
};

export default HookCounter4;