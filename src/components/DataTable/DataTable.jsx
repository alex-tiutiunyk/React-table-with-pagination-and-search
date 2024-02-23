import Table from 'react-bootstrap/Table';
import './DataTable.css'

function DataTable() {
  var data = require('./libraries.json');

  return(
    <div className="container-fluid table-section">
      <h2>NFT DB</h2>
      <dl className="aditinal-info text-left">
        <dt>Date:</dt><dd>2024-02-18</dd>
        <dt>Time:</dt><dd>19:20:25</dd>
        <dt>Number of NFT’s:</dt><dd>3</dd>
      </dl>
      <Table striped bordered hover responsive className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Create</th>
            <th>Date Minted</th>
            <th style={{maxWidth: "125px"}}>Email</th>
            <th>Breed Name</th>
            <th>Dogs Image</th>
            <th>Dogs Name</th>
            <th>Address</th>
            <th>Chip Id</th>
            <th>FB Username	</th>
            <th>Last Name</th>
            <th>First Name</th>
            <th className='col-country'>Country</th>
            <th>Certificate</th>
          </tr>
          <tr>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
            <th><input type="search" value="" /></th>
            <th>&nbsp;</th>
            <th><input type="search" value="" /></th>
            <th>&nbsp;</th>
            <th><input type="search" value="" /></th>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
            <th><input type="search" value="" /></th>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>
                {
                  (item.dateMinted === "") ?
                    <button className="btn btn-sm btn-primary text-nowrap">Create NFT</button> :
                    <span class="badge bg-success">Minted</span>
                }
              </td>
              <td>{item.dateMinted}</td>
              <td><div className='col-email'>{item.email}</div></td>
              <td>{item.breedName}</td>
              <td><a href="{item.dogsImage}">Image</a></td>
              <td>{item.dogsName}</td>
              <td>{item.address}</td>
              <td>{item.chipId}</td>
              <td>{item.fbUsername}</td>
              <td>{item.lastName}</td>
              <td>{item.firstName}</td>
              <td>{item.country}</td>
              <td><a href="{item.certificate}">Image</a></td>
            </tr>
          ))}
        </tbody>
      </Table>
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li class="page-item disabled"><a class="page-link" href="#">Previous</a></li>
          <li class="page-item active"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item"><a class="page-link" href="#">Next</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default DataTable;