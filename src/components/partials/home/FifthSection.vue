<template>
    <section class=" w-full">
        <div class=" w-full py-20 md:py-44 px-4 xl:px-0">
            <div class=" relative border-gradient-top max-w-[78.75rem] h-[19.25rem] rounded-[0.625rem] w-full pt-px pr-[0.6px] pl-[0.5px] mx-auto pb-px">
                 <div class=" relative bg-[#1F100A] rounded-[0.625rem] w-full h-full">
                    <div class="  absolute w-full h-full -top-14 sm:-top-32 md:-top-60 left-0 ">
                        <div class=" flex flex-col items-center -space-y-28">
                            <div class=" max-w-[16rem] sm:max-w-[20rem] md:max-w-[25.625rem] max-h-[25.9375rem]">
                               <img src="/assets/hero.png" class=" w-full h-full object-cover" alt="">
                            </div>
                            <h1 class=" text-center text-[#FFE0C3] text-[2rem] sm:text-[3rem] md:text-[4.5rem] leading-[152.778%] font-normal titleShadow">Experience The Fantasy</h1>
                            <div class=" pt-28">
                                 <button class=" relative textShadow pt-4 hover:scale-110 duration-200 hover:text-yellow-400  w-[10rem] h-[5rem] sm:w-[15.93731rem] sm:h-[6.32213rem] text-[1rem] md:text-[1.75rem] text-white text-center font-normal">
                                    <span class=" z-10 relative"> {{$t('play_now')}}</span>
                                    <img src="/assets/yelllowbtn.svg" class=" absolute w-full h-full   top-0 left-0" alt="">
                                </button>
                            </div>
                        </div>
                    </div>
                 </div>
                <div class=" absolute -top-28 md:-top-14 right-0 md:right-10">
                    <img src="/assets/chargreen.svg" class=" w-full h-full object-cover" alt="">
                </div>
                 <div class=" absolute -bottom-10 md:bottom-7 right-0 md:right-36">
                    <img src="/assets/chardemon.svg" class=" w-full h-full object-cover" alt="">
                </div>
                 <div class=" absolute -bottom-10 left-0 md:left-44">
                    <img src="/assets/chardemon1.svg" class=" w-full h-full object-cover" alt="">
                </div>
                <div class=" absolute -top-20 md:-top-14 xl:top-14 left-0 md:left-5 xl:left-10">
                    <img src="/assets/charlight.svg" class=" w-full h-full object-cover" alt="">
                </div>
            </div>
        </div>
    </section>
</template>
