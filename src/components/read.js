import React, { useEffect, useState } from "react";
import axios from "axios";

import { Table } from "semantic-ui-react";

const Read = () => {
  const [APIdata, setAPIData] = useState([]);

  useEffect(() => {
    axios
      .get("https://661796dced6b8fa434831da6.mockapi.io/cD")
      .then((response) => {
        setAPIData(response.data);
      });
  }, []);

  return (
    <Table singleLine>
      <Table.Row>
        <Table.HeaderCell>First Name</Table.HeaderCell>
        <Table.HeaderCell>Last Name</Table.HeaderCell>
        <Table.HeaderCell>Email</Table.HeaderCell>
        <Table.HeaderCell>Mobile</Table.HeaderCell>
        <Table.HeaderCell>Checkbox</Table.HeaderCell>
      </Table.Row>

      <Table.Body>
        {APIdata.map((data) => {
          return (
            <Table.Row key={data.id}>
              <Table.Cell>{data.firstName}</Table.Cell>
              <Table.Cell>{data.lastName}</Table.Cell>
              <Table.Cell>{data.email}</Table.Cell>
              <Table.Cell>{data.mobile}</Table.Cell>
              <Table.Cell>{data.checkbox ? `Checked` : `Unchecked`}</Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
};

export default Read;
