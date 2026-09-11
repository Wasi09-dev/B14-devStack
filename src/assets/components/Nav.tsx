import React from 'react';
import Logo from "../logo-text.png"
const Nav = () => {
    return (
        
        <nav className='flex justify-between gap-3 max-w-5xl mx-auto py-4'>
            <img src={Logo} className='w-[180px] h-[50px]' />

            <ul className='flex gap-3 items-center'>
                <li className='text-pink-500'><a href='/'>Home</a></li>
                <li><a href='/'>Technoligies</a></li>
                <li><a href='/'>Projects</a></li>
                <li><a href='/'>About</a></li>
                <li><a href='/'>Contact</a></li>
            </ul>
            
        <div className='flex gap-2 items-center mb-2'>
        <button className='px-4 py-2 border rounded-md'>Sign In</button>
        <button className='bg-pink-500 px-5 py-3 border rounded-2xl'>Sign Up</button>
        </div>

        </nav>
    );
};

export default Nav;