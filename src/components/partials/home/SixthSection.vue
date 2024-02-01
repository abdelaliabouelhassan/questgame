<template>
    <section class=" w-full relative">
        <div class=" w-full relative z-10 px-4 xl:px-0 py-10 max-w-[55.5625rem] mx-auto flex flex-col items-center space-y-5">
            <h1 class=" text-[#EB6A21] titleShadow text-[1.5rem] sm:text-[2rem] font-normal text-center  leading-normal">{{$t('roadmap')}}</h1>
            <span class=" text-[#FFE0C3] text-center titleShadow text-[2.5rem] sm:text-[3rem] md:text-[4.5rem] font-normal leading-[140.278%]">{{$t('further_details')}}</span>
            <p class=" text-[#FFE0C3] text-center font-quantico font-normal leading-normal text-base sm:text-lg">
                {{$t('inspiré')}}
            </p>
            <div class=" pt-4">
                  <button class=" relative textShadow pt-4 hover:scale-110 duration-200 hover:text-yellow-400    w-[23.3125rem] h-[6rem] md:h-[7.375rem] text-[1rem] md:text-[1.75rem] text-white text-center font-normal"> 
                            <span class=" z-10 relative"> {{$t('game_details')}}</span>
                            <img src="/assets/redbtn.svg" class=" absolute  w-full h-full  top-0 left-0" alt="">
                 </button>
            </div>
        </div>
          <div class=" absolute -bottom-20 left-0 rotate-[220deg]">
                <img src="/assets/lighting.png" alt="">
            </div>
             <div class=" absolute bottom-72 sm:block  right-0  hidden ">
                <img src="/assets/lighting.png" alt="">
            </div>
    </section>
</template>