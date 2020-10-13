import React, {Fragment, useState} from 'react';

let HookCounter = () => {
    let [count, setCount] = useState(0)
    return(
        <Fragment>
                <div className="container mt-6">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header bg-success">
                                    <h3>Counter(using functional component)</h3>
                                </div>
                                <div className="card-body bg-light">
                                    <button onClick = {() => setCount(count + 1)}>count {count}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
    );
};

export default HookCounter;