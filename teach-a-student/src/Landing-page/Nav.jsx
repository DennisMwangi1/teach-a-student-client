import React from 'react'
import logo from './images/teach-a-student-logo.png'

function Nav() {
    return (
        <nav className='grid grid-cols-3 pt-4'>
            <picture className=' flex place-items-center'>
                <img className='w-14 ml-8' src={logo} alt='logo' />
                <h1 className='odd:text-red-600 font-bold tracking-wider text-lg'>Teach a Student</h1>
            </picture>
            <div className='col-span-2 grid grid-cols-7 place-items-center text-slate-400 font-semibold'>
                <a className='hover:border-b-2 border-slate-400 hover:text-orange-500 active:border-b-2 active:border-black' href="#">Home</a>
                <a className='hover:border-b-2 border-slate-400 hover:text-orange-500 active:border-b-2 active:border-black' href="">About Us</a>
                <a className='hover:border-b-2 border-slate-400 hover:text-orange-500 active:border-b-2 active:border-black' href="">Courses</a>
                <a className='hover:border-b-2 border-slate-400 hover:text-orange-500 active:border-b-2 active:border-black' href="">FAQS</a>
                <a className='hover:border-b-2 border-slate-400 hover:text-orange-500 active:border-b-2 active:border-black' href="">Contact us</a>
                <button className='border-2 p-1 rounded-lg hover:text-orange-500 hover:border-slate-400'>Register</button>
                <button className='border-2 p-1 rounded-lg hover:text-orange-500 hover:border-slate-400 '>Sign In</button>
            </div>
        </nav>
    )
}

export default Nav