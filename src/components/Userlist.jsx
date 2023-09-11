import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Userlist = () => {
  const [obj, setObj] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/user")
      .then((response) => {
        setObj(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  });
  return (
    <>
      <h2>User List</h2>
      <table className="table table-bordered text-center">
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>E-Mail</th>
          <th>Contact</th>
          <th>Address</th>
          <th>Status</th>
        </tr>
        {obj.map((data, ind) => {
          return (
            <tr key={ind}>
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.contact}</td>
              <td>{data.address}</td>
              <td>
                <Link to={`/update-user/${data.id}`}>Update</Link>
                <Link to={`/delete-user/${data.id}`}>Delete</Link>
              </td>
            </tr>
          );
        })}
      </table>
    </>
  );
};

export default Userlist;
