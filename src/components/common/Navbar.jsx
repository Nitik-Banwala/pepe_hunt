"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Icons from './Icons'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <>
            <div className='bg-dark fixed w-full z-50'>
                <div className='mx-auto nav max-w-285 py-5.25 items-center w-full flex flex-row justify-between px-4 xl:px-0'>

                    {/* Logo */}
                    <div className='flex items-center gap-1.5 flex-row'>
                        <Link href="#">
                            <Image
                                src={'/assets/png/nav.png'}
                                width={74}
                                height={54}
                                alt='logo' />
                        </Link>
                        <Icons icon={'logo'} />
                    </div>

                    {/* Desktop Nav */}
                    <div className='hidden md:flex flex-row items-center'>
                        <Link href="#" className='text-yellow'>
                            User Portal
                        </Link>
                        <Link href="#">
                            <div className='w-11.25 ml-6 h-11.25 border rounded-full border-yellow flex justify-center items-center'>
                                <Icons icon={'telegram'} />
                            </div>
                        </Link>
                        <Link href="#">
                            <div className='w-11.25 ml-5 h-11.25 border rounded-full border-yellow flex justify-center items-center'>
                                <Icons icon={'twiter'} />
                            </div>
                        </Link>
                    </div>

                    {/* Hamburger Button */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className='md:hidden flex flex-col justify-center items-center gap-[5px] w-8 h-8 z-[60]'
                        aria-label='Toggle menu'
                    >
                        <span className={`block h-[2px] bg-yellow rounded-full transition-all duration-300 ease-in-out ${menuOpen ? 'w-6 rotate-45 translate-y-[7px]' : 'w-6'}`} />
                        <span className={`block h-[2px] bg-yellow rounded-full transition-all duration-300 ease-in-out ${menuOpen ? 'w-0 opacity-0' : 'w-6'}`} />
                        <span className={`block h-[2px] bg-yellow rounded-full transition-all duration-300 ease-in-out ${menuOpen ? 'w-6 -rotate-45 -translate-y-[7px]' : 'w-6'}`} />
                    </button>
                </div>

               
            </div>

            {/* Overlay */}
            <div
                onClick={() => setMenuOpen(false)}
                className={`md:hidden fixed inset-0 bg-black/50 z-[55] transition-opacity duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            />

            {/* Right Drawer */}
            <div className={`md:hidden fixed top-0 right-0 h-full w-64 bg-dark z-[60] transition-transform duration-300 ease-in-out flex flex-col ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>

                {/* Close Button */}
                <div className='flex justify-end px-4 pt-6 pb-4'>
                    <button
                        onClick={() => setMenuOpen(false)}
                        className='flex flex-col justify-center items-center gap-[5px] w-8 h-8'
                        aria-label='Close menu'
                    >
                        <span className='block w-6 h-[2px] bg-yellow rounded-full rotate-45 translate-y-[1px]' />
                        <span className='block w-6 h-[2px] bg-yellow rounded-full -rotate-45 -translate-y-[1px]' />
                    </button>
                </div>

                {/* Drawer Links */}
                <div className='flex flex-col items-center gap-8 pt-10'>
                    <Link
                        href="#"
                        className='text-yellow text-base inter font-medium'
                        onClick={() => setMenuOpen(false)}
                    >
                        User Portal
                    </Link>
                    <div className='flex flex-row items-center gap-5'>
                        <Link href="#" onClick={() => setMenuOpen(false)}>
                            <div className='w-11.25 h-11.25 border rounded-full border-yellow flex justify-center items-center'>
                                <Icons icon={'telegram'} />
                            </div>
                        </Link>
                        <Link href="#" onClick={() => setMenuOpen(false)}>
                            <div className='w-11.25 h-11.25 border rounded-full border-yellow flex justify-center items-center'>
                                <Icons icon={'twiter'} />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar