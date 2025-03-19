

import './App.css'
import { BgImage } from './components/BgImage'
import { Container } from './components/Container'
import { Questions } from './components/Questions'
import { Title } from './components/Title'

function App() {


  return (
    <main className='font-worksans bg-lightPink h-screen w-screen flex justify-center'>
      <BgImage/>
      <Container>
        <Title/>
        <Questions/>
      </Container>
    </main>
  )
}

export default App
