import { createGlobalStyle } from "styled-components";
import MobBackground from "/images/bg-intro-mobile.png";
import DesktopBackground from "/images/bg-intro-desktop.png";

export const GlobalStyles = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  font-family: "Poppins", sans-serif;
  background-color: rgba(255, 121, 121, 1);
  background-image: url(${DesktopBackground});
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media(max-width: 767px){
  background-image: url(${MobBackground});
}
}



`