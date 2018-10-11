import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Show extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pelanggan: {}
    };
  }

  componentDidMount() {
    axios.get('/pelanggan/'+this.props.match.params.id)
      .then(res => {
        this.setState({ pelanggan: res.data });
        console.log(this.state.pelanggan);
      });
  }

  delete(id){
    console.log(id);
    axios.delete('/pelanggan/'+id)
      .then((result) => {
        // alert(result);
        this.props.history.push("/");
      });
  }

  render() {
    return (
    

<div class="limiter">
<div class="container-table100">

  <div class="wrap-table100">
  <Link to='/'>Back</Link>
      <div class="table">
              <form  onSubmit={this.onSubmit}>
                  <div class="row">
                    <div class="cell" data-title="nama">
                    nama
                    </div>
                    <div class="cell" style={{padding:0}} data-title="umur">
                    {this.state.pelanggan.nama}
                    </div>
                  </div>
                  <div class="row">
                    <div class="cell" data-title="alamat">
                    alamat
                    </div>
                    <div class="cell" style={{padding:0,width:600}} data-title="alamat">
                    {this.state.pelanggan.alamat}
                    </div>
                  </div>
                  <div class="row">
                    <div class="cell" data-title="umur">
                    Umur
                    </div>
                    <div class="cell" style={{padding:0}} data-title="umur">
                    {this.state.pelanggan.umur}
                    </div>
                  </div>
                  <div class="row">
                    <div class="cell" data-title="notelp">
                    No Telp
                    </div>
                    <div class="cell" style={{padding:0}} data-title="notelp">
                    {this.state.pelanggan.notelp}
                    </div>
                  </div>
                  <div class="row">
                    <div class="cell" data-title="notelp">
                   
                    </div>
                    <div class="cell" style={{padding:0}} data-title="notelp">
                    <Link to={`/edit/${this.state.pelanggan._id}`} class="btn btn-success">Edit</Link>&nbsp;
            <button onClick={this.delete.bind(this, this.state.pelanggan._id)} class="btn btn-danger">Delete</button>
                    </div>
                  </div>

</form>

       
      </div>
  </div>
</div>
</div>


    );
  }
}

export default Show;