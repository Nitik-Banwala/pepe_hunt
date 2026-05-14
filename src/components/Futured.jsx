"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import Image from 'next/image'
import { FEATURED_DATA } from '@/utils/helper'
import Icons from './common/Icons'


const Featured = () => {
    return (
        <div className='bg-dark mt-22.5'>
            <h2 className='text-center text-2xl leading-110 font-[glo-Heavy] mb-9.5 text-yellow uppercase '>
                Featured On
            </h2>

            <Swiper
                modules={[Autoplay]}
                slidesPerView={'auto'}
                spaceBetween={60}
                loop={true}
                speed={4000}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                }}
                allowTouchMove={true}
                className='ease-linear!'
            >
                {[...FEATURED_DATA, ...FEATURED_DATA].map((item, i) => (
                    <SwiperSlide key={i} className='w-auto! flex items-center justify-center'>
                        <div className='flex items-center w-full cursor-grab justify-center '>
                            <Icons icon={item.src}/>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Featured