import React, {Fragment} from 'react';

class ClassCounter extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            counter : 0
        }
    }
        incrCounter = () => {
        this.setState({
            counter : this.state.counter + 1
        })
    }
    render(){
        return(
            <Fragment>
                <div className="container mt-6">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header bg-success">
                                    <h2>Counter(using class component)</h2>
                                </div>
                                <div className="card-body bg-light">
                                 <button onClick = {this.incrCounter}>count{this.state.counter}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }

};

export default ClassCounter;