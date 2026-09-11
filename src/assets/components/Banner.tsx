import React from 'react';
import BannerImage from "../banner-stack.png"
const Banner = () => {
    return (
        <div className='flex justify-between items-center'>
           <div className='max-w-2xl mx-auto py-8'>
            <h2 className='font-bold text-3xl decoration-[#0F0F2A]'>Build Your Ideal</h2>
            <h2 className='font-bold text-3xl bg-linear-to-r from-[#f07117] to-[rgb(67,69,228)] bg-clip-text text-transparent mb-3'>Development Stack</h2>
<p>Explore frontend, backend, database, and tooling options,<br></br>
compare them side by side, and put together the stack that fits your<br></br>
next project.</p>
<button className='bg-linear-to-r from-[#f526c8] to-[rgb(96,98,232)] text-white px-[16px] py-[12px] border rounded-2xl mr-2 mt-5 -ml-2 cursor-pointer'>Explore Technologies</button>
<button className='border-1 px-[15px] py-[5px] cursor-pointer'>Learn More</button>
        </div>
        <div>
            <img src={BannerImage}/>
        </div>
        </div>
    );
};

export default Banner;