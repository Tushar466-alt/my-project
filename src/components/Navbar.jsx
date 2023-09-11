import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <Link to='/'><button className='btn btn-warning'>Add User</button></Link>
      <Link to='/user-list'><button className='btn btn-warning ms-5'>User List</button></Link>
    </>
  )
}

export default Navbar;
