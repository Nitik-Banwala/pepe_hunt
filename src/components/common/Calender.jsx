"use client"
import React, { useState } from 'react'
import Icons from './Icons'

const Calender = () => {
    const [betValue, setBetValue] = useState(75000)

    const min = 100
    const max = 150000

    const pct = ((betValue - min) / (max - min)) * 100
    const burned = Math.round(betValue * 2.667)
    const impact = ((burned / 100000) * 61.155).toFixed(2)

    const sliderBg = `linear-gradient(to right, #4020C1  , #8432D6 ${pct.toFixed(1)}%, #ffffff ${pct.toFixed(1)}%)`

    return (
        <div className='p-px w-full lg:w-fit h-auto bg-[linear-gradient(90deg,#4020C1_0%,#8432D6_100%)] rounded-2xl'>
            <div className='rounded-2xl pt-8 sm:pt-10 lg:pt-12 px-4 sm:px-6 lg:px-9 pb-12 sm:pb-16 lg:pb-22.5 bg-dark w-full lg:w-[550.1px] mx-auto'>

                {/* Label */}
                <p className='text-lg inter sm:text-xl inter lg:text-2xl inter font-black tracking-widest text-white uppercase mb-6'>
                    Bet volume (USD)
                </p>

                {/* Slider */}
                <input
                    type='range'
                    min={min}
                    max={max}
                    step={100}
                    value={betValue}
                    onChange={(e) => setBetValue(parseInt(e.target.value))}
                    className='w-full h-1.5 rounded-full outline-none cursor-pointer appearance-none'
                    style={{ background: sliderBg }}
                />

                {/* Range Labels */}
                <div className='flex justify-between mb-6 max-w-full sm:max-w-[318.1px] w-full mx-auto'>
                    <span className='text-sm sm:text-base poppins text-[#9299B5]'>$100</span>
                    <span className='text-sm sm:text-base poppins text-[#9299B5]'>$150,000</span>
                </div>

                {/* Tokens Burned */}
                <p className='text-lg inter sm:text-xl inter lg:text-2xl inter leading-110 font-black text-white mb-6'>
                    Tokens burned:{' '}
                    <span className='font-normal'>{burned.toLocaleString()} $hPEPE</span>
                </p>

                {/* Price Impact */}
                <div className='flex items-center gap-2 mb-8 sm:mb-10 lg:mb-12 flex-wrap'>
                    <span className='text-xs inter sm:text-[13px] font-medium text-white'>
                        Potential New Price Impact:
                    </span>
                    <span className='flex items-center gap-1 text-xs inter sm:text-[13px] font-bold text-greenry'>
                        <span className='inline-block w-0 h-0' />
                        <Icons icon={'arrow'} />
                        +{impact}%
                    </span>
                </div>

                <div className='border border-[#2d2060] rounded-[10px] py-5 sm:py-6 px-3 sm:px-4'>
                    <p className='text-sm inter sm:text-base inter font-bold text-white tracking-widest uppercase mb-2.5'>
                        How it works:
                    </p>
                    <ol className='list-decimal pl-[18.1px]'>
                        <li className='text-sm inter sm:text-base inter text-white font-normal leading-166'>
                            A portion of betting volume is used to buy back tokens.
                        </li>
                        <li className='text-sm inter sm:text-base inter text-white font-normal leading-166'>
                            Those tokens are immediately burned
                        </li>
                        <li className='text-sm inter sm:text-base inter text-white font-normal leading-166'>
                            Reduced supply can lead to potential price appreciation
                        </li>
                    </ol>
                </div>

                {/* Slider thumb styles */}
                <style jsx>{`
                    input[type='range']::-webkit-slider-thumb {
                        -webkit-appearance: none;
                        width: 20px;
                        height: 20px;
                        border-radius: 50%;
                        background: #7c3aed;
                        border: 5px solid #fff;
                        cursor: pointer;
                    }
                    input[type='range']::-moz-range-thumb {
                        width: 20px;
                        height: 20px;
                        border-radius: 50%;
                        background: #7c3aed;
                        border: 5px solid #fff;
                        cursor: pointer;
                    }
                `}</style>
            </div>
        </div>
    )
}

export default Calender