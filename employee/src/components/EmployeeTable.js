import React from "react";

function EmployeeTable(props) {
    return (
        <thead>
         <tr>
          <th> </th>
          <td>{props.name}</td>
            <td>{props.email}</td>
             <td>{props.phone}</td>

         
           </tr>
        </thead>
    );
}

export default EmployeeTable