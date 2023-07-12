<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/partials/Header.vue'
import Footer from './components/partials/Footer.vue'
</script>

<template>
  <Header />

  <RouterView />

  <Footer />
</template>