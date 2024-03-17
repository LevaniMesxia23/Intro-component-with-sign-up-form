import styled from 'styled-components'
import './App.css'
import Header from './components/Header'
import Offer from './components/Offer'
import Inputs from './components/inputs'
import { GlobalStyles } from './styles/GlobalStyles'

function App() {

  return (
    <>
    <GlobalStyles />
    <Main>
      <div className='header-side'>
      <Header />
      </div>
      <div className='right-side'>
        <Offer />
        <Inputs />
      </div>

    </Main>

    </>
  )
}

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;

  .right-side{
    display: flex;
    flex-direction: column;
  }
`

export default App
