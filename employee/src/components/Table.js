function (props) {

    return (

        <table className="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Picture</th>
      <th scope="col">Email</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>{ props.name }</td>
      <td>{props.picture}</td>
      <td>{props.email }</td>

    </tr>
  </tbody>
</table>
    )
    
}