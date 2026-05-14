import React from 'react'
import { ROADMAP_DATA } from '@/utils/helper'
import Icons from './common/Icons'


const Roadmap = () => {
    return (
        <section className='bg-[#16003D] pt-[268.1px] pb-[92.1px] px-4 overflow-hidden'>
             <div className='absolute left-0 -mt-100'>
                <Icons icon={'elipssix'} />
            </div> 
            <div className='absolute right-0 -mt-100'>
                <Icons icon={'elipsseven'} />
            </div>
            <div className='max-w-285 mx-auto w-full'>

                <h2 className='text-yellow text-center text-5xl font-[glo-Heavy] leading-100 uppercase mb-[92.1px]'>
                    OUR ROADMAP
                </h2>

                <div className='flex flex-row lg:gap-0 gap-4 flex-wrap justify-center items-center lg:justify-between'>

                    {ROADMAP_DATA.map((phase, index) => (
                        <React.Fragment key={phase.id}>

                            <div>

                                <div className=' min-[997.1px]:w-[172.1px] w-full h-[80.1px] rounded-xl border border-dashed border-white/20 bg-[linear-gradient(90deg,#4020C1_0%,#8432D6_100%)] flex items-center justify-center mb-[46.1px]'>
                                    <p className='text-yellow text-[27px] font-black leading-100 uppercase'>
                                        {phase.phase}
                                    </p>
                                </div>

                                <div className='flex items-center gap-[15.1px] mb-[34.1px] relative'>

                                    {/* Blur effect */}
                                    <span
                                        className='absolute left-0 w-2 h-[42.1px] rounded-full blur-[8.1px] opacity-70'
                                        style={{
                                            backgroundColor: phase.borderColor,
                                        }}
                                    />

                                    {/* Main border line */}
                                    <span
                                        className='w-1 h-[42.1px] rounded-full relative z-10'
                                        style={{
                                            backgroundColor: phase.borderColor,
                                        }}
                                    />

                                    <p className='text-yellow text-[26px] font-black leading-100'>
                                        {phase.label}
                                    </p>
                                </div>

                                <div className='flex flex-col gap-[19.1px]'>
                                    {phase.items.map((item, i) => (
                                        <div
                                            key={i}
                                            className='w-[311.1px] h-[63.1px] rounded-xl bg-[#2A1657] px-5 flex items-center gap-4'
                                        >
                                            {item.status === "completed" ? (
                                                <Icons icon={'checkicon'} />
                                            ) : item.status === "incomplete" ? (
                                                <Icons icon={'pendingicon'} />
                                            ) : (
                                                <Icons icon={'pending'} />
                                            )}

                                            <span className='text-yellow text-[16px] font-semibold leading-130 max-w-[270.1px]'>
                                                {item.text}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className='mt-9 min-[1280.1px]:block hidden '>
                                {index < ROADMAP_DATA.length - 1 && (
                                    <Icons icon={'connecticon'} />

                                )}
                                {index < ROADMAP_DATA.length - 1 && (
                                    <div className='w-6 -ml-1 h-6 -mt-3 rounded-full bg-[linear-gradient(90deg,#4020C1_0%,#8432D6_100%)] flex justify-center items-center '>
                                        <div className='w-2 h-2 rounded-full bg-white'></div>
                                    </div>
                                )}

                            </div>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Roadmap