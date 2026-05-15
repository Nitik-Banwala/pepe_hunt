"use client";

import React, { useEffect, useState } from "react";

const Clock = () => {
    const [timeLeft, setTimeLeft] = useState(0);

    useEffect(() => {
        const targetDate = new Date().getTime() + (
            (8 * 24 * 60 * 60) +
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

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
        (timeLeft % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    const format = (value) => String(value).padStart(2, "0");

    return (
        <span className='font-[glo-Heavy] sm:text-custom-6xl text-4xl mt-3 sm:mt-1 text-white leading-100'>
            {format(days)} : {format(hours)} : {format(minutes)} : {format(seconds)}
        </span>
    );
};

export default Clock;