<template>
  <div class="main-wrapper">
    <Header/>
    <NuxtPage />
    <Footer/>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

watch(useRoute(), () => {
  document.getElementById('__nuxt').scrollIntoView({ behavior: 'smooth' });
})
</script>
