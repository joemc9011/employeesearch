import React from "react";
import EmployeeTable from "./components/EmployeeTable"
import Search from "./components/Search";
import API from "./utils/API";


// import compontents here
class App extends React.Component {
    state = {
        employees: [],
        search: ""
    };

    componentDidMount() {
        this.searchEmployees("John");
    }

        searchEmployees = query => {
            API.search(query)
                .then(res => this.setState({ employees: res.data }))
                .catch(err => console.log(err));
        };

        handleInputChange = event => {
            let name = event.target.name;
            const value = event.target.value;
            this.setState({
                [name]: value
            });
        };

        handleFormSubmit = event => {
            event.preventDefault();
            this.getEmployeesNames(this.state.search);
        };

        render() {
            return (
                <div>
                    <Search
                        search={this.state.search}
                        handleInputChange={this.handleInputChange}
                        handleFormSubmit={this.handleFormSubmit}
                    />
                    <EmployeeTable
                        name={this.state.result} />

                </div>
            );
        }
        

        

    
}

    export default App;