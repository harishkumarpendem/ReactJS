import React, {Fragment} from "react";
import GithubProfile from "./GithubProfile";
import Axios from "axios";
import {clientId, clientSecret} from "./GithubCredentials";

class GithubAPI extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            username : '',
            profile : null,
            repos : null
        }
    }
// two way data binding with User name
    updateInput = (e) => {
        this.setState({
            ...this.state,
            username: e.target.value
        });
    }
//Form submission
    searchUser = (e) => {
        e.preventDefault();
        this.searchProfile()
    };
//search profile
    searchProfile = () => {
        Axios.get(`https://api.github.com/users/${this.state.username}?clientId=${clientId}&clientSecret=${clientSecret}`)
            .then((response) =>{
                this.setState({
                    profile : response.data
                });
            }).catch((err) =>{
                console.error(err);
        });
    };

    render() {
        return (
            <Fragment>
                <pre>{JSON.stringify(this.state)}</pre>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header bg-secondary text-white">
                                    <h3>Github User Search</h3>
                                </div>
                                <div className="card-body">
                                    <form className="form-inline" onSubmit={this.searchUser}>
                                        <div className="form-group">
                                            <input
                                            value={this.state.username}
                                                onChange={this.updateInput}
                                                size="40"
                                                type="text"
                                                className="form-control"
                                                placeholder="User Name"/>
                                        </div>
                                        <div>
                                            <input type="submit" value="Search" className="btn btn-secondary btn-sm"/>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            {
                                this.state.profile ?
                                    <GithubProfile profile={this.state.profile} /> : null
                            }
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default GithubAPI;