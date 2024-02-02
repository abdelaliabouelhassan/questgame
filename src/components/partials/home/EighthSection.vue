<template>
    <section class=" w-full px-4 xl:px-0">
        <div class=" w-full max-w-[78.75rem] mx-auto  border-gradient-right rounded-3xl p-px  overflow-hidden relative">
            <div class="  w-full h-full bg-[#1F100A]  rounded-3xl p-4 sm:p-10 flex flex-col items-center justify-between pb-14 ">
               <h1 class=" text-[#EB6A21] text-center font-normal text-[1rem] sm:text-[1.5rem] md:text-[2rem] leading-normal titleShadow">FAQ’s</h1>  
               <span class=" text-center text-[#FFE0C3] text-[2rem] sm:text-[3.5rem] md:text-[4.5rem] leading-[140.278%] titleShadow">Foire Aux Questions</span>               
               <div class=" w-full flex flex-col items-start space-y-4 max-w-[47.0625rem] pt-4">
                <div v-for="(item,index,key) in Faq" :key="key" v-accordion class=" accordion  w-full bg-[#311A11]  cursor-pointer duration-200 p-[1.5rem]   rounded-lg">
                    <div class="accordion-item w-full flex flex-col items-start">
                        <div class="accordion-header  w-full flex items-center justify-between  ">
                         
                            <p class=" text-[1rem]  sm:text-[1.3125rem] font-normal leading-normal text-[#F2D3B6]">
                             {{$t(item.title)}}
                            </p>
                            <div>
                                <div class=" w-[1.96594rem] h-[1.96594rem] rounded-full overflow-hidden">
                                    <img src="/assets/check.svg" alt="">
                                </div>
                            </div>
                        </div>

                        <div class=" accordion-content w-full max-w-[38.25rem]">
                            <p class=" text-[#F2D3B6] text-[0.75rem] font-quantico leading-[150%] font-normal pt-4" >
                               {{$t(item.content)}}
                            </p>
                        </div>
                    </div>
                </div>
              </div>           
             </div>


       
        </div>
    </section>
</template>


<script setup>
 import {ref} from 'vue'
 const Faq = ref([
    {
        title:"que_quest",
        content:"plateforme"
    },
     {
        title:"comment",
        content:"plateforme"
    },
     {
        title:"personnaliser",
        content:"plateforme"
    },
     {
        title:"puis_je",
        content:"plateforme"
    },
     {
        title:"histoires",
        content:"plateforme"
    },
     {
        title:"rejoindre",
        content:"plateforme"
    }
 ])
</script>