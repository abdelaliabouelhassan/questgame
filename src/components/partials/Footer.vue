<template>
    <header class=" w-full relative header pt-72">
        <div class=" w-full  ">
         <div class="   z-[10] pt-28 sm:pt-20 pb-5  relative header bg-[#1B0D08]  sm:rounded-t-3xl xxs:border-t border-x-px   border-[#EB6A21]">
            <div class=" absolute -top-[85px] left-0  w-full flex">
                <div class=" m-auto relative">
                         <img src="/assets/Mask.svg" class=" rotate-180"  alt="">
                           <div class=" absolute z-10 w-full sm:w-fit flex -top-0 sm:-top-20 left-0 sm:left-14">
                        <img src="/assets/logo.svg" class=" w-[14rem] m-auto sm:m-0  sm:w-full h-full" alt="">
                    </div>
                </div>
            </div>
            

            <div class=" w-full flex flex-col items-center space-y-8 ">
                <div class=" flex items-center space-x-4 pb-5">
                   <a href="#" class=" bg-[#532E1F] rounded-[1.08981rem] w-[3.78263rem] h-[3.78263rem] flex">
                        <img src="/assets/x.svg" class=" m-auto w-[2.83694rem] h-[2.83694rem]" alt="">
                   </a>
                    <a href="#" class=" bg-[#532E1F] rounded-[1.08981rem] w-[3.78263rem] h-[3.78263rem] flex">
                        <img src="/assets/youtube.svg" class=" m-auto w-[2.83694rem] h-[2.83694rem]" alt="">
                   </a>
                    <a href="#" class=" bg-[#532E1F] rounded-[1.08981rem] w-[3.78263rem] h-[3.78263rem] flex">
                        <img src="/assets/medium.svg" class=" m-auto w-[2.83694rem] h-[2.83694rem]" alt="">
                   </a>
                </div>
                <h1 class=" text-[#F2D3B6] text-center text-[2rem] sm:text-[2.5rem] font-normal leading-normal">{{$t('contact_support')}}</h1>
                <div class=" flex flex-wrap items-center justify-center gap-5">
                     <div class="border-gradient-bottom p-px rounded-lg">
                       <button class=" text-white bg-[#260E04] font-normal rounded-lg   leading-normal text-base sm:text-lg  px-6 py-[0.625rem]">{{$t('serveur_discord')}}</button>
                    </div>
                     <div class="border-gradient-bottom p-px rounded-lg">
                       <button class=" text-white bg-[#260E04] font-normal rounded-lg   leading-normal text-base sm:text-lg  px-6 py-[0.625rem]">{{$t('un_email')}}</button>
                    </div>
                     <div class="border-gradient-bottom p-px rounded-lg">
                       <button class=" text-white bg-[#260E04] font-normal rounded-lg   leading-normal text-base sm:text-lg  px-6 py-[0.625rem]">{{$t('enrôlement')}}</button>
                    </div>
                </div>
          
            </div>

           <div class=" w-full pt-10">
             <div class=" w-full h-[0.0625rem]" style="background: linear-gradient(173deg, #EB6A21 -18.84%, #260E04 106.5%);opacity: 0.2;"></div>
             <div class=" w-full pt-5">
                <p class=" text-center text-[#F2D3B6] font-quantico font-normal leading-normal text-[1rem] sm:text-[1.3125rem]">
                    {{$t('legal')}} | <a href="#" class=" font-quantico">{{$t('terms_of_use')}}</a> | <a href="#" class=" font-quantico">{{$t('privacy_policy')}}</a>
                </p>
             </div>
           </div>
        </div>
        
        </div>


    </header>
    
</template>




<style scoped>
    .header {
        filter: drop-shadow(4px 14px 124px rgba(0, 0, 0, 0.55));
       
    }

</style>