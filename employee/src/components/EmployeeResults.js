import React, { Component } from "react";
import EmployeeTable from "./EmployeeTable";
import API from "../utils/API";

class EmployeeResults extends Component {
state = {
    result: {},
    search: ""
};

componentDidMount () {
    this.getEmployeesNames("");
}

getEmployeesNames = query => {
API.search(query)
    .then(res => this.setState({ result: res.data }))
    .catch(err => console.log(err));
};

render(){
    return (
        <div>
            <EmployeeTable
            name = {this.state.result.name} />

        </div>
    );
}



}
export default EmployeeResults;