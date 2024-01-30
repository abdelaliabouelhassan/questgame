<template>
    <div class=" relative z-50 max-w-[10.25rem] w-full ">
       <div @click="open = !open" class="rounded-full bg-[#260E04] cursor-pointer flex items-center justify-between  h-[3.53113rem] w-full p-1">
         <div>
            <img src="/assets/lang.svg" alt="">
        </div>
        <span class=" text-[#F2D3B6] text-lg font-normal">{{selectedLangName}}</span>
        <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                   <path d="M14.0999 6.50256H9.21131H4.80921C4.05591 6.50256 3.67926 7.4128 4.21284 7.94639L8.27753 12.0111C8.92882 12.6624 9.98815 12.6624 10.6394 12.0111L12.1853 10.4652L14.7041 7.94639C15.2299 7.4128 14.8532 6.50256 14.0999 6.50256Z" fill="#F2D3B6"/>
            </svg>
        </span>
       </div>

        <div v-if="open" class=" absolute z-50 cursor-pointer border border-[#EB6A21] w-full top-14 rounded-lg p-3 flex flex-col items-start space-y-4 bg-[#260E04] left-0">
            <button @click="selectLang(item)" v-for="(item,index,key) in langs" :key="key" class=" text-[#F2D3B6] text-lg font-normal hover:text-white duration-200 cursor-pointer ">
                 {{item.name}}
            </button>
           
        </div>
    </div>
</template>

<script setup>
 import {ref,onMounted,computed} from 'vue';
 const open = ref(false)
 import { useI18n } from 'vue-i18n'
 const { locale } = useI18n({ useScope: 'global' })
 const selectedLang = ref('en')
 const langs = ref([
    {
        code:'en',
        name:'English',
    },
    {
        code:'fr',
        name:'Français'
    }
 ]);

 const selectLang = (item) => {
     selectedLang.value = item.code
     locale.value = item.code
     localStorage.setItem('local', item.code)
     open.value = false
 } 
  const selectedLangName = computed(() => {
      const selectedLangObject = langs.value.find(lang => lang.code === selectedLang.value);
      return selectedLangObject ? selectedLangObject.name : '';
    });

 onMounted(() => {
    const code = localStorage.getItem('local')
    if(code){
        locale.value = code
        selectedLang.value = code
    }
 })
</script>