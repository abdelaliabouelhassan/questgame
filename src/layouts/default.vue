<template>
    <div class=" w-full overflow-hidden ">
        <Header />
      <div class=" w-full">
          <slot />
      </div>
        <Footer />
    </div>
</template>

<script setup>
 import Header from '@/components/partials/Header.vue'
 import Footer from '@/components/partials/Footer.vue'
</script>
