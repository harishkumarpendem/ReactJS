import React from "react";

class ProductItem extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            item : {
                id : 100,
                name : 'samsung smart watch',
                qty : 4,
                price : 3000
            }
        }

    }
    decreaseQty = () =>{
        this.setState({
            item : {
                ...this.state.item,
                qty : (this.state.item.qty - 1 >=0) ? this.state.item.qty -1 : 0
            }
        });
    };

    getTotal = () =>{
        return(this.state.item.qty * this.state.item.price);
    };
    increaseQty = () =>{
        this.setState({
            item : {
                ...this.state.item,
                qty : this.state.item.qty + 1
            }
        });
    };

    render() {
        return (
            <div>
                <table className="table table-hover text-center table-striped table-warning mt-3">
                    <thead className="bg-dark text-white">
                    <tr>
                        <th>Item id</th>
                        <th>Item name</th>
                        <th>Item qty</th>
                        <th>Item price</th>
                        <th>Item total</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{this.state.item.id}</td>
                        <td>{this.state.item.name}</td>
                        <td>
                            <i className="fa fa-minus-circle text-primary mr-2" onClick={this.decreaseQty}></i>
                            {this.state.item.qty}
                            <i className="fa fa-plus-circle text-primary ml-2" onClick={this.increaseQty}></i>
                        </td>
                        <td>{this.state.item.price}</td>
                        <td>{this.getTotal()}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }

}

export default ProductItem;