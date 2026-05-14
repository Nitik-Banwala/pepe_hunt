import React from 'react'
import { PEPE_HUNT_CONTENT } from '@/utils/helper'
import Image from 'next/image'
import { FEATURES } from '@/utils/helper'
import Icons from './common/Icons'

const Whats = () => {
    return (
        <div className='px-4'>
            <div className='max-w-285 flex flex-col lg:flex-row mx-auto w-full pt-20 sm:pt-32 lg:pt-45 '>
                <div className='w-full lg:w-auto'>
                    <div className='flex flex-row items-center mb-5 flex-wrap gap-y-2'>
                        <h2 className='text-center leading-110 uppercase font-[glo-Heavy] text-3xl sm:text-4xl lg:text-5xl text-yellow'>What is</h2>
                        <Image
                            src={'/assets/png/nav.png'}
                            width={72}
                            height={52}
                            alt='logo'
                            className='w-12 sm:w-16 lg:w-[72.1px] h-auto' />
                        <h2 className='text-center leading-110 uppercase font-[glo-Heavy] text-3xl sm:text-4xl lg:text-5xl text-dark-yellow'>PEPE HUNT?</h2>
                    </div>
                    <div className="max-w-full lg:max-w-[600.1px]">
                        <div className="max-w-full lg:max-w-[660.1px]">
                            {PEPE_HUNT_CONTENT.map((item) => (
                                <p
                                    key={item.id}
                                    className="text-base inter sm:text-lg inter lg:text-xl inter leading-150 text-yellow mb-3.75"
                                >
                                    {item.content}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='absolute right-0 md:block hidden pointer-events-none -z-1'>
                    <Icons icon={'elipsthree'} />
                </div>
                <div className='mt-5 flex flex-col items-center lg:items-start w-full lg:w-auto'>
                    <Image
                        src={'/assets/png/pepefull.png'}
                        width={507}
                        height={148}
                        alt='pepe'
                        className='w-full max-w-xs sm:max-w-sm lg:w-[507.1px] lg:max-w-none h-auto' />
                    <Image
                        src={'/assets/png/hunter.png'}
                        width={523}
                        height={523}
                        alt='pepe'
                        className='-mt-2 w-full max-w-xs sm:max-w-sm lg:w-[523.1px] lg:max-w-none h-auto' />
                </div>
            </div>

            <div className='max-w-285 mx-auto w-full'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5.5 max-w-285 mx-auto items-center justify-center'>
                    {FEATURES.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className='bg-[linear-gradient(90deg,#4020C1_0%,#8432D6_100%)] justify-center p-px rounded-[10px]'>
                                <div
                                    className='  group hover:bg-[linear-gradient(90deg,#4020C1_0%,#8432D6_100%)] duration-500 cursor-pointer bg-dark text-center w-full flex flex-col items-center justify-center rounded-[10px] min-h-[224.1px] py-6 lg:py-0'>
                                    {item.svg ? (
                                        <Icons icon={item.svg} />
                                    ) : (
                                        <Image
                                            src={item.icon}
                                            width={38}
                                            height={38}
                                            alt='image'
                                        />
                                    )}
                                    <h3 className='text-yellow mt-6 text-base inter font-extrabold leading-130'>{item.title}</h3>
                                    <p className='max-w-[300.1px] mt-1 text-base inter font-normal leading-130 text-yellow/80'>{item.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Whats