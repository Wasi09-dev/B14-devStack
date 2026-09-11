import React from 'react';
import BannerImage from "../banner-stack.png"
const Banner = () => {
    return (
        <div className='flex justify-between items-center'>
           <div className='max-w-2xl mx-auto py-8'>
            <h2 className='font-bold text-3xl decoration-[#0F0F2A]'>Build Your Ideal</h2>
            <h2 className='font-bold text-3xl mb-3'>Development Stack</h2>
<p>Explore frontend, backend, database, and tooling options,<br></br>
compare them side by side, and put together the stack that fits your<br></br>
next project.</p>
<button>Explore Technologies</button>
<button>Learn More</button>
        </div>
        <div>
            <img src={BannerImage}/>
        </div>
        </div>
    );
};

export default Banner;