import React from "react";
import styled from "styled-components";
import Correct from "../../public/images/correct.png";

export default function Completed() {
  return (
    <Box>
      <span>
        Form submitted successfully! <img src={Correct} alt="" />
      </span>
    </Box>
  );
}

const Box = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
  max-width: 540px;
  border-radius: 12px;
  background: #5e54a4;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    color: white;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.625rem;
    letter-spacing: 0.01563rem;
    padding-left: 1.21rem;
    img {
      width: 50px;
      height: 50px;
    }
  }
`;
