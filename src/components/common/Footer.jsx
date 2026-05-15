import React from 'react'
import Link from 'next/link'
import Icons from './Icons'


const Footer = () => {
    return (
        <section className="px-5 bg-dark pt-[40.1px] sm:pt-[70.1px] md:pt-[100.1px] lg:pt-[126.1px]">
            <div className="max-w-[1141.1px] w-full mx-auto flex flex-col">
                <div className="w-full border-y border-blacky pt-[19.1px] pb-[22.1px] flex items-center justify-center sm:justify-between">
                    <div className="flex items-center gap-10">
                        <Link href="#" className="w-[30.1px] font-semibold text-base inter leading-[26.1px] text-white">
                            ToS
                        </Link>
                        <Link href="#" className="w-[109.1px] font-semibold text-base inter leading-[26.1px] text-white">
                            Privacy Policy
                        </Link>
                    </div>

                    <div className="hidden sm:flex items-center gap-5">
                        <Link
                            href="https://t.me/yourtelegramusername"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="w-11.25 h-11.25 group hover:bg-yellow duration-500 border rounded-full border-yellow flex justify-center items-center">
                                <Icons icon={"telegram"} />
                            </div>
                        </Link>

                        <Link
                            href="https://twitter.com/yourtwitterusername"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="w-11.25 group hover:bg-yellow duration-500 h-11.25 border rounded-full border-yellow flex justify-center items-center">
                                <Icons icon={"twiter"} />
                            </div>
                        </Link>
                    </div>
                </div>

                <span className="w-full text-center sm:text-left font-semibold text-base inter leading-[26.1px] text-white mt-5 mb-[23.29px]">
                    © {new Date().getFullYear()} $hPEPE. All Rights Reserved.
                </span>
            </div>
            <div className='absolute left-0  md:block hidden pointer-events-none  -mt-210'>
                <Icons icon={'elipseliven'} />
            </div>
            <div className='absolute -mt-210  md:block hidden pointer-events-none  right-0'>
                <Icons icon={'elipstwelve'} />
            </div>
        </section>
    )
}

export default Footer