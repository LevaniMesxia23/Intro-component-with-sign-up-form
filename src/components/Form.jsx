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
    const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W)[A-Za-z\d\W]{8,}$/;

    if (!values.name.trim()) {
      setErrors((prevErrors) => ({ ...prevErrors, name: true }));
    } else{
      setErrors((prevErrors) => ({ ...prevErrors, name: false }));
    }

    if (!values.lastName.trim()) {
      setErrors((prevErrors) => ({ ...prevErrors, lastName: true }));
    }
    else{
      setErrors((prevErrors) => ({ ...prevErrors, lastName: false }));
    }


    if (!values.email.trim()) {
      setErrors((prevErrors) => ({ ...prevErrors, email: true }));
    } else{
      setErrors((prevErrors) => ({ ...prevErrors, email: false }));
    }


    if (!values.password.trim()) {
      setErrors((prevErrors) => ({ ...prevErrors, password: true }));
    } else{
      setErrors((prevErrors) => ({ ...prevErrors, password: false }));
    }

    console.log(errors);
    return setErrors;
  }
  return (
    <Box>
      <form onSubmit={validation}>
        <div>
          {errors.name && <img src={errorImg} alt="" />}
          <input
            name="name"
            onChange={handleInput}
            type="text"
            id="name"
            placeholder="First Name"
          />

        </div>

        <div>
          {errors.lastName && <img src={errorImg} alt="" />}
          <input
            name="lastName"
            onChange={handleInput}
            type="text"
            id="last-name"
            placeholder="Last Name"
          />
        </div>

        <div>
          {errors.email && <img src={errorImg} alt="" />}
          <input
            name="email"
            onChange={handleInput}
            type="email"
            id="email"
            placeholder="Email Adress"
          />
        </div>

        <div>
          {errors.password && <img src={errorImg} alt="" />}
          <input
            name="password"
            onChange={handleInput}
            type="password"
            id="password"
            placeholder="Password"
          />
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
  height: 29.625rem;
  flex-shrink: 0;
  border-radius: 0.625rem;
  background: #fff;
  box-shadow: 0px 8px 0px 0px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2.5rem;

  div {
    margin-bottom: 1.25rem;
    position: relative;

    img {
      position: absolute;
      top: 1rem;
      right: 1.69rem;
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
    font-family: Poppins;
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
    font-family: Poppins;
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.625rem;
    letter-spacing: 0.0625rem;
    cursor: pointer;
  }

  .button-div {
    color: #bab7d4;
    text-align: center;
    font-family: Poppins;
    font-size: 0.6875rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.625rem;
    margin-top: 0.5rem;

    span {
      color: #ff7979;
      font-family: Poppins;
      font-size: 0.6875rem;
      font-style: normal;
      font-weight: 700;
      line-height: 1.625rem;
      cursor: pointer;
    }
  }
`;