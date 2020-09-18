import React from "react";

class WishMessage extends React.Component{
    constructor(props) {
        super(props);
        this.state= {
            message: 'hello',

        }
    }
 sayGoodMorning = () => {
        this.setState({
            message : 'Good Morning'
        });
 };

    sayGoodAfternoon = () => {
        this.setState({
            message: 'Good Afternoon'
        });
    };
    sayGoodEvening = () => {
        this.setState({
            message: 'Good Evening'
        });
    };
    render() {
        return (
            <div>
               <div className="card">
                   <div className="card-body">
                       <h1>{this.state.message}</h1>
                       <button className="btn btn-primary" onClick={this.sayGoodMorning}>Good Morning</button>
                       <button className="btn btn-success" onClick={this.sayGoodAfternoon}>Good Afternoon</button>
                       <button className="btn btn-warning" onClick={this.sayGoodEvening}>Good Evening</button>
                   </div>
               </div>
            </div>
        );
    }
}

export default WishMessage;