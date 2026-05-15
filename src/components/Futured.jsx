"use client"
import React from 'react'
import Marquee from "react-fast-marquee"
import { FEATURED_DATA } from '@/utils/helper'
import Icons from './common/Icons'

const Featured = () => {
    return (
        <div className='bg-dark mt-28 overflow-hidden'>
            <h2 className='text-center text-2xl leading-110 font-[glo-Heavy] mb-9.5 text-yellow uppercase'>
                Featured On
            </h2>

            <Marquee
                speed={100}
                gradient={false}
                pauseOnHover={false}
                direction="left"
            >
                {[...FEATURED_DATA, ...FEATURED_DATA].map((item, i) => (
                    <div
                        key={i}
                        className='flex cursor-pointer items-center justify-center mr-[60px]'
                    >
                        <Icons icon={item.src} />
                    </div>
                ))}
            </Marquee>
        </div>
    )
}

export default Featured