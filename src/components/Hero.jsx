"use client"
import { FEATURES_DATA } from '@/utils/helper'
import Icons from './common/Icons'
import Image from 'next/image'
import { IMAGES } from '@/utils/helper'
import React, { useEffect, useState } from "react";

const Hero = () => {

    const [timeLeft, setTimeLeft] = useState(0);

    useEffect(() => {
        const targetDate = new Date().getTime() + (
            (12 * 60 * 60) +
            (44 * 60) +
            28
        ) * 1000;

        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance <= 0) {
                clearInterval(timer);
                setTimeLeft(0);
                return;
            }

            setTimeLeft(distance);
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const hours = Math.floor(
        (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (timeLeft % (1000 * 60 * 60)) / (1000 * 60)
    );

    const seconds = Math.floor(
        (timeLeft % (1000 * 60)) / 1000
    );

    const format = (value) => String(value).padStart(2, "0");
    return (
        <>
            <div className='pt-16 px-4 sm:pt-20 lg:pt-[95.1px]'>

                {/* Ellipse — hidden on mobile to avoid overflow */}
                <div className='absolute left-0 z-60 md:block hidden pointer-events-none top-0'>
                    <Icons icon={'elipsone'} />
                </div>
                <div className='absolute md:block hidden pointer-events-none right-0 lg:block
                 data-aos="fade-left"
                data-aos-duration="1200'>
                    <Icons icon={'elipstwo'} />
                </div>

                {/* Banner pill */}
                <div className="
                max-w-[434.1px] mx-auto h-7.5 w-full mt-8.25 uppercase bg-[linear-gradient(90deg,#4020C1_0%,#8432D6_100%)] text-yellow rounded-[22px] flex justify-center items-center text-xs inter sm:text-sm inter px-3 text-center">
                    Buy, Hold, and Play for 125% Yearly Gain
                </div>

                {/* Hero heading */}
                <h1 className='text-yellow text-3xl sm:text-4xl lg:text-custom-5xl font-[glo-Heavy] leading-110 uppercase max-w-[1050.1px] text-center mt-7 w-full mx-auto px-4 sm:px-6 lg:px-0'>
                    Earn Gains by holding PepeHunt Token in
                    <samp className='text-dark-yellow font-[glo-Heavy]'> The First Live-Streamed Frog Chaos</samp>
                </h1>

                <div className='min-[1200.1px]:hidden flex flex-col w-full lg:w-auto items-center'>
                    <div className='p-px bg-[linear-gradient(90deg,#4020C1_0%,#8432D6_100%)] flex justify-center mt-4 w-fit rounded-2xl h-fit relative'>
                        <div className='w-[183.1px] h-[33.1px] rounded-3xl bg-dark-yellow absolute -mt-4 flex items-center justify-center'>
                            <a className='text-light-blue leading-110 text-sm inter font-bold'>1 $hPEPE = 0.009 USD</a>
                        </div>
                        <div className="bg-[url(/assets/png/Card.png)] text-center px-4 rounded-2xl sm:px-7 bg-cover bg-no-repeat bg-center w-full max-w-[509.1px] ">
                            <h3 className='uppercase font-black text-yellow text-xl inter leading-110 pt-8'>Early Frogs Catch The Gains</h3>
                            <p className='mt-2.5 text-dark-yellow text-base inter leading-180'>Get in on the ground floor for a 20x gain on launch.</p>
                            <p className='text-yellow max-w-[449.1px] text-sm inter leading-144 mt-5'>You'll be directed to a secure checkout page where you can finalize your purchase using a variety of major cryptocurrencies.</p>

                            {/* Progress bar */}
                            <div className='flex mt-6 flex-row w-full max-w-108 justify-between items-center flex-wrap gap-2'>
                                <div className='bg-white rounded-[63px] w-full h-4 max-w-[243.1px]'>
                                    <div className='h-4 rounded-[63px] w-[130.1px] bg-light-blue'></div>
                                </div>
                                <p className='text-yellow font-black text-sm inter leading-110 uppercase'>USD RAISED: <span className='text-greenry'>$5,318,343</span></p>
                            </div>

                            {/* Input fields */}
                            <div className='flex flex-col sm:flex-row w-full mt-7.5 justify-between gap-2.5 relative'>
                                <div className='max-w-full sm:max-w-[228.1px] w-full'>
                                    <p className='leading-100 text-start ml-2 mb-1.25 text-xs inter font-medium text-yellow'>
                                        USD You Pay
                                    </p>

                                    <div className='items-center w-full p-3 h-[65.1px] rounded-[10px] bg-white flex flex-row justify-between'>
                                        <input
                                            type='text'
                                            placeholder='100'
                                            className='text-gray text-base inter leading-100 tracking-[-2%] font-semibold bg-transparent outline-none w-full placeholder:text-gray'
                                        />

                                        <div className='w-15 flex flex-row gap-2 mr-8'>
                                            <Image
                                                src={'/assets/png/usflag.png'}
                                                width={24}
                                                height={24}
                                                alt='flag'
                                            />

                                            <p className='text-base inter text-dark'>USD</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Equal icon — repositioned for flex-col on mobile */}
                                <div className='hidden sm:flex absolute translate-x-[463%] translate-y-[64%]'>
                                    <Icons icon={'equal'} />
                                </div>

                                <div className='max-w-full sm:max-w-[228.1px] w-full'>
                                    <p className='leading-100 text-start ml-2 mb-1.25 text-xs inter font-medium text-yellow'>
                                        $hPepe You Get
                                    </p>

                                    <div className='items-center w-full p-3 h-[65.1px] rounded-[10px] bg-white flex flex-row justify-between'>
                                        <input
                                            type='text'
                                            placeholder='11,111.11'
                                            className='text-gray text-base inter ml-2.5 leading-100 tracking-[-2%] font-semibold bg-transparent outline-none w-full placeholder:text-gray'
                                        />

                                        <div className='w-20.5 flex flex-row gap-2'>
                                            <Image
                                                src={'/assets/png/coin.png'}
                                                width={24}
                                                height={24}
                                                alt='flag'
                                            />

                                            <p className='text-base inter text-dark mr-6 -ml-1'>$hPEPE</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* CTA button */}
                            <button className='group inter leading-100 font-medium bg-light-green mt-7.5 text-white justify-center cursor-pointer items-center gap-1 rounded-lg hover:text-light-green w-full max-w-[467.1px] h-14 flex flex-row hover:bg-white duration-500 active:text-white active:bg-light-green'>
                                Proceed to Checkout<Icons icon={'btnarrow'} />
                            </button>

                            <p className='text-xs inter mt-2 font-medium text-yellow'>Secure Checkout With</p>
                            <div className='flex flex-row max-w-50 w-full justify-between mx-auto mt-1'>
                                <Icons icon={'coinbase'} />
                                <span className='h-5.5 bg-white w-px'></span>
                                <p className='text-base inter font-bold leading-120 text-yellow'>Commerce</p>
                            </div>
                            <p className='leading-183 text-xs inter font-medium mt-1 text-yellow'>10+ Payment Methods Accepted:</p>
                            <div className='flex mb-4 flex-row mt-1.5 max-w-55 mx-auto gap-2.25 flex-wrap justify-center'>
                                {IMAGES.map((item, index) => (
                                    <div key={index} className='w-[36.1px] h-[38.1px] bg-yellow rounded-[5px] flex justify-center items-center'>
                                        <Image src={item.image} width={27} height={27} alt='coins' />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Whitepaper */}
                    <div className='flex flex-row items-center justify-center mt-4.5 rounded-lg border border-yellow w-50 h-12 mx-auto'>
                        <p className='text-white font-medium font-base leading-100'>Whitepaper</p>
                        <Icons icon={'page'} />
                    </div>
                </div>
                {/* Feature cards */}
                <div className='flex flex-row flex-wrap mt-8 mx-auto max-w-240 justify-center lg:justify-between w-full gap-3 lg:gap-0 px-4 sm:px-6 lg:px-0'>
                    {FEATURES_DATA.map((item, index) => {
                        return (
                            <div key={index} className='flex flex-row flex-wrap'>
                                <div className='rounded-[10px] w-fit bg-[linear-gradient(90deg,#4020C1_0%,#8432D6_100%)] p-px'>
                                    <div className='rounded-[10px] gap-3 items-center flex flex-row max-w-75 w-full py-2.5 px-1.75 h-25 bg-dark'>
                                        <div className='p-2'>
                                            <Icons icon={item.icon} />
                                        </div>
                                        <div className=''>
                                            <h3 className='text-xs inter font- text-yellow leading-130'>{item.title}</h3>
                                            <p className='text-xs inter mt-1.25 text-yellow/80 leading-130'>{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Hero image + presale card */}
                <div className='flex flex-col min-[1200.1px]:flex-row justify-between items-center min-[1200.1px]:items-start mx-auto mt-10 lg:mt-13.5 max-w-285 w-full gap-8 lg:gap-0 px-4 sm:px-6 lg:px-0'>

                    {/* Hero image */}
                    <Image
                        src={'/assets/png/hero.png'}
                        width={608}
                        height={734}
                        alt='hero'
                        className='w-full max-w-xs sm:max-w-sm lg:w-[608.1px] lg:max-w-none h-auto'
                    />

                    {/* Presale card */}
                    <div className='min-[1200.1px]:flex hidden flex-col w-full lg:w-auto items-center'>
                        <div className='p-px bg-[linear-gradient(90deg,#4020C1_0%,#8432D6_100%)] flex justify-center mt-4 w-auto rounded-2xl h-fit relative'>
                            <div className='w-[183.1px] h-[33.1px] rounded-3xl bg-dark-yellow absolute -mt-4 flex items-center justify-center'>
                                <a className='text-light-blue leading-110 text-sm inter font-bold'>1 $hPEPE = 0.009 USD</a>
                            </div>
                            <div className="bg-[url(/assets/png/Card.png)] text-center px-4 sm:px-5 rounded-2xl bg-cover bg-no-repeat bg-center w-full max-w-[509.1px] min-h-[530.1px]">
                                <h3 className='uppercase font-black text-yellow text-xl inter leading-110 pt-8'>Early Frogs Catch The Gains</h3>
                                <p className='mt-2.5 text-dark-yellow text-base inter leading-180'>Get in on the ground floor for a 20x gain on launch.</p>
                                <p className='text-yellow max-w-[449.1px] text-sm inter leading-144 mt-5'>You'll be directed to a secure checkout page where you can finalize your purchase using a variety of major cryptocurrencies.</p>

                                {/* Progress bar */}
                                <div className='flex mt-6 flex-row w-full max-w-108 cursor-pointer justify-between items-center flex-wrap gap-2'>
                                    <div className='bg-white rounded-[63px] w-full h-4 max-w-[243.1px]'>
                                        <div className='h-4 rounded-[63px] w-[130.1px] bg-light-blue'></div>
                                    </div>
                                    <p className='text-yellow font-black text-sm inter leading-110 uppercase'>USD RAISED: <span className='text-greenry'>$5,318,343</span></p>
                                </div>

                                {/* Input fields */}
                                <div className='flex flex-col sm:flex-row w-full mt-7.5 justify-between gap-2.5 relative'>
                                    <div className='max-w-full sm:max-w-[228.1px] w-full'>
                                        <p className='leading-100 text-start ml-2 mb-1.25 text-xs inter font-medium text-yellow'>
                                            USD You Pay
                                        </p>

                                        <div className='items-center w-full p-3 h-[65.1px] rounded-[10px] bg-white flex flex-row justify-between'>
                                            <input
                                                type='text'
                                                placeholder='100'
                                                className='text-gray text-base inter leading-100 tracking-[-2%] font-semibold bg-transparent outline-none w-full placeholder:text-gray'
                                            />

                                            <div className='w-15 flex flex-row gap-2 mr-8'>
                                                <Image
                                                    src={'/assets/png/usflag.png'}
                                                    width={24}
                                                    height={24}
                                                    alt='flag'
                                                />

                                                <p className='text-base inter text-dark'>USD</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='hidden sm:flex absolute w-11 cursor-pointer h-11 bg-[linear-gradient(90deg,#4020C1_0%,#8432D6_100%)] items-center justify-center rounded-full translate-x-[481%] translate-y-[64%]'>
                                        <Icons icon={'equalicon'} />
                                    </div>
                                    <div className='max-w-full sm:max-w-[228.1px] w-full'>
                                        <p className='leading-100 text-start ml-2 mb-1.25 text-xs inter font-medium text-yellow'>
                                            $hPepe You Get
                                        </p>

                                        <div className='items-center w-full p-3 h-[65.1px] rounded-[10px] bg-white flex flex-row justify-between'>
                                            <input
                                                type='text'
                                                placeholder='11,111.11'
                                                className='text-gray text-base inter ml-2.5 leading-100 tracking-[-2%] font-semibold bg-transparent outline-none w-full placeholder:text-gray'
                                            />

                                            <div className='w-20.5 flex flex-row gap-2'>
                                                <Image
                                                    src={'/assets/png/coin.png'}
                                                    width={24}
                                                    height={24}
                                                    alt='flag'
                                                />

                                                <p className='text-base inter text-dark mr-6 -ml-1'>$hPEPE</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* CTA button */}
                                <button className='group inter leading-100 font-medium bg-light-green mt-7.5 mr-0.5 text-white justify-center cursor-pointer items-center gap-1 rounded-lg hover:text-light-green w-[467.1px]  h-14 flex flex-row hover:bg-white duration-500 active:text-white active:bg-light-green'>
                                    Proceed to Checkout<Icons icon={'btnarrow'} />
                                </button>

                                <p className='text-xs inter mt-2 font-medium text-yellow'>Secure Checkout With</p>
                                <div className='flex flex-row max-w-50 w-full justify-between mx-auto mt-1'>
                                    <Icons icon={'coinbase'} />
                                    <span className='h-5.5 bg-white w-px'></span>
                                    <p className='text-base inter font-bold leading-120 text-yellow'>Commerce</p>
                                </div>
                                <p className='leading-183 text-xs inter font-medium mt-1 text-yellow'>10+ Payment Methods Accepted:</p>
                                <div className='flex flex-row mt-1.25 cursor-pointer max-w-55 mx-auto gap-2.25 flex-wrap justify-center'>
                                    {IMAGES.map((item, index) => (
                                        <div key={index} className='w-[36.1px] h-[38.1px] bg-yellow rounded-[5px] flex justify-center items-center'>
                                            <Image src={item.image} width={27} height={27} alt='coins' className='w-6 h-6' />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Whitepaper */}
                        <div className='flex flex-row items-center justify-center cursor-pointer mt-4.5 rounded-lg border border-yellow w-50 h-12 mx-auto'>
                            <p className='text-white font-medium font-base mr-3.5 leading-100'>Whitepaper</p>
                            <Icons icon={'page'} />
                        </div>
                    </div>
                </div>

                {/* Countdown banner */}

            </div>
            <div className='bg-[linear-gradient(90deg,#4020C1_0%,#8432D6_100%)] py-8.75 w-full min-h-[234.1px] mx-auto mt-8 lg:mt-0'>
                <div className='max-w-360 mx-auto'>
                    <h2 className='text-yellow text-xl inter sm:text-2xl inter font-extrabold leading-110 uppercase text-center'>
                        Hurry! next price increase
                    </h2>

                    <div className='text-center max-w-[300.1px] flex flex-row justify-between mx-auto mt-7.25'>
                        <span className='font-light text-sm inter leading-100 text-yellow'>
                            Hours
                        </span>

                        <span className='font-light text-sm inter leading-100 text-yellow'>
                            Minutes
                        </span>

                        <span className='font-light text-sm inter leading-100 text-yellow'>
                            Seconds
                        </span>
                    </div>

                    <p className='font-light text-5xl sm:text-custom-7xl font-[glo-Heavy] text-center max-w-[348.1px] w-full mx-auto leading-100 mt-3 text-yellow'>
                        {format(hours)} : {format(minutes)} : {format(seconds)}
                    </p>
                </div>
            </div>
        </>
    )
}

export default Hero

