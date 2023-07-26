<script setup>
import SearchBar from '@/components/SearchBar.vue'
</script>
<template>
  <ul class="navbar-list">
        
    <li>
      <RouterLink to="/" class="navbar-link">Home</RouterLink>
    </li>

    <li>
      <RouterLink to="/on-going" class="navbar-link">On Going</RouterLink>
    </li>

    <li>
      <RouterLink to="/completed" class="navbar-link">Complete</RouterLink>
    </li>

    <li>
      <RouterLink to="/about" class="navbar-link">About</RouterLink>
    </li>

  </ul>

  <SearchBar class="hide-on-desktop" />

  <ul class="navbar-social-list">

    <li>
      <a href="#" class="navbar-social-link">
        <ion-icon name="logo-twitter"></ion-icon>
      </a>
    </li>

    <li>
      <a href="#" class="navbar-social-link">
        <ion-icon name="logo-facebook"></ion-icon>
      </a>
    </li>

    <li>
      <a href="#" class="navbar-social-link">
        <ion-icon name="logo-pinterest"></ion-icon>
      </a>
    </li>

    <li>
      <a href="#" class="navbar-social-link">
        <ion-icon name="logo-instagram"></ion-icon>
      </a>
    </li>

    <li>
      <a href="#" class="navbar-social-link">
        <ion-icon name="logo-youtube"></ion-icon>
      </a>
    </li>

  </ul>
</template>

<!-- Router link active style vue -->
<style scoped>
  .router-link-exact-active {
    color: hsl(57, 97%, 45%);
  }
  .hide-on-desktop {
    margin-bottom: 50px;
  }
  /* Hide on desktop mode show only on phone */
  @media (min-width: 992px)
  {
    .hide-on-desktop {
      display: none;
    }
  }
</style>