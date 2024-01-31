<template>
    <section class=" w-full relative">
        <div class=" max-w-[1121px] mx-auto flex flex-col items-center space-y-10 py-20 md:py-32 px-4 xl:px-0">
            <div class=" flex flex-col items-center space-y-5">
                <h1 class=" text-[#EB6A21] titleShadow text-[1.5rem] md:text-[2rem] font-normal text-center leading-normal">{{$t('welcome_to')}}</h1>
                <h2 class=" text-center text-[#FFE0C3] titleShadow font-normal text-[3rem] md:text-[4.5rem] leading-normal">{{$t('quest_fantasy')}}</h2>
                <p class=" text-center font-quantico font-normal text-[#FFE0C3]  text-base md:text-lg leading-normal max-w-[53.8125rem]">
                    {{$t('captivating_pg')}}
                </p>
            </div>

            <div class="  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                <div class=" w-[21.35581rem] h-[24.03775rem] relative">
                    <img src="/assets/board.png" alt="">
                    <div class=" w-full absolute pt-12 h-full left-0 top-0 b flex flex-col items-center -space-y-14 ">
                        <div class=" ">
                            <img src="/assets/book.svg" class=" w-full h-full object-cover" alt="">
                        </div>
                       <div>
                          <h1 class=" max-w-[17rem] text-[#FFE0C3] text-center text-[2.5rem] font-normal leading-[115%] titleShadow">{{$t('ai_powerd')}}</h1>
                       </div>
                       <div class=" absolute -bottom-5">
                          <button class=" relative  textShadow pt-4 hover:scale-110 duration-200 hover:text-yellow-400  w-[15.93731rem] h-[6.32213rem] text-[1rem] md:text-[1.75rem] text-white text-center font-normal">
                             <span class=" z-10 relative"> {{$t('play_now')}}</span>
                            <img src="/assets/yelllowbtn.svg" class=" absolute w-full h-full   top-0 left-0" alt="">
                        </button>
                       </div>
                    </div>
                </div>
                  <div class=" w-[21.35581rem] h-[24.03775rem] relative">
                    <img src="/assets/board.png" alt="">
                    <div class=" w-full absolute pt-12 h-full left-0 top-0 b flex flex-col items-center -space-y-14 ">
                        <div class=" ">
                            <img src="/assets/caps.svg" class=" w-full h-full object-cover" alt="">
                        </div>
                       <div>
                          <h1 class=" max-w-[17rem] text-[#FFE0C3] text-center text-[2.5rem] font-normal leading-[115%] titleShadow">{{$t('creation_tool')}}</h1>
                       </div>
                       <div class=" absolute -bottom-5">
                          <button class=" relative  textShadow pt-4 hover:scale-110 duration-200 hover:text-yellow-400  w-[15.93731rem] h-[6.32213rem] text-[1rem] md:text-[1.75rem] text-white text-center font-normal">
                             <span class=" z-10 relative"> {{$t('play_now')}}</span>
                            <img src="/assets/yelllowbtn.svg" class=" absolute w-full h-full   top-0 left-0" alt="">
                        </button>
                       </div>
                    </div>
                </div>
                  <div class=" w-[21.35581rem] h-[24.03775rem] relative">
                    <img src="/assets/board.png" alt="">
                    <div class=" w-full absolute pt-12 h-full left-0 top-0 b flex flex-col items-center -space-y-14 ">
                        <div class=" ">
                            <img src="/assets/mmobook.svg" class=" w-full h-full object-cover" alt="">
                        </div>
                       <div>
                          <h1 class=" max-w-[17rem] text-[#FFE0C3] text-center text-[2.5rem] font-normal leading-[115%] titleShadow">{{$t('mmorpg_gameplay')}}</h1>
                       </div>
                       <div class=" absolute -bottom-5">
                          <button class=" relative  textShadow pt-4 hover:scale-110 duration-200 hover:text-yellow-400  w-[15.93731rem] h-[6.32213rem] text-[1rem] md:text-[1.75rem] text-white text-center font-normal">
                             <span class=" z-10 relative"> {{$t('play_now')}}</span>
                            <img src="/assets/yelllowbtn.svg" class=" absolute w-full h-full   top-0 left-0" alt="">
                        </button>
                       </div>
                    </div>
                </div>
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