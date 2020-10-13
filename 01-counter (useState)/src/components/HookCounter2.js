import React, {Fragment, useState} from 'react';


let HookCounter2 = () => {
     let initialCount = 0
    let [count, setCount] = useState(initialCount)

    const incrementFive = () => {
        for(let i=0; i<5; i++){
            setCount(prevCount => prevCount + 1)
        }
    }
    return(    
         <Fragment>
             <div className="container mt-6">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-header bg-success">
                                    <h1>Counter</h1>
                                </div>
                                <div className="card-body bg-light">
                                    <div className="row">
                                        <h1>counter : {count}</h1>
                                        <button className ="btn btn-secondary btn-sm" onClick = {() => setCount(count + 1)}>Increment</button>
                                        <button className ="btn btn-secondary btn-sm" onClick = {() => setCount(count - 1)}>Decrement</button>
                                        <button className ="btn btn-secondary btn-sm" onClick = {() => setCount(initialCount)}>Reset</button>
                                        <button className ="btn btn-secondary btn-sm" onClick = {incrementFive}>Increment 5</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </Fragment>
     
    )
};

export default HookCounter2;