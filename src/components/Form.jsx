import React, { useState } from "react";
import styled from "styled-components";
import errorImg from "/images/icon-error.svg";

export default function Inputs() {
  const [errors, setErrors] = useState({
    name: false,
    lastName: false,
    email: false,
    password: false,
  });
  const [values, setValues] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
  });
  function handleInput(event) {
    const { name, value } = event.target;
    const newObj = { ...values, [name]: value };
    setValues(newObj);
  }

  function validation(e) {
    e.preventDefault();
    const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,16}$/;

    if (!values.name.trim()) {
      setErrors((prevErrors) => ({ ...prevErrors, name: true }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, name: false }));
    }

    if (!values.lastName.trim()) {
      setErrors((prevErrors) => ({ ...prevErrors, lastName: true }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, lastName: false }));
    }

    if (!values.email.trim()) {
      setErrors((prevErrors) => ({ ...prevErrors, email: true }));
    } else if (!emailRegex.test(values.email)) {
      setErrors((prevErrors) => ({ ...prevErrors, email: true }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, email: false }));
    }

    if (!values.password.trim()) {
      setErrors((prevErrors) => ({ ...prevErrors, password: true }));
    } else if (!passwordRegex.test(values.password)) {
      setErrors((prevErrors) => ({ ...prevErrors, password: true }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, password: false }));
    }
    return setErrors;
  }
  console.log(errors);
  return (
    <Box errors={errors}>
      <form onSubmit={validation}>
        <div>
          {errors.name && <img src={errorImg} alt="" />}
          <input
            style={
              errors.name
                ? { border: "1.5px solid #FF7979" }
                : { border: "1px solid #5e54a4" }
            }
            name="name"
            onChange={handleInput}
            type="text"
            id="name"
            placeholder="First Name"
          />
          {errors.name == true ? <p>First Name cannot be empty</p> : false}
        </div>

        <div>
          {errors.lastName && <img src={errorImg} alt="" />}
          <input
            style={
              errors.lastName
                ? { border: "1.5px solid #FF7979" }
                : { border: "1px solid #5e54a4" }
            }
            name="lastName"
            onChange={handleInput}
            type="text"
            id="last-name"
            placeholder="Last Name"
          />
          {errors.lastName == true ? <p>Last Name cannot be empty</p> : false}
        </div>

        <div>
          {errors.email && <img src={errorImg} alt="" />}
          <input
            style={
              errors.email
                ? { border: "1.5px solid #FF7979" }
                : { border: "1px solid #5e54a4" }
            }
            name="email"
            onChange={handleInput}
            type="text"
            id="email"
            placeholder="Email Adress"
          />
          {errors.email == true ? (
            <p>Looks like this is not an email</p>
          ) : (
            false
          )}
        </div>

        <div>
          {errors.password && <img src={errorImg} alt="" />}
          <input
            style={
              errors.password
                ? { border: "1.5px solid #FF7979" }
                : { border: "1px solid #5e54a4" }
            }
            name="password"
            onChange={handleInput}
            type="password"
            id="password"
            placeholder="Password"
          />
          {errors.password == true ? <p>Password cannot be empty</p> : false}
        </div>

        <button>CLAIM YOUR FREE TRIAL</button>

        <div className="button-div">
          By clicking the button, you are agreeing to our{" "}
          <span>Terms and Services</span>
        </div>
      </form>
    </Box>
  );
}

const Box = styled.div`
  width: 33.75rem;
  flex-shrink: 0;
  border-radius: 0.625rem;
  background: #fff;
  box-shadow: 0px 8px 0px 0px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2.5rem;

  &:nth-child(2) .button-div {
    margin: 0;
  }

  div {
    margin-bottom: 1.25rem;
    position: relative;

    img {
      position: absolute;
      top: 1rem;
      right: 1.69rem;
    }

    p {
      color: #ff7979;
      text-align: right;
      font-size: 0.6875rem;
      font-style: italic;
      font-weight: 500;
      line-height: normal;
      margin-top: 0.37rem;
    }
  }

  input {
    width: 28.75rem;
    height: 3.5rem;
    flex-shrink: 0;
    border-radius: 0.3125rem;
    border: 1px solid #5e54a4;
    background: #fff;

    color: #3d3b48;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.625rem;
    letter-spacing: 0.01563rem;
    padding-left: 1.21rem;
  }

  button {
    width: 28.75rem;
    height: 3.5rem;
    flex-shrink: 0;
    border-radius: 0.3125rem;
    background: #38cc8b;
    box-shadow: 0px -4px 0px 0px rgba(0, 0, 0, 0.09) inset;
    border: none;
    color: #fff;
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.625rem;
    letter-spacing: 0.0625rem;
    margin-bottom: 0.5rem;
    cursor: pointer;
  }

  .button-div {
    color: #bab7d4;
    text-align: center;
    font-size: 0.6875rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.625rem;

    span {
      color: #ff7979;
      font-size: 0.6875rem;
      font-style: normal;
      font-weight: 700;
      line-height: 1.625rem;
      cursor: pointer;
    }
  }
`;
