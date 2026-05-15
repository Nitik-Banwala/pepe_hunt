import React from 'react'
import Icons from './Icons'
import Clock from './Clock'

const Timer = () => {
    return (
        <>
            <div className='bg-[linear-gradient(90deg,#4020C1_0%,#8432D6_100%)] min-[1314.1px]:justify-between justify-center items-center flex flex-row flex-wrap px-5.5 max-w-360 w-full mx-auto py-6.5 gap-6 lg:gap-0'>

                <h2 className='text-2xl inter font-extrabold leading-110 mr-2 uppercase text-yellow lg:ml-5.75 text-center  lg:text-left'>
                    Hurry! next price increase
                </h2>

                <div className='max-w-220 items-center w-full flex flex-wrap flex-col sm:flex-row min-[867.1px]:justify-between justify-center gap-6 sm:gap-4 lg:gap-0'>

                    <div className='flex flex-col text-center items-center justify-center'>
                        <div className='flex flex-row sm:w-80 w-60 justify-between ml-3'>
                            <p className='font-light leading-100 text-sm inter text-yellow'>Days</p>
                            <p className='font-light leading-100 text-sm inter text-yellow'>Hours</p>
                            <p className='font-light leading-100 text-sm inter text-yellow'>Minutes</p>
                            <p className='font-light leading-100 text-sm inter text-yellow'>Seconds</p>
                        </div>
                        <span className='font-[glo-Heavy] sm:text-custom-6xl text-4xl mt-3 sm:mt-1 text-white leading-100'>
                            <Clock/>
                        </span>
                    </div>

                    <div className='w-full sm:w-auto flex justify-center'>
                        <button className='group bg-light-green text-white justify-center cursor-pointer items-center gap-1 rounded-lg hover:text-light-green w-[467.1px] max-w-full h-14 flex flex-row hover:bg-white duration-500 active:text-white active:bg-light-green'>
                            Buy Now<Icons icon={'btnarrow'} />
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Timer