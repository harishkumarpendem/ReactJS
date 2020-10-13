import React, {Fragment, useState } from 'react';

let HookComponent3 = () =>{
    let [name, setName] = useState({
        firstName:'',
        lastName: ''
    });
    return(
        <Fragment>
            {JSON.stringify(name)}
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h1>Input From</h1>
                            </div>
                            <div className="card-body">
                                <form>
                                    <input 
                                    type="text" 
                                    placeholder="firstName" 
                                    onChange = {e => setName({...name,firstName:e.target.value})}
                                    />
                                    <input 
                                    onChange = {e => setName({...name,lastName:e.target.value})}
                                    type="text" 
                                    placeholder="lastName" 
                                    />

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
};

export default HookComponent3;