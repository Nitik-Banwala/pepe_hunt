import React from 'react'
import Image from 'next/image'

const Frogs = () => {
    return (
        <div>
            <div className='bg-light-green pt-14 sm:pt-20 lg:pt-28.5 mt-16 sm:mt-24 px-4 lg:mt-32.5 max-w-360 w-full mx-auto relative overflow-hidden'>

                {/* Frog: hidden on mobile/tablet, shown absolutely on desktop */}
                <div className='hidden lg:block absolute translate-y-[-10%] translate-x-[123%]'>
                    <Image
                        src={'/assets/png/frog.png'}
                        width={647}
                        height={431}
                        alt='pepe2'
                        className='max-w-[647.1px]'
                    />
                </div>

                <div className='max-w-285 mx-auto lg:px-0'>
                    <div className='max-w-full lg:max-w-[565.1px]'>
                        <h2 className='text-yellow leading-110 text-3xl sm:text-4xl lg:text-5xl uppercase font-[glo-Heavy]'>Frogs are warming up</h2>
                        <h3 className='text-yellow leading-110 mt-2.25 text-lg sm:text-xl lg:text-2xl inter font-black uppercase'>Preview the Platform That's About to Break Crypto</h3>
                        <p className='text-yellow text-base sm:text-lg lg:text-xl mb-8 sm:mb-10 lg:mb-12.5 mt-2.75 leading-150 inter font-normal'>
                            Demo of how it works: real frogs, real-time action, and soon <br className='hidden sm:block' />—real bets. When it's live, bets are on, bugs get eaten, and $hPEPE skyrockets.
                        </p>
                    </div>

                    {/* Frog visible on mobile/tablet, stacked in flow */}
                    <div className='lg:hidden w-full flex justify-end mb-6 ml-4'>
                        <Image
                            src={'/assets/png/frog.png'}
                            width={647}
                            height={431}
                            alt='pepe2'
                            className='w-full max-w-xs sm:max-w-sm object-contain'
                        />
                    </div>
                </div>

                <div className='-ml-5 hidden lg:block'>
                    <Image
                        src={'/assets/png/pepe.png'}
                        width={1329}
                        height={388}
                        alt='pepe2'
                        className='max-w-[1329] hidden lg:block w-full mx-auto'
                    />
                </div>
                <div className='block mb-5 lg:hidden'>
                    <Image
                        src={'/assets/png/pepefull.png'}
                        width={1329}
                        height={388}
                        alt='pepe2'
                        className='max-w-[1329] w-full mx-auto'
                    />
                </div>
            </div>
        </div>
    )
}

export default Frogs