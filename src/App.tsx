
import { Suspense,  useState } from 'react'
import './App.css'
import Banner from './assets/components/Banner'
import Nav from './assets/components/Nav'
import Explore from './assets/components/Explore'
import Card from './assets/components/cards/Card'
import YourStack from './assets/components/YourStack'
import { toast, ToastContainer } from 'react-toastify'
import Footer from './assets/components/Footer'
const cardFetch = async()=> {
  const res = await fetch('/data.json');
  const data = await res.json();
return data;
};


function App() {
  // const cardPromise = cardFetch()
  const [cardPromise] = useState(() => cardFetch());
const [stack,setStack] = useState<any[]>([]);
const addToStack = (card)=>{
  const isStack = stack.filter((item)=> item.name === card.name).length>0;
if(!isStack){
  setStack([...stack,card]);
toast.success("Technologies Added")
}
};
const removeAll = ()=> {
  setStack([]);
};
const removeOne =(name)=>{
  setStack(stack.filter((item)=> item.name !== name));
}

  return (
    <>
    {/* <Suspense fallback={<h2>Loading...</h2>}>
       <Card cardPromise={cardPromise}/>
     </Suspense> */}
     <Nav/>
     <Banner/>
     <Explore/>
     <div className='max-w-6xl mx-auto flex gap-5 items-start'>
     <div className='flex-1'>
     <Suspense fallback={<h2>Loading...</h2>}>
       <Card cardPromise={cardPromise} addToStack={addToStack}/>
     </Suspense>
     </div>
 <YourStack stack={stack} removeAll={removeAll} removeOne={removeOne}/>
</div>
<ToastContainer/>
<Footer/>
    </>
  )
}

export default App
