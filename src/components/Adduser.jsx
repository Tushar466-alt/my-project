import axios from 'axios';
import React, { Component } from 'react';

class Adduser extends Component {
    constructor() {
        super();
        this.state={
            name: '',
            email: '',
            contact: '',
            address: ''
        }
    }

    nameHandler = (e) => {
        this.setState({name: e.target.value})
    }

    emailHandler = (e) => {
        this.setState({email: e.target.value})
    }

    contactHandler = (e) => {
        this.setState({contact: e.target.value})
    }

    addressHandler = (e) => {
        this.setState({address: e.target.value})
    }

    onsubmitHandler = () => {
        axios.post('http://localhost:3000/user',this.state)
        .then(response => {alert('User Add Successfully...!')})
        .catch(error => {console.log(error)})
    }

  render() {
    return (
      <>
        <h2>Add User</h2>
        <form className='mt-5' onSubmit={this.onsubmitHandler}>
            <label>Name:</label>
            <input className='w-25 ms-5' type='text' value={this.state.name} onChange={this.nameHandler}/><br/><br/>
            <label>E-Mail:</label>
            <input className='w-25 ms-5' type='email' value={this.state.email} onChange={this.emailHandler}/><br/><br/>
            <label>Contact:</label>
            <input className='w-25 ms-5' type='number' value={this.state.contact} onChange={this.contactHandler}/><br/><br/>
            <label>Address:</label>
            <input className='w-25 ms-5' type='text' value={this.state.address} onChange={this.addressHandler}/><br/><br/>
            <button className='btn btn-success'>Submit</button>
        </form>
      </>
    )
  }
}

export default Adduser;
