import React, { useState } from "react";
import { FormField, Button, Checkbox, Form } from "semantic-ui-react";
import axios from "axios";

function Create() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [checkbox, setCheckbox] = useState(true);

  const postData = () => {
    axios.post(`https://661796dced6b8fa434831da6.mockapi.io/cD`, {
      firstName,
      lastName,
      email,
      mobile,
      checkbox,
    });
  };

  return (
    <div>
      <Form className="create-form">
        <FormField>
          <label>First Name</label>
          <input
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </FormField>

        <FormField>
          <label>Last Name</label>
          <input
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </FormField>

        <FormField>
          <label>Email</label>
          <input
            placeholder="Email@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormField>

        <FormField>
          <label>Mobile</label>
          <input
            placeholder="Your Mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </FormField>

        <FormField>
          <Checkbox
            label="Agree to the Terms and Conditions"
            checked={checkbox}
            onChange={(e) => setCheckbox(e.target.value)}
          />
        </FormField>

        <Button type="submit" onClick={postData}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Create;
