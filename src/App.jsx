import styled from "styled-components";
import "./App.css";
import Header from "./components/Header";
import Offer from "./components/Offer";
import Form from "./components/Form";
import Completed from "./components/Completed";
import { GlobalStyles } from "./styles/GlobalStyles";
import { useState } from "react";

function App() {
  const [component, setComponent] = useState(false);
  return (
    <>
      <GlobalStyles />
      <Main>
        <div className="header-side">
          <Header />
        </div>
        <div className="right-side">
          <Offer />
          {component == false ? <Form setComponent={setComponent} /> : <Completed />}
        </div>
      </Main>
    </>
  );
}

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;

  .right-side {
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 768px) {
    flex-direction: column;

    .right-side{
      width: 20.4375rem;
    }
  }
`;

export default App;
