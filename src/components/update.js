import React, { useState, useEffect } from "react";
import { FormField, Button, Checkbox, Form } from "semantic-ui-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Update() {
  const updateAPIData = () => {
    axios.put(`https://661796dced6b8fa434831da6.mockapi.io/cD/${id}`, {
      firstName: firstName,
      lastName: lastName,
      email: email,
      mobile: mobile,
      checkbox: checkbox,
    }).then(() => {
      navigate("/read");
    })
  };
  const [id, setID] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [checkbox, setCheckbox] = useState(true);

  let navigate = useNavigate();

  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setFirstName(localStorage.getItem("First Name"));
    setLastName(localStorage.getItem("Last Name"));
    setEmail(localStorage.getItem("Email"));
    setMobile(localStorage.getItem("Mobile"));
    setCheckbox(localStorage.getItem("Checkbox Value"));
  }, []);

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
            onChange={(e) => setCheckbox(!checkbox)}
          />
        </FormField>

        <Button type="submit" onClick={updateAPIData}>
          Update
        </Button>
      </Form>
    </div>
  );
}

export default Update;
