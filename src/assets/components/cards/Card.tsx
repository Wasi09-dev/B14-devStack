import React, { use } from 'react';
 const Card = ({cardPromise,addToStack})=>{
const cards = use(cardPromise)
console.log(cards,"cards")

 

    return (
        <div className="grid grid-cols-3 gap-6">
            {
                cards.map((card)=>{
return (
    <div className="card bg-base-100 min-w-0 shadow-sm border-gray-200 rounded-xl p-4 mt-5">
  <figure className='justify-start ml-5'>
    <img
      src={card.icon} className='w-16 h-16' />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{card.name}</h2>
    <p>{card.description}</p>
    <div className='flex justify-between gap-1'>
    <p className='bg-gray-100 text-gray-600 px-2 py-1 rounded-full'>{card.category}</p>
    <p>{card.difficulty}</p>
    <p>{card.rating}</p>
    </div>
    <div className="card-actions justify-end">
      <button className="btn bg-[#0A0F1D] text-white w-full py-2 mt-2" onClick={()=> addToStack(card)}>Add to Stack</button>
    </div>
  </div>
</div>
);
                })
            }
        </div>
    );
};

export default Card;