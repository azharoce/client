import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Edit extends Component {

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

  onChange = (e) => {
    const state = this.state.pelanggan
    state[e.target.name] = e.target.value;
    this.setState({pelanggan:state});
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { nama,alamat,notelp,umur } = this.state.pelanggan;
    axios.put('/pelanggan/'+this.props.match.params.id, { nama,alamat,notelp,umur})
      .then((result) => {
        // this.props.history.push("/show/"+this.props.match.params.id)
        this.props.history.push("/")
      });
  }

  render() {
    return (


<div class="limiter">
<div class="container-table100">

  <div class="wrap-table100">
  <Link to={`/`}>Back</Link>
      <div class="table">
              <form  onSubmit={this.onSubmit}>
                  <div class="row">
                    <div class="cell" data-title="nama">
                    nama
                    </div>
                    <div class="cell" style={{padding:0}} data-title="umur">
                    <input type="text" name="nama" style={{height:50,padding:0,width:600}} value={this.state.pelanggan.nama}  onChange={this.onChange} placeholder="nama" />
                    </div>
                  </div>
                  <div class="row">
                    <div class="cell" data-title="alamat">
                    alamat
                    </div>
                    <div class="cell" style={{padding:0}} data-title="alamat">
                    <input type="text" name="alamat" style={{height:50,padding:0,width:600}} value={this.state.pelanggan.alamat}  onChange={this.onChange} placeholder="alamat" />
                    </div>
                  </div>
                  <div class="row">
                    <div class="cell" data-title="umur">
                    Umur
                    </div>
                    <div class="cell" style={{padding:0}} data-title="umur">
                    <input type="number" name="umur" style={{height:50,padding:0,width:600}} value={this.state.pelanggan.umur}  onChange={this.onChange} placeholder="umur" />
                    </div>
                  </div>
                  <div class="row">
                    <div class="cell" data-title="notelp">
                    No Telp
                    </div>
                    <div class="cell" style={{padding:0}} data-title="notelp">
                    <input type="text" name="notelp" style={{height:50,padding:0,width:600}} value={this.state.pelanggan.notelp}  onChange={this.onChange} placeholder="no telp" />
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

export default Edit;