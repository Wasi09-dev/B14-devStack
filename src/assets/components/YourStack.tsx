import React from 'react';

const YourStack = ({stack,removeAll}) => {
    return (
        <div className='border rounded-xl p-4 w-64'>
            <h2 className='font-bold'>Your Stack</h2>
{stack.length === 0 ? (
<p className='text-gray-400 mt-2'>  No technologies selected yet.
</p>
):(
<div className="mt-2">
{stack.map((item:any)=> {
return (
<div className="flex items-center gap-2 mt-2">
<img src={item.icon} className="w-6 h-6"/>

<p>{item.name}</p>
</div>
);
})}
<button onClick={removeAll} className="mt-4 text-white border bg-black border px-3 py-1 rounded">Remove All </button>
</div>
)}
</div>
);
}



    
    
export default YourStack;