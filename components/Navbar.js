import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <>
            <nav className='h-14 px-2 md:px-10 bg-purple-700 flex justify-between items-center text-white'>
                <div className="text-lg font-bold">
                    <Link href="/">BitLinks</Link>
                </div>
                <ul className='md:flex md:justify-center md:items-center gap-5 hidden'>
                    <Link href="/"><li>Home</li></Link>
                    <Link href="/about"><li>About</li></Link>
                    <Link href="/shorten"><li>Shortener</li></Link>
                    <Link href="/contact"><li>Contact Us</li></Link>
                    <li className='flex gap-3'>
                        <Link href="/shorten"><button className='bg-purple-500 font-bold p-3 py-1 rounded-lg shadow-sm'>Try Now</button></Link>
                        <Link href="/github"><button className='bg-purple-500 font-bold p-3 py-1 rounded-lg shadow-sm'>Github</button></Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
