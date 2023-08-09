import React, { useEffect, useRef, useState } from 'react';

const CommingSoon = () => {

    const [timerDays, setTimerDays] = useState('00')
    const [timerHours, setTimerHours] = useState('00')
    const [timerMinutes, setTimerMinutes] = useState('00')
    const [timerSeconds, setTimerSeconds] = useState('00')

    let interval = useRef();

    const StartTimer = () => {

        const countdownDate = new Date('Aug 30, 2023 00:00:00').getTime();
        interval = setInterval(() => {

            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                //Stop Timer
                clearInterval(interval.current);
            } else {
                //Set Timer
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        }, 1000);
    };

    useEffect(() => {
        StartTimer();
        return () => {
            clearInterval(interval.current);
        };
    });


    return (
        <div className=''>


            {/* timer start  */}
            <div class="min-w-screen min-h-screen flex items-center justify-center px-5 py-5" x-data="beer()" x-init="start()">
                <div>
                    <div className="flex gap-6 mb-6">
                        <div className='flex justify-center items-center h-full'>
                            <p className='md:text-7xl text-4xl font-thin'>C</p>
                            <div className='md:w-10 md:h-10 w-6 h-6 md:border-8 border-2 border-dashed rounded-full animate-spin mt-5 border-green-400'></div>
                            <p className='md:text-7xl text-4xl font-thin'>mming</p>
                        </div>
                        <div className='flex justify-center items-center h-full'>
                            <p className='md:text-7xl text-4xl font-thin'>S</p>
                            <div className='md:w-10 md:h-10 w-6 h-6 md:border-8 border-2 border-dashed rounded-full animate-spin mt-5 border-green-400'></div>
                            <div className='md:w-10 md:h-10 w-6 h-6 md:border-8 border-2 border-dashed rounded-full animate-spin mt-5 border-green-400'></div>
                            <p className='md:text-7xl text-4xl font-thin'>n</p>
                        </div>
                    </div>
                    <div class="text-6xl text-center md:flex w-full items-center justify-center">
                        <div class="text-2xl mr-1 font-extralight">in</div>
                        <div class="w-24 mx-auto p-5 md:p-2 md:mb-0 mb-5 bg-white text-designColor rounded-lg">
                            <div class="font-mono leading-none" x-text="days">{timerDays}</div>
                            <div class="font-mono uppercase text-sm leading-none">Days</div>
                        </div>
                        <div class="w-24 mx-auto md:mb-0 mb-5 p-5 md:p-2 bg-white text-designColor rounded-lg">
                            <div class="font-mono leading-none" x-text="hours">{timerHours}</div>
                            <div class="font-mono uppercase text-sm leading-none">Hours</div>
                        </div>
                        <div class="w-24 mx-auto md:mb-0 mb-5 p-5 md:p-2 bg-white text-designColor rounded-lg">
                            <div class="font-mono leading-none" x-text="minutes">{timerMinutes}</div>
                            <div class="font-mono uppercase text-sm leading-none">Minutes</div>
                        </div>
                        <div class="text-2xl mx-auto md:mb-0 mb-5 font-extralight">and</div>
                        <div class="w-24 mx-auto md:mb-0 mb-5 p-5 md:p-2 bg-white text-designColor rounded-lg">
                            <div class="font-mono leading-none" x-text="seconds">{timerSeconds}</div>
                            <div class="font-mono uppercase text-sm leading-none">Seconds</div>
                        </div>
                    </div>
                </div>
            </div>
            {/* timer end  */}
        </div>
    );
};

export default CommingSoon;