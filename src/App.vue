<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Partials/Header.vue'
import Footer from './components/Partials/Footer.vue'
</script>

<template>
  <Header />

  <RouterView />

  <Footer />
</template>