<template>
    <section class=" w-full relative">
        <div class=" w-full relative z-10 flex flex-col items-center max-w-[78.75rem] mx-auto px-4 xl:px-0">
            <div>
                <img src="/assets/hero.png" class=" w-full h-full" alt="">
            </div>
             <div class=" flex flex-col items-center  lg:grid grid-cols-1 lg:grid-cols-2 gap-10 lg:-mt-36">
                    <div class="    max-w-[38.5625rem] w-full border-gradient-right rounded-3xl p-px  overflow-hidden relative">
                        <div class="  w-full h-full bg-[#1F100A]  rounded-3xl p-5 flex flex-col items-center justify-between pb-14 ">
                            <div>
                                <img src="/assets/book.svg" alt="">
                            </div>
                        <div class=" flex flex-col items-center space-y-4 -mt-10">
                            <h1 class=" max-w-[24rem] text-[#FFE0C3] text-center titleShadow text-[1.5rem] md:text-[2.5rem] leading-[115%] font-normal">{{$t('ai_powerd')}}</h1>
                            <p class=" text-center max-w-[31.4375rem] font-quantico text-[#FFE0C3] text-[1rem] md:text-[1.125rem] leading-normal font-normal">
                                {{$t('story_build')}}
                            </p>
                           
                        </div>
                         <div class="  flex items-center flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-10">
                                
                                <button class=" relative textShadow pt-4 hover:scale-110 duration-200 hover:text-yellow-400   w-[16.4375rem]   h-[4.75rem] text-[1rem] md:text-[1.30156rem] text-white text-center font-normal">
                                
                                    <span class=" z-10 relative"> {{$t('generate_story')}}</span>
                                    <img src="/assets/redbtn.svg" class=" absolute  w-full h-full  top-0 left-0" alt="">
                                </button>
                                <button class=" relative textShadow pt-4 hover:scale-110 duration-200 hover:text-yellow-400   w-[11.97544rem]  h-[4.75rem] text-[1rem] md:text-[1.30156rem] text-white text-center font-normal">
                                    <span class=" z-10 relative "> {{$t('read_more')}}</span>
                                    <img src="/assets/yelllowbtn.svg" class=" absolute w-full h-full   top-0 left-0" alt="">
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="    max-w-[38.5625rem] w-full border-gradient-left rounded-3xl p-px  overflow-hidden relative">
                        <div class="  w-full h-full bg-[#1F100A]  rounded-3xl p-5 flex flex-col items-center justify-between pb-14 ">
                            <div>
                                <img src="/assets/caps.svg" alt="">
                            </div>
                        <div class=" flex flex-col items-center space-y-4 -mt-10">
                            <h1 class=" max-w-[16rem] text-[#FFE0C3] text-center titleShadow text-[2.5rem] leading-[115%] font-normal">{{$t('creation_tool')}}</h1>
                            <p class=" text-center max-w-[31.4375rem] font-quantico text-[#FFE0C3] text-[1.125rem] leading-normal font-normal">
                               {{$t('quest_fantasy_creation')}} ....
                            </p>
                           
                        </div>
                         <div class="flex items-center flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-10">
                                
                                <button class=" relative textShadow pt-4 hover:scale-110 duration-200 hover:text-yellow-400   w-[16.4375rem]   h-[4.75rem] text-[1rem] md:text-[1.30156rem] text-white text-center font-normal">
                                
                                    <span class=" z-10 relative"> {{$t('quest_creation')}}</span>
                                    <img src="/assets/redbtn.svg" class=" absolute  w-full h-full  top-0 left-0" alt="">
                                </button>
                                <button class=" relative textShadow pt-4 hover:scale-110 duration-200 hover:text-yellow-400   w-[11.97544rem]  h-[4.75rem] text-[1rem] md:text-[1.30156rem] text-white text-center font-normal">
                                    <span class=" z-10 relative "> {{$t('read_more')}}</span>
                                    <img src="/assets/yelllowbtn.svg" class=" absolute w-full h-full   top-0 left-0" alt="">
                                </button>
                        </div>
                        </div>
                    </div>
                      <div class=" lg:col-span-2    w-full border-gradient-top rounded-3xl p-px  overflow-hidden relative">
                        <div class="  w-full h-full bg-[#1F100A]  rounded-3xl p-5 flex flex-col items-center justify-between pb-14 ">
                            <div>
                                <img src="/assets/mmobook.svg" alt="">
                            </div>
                        <div class=" flex flex-col items-center space-y-4 -mt-10">
                            <h1 class=" max-w-[16rem] text-[#FFE0C3] text-center titleShadow text-[2.5rem] leading-[115%] font-normal">{{$t('gameplay')}}</h1>
                            <p class=" text-center font-quantico max-w-[56.8125rem] text-[#FFE0C3] text-[1.125rem] leading-normal font-normal">
                                {{$t('gameplay_offre')}}
                            </p>
                           
                        </div>
                         <div class="  flex flex-wrap items-center justify-center  gap-4 pt-10">
                                
                                <button class=" relative textShadow  hover:scale-110 duration-200 hover:text-yellow-400    h-[3.68819rem] w-[12.25063rem]   text-[1rem] md:text-[1.30156rem] text-white text-center font-normal">
                                   <div class=" m-auto">
                                     <span class=" z-10 relative"> {{$t('MMORPG')}}</span>
                                   </div>
                                    <img src="/assets/woodbtn.svg" class=" absolute  w-full h-full  top-0 left-0" alt="">
                                </button>
                                 <button class=" relative textShadow  hover:scale-110 duration-200 hover:text-yellow-400    h-[3.68819rem] w-[13.62569rem]   text-[1rem] md:text-[1.30156rem] text-white text-center font-normal">
                                   <div class=" m-auto">
                                     <span class=" z-10 relative"> {{$t('tactical_combat')}}</span>
                                   </div>
                                    <img src="/assets/woodbtn.svg" class=" absolute  w-full h-full  top-0 left-0" alt="">
                                </button>
                                 <button class=" relative textShadow  hover:scale-110 duration-200 hover:text-yellow-400    h-[3.68819rem] w-[12.25063rem]   text-[1rem] md:text-[1.30156rem] text-white text-center font-normal">
                                   <div class=" m-auto">
                                     <span class=" z-10 relative"> {{$t('exploration')}}</span>
                                   </div>
                                    <img src="/assets/woodbtn.svg" class=" absolute  w-full h-full  top-0 left-0" alt="">
                                </button>
                                <button class=" relative textShadow  hover:scale-110 duration-200 hover:text-yellow-400    h-[3.68819rem] w-[12.25063rem]   text-[1rem] md:text-[1.30156rem] text-white text-center font-normal">
                                   <div class=" m-auto">
                                     <span class=" z-10 relative"> {{$t('rewards')}}</span>
                                   </div>
                                    <img src="/assets/woodbtn.svg" class=" absolute  w-full h-full  top-0 left-0" alt="">
                                </button>
                                 
                              
                        </div>
                        </div>
                    </div>
             </div>
        </div>

        <div class=" w-full bg-[#180C07] h-[25.3125rem] absolute left-0 top-72 hidden lg:block"></div>
       
    </section>
</template>


<style scoped>
 .border-gradient-right {
    background: linear-gradient(to right, #EB6A21, #260E04);
  }
   .border-gradient-left {
    background: linear-gradient(to left, #EB6A21, #260E04);
  }
    .border-gradient-top {
    background: linear-gradient(to top, #EB6A21, #260E04);
  }
</style>