import styled from "styled-components"
export default function Header(){
  return (
    <>
    <Container>
      <h1>Learn to code by watching others</h1>
      <p>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable. </p>
    </Container>
    </>
  )
}

const Container = styled.header`
  display: flex;
  flex-direction: column;
  margin-right: 2.81rem;

  h1,p{
    width: 525px;
  }
  h1{
    color: #FFF;
    font-size: 50px;
    font-style: normal;
    font-weight: 700;
    line-height: 110%;
    letter-spacing: -0.521px;
    margin-bottom: 1.1rem;
  }

  p{
    color: #FFF;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 162.5%;
  }
`

