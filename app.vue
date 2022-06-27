<template>
  <div class="main-wrapper">
    <Header/>
    <NuxtPage />
    <Footer/>
  </div>
</template>


<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import AOS from 'aos'

onMounted(() => {
  useI18n().locale.value = localStorage.getItem('locale') || navigator.languages.find(el => Object.keys(['en', 'fr', 'es', 'de']).includes(el)) || 'en'
  AOS.init()
})

useHead({
  title: 'Live your bet',
  viewport: 'width=device-width, initial-scale=1',
  charset: 'utf-8',
  htmlAttrs: {
    lang: 'en',
  },
  meta: [
    { name: 'description', content: 'Browse and buy bets from the best bettors in town' }
  ],
  link: [
    { rel: 'icon', type: 'image/png', href: '/favicon.png' }
  ],
})
</script>