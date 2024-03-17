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
`

