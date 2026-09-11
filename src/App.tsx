
import { Suspense, use, useState } from 'react'
import './App.css'
import Banner from './assets/components/Banner'
import Nav from './assets/components/Nav'
import Explore from './assets/components/Explore'
import Card from './assets/components/cards/Card'
const cardFetch = async()=> {
  const res = await fetch('/data.json');
  const data = await res.json();
return data;
};


function App() {
  const cardPromise = cardFetch()
const [stack,setStack] = useState<any[]>([]);
const addToStack = (card)=>{
  const isStack = stack.filter((item)=> item.name === card.name).length>0;
if(!isStack){
  setStack([...stack,card]);
}
};
  return (
    <>
    {/* <Suspense fallback={<h2>Loading...</h2>}>
       <Card cardPromise={cardPromise}/>
     </Suspense> */}
     <Nav/>
     <Banner/>
     <Explore/>
     <Suspense fallback={<h2>Loading...</h2>}>
       <Card cardPromise={cardPromise} addToStack={addToStack}/>
     </Suspense>

    </>
  )
}

export default App
