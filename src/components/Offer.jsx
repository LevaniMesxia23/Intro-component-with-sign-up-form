import React from "react";
import styled from "styled-components";

export default function Offer() {
  return (
    <Button>
      <p>
        Try it free 7 days <span>then $20/mo. thereafter</span>
      </p>
    </Button>
  );
}

const Button = styled.button`
  width: 33.75rem;
  height: 3.75rem;
  flex-shrink: 0;
  border-radius: 0.625rem;
  background: #5e54a4;
  box-shadow: 0px 8px 0px 0px rgba(0, 0, 0, 0.15);
  border: none;
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  color: #fff;
  text-align: center;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.625rem;
  letter-spacing: 0.01675rem;
  cursor: pointer;

  span {
    color: #fff;
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.625rem;
    letter-spacing: 0.01675rem;
  }
  @media (max-width: 768px) {
    width: 20.4375rem;

    p {
      width: 12.125rem;
    }
  }
`;
