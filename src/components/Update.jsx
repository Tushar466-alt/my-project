import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function Update() {
    const usePara = useParams();
    const useNavi = useNavigate();

    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [contact,setContact] = useState();
    const [address,setAddress] = useState();

    useEffect(() => {
        axios.get(`http://localhost:3000/user/${usePara.id}`)
        .then(response => {
            setName(response.data.name)
            setEmail(response.data.email)
            setContact(response.data.contact)
            setAddress(response.data.address)
        })
        .catch(error => {console.log(error)})
    },[])

    function UseNavi() {
        useNavi('/user-list')
    }
    const updateHandler = () => {
        axios.put(`http://localhost:3000/user/${usePara.id}`,
        {
            name:name,
            email:email,
            contact:contact,
            address:address,
        })
        .then(response => {
            alert('User Update Successfully...!');
            UseNavi();
        })
        .catch(error => {alert(error)})
    }
  return (
    <div>
      <h2>Update</h2>
        <label>Name:</label>
        <input className='w-25 ms-5' value={name} onChange={(e) => setName(e.target.value)} type='text' /><br/><br/>
        <label>E-Mail:</label>
        <input className='w-25 ms-5' value={email} onChange={(e) => setEmail(e.target.value)} type='email'/><br/><br/>
        <label>Contact:</label>
        <input className='w-25 ms-5' value={contact} onChange={(e) => setContact(e.target.value)} type='number' /><br/><br/>
        <label>Address:</label>
        <input className='w-25 ms-5' value={address} onChange={(e) => setAddress(e.target.value)} type='text' /><br/><br/>
        <button className='btn btn-success' onClick={updateHandler}>Submit</button>
    </div>
  )
}

export default Update;
