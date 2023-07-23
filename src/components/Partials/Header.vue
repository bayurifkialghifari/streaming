<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import Navigation from './Navigation.vue'

const headerClass = ref('')
const openClass = ref('')

// Handle on click
const handleOnClick = () => {
  openClass.value = openClass.value === '' ? 'active' : ''
  document.body.classList.toggle('active')
}


// Handle scroll
const handleScroll = () => {
  if (window.scrollY >= 10) {
    headerClass.value = 'active'
  } else {
    headerClass.value = ''
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
<template>
  <header class="header" data-header :class="headerClass">
    <div class="container">

      <div class="overlay" data-overlay :class="openClass" @click="handleOnClick()"></div>

      <RouterLink to="/" class="logo">
        <img alt="Logo" class="logo" src="@/assets/logo.svg" />
      </RouterLink>

      <div class="header-actions">

        <button class="search-btn">
          <ion-icon name="search-outline"></ion-icon>
        </button>

        <button class="btn btn-primary">Sign in</button>

      </div>

      <button class="menu-open-btn" data-menu-open-btn @click="handleOnClick()">
        <ion-icon name="reorder-two"></ion-icon>
      </button>

      <nav class="navbar" data-navbar :class="openClass">

        <div class="navbar-top">

          <RouterLink to="/" class="logo">
            <img src="@/assets/logo.svg" alt="Filmlane logo">
          </RouterLink>

          <button class="menu-close-btn" data-menu-close-btn @click="handleOnClick()">
            <ion-icon name="close-outline"></ion-icon>
          </button>

        </div>

        <Navigation />

      </nav>

    </div>
  </header>
</template>