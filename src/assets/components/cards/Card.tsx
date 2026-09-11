import React, { use } from 'react';

const Card = ({cardPromise}) => {
const cards = use(cardPromise)
console.log(cards,"cards")



    return (
        <div className='<div className="max-w-6xl mx-auto grid grid-cols-3 gap-6">'>
            {
                cards.map((card)=>{
return (
    <div className="card bg-base-100 w-100 shadow-sm">
  <figure>
    <img
      src={card.icon} className='w-16 h-16'/>
  </figure>
  <div className="card-body">
    <h2 className="card-title">{card.name}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
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