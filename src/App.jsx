import styled from 'styled-components'
import './App.css'
import Header from './components/Header'
import Offer from './components/Offer'
import { GlobalStyles } from './styles/GlobalStyles'

function App() {

  return (
    <>
    <Main>
      <GlobalStyles />
      <Header />
      <Offer />
    </Main>

    </>
  )
}

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
`

export default App
