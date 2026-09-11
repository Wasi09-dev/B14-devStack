
import { Suspense } from 'react'
import './App.css'
import Banner from './assets/components/Banner'
import Nav from './assets/components/Nav'
import Explore from './assets/components/Explore'
import Card from './assets/components/Card'

function App() {
  

  return (
    <>
     <Nav/>
     <Banner/>
     {/* <Suspense fallback>Loading..</Suspense> */}
     <Explore/>
     <Card/>
    </>
  )
}

export default App
