import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../App.css";

const setData = (data) => {
  let { id, firstName, lastName, email, mobile, checkbox } = data;
  localStorage.setItem("ID", id);
  localStorage.setItem("First Name", firstName);
  localStorage.setItem("Last Name", lastName);
  localStorage.setItem("Email", email);
  localStorage.setItem("Mobile", mobile);
  localStorage.setItem("Checkbox Value", checkbox);
};

const Read = () => {
  const [APIdata, setAPIData] = useState([]);

  useEffect(() => {
    axios
      .get("https://661796dced6b8fa434831da6.mockapi.io/cD")
      .then((response) => {
        setAPIData(response.data);
      });
  }, []);

  const getData = () => {
    axios
      .get(`https://661796dced6b8fa434831da6.mockapi.io/cD`)
      .then((getData) => {
        setAPIData(getData.data);
      });
  };

  const onDelete = (id) => {
    axios
      .delete(`https://661796dced6b8fa434831da6.mockapi.io/cD/${id}`)
      .then(() => {
        getData();
      });
  };

  return (
    <div className="table-wrapper">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Checkbox</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {APIdata.map((data) => (
            <tr key={data.id}>
              <td>{data.firstName}</td>
              <td>{data.lastName}</td>
              <td>{data.email}</td>
              <td>{data.mobile}</td>
              <td>{data.checkbox ? "Yes" : "No"}</td>
              <td>
                <Link to="/update">
                  <Button onClick={() => setData(data)}>Update</Button>
                </Link>
              </td>
              <td>
                <Button onClick={() => onDelete(data.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Link to="/create">
        <Button>Create New</Button>
      </Link>
    </div>
  );
};

export default Read;
