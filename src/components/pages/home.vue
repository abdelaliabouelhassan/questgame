<template>
    <MainLaout>
     <FirstSection />
     <SecondSection />
     <ThirdSection />
     <FourthSection />
    </MainLaout>
</template>


<script setup>
 import MainLaout from '../../layouts/default.vue'
 import FirstSection from '../partials/home/FirstSection.vue'
 import SecondSection from '../partials/home/SecondSection.vue'
 import ThirdSection from  '../partials/home/ThirdSection.vue'
 import FourthSection from '../partials/home/FourthSection.vue'
</script>


<style scoped>
 .textShadow {
    text-shadow: 4px 4px 6px rgba(0, 0, 0, 0.30);
 }
</style>