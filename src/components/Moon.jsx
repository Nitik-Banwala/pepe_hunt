import React from 'react'
import Image from 'next/image'

const Moon = () => {
    return (
        <>
            <div className='bg-dark-yellow py-15.5 flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-22.5 max-w-360 w-full mx-auto px-4 sm:px-6 lg:px-0'>
                <Image
                    src={'/assets/png/moon.png'}
                    width={647}
                    height={459}
                    alt='moon'
                    className='w-full max-w-[647.1px] hidden lg:flex max-h-[459.1px]' />
                <div className='w-full lg:w-auto'>
                    <h2 className='text-3xl sm:text-4xl lg:text-5xl font-[glo-Heavy] uppercase leading-110 text-dark'>$hPEPE Is Built to Moon</h2>
                    <h3 className='text-lg inter sm:text-xl inter lg:text-2xl inter font-black leading-110 inter mt-2.75 text-dark'>GET IN EARLY FOR 2000%</h3>
                    <p className='text-dark text-base inter sm:text-lg mb-1.5 inter lg:text-xl inter font-normal inter mt-2.75 leading-200'>$hPEPE is more than just a meme; it's a viral juggernaut.</p>
                    <p className='text-dark font-normal inter text-base inter sm:text-lg inter lg:text-xl inter leading-150 max-w-full lg:max-w-[555.1px]'>Not only will the token list at 20x the presale price, but a significant portion of the presale will be utilized for viral guerrilla marketing!</p>
                </div>
                <Image
                    src={'/assets/png/moon.png'}
                    width={647}
                    height={459}
                    alt='moon'
                    className='w-full max-w-[647.1px] block lg:hidden max-h-[459.1px]' />
            </div>
        </>
    )
}

export default Moon