<template>
    <MainLaout>
        <div class=" w-full h-screen">
            <img src="/images/home/background.svg" class=" w-full h-full object-cover" alt="">
            
        </div>
       <div class=" text-red-400 font-normal">
         {{ $t('message') }}
       </div>
    </MainLaout>
</template>


<script setup>
 import {onMounted} from 'vue'
 import MainLaout from '@/layouts/default.vue'
</script>