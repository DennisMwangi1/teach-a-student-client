import React from 'react'
import logo from './images/teach-a-student-logo.png'

function Nav({scrolling}) {
    return (
        <nav className={scrolling ?'grid grid-cols-3  fixed z-10 bg-slate-100 w-full':'grid grid-cols-3 pt-4 fixed z-10 w-full'}>
            <picture className=' flex place-items-center'>
                <a href="#">
                    <img className={scrolling?'w-8 ml-8':'w-14 ml-8'} src={logo} alt='logo' />
    </a>
                <h1 className={scrolling ?"font-semibold pl-2 tracking-wider ":'font-bold tracking-wider text-lg'}>Teach a Student</h1>
            </picture>
            <div className='col-span-2 grid grid-cols-7 w-full gap-10 pr-6 place-items-center text-slate-400 font-semibold'>
                <a className='hover:border-b-2 border-slate-400 hover:text-orange-500 active:border-b-2 active:border-black' href="#">Home</a>
                <a className='hover:border-b-2 border-slate-400 hover:text-orange-500 active:border-b-2 active:border-black' href="">About Us</a>
                <a className='hover:border-b-2 border-slate-400 hover:text-orange-500 active:border-b-2 active:border-black' href="">Courses</a>
                <a className='hover:border-b-2 border-slate-400 hover:text-orange-500 active:border-b-2 active:border-black' href="">FAQS</a>
                <a className='hover:border-b-2 border-slate-400 hover:text-orange-500 active:border-b-2 active:border-black' href="">Contact us</a>
                <a>
                <button className='border-2 p-1 rounded-lg hover:text-orange-500 hover:border-slate-400'>Register</button>
                </a> 
                <a>
                <button className='border-2 p-1 rounded-lg hover:text-orange-500 hover:border-slate-400 '>Sign In</button>
                </a>
            </div>
        </nav>
    )
}

export default Nav