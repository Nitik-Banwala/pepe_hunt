import React from 'react'
import { TEAM_DATA } from '@/utils/helper'
import Image from 'next/image'
import Icons from './common/Icons'

const Team = () => {
    return (
        <div className='mb-22.5 px-4 xl:px-0'>
            <h2 className='text-center leading-110 mb-12.5 uppercase font-[glo-Heavy] text-5xl text-yellow'>
                Meet the <span className='text-dark-yellow'>team</span>
            </h2>
            <div className='flex flex-row max-w-285 flex-wrap mx-auto gap-5.5 items-center justify-center'>
                {TEAM_DATA.map((item, index) => {
                    return (
                        <div key={index} className='w-full sm:w-auto'>
                            <div className='bg-white/10 max-w-[365.1px] w-full min-h-[410.1px] px-5 pt-6 rounded-[10px] mx-auto'>
                                <div className='flex items-center justify-between flex-row'>
                                    <div className='flex items-center gap-2.5 flex-row'>
                                        <Image
                                            src={item.image}
                                            width={92}
                                            height={92}
                                            alt='team'
                                            className='rounded-full shrink-0' />
                                        <div className='flex flex-col'>
                                            <p className='uppercase text-yellow leading-212 text-base font-black'>{item.name}</p>
                                            <p className='text-yellow leading-162 text-base'>{item.role}</p>
                                        </div>
                                    </div>
                                    <Icons icon={'yellowx'} />
                                </div>
                                <p className='text-yellow mt-6 leading-185 text-sm'>{item.description}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Team