import React from "react";
import "./employee.css"

import EmployeeTableHeaders from "./EmployeeTableHeaders";


function EmployeeRow({data}) {
    return (
        <tr>
        <td> {`${data.name.first} ${data.name.last}`}</td>
            <td>{data.email}</td>
            <td>{data.phone}</td>
            <td>{data.age}</td>
        </tr>
    )
}


 function EmployeeTable({employees}) {
    return (
        <table>
            <EmployeeTableHeaders />
            <tbody>
            {
                employees.map((employee) => {
                    return <EmployeeRow data={employee}/>
                })
            }
            </tbody>
        </table>
    );
}

export default EmployeeTable