<template>
    <header class=" w-full relative header">
        <div class=" w-full absolute left-0 top-0">
         <div class=" sm:w-[104%] z-[10] relative md:w-[102%] -ml-2 lg:-ml-3 xl:-ml-4 2xl:-ml-5 -mt-7 header bg-[#1B0D08] h-[8rem] sm:rounded-full border-b  sm:border border-[#EB6A21]">
            <div class=" w-full relative z-50 pt-11 px-4 sm:px-8 max-w-[78.9375rem] mx-auto flex items-center justify-between">
                <button>
                    <img src="/assets/menubtn.svg" class=" w-[3.5rem] sm:w-full sm:h-full" alt="">
                </button>
                <div class=" absolute flex w-full top-[123px] -left-0.5 sm:left-auto sm:top-[122px]">  
                    <div class=" m-auto relative">
                         <img src="/assets/Mask.svg"  alt="">
                           <div class=" absolute z-10 w-full sm:w-fit flex -top-0 sm:-top-20 left-0 sm:left-14">
                        <img src="/assets/logo.svg" class=" w-[14rem] m-auto sm:m-0  sm:w-full h-full" alt="">
                    </div>
                    </div>
                </div>
                <div class=" flex relative z-50 items-center space-x-4">
                    <LangSwitch />
                    <a href="#"  target="_blank">
                        <img src="/assets/discord.svg" alt="">
                    </a>
                   
                </div>
            </div>
        </div>
        
        </div>


    </header>
    
</template>

<script setup> 
 import LangSwitch from './UI/LangSwitch.vue'
</script>


<style scoped>
    .header {
        filter: drop-shadow(4px 14px 124px rgba(0, 0, 0, 0.55));
       
    }

</style>