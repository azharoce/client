import React, { Component } from 'react';
import './css/customers.css';

import { Link } from 'react-router-dom';
export default class Customers extends Component {
    constructor()
    {
      super();
      this.state={
        customers:[]
      }
    }
    componentDidMount()
    {
      fetch('/pelanggan')
        .then(res =>res.json())
        .then(customers=>this.setState({customers},()=>console.log('customer load ...',customers)));
    }
    deleteMember(_id){
      
      fetch("/pelanggan/"+_id, {
          method: 'DELETE',
          headers: {'Content-Type': 'application/json'},
      }).then(function(response) {
        alert(JSON.stringify(response));

          // if (response.status >= 400) {
          //   throw new Error("Bad response from server");
          // }

        this.props.history.push("/");
          // return response.json();
      }).then(function(data) {
          // if(data === "success"){
          //    this.setState({msg: "User has been deleted."});  
          // }
      }).catch(function(err) {
          console.log(err)
      });
  }
  delete(id){
    console.log(id);
    axios.delete('/pelanggan/'+id)
      .then((result) => {
        this.props.history.push("/")
      });
  }
  render() {
    return (
      <div>
        <h2>Customers</h2>
        <form>
          <input type="text" / >
        </form>
        <table>
            <thead>
                <tr>
                    <th>title</th>
                    <th>content</th>
                    <th>createdAt</th>
                    <th>updatedAt</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
            {this.state.customers.map(customer=>
                <tr  key={customer._id}>
                    <td>{customer.nama}</td>
                    <td>{customer.notelp}</td>
                    <td>{customer.umur}</td>
                    <td>{customer.updatedAt}</td>
                    <td>
                    <Link to={`/edit/${customer._id}`} class="btn btn-success">Edit</Link>
                        &nbsp;&nbsp;&nbsp;
                        <button onClick={this.delete.bind(this, this.state.pelanggan._id)} class="btn btn-danger">Delete</button>
                    </td>
                </tr>
            )} 
            </tbody>
        </table>
           
      </div>
    );
  }
}
