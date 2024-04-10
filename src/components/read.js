import React from "react";

import { Table } from "semantic-ui-react";

  const Read = () => {
    return (
      <Table singleLine>
        <Table.Row>
          <Table.HeaderCell>First Name</Table.HeaderCell>
          <Table.HeaderCell>Last Name</Table.HeaderCell>
          <Table.HeaderCell>Email</Table.HeaderCell>
          <Table.HeaderCell>Phone</Table.HeaderCell>
          <Table.HeaderCell>Checked</Table.HeaderCell>
        </Table.Row>
      </Table>
    );
  };

export default Read;
