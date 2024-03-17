import React, { useState } from 'react'
import styled from 'styled-components'

export default function Inputs() {
  function formValidation(){
    const [values, setValues] = useState({
      name: "",
      lastName: "",
      email: "",
      password: ""
    })
  }
  return (
    <Box>
      <input
      type="text"
      id="name" 
      placeholder='First Name'/>
      
      <input
      type="text"
      id="name" 
      placeholder='Last Name'/>

      <input
      type="email"
      id="name" 
      placeholder='Email Adress'/>

      <input
      type="password"
      id="name" 
      placeholder='Password'/>

      <button>CLAIM YOUR FREE TRIAL</button>

      <div>By clicking the button, you are agreeing to our <span>Terms and Services</span></div>
    </Box>
  )
}

const Box = styled.div`
  width: 33.75rem;
  height: 29.625rem;
  flex-shrink: 0;
  border-radius: 0.625rem;
  background: #FFF;
  box-shadow: 0px 8px 0px 0px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2.5rem;

  input{
    width: 28.75rem;
    height: 3.5rem;
    flex-shrink: 0;
    margin-bottom: 1.25rem;
    border-radius: 0.3125rem;
    border: 1px solid #5E54A4;
    background: #FFF;

    color: #3D3B48;
    font-family: Poppins;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.625rem;
    letter-spacing: 0.01563rem;
    opacity: 0.75;
    padding-left: 1.21rem;
  }

  button{
    width: 28.75rem;
    height: 3.5rem;
    flex-shrink: 0;
    border-radius: 0.3125rem;
    background: #38CC8B;
    box-shadow: 0px -4px 0px 0px rgba(0, 0, 0, 0.09) inset;
    border: none;
    color: #FFF;
    font-family: Poppins;
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.625rem; 
    letter-spacing: 0.0625rem;
    cursor: pointer;
  }

  div{
    color: #BAB7D4;
    text-align: center;
    font-family: Poppins;
    font-size: 0.6875rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.625rem;
    margin-top: 0.5rem;


    span{
      color: #FF7979;
    font-family: Poppins;
    font-size: 0.6875rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.625rem;
    cursor: pointer;
    }
  }
`
