import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Create extends Component {

  constructor() {
    super();
    this.state = {
      nama: '',
      alamat: '',
      umur: '',
      notelp: '',
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { nama,alamat,notelp,umur } = this.state;

    axios.post('/pelanggan', {nama,alamat,notelp,umur })
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    const { nama,alamat,notelp,umur } = this.state;
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
                    <input type="text" name="nama" style={{height:50,padding:0,width:600}} value={nama} onChange={this.onChange} placeholder="nama" />
                    </div>
                  </div>
                  <div class="row">
                    <div class="cell" data-title="alamat">
                    alamat
                    </div>
                    <div class="cell" style={{padding:0}} data-title="alamat">
                    <input type="text" name="alamat" style={{height:50,padding:0,width:600}} value={alamat} onChange={this.onChange} placeholder="alamat" />
                    </div>
                  </div>
                  <div class="row">
                    <div class="cell" data-title="umur">
                    Umur
                    </div>
                    <div class="cell" style={{padding:0}} data-title="umur">
                    <input type="number" name="umur" style={{height:50,padding:0,width:600}} value={umur} onChange={this.onChange} placeholder="umur" />
                    </div>
                  </div>
                  <div class="row">
                    <div class="cell" data-title="notelp">
                    No Telp
                    </div>
                    <div class="cell" style={{padding:0}} data-title="notelp">
                    <input type="text" name="notelp" style={{height:50,padding:0,width:600}} value={notelp} onChange={this.onChange} placeholder="no telp" />
                    </div>
                  </div>
                  <div class="row">
                    <div class="cell" data-title="notelp">
                   
                    </div>
                    <div class="cell" style={{padding:0}} data-title="notelp">
                    <button type="submit" class="btn btn-success">Submit</button>
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

export default Create;