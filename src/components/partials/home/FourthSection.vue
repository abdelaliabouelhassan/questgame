<template>
    <section class=" w-full relative">
        <div class=" w-full flex flex-col items-center py-40 space-y-4 max-w-[61.8125rem] mx-auto px-4 lg:px-0">
            <h1 class=" text-[#EB6A21] text-center font-normal text-[1.3rem] sm:text-[2rem] leading-normal titleShadow">{{$t('quest_fantasy_discord')}}</h1>
            <span class=" text-[#FFE0C3] text-center text-[3rem] sm:text-[4.5rem] titleShadow font-normal leading-normal">{{$t('community')}}</span>
            <p class=" text-center text-[#FFE0C3] font-normal leading-normal text-base sm:text-lg font-quantico max-w-[43.8125rem]">
                {{$t('rejoignez')}}
            </p>
            <div class=" w-full flex items-center flex-wrap gap-4 justify-center pt-10">
                <div class="border-gradient-bottom p-px rounded-lg">
                    <button class=" text-white bg-[#260E04] font-normal rounded-lg   leading-normal text-base sm:text-lg px-4 py-[0.625rem]">{{$t('annonces')}}</button>
                </div>
                <div class="border-gradient-bottom p-px rounded-lg">
                    <button class=" text-white bg-[#260E04] font-normal rounded-lg   leading-normal text-base sm:text-l px-4 py-[0.625rem]">{{$t('discussions')}}</button>
                </div>
                <div class="border-gradient-bottom p-px rounded-lg">
                    <button class=" text-white bg-[#260E04] font-normal rounded-lg   leading-normal text-base sm:text-l px-4 py-[0.625rem]">{{$t('challenges')}}</button>
                </div>
                <div class="border-gradient-bottom p-px rounded-lg">
                    <button class=" text-white bg-[#260E04] font-normal rounded-lg   leading-normal text-base sm:text-l px-4 py-[0.625rem]">{{$t('sessions')}}</button>
                </div>
                <div class="border-gradient-bottom p-px rounded-lg">
                    <button class=" text-white bg-[#260E04] font-normal rounded-lg   leading-normal text-base sm:text-l px-4 py-[0.625rem]">{{$t('partage')}}</button>
                </div>
                <div class="border-gradient-bottom p-px rounded-lg">
                    <button class=" text-white bg-[#260E04] font-normal rounded-lg   leading-normal text-base sm:text-l px-4 py-[0.625rem]">{{$t('contribution')}}</button>
                </div>
            </div>
            <div class=" pt-10">
                 <button class=" relative textShadow pt-4 hover:scale-110 duration-200 hover:text-yellow-400    w-[24.3125rem] h-[6rem] sm:h-[7.375rem] text-[1rem] sm:text-[1.75rem] text-white text-center font-normal">
                           
                            <span class=" z-10 relative">{{$t('join_our_discord')}}</span>
                            <img src="/assets/redbtn.svg" class=" absolute  w-full h-full  top-0 left-0" alt="">
                 </button>
            </div>
        </div>
         <div class=" absolute top-0 w-full">
            <div class=" max-w-[896.35px] w-full mx-auto">
                <img src="/assets/topgrids.svg" alt="">
            </div>
        </div>
         <div class=" absolute top-44 right-0 hidden md:block">
                <img src="/assets/rightgrids.svg" alt="">
        </div>
          <div class=" absolute top-44 left-0 hidden md:block">
                <img src="/assets/leftgrids.svg" alt="">
        </div>
    </section>
</template>

