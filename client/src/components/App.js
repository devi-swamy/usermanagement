import React, { Component } from 'react';
import {Route,Switch,BrowserRouter as Router} from 'react-router-dom';
import '../styles/App.scss';
import Login from './Login';
import Signup from './Signup';
import Forgot from './Forgot';
import Navbar from './Navbar';


export default class App extends Component {

  state ={
    username:"",
    password:"",
    fullname:"",
    email:""
  }

  handlechange =(e)=>
  {
    console.log(e.target.name);
    this.setState({[e.target.name]:e.target.value})
  }
  render() {
    return (
      <Router>
      <div className="container">
     <div class="card text-center">
      <Navbar/>
  <div className="card-body">
    
    <Switch>
    <Router path="/signup"> <Signup  username={this.state.username} onChange={this.handlechange}/></Router>
    <Router path="/forgot"> <Forgot  username={this.state.username} email ={this.state.email} onChange={this.handlechange}/></Router>
      <Router path="/" exact="true"> <Login  username={this.state.username} onChange={this.handlechange}/></Router>
  
    </Switch>
  
   
  </div>
</div>
      </div>
      </Router>
    )
  }
}

