import axios from 'axios';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Delete() {
  const usePara = useParams();
  const useNavi = useNavigate();

  function UseNavi() {
    useNavi('/user-list');
  }

  useEffect(() => {
    axios.delete(`http://localhost:3000/user/${usePara.id}`)
    .then(response => {alert('User Delete Successfully..!')})
    .catch(error => {console.log(error)})
    UseNavi();
  })
  return (
    <div>
      <h2>Delete</h2>
    </div>
  )
}

export default Delete;
