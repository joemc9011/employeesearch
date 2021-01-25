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
            API.search()
                .then(res => this.setState({ employees: res.data.results.map((emp, id) => ({
                    name: emp.name,
                    email: emp.email,
                    phone:emp.phone,
                    key: id
                })),
            }))
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