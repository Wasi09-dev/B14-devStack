import React from 'react';
import Logo from "../logo-text.png"

const Footer = () => {
    return (
        <div className='max-w-6xl mx-auto px-4 mt-20'>
            <div className='pt-8 flex justify-between flex-wrap gap-8'>
<div>
<img src={Logo} className='w-[180px] h-[50px]' />
<p className='text-gray-500 mt-2 max-w-xs'>
 Curated tools, technologies, and resources for developers building modern software.
</p>
 <div className='flex gap-4 mt-3'>
<p>GitHub</p>
<p>Twiitter</p>
<p>LinkedIn</p>
 </div>
</div>
<div>
   <h3 className='font-bold text-sm text-gray-600'>PRODUCT</h3>
          <p className='mt-2 text-gray-500'>Home</p>
          <p className='mt-2 text-gray-500'>Technologies</p>
          <p className='mt-2 text-gray-500'>Projects</p>
</div>
<div>
   <h3 className='font-bold text-sm text-gray-600'>COMPANY</h3>
          <p className='mt-2 text-gray-500'>About</p>
          <p className='mt-2 text-gray-500'>Contact</p>
          <p className='mt-2 text-gray-500'>Careers</p>
</div>
<div>
   <h3 className='font-bold text-sm text-gray-600'>Legal</h3>
          <p className='mt-2 text-gray-500'>Privacy Policy</p>
          <p className='mt-2 text-gray-500'>Terms of services</p>
</div>
</div>
<div className='flex justify-between mt-10 pt-4  text-gray-400 text-sm pb-6'>
        <p>© 2026 Dev Stack. All rights reserved.</p>
        <div className='flex gap-4'>
          <p>Privacy</p>
          <p>Terms</p>
          </div>
          </div>
          </div>
    
    );
};
export default Footer;