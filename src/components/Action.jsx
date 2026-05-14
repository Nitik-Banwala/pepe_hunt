import React from 'react'
import Calender from './common/Calender'
import Timer from './common/Timer'
import Image from 'next/image'

const Action = () => {
    return (
        <>
            <div className='max-w-285 w-full mt-16 sm:mt-36 lg:mt-[265.1px] mx-auto px-4'>
                <div className='flex flex-col min-[1100.1px]:flex-row w-full max-[1100.1px]:max-w-[550.1px] mx-auto lg:justify-between items-center lg:items-start '>
                    <div className='w-full lg:w-auto '>
                        <h2 className='leading-110 max-w-full lg:max-w-[465.1px] uppercase font-[glo-Heavy] text-3xl sm:text-4xl lg:text-5xl text-yellow text-center lg:text-left'>
                            Pepe's Buy Back & Burn{' '}
                            <span className='text-dark-yellow'>See in action</span>
                        </h2>
                        <Image
                            src={'/assets/png/action.png'}
                            width={438}
                            height={500}
                            alt='action'
                            className='ml-0 sm:ml-10 lg:ml-25 mt-3 w-full max-w-[280.1px] sm:max-w-[350.1px] lg:max-w-[438.1px] h-auto mx-auto lg:mx-0' />
                    </div>
                    <div className='w-full min-[1100.1px]:mb-0 mb-6 lg:w-auto flex justify-center lg:justify-end'>
                        <Calender />
                    </div>
                </div>
            </div>
            <Timer />
        </>
    )
}

export default Action