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
  background-color: #fff;
  border-radius: 12px;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    img {
      width: 50px;
      height: 50px;
    }
  }
`;
