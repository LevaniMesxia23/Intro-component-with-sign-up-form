import styled from 'styled-components'
import './App.css'
import Header from './components/Header'
import { GlobalStyles } from './styles/GlobalStyles'

function App() {

  return (
    <>
    <Main>
      <GlobalStyles />
      <Header />
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
