import React from "react";
import SideInfo from "./SideInfo";
import { useState } from "react";

function Form({ createInfo }) {
  const [info, setInfo] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    superPower: "",
    emailAddress: "",
  });

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createInfo(info);
    setInfo({
      firstName: "",
      lastName: "",
      phoneNumber: "",
      superPower: "",
      emailAddress: "",
    });
  };

  return (
    <div className="form-page">
      <form onSubmit={handleSubmit}>
        <input
          name="firstName"
          placeholder="First Name"
          onChange={handleChange}
          value={info.firstName}
        />
        <input
          name="lastName"
          placeholder="Last Name"
          onChange={handleChange}
          value={info.lastName}
        />
        <input
          name="phoneNumber"
          placeholder="Phone Number"
          onChange={handleChange}
          value={info.phoneNumber}
        />
        <input
          name="superPower"
          placeholder="Superpower"
          onChange={handleChange}
          value={info.superPower}
        />
        <input
          name="emailAddress"
          placeholder="E-mail Address"
          onChange={handleChange}
          value={info.emailAddress}
        />
        <button type="submit">Submit</button>
      </form>
      <SideInfo />
    </div>
  );
}

export default Form;
