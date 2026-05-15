import React from 'react'
import { TOKENOMICS_DATA } from '@/utils/helper'
import Image from 'next/image'
import Icons from './common/Icons'
function Tokenomics() {


    return (
        <div className='pt-[198.14px] bg-dark'>
            <div className='max-w-[1135.72px] mx-auto max-[1350px]:px-4 w-full'>
                <div className='flex min-[1000px]:flex-row flex-col items-center max-[1000px]:gap-6 min-[1000px]:justify-between w-full'>
                    <div className='max-[1000px]:flex max-[1000px]:flex-col max-[1000px]:items-center max-sm:w-full'>
                        <h2 className='font-normal xl:text-5xl sm:text-4xl text-3xl sm:text-nowrap max-sm:text-center leading-110 font-[glo-Heavy] tracking-normal uppercase text-yellow'>Super Simple <span className='text-dark-yellow'>tokenomics</span></h2>
                        <div className='flex flex-col sm:my-8 my-6 sm:gap-4.25 gap-4'>
                            {TOKENOMICS_DATA.map((item, inedx) => (
                                <div key={item} className='py-[23.5px] pl-[22.51px] pr-[12.7px] w-full max-w-125.25 border-[0.97px] border-yellow-200 rounded-[10px] min-w-0'>
                                    <p className='font-inter font-normal sm:text-xl inter text-xs inter leading-130 tracking-normal text-yellow'>{item}</p>
                                </div>
                            ))}
                        </div>
                        <span className='font-inter font-medium sm:text-base inter text-sm inter leading-130 tracking-normal uppercase text-yellow'>Token Contract Address</span>
                        <button className='sm:mt-4 mt-3 border border-dark-yellow rounded-lg bg-dark hover:bg-dark-yellow py-[13.5px] pr-[13.1px] pl-6 flex items-center gap-8 cursor-pointer group transition-all duration-300 ease-in  max-[450px]:min-w-0 max-[450px]:w-full max-w-[476.1px]'>
                            <span className='font-inter font-medium sm:text-sm inter text-xs inter leading-110 tracking-normal text-dark-yellow group-hover:text-dark transition-all duration-300 ease-in truncate underline'>hpepeAEtXpCVbJFaXXCGqR76fGs6Yktn6QxDEnPf7sp</span>
                            <div className='sm:w-10.5 sm:h-10.5 w-7 h-7 rounded-full flex items-center justify-center bg-dark-yellow group-hover:bg-dark transition-all duration-300 ease-in shrink-0'>
                                <Icons icon={'upper'} />
                            </div>
                        </button>
                    </div>

                    <Image src="/assets/png/insidecoin.png"
                        width={450}
                        height={498}
                        alt="tokenomics-image"
                        className='w-full h-full max-w-[450.1px] max-h-[498.1px] min-w-0' />
                </div>

            </div>
            <div className='absolute right-0 md:block hidden pointer-events-none -mt-100'>
                <Icons icon={'elipsseven'} />
            </div>
        </div>
    )
}

export default Tokenomics