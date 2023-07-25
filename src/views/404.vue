<template>
  <section class="not-found">
    <div class="container">
      <p class="hero-subtitle">AniStream</p>

      <h1 class="h1 hero-title">
        PAGE NOT <strong>FOUND</strong>.
      </h1>

      <RouterLink to="/" class="btn btn-primary">
        <ion-icon name="arrow-forward-outline"></ion-icon>

        <span>Explore Now</span>
      </RouterLink>
    </div>
  </section>
</template>

<style scoped>
  .not-found {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
</style>
