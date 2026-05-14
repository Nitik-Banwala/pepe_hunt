"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { FAQ_DATA } from '@/utils/helper'
import Icons from './common/Icons'

const FAQ = () => {
  const [openId, setOpenId] = useState(null)

  const toggle = (id) => {
    setOpenId(prev => prev === id ? null : id)
  }

  return (
    <section className="px-5 bg-light-green pt-[40.1px] sm:pt-[60.1px] md:pt-[90.36px]">
      <div className="max-w-[1439.1px] w-full mx-auto flex flex-col items-center justify-center">
        <h1 className=" text-5xl leading-110 font-[glo-Heavy] text-yellow text-center mb-[23.61px] sm:mb-[59.64px]">
          Questions? Get the answers
        </h1>

        <div className="flex flex-col">
          {FAQ_DATA.map((item) => (
            <div key={item.id} className="faqitem">
              <button
                onClick={() => toggle(item.id)}
                className="max-w-[1141.1px] w-full mx-auto border-b border-[#FFFFFF] flex items-center justify-between cursor-pointer pb-[14.6px] min-[500px]:pb-[29.1px] pt-[14.42px] min-[500px]:pt-[25.1px] pr-[11.48px] min-[500px]:pr-[35.55px] gap-4"
              >
                <h1 className="w-full font-semibold text-base inter sm:text-base inter lg:text-xl inter leading-[28.1px] sm:leading-[34.1px] text-white text-left mb-0">
                  {item.question}
                </h1>
                <span className="shrink-0 flex justify-center items-center sm:mt-auto">
                  <span className={`transition-transform duration-300 ease-in-out inline-block ${openId === item.id ? 'rotate-180' : ''}`}>
                    <Icons icon={'faqarrow'}/>
                  </span>
                </span>
              </button>

              <div className={`max-w-[1141.1px] mx-auto pr-[32.1px] grid transition-all duration-300 ${openId === item.id ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                <div className="overflow-hidden">
                  <p className="font-medium text-[14px] sm:text-[15px] lg:text-base inter leading-[160%] sm:leading-[140%] text-white mt-5">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Image
          src="/assets/png/pepe.png"
          width={1180}
          height={600}
          className="w-[1180.1px] mt-8 sm:mt-12 md:mt-16"
          alt="PEPE"
        />
      </div>
    </section>
  )
}

export default FAQ