import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pelanggan: []
    };
  }
  componentDidMount() {
    axios.get('/pelanggan')
      .then(res => {
        this.setState({ pelanggan: res.data });
        console.log(this.state.pelanggan);
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

     

<div class="limiter">
<div class="container-table100">

  <div class="wrap-table100">
  <Link to='/create'>Tambah Data</Link>
      <div class="table">

        <div class="row header">
          <div class="cell">
            Nama Pelanggan
          </div>
          <div class="cell">
            Umur 
          </div>
          <div class="cell">
            Alamat
          </div>
          <div class="cell">
            No Telfon
          </div>

          <div class="cell">
            Aksi
          </div>

         
        </div>

      

          {this.state.pelanggan.map(datapelanggan =>
                  
                  <div class="row">
                    <div class="cell" data-title="nama">
                    {datapelanggan.nama}
                    </div>
                    <div class="cell" data-title="umur">
                    {datapelanggan.umur} Tahun
                    </div>
                    <div class="cell" data-title="alamat">
                    {datapelanggan.alamat}
                    </div>
                    <div class="cell" data-title="notelp">
                    {datapelanggan.notelp}
                    </div>
                    <div class="cell" data-title="view" style={{width:'20%'}}>
                    <Link to={`/show/${datapelanggan._id}`}>View</Link>
                    &nbsp;&nbsp;&nbsp;
                    <Link to={`/edit/${datapelanggan._id}`}>edit</Link>
                    </div>
                   
                  </div>
                )}


       
      </div>
  </div>
</div>
</div>

    );
  }
}
export default App;