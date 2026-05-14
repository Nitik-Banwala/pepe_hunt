import React from 'react'
import { HEADLINES } from '@/utils/helper'
import Image from 'next/image'
import Icons from './common/Icons'

const Headlines = () => {
    return (
        <div>
            <div className='py-40 px-4 xl:px-0'>
                <h2 className='text-center leading-110 mb-12.5 uppercase font-[glo-Heavy] text-5xl text-yellow'>
                    $hPepe is making <span className='text-dark-yellow'>headlines</span>
                </h2>
                <div className='flex flex-row flex-wrap max-w-285 mx-auto justify-center gap-y-6 gap-x-4 xl:justify-between xl:gap-0'>
                    {HEADLINES.map((item, index) => {
                        return (
                            <div key={index} className='w-full sm:w-auto'>
                                <div className='max-w-[276.1px] w-full min-h-[239.1px] mx-auto'>
                                    <Image
                                        src={item.image}
                                        width={276}
                                        height={239}
                                        alt='headlines'
                                        className='w-full h-auto' />
                                </div>
                                <div className='bg-white/10 py-2 px-3 flex flex-col justify-between max-w-[276.1px] w-full min-h-[142.1px] mx-auto'>
                                    <p className='text-base leading-166 text-white font-bold'>{item.description}</p>
                                    <Icons icon={item.logo} />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Headlines