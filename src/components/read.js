import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

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
    <>
      <Table singleLine>
        <Table.Row>
          <Table.HeaderCell>First Name</Table.HeaderCell>
          <Table.HeaderCell>Last Name</Table.HeaderCell>
          <Table.HeaderCell>Email</Table.HeaderCell>
          <Table.HeaderCell>Mobile</Table.HeaderCell>
          <Table.HeaderCell>Checkbox</Table.HeaderCell>
          <Table.HeaderCell>Update</Table.HeaderCell>
        </Table.Row>

        <Table.Body>
          {APIdata.map((data) => {
            return (
              <Table.Row key={data.id}>
                <Table.Cell>{data.firstName}</Table.Cell>
                <Table.Cell>{data.lastName}</Table.Cell>
                <Table.Cell>{data.email}</Table.Cell>
                <Table.Cell>{data.mobile}</Table.Cell>
                <Table.Cell>{data.checkbox ? `Yes` : `No`}</Table.Cell>
                <Table.Cell>
                  <Link to="/update">
                    <Button onClick={() => setData(data)}>Update</Button>
                  </Link>
                </Table.Cell>
                <Table.Cell>
                  <Button onClick={() => onDelete(data.id)}>Delete</Button>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>

      <Link to="/create">
        <Button>Create New</Button>
      </Link>
    </>
  );
};

export default Read;
