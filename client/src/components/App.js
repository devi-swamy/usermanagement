import React, { Component } from 'react';

import '../styles/App.scss';
import Login from './Login';

export default class App extends Component {

  state ={
    username:"",
    password:""
  }

  handlechange =(e)=>
  {
    console.log(e.target.name);
    this.setState({[e.target.name]:e.target.value})
  }
  render() {
    return (
      <div className="container">
     <div class="card text-center">
  <div className="card-header">
    <ul className="nav nav-tabs card-header-tabs">
      <li className="nav-item">
        <a className="nav-link active" href="#">Login In</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Sign Up</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Forgot Password</a>
      </li>
    </ul>
  </div>
  <div className="card-body">
    
  
    <Login  username={this.state.username} onChange={this.handlechange}/>
  </div>
</div>
      </div>
    )
  }
}

