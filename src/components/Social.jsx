"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { TWEETS } from "@/utils/helper";
import Timer from "./common/Timer";
import Icons from "./common/Icons";


const Social = () => {
    return (
        <>
            <section className="overflow-hidden bg-dark pt-[159.29px] pb-[54.6px]">
                <div className='absolute left-0'>
                    <Icons icon={'elipsfour'} />
                </div>
                {/* Heading */}
                <div className="mb-12.5 text-center">
                    <h2 className="text-3xl font-normal uppercase leading-110 text-yellow md:text-[48px]">
                        SOCIAL MEDIA IS
                        <span className="text-dark-yellow"> ON FIRE!</span>
                    </h2>
                </div>

                {/* Slider */}
                <div className="">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={19.6}
                        centeredSlides={true}
                        loop={true}
                        speed={4000}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                        }}
                        slidesPerView={1.1}
                        breakpoints={{
                            640: {
                                slidesPerView: 1.5,
                            },
                            768: {
                                slidesPerView: 2.2,
                            },
                            1024: {
                                slidesPerView: 3.2,
                            },
                            1280: {
                                slidesPerView: 3.82,
                            },
                        }}
                    >
                        {TWEETS.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className="rounded-2xl flex flex-col justify-between h-129 sm:h-[558.4px] bg-[#FFFFFF1A] px-2.75 py-3.5 sm:py-4 text-white">
                                    {/* Top */}
                                    <div className="mb-5 flex flex-col items-start justify-between gap-3">
                                        <div className="flex items-start justify-between w-full">
                                            <div className="flex items-center gap-1.5">
                                                <Image
                                                    src={item.avatar}
                                                    alt="avatar"
                                                    width={51}
                                                    height={51}
                                                    className="h-12.75 w-12.75 rounded-full object-cover"
                                                />

                                                <div>
                                                    <div className="flex items-center gap-1">
                                                        <h3 className="text-base sm:text-lg leading-100 tracking-[-0.51px] text-yellow font-bold">
                                                            {item.name}
                                                        </h3>
                                                        <Icons icon={'yellow'} />

                                                    </div>

                                                    <p className="text-xs text-gray-300">{item.username}</p>
                                                </div>
                                            </div>

                                            <div className="flex items-center justify-center rounded-full bg-[#f5ff1f] w-[111.2px] h-7 text-[11px] font-bold text-black">
                                                {item.followers}
                                            </div>
                                        </div>
                                        <div className="space-y-4 mt-3.75 sm:mt-4.25">
                                            <p className="text-lg sm:text-xl leading-100 font-medium text-yellow">
                                                {item.text1}
                                                <span className="text-dark-yellow">{item.highlight}</span>
                                            </p>

                                            <p className="text-lg sm:text-xl text-yellow leading-100 font-medium">
                                                <span className="text-dark-yellow">{item.highlight2}</span>
                                                {item.text2}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Image */}
                                    <div>
                                        <div className="overflow-hidden">
                                            <Image
                                                src={item.image}
                                                alt="tweet image"
                                                width={"340"}
                                                height={"182"}
                                                className={`${item.height} w-full object-cover`}
                                            />
                                        </div>

                                        {/* Bottom */}
                                        <div className="mt-2.25 sm:mt-3.5 flex flex-col items-start justify-center">
                                            <p>{item.time}</p>
                                            <div className="w-full border-[0.48px] border-yellow mt-3 sm:mt-3.25"></div>

                                            <div className="mt-3.5 flex items-center justify-between w-full">
                                                <span className="flex items-center gap-[4.46px]">
                                                    <Icons icon={'message'} />
                                                    {item.likes}
                                                </span>
                                                <span className="flex items-center gap-[4.46px]">
                                                    <Icons icon={'reshare'} />
                                                    {item.retweets}
                                                </span>
                                                <span className="flex items-center gap-[4.46px]">
                                                    <Icons icon={'like'} />{" "}
                                                    {item.comments}
                                                </span>
                                                <span>
                                                    <Icons icon={'share'} />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
             <div className='absolute right-0 -mt-100'>
                <Icons icon={'elipsfive'} />
            </div>
            <Timer />
           
        </>
    );
};

export default Social;