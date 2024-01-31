<template>
    <section class=" w-full h-full">
        <div class=" w-full h-screen ">
            <img src="/images/home/background.svg" class=" w-full h-full object-cover" alt="">
            <div class=" w-full absolute z-10    flex flex-col items-center  bottom-0 " style="height: calc(100vh - 240px);">
               <div class="  flex flex-col items-center -space-y-20 md:-space-y-48 ">
                 <div class=" w-full max-w-[26rem]  md:max-w-[37.875rem]   md:h-[31.5rem]">
                    <img src="/images/home/finalnoback.svg" class=" w-full object-cover h-full" alt="">
                </div>
                <div class=" flex w-full flex-col items-center max-w-[65rem] space-y-7">
                    <h1 class=" text-[#FFE0C3] text-center text-[2rem] sm:text-[4rem] md:text-[6rem] font-normal leading-[114.583%] titleShadow">{{$t('story')}} <span class=" text-[#FFD601]">{{$t('hero')}}</span></h1>
                    <div class="  flex items-center sm:flex-row flex-row space-y-0 sm:space-y-0 sm:space-x-4">
                        <button class=" relative textShadow pt-4 hover:scale-110 duration-200 hover:text-yellow-400  w-[10rem] h-[5rem] sm:w-[15.93731rem] sm:h-[6.32213rem] text-[1rem] md:text-[1.75rem] text-white text-center font-normal">
                             <span class=" z-10 relative"> {{$t('play_now')}}</span>
                            <img src="/assets/yelllowbtn.svg" class=" absolute w-full h-full   top-0 left-0" alt="">
                        </button>
                         <button class=" relative textShadow pt-4 hover:scale-110 duration-200 hover:text-yellow-400  w-[10rem] h-[5rem]  sm:w-[20.00344rem] sm:h-[6.32213rem] text-[1rem] md:text-[1.75rem] text-white text-center font-normal">
                           
                            <span class=" z-10 relative"> {{$t('join_discord')}}</span>
                            <img src="/assets/redbtn.svg" class=" absolute  w-full h-full  top-0 left-0" alt="">
                        </button>
                    </div>
                </div>
               </div>
            </div>
            <div class=" absolute w-full bottom-0 left-0">
                <img src="/assets/fog.svg" class=" w-full h-full" alt="">
            </div>

            <div class=" absolute bottom-0 left-0 rotate-[220deg]">
                <img src="/assets/lighting.png" alt="">
            </div>
             <div class=" absolute bottom-72 right-0 sm:block hidden ">
                <img src="/assets/lighting.png" alt="">
            </div>
        </div>
    </section>
</template>