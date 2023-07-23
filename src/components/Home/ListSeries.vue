<script setup>
// Get detail from props
const { detail } = defineProps({
  detail: {
    type: Object,
    required: true,
  },
})
</script>
<template>
  <li>
    <div class="movie-card">
      <RouterLink :to="detail.link">
        <figure class="card-banner">
          <img 
            :src="detail.image" 
            :alt="detail.title" />
        </figure>
      </RouterLink>

      <div class="title-wrapper">
        <RouterLink :to="detail.link">
          <h3 class="card-title">
            {{ detail.title }}
          </h3>
        </RouterLink>

        <time datetime="2022">2022</time>
      </div>

      <div class="card-meta">
        <div class="badge badge-outline">
          Series
        </div>

        <div class="duration">
          <ion-icon name="tv-outline"></ion-icon>

          <data>
            {{ detail.episode }}
          </data>
        </div>

        <div class="rating">
          <ion-icon name="star"></ion-icon>

          <data>
            {{ detail.rating }}            
          </data>
        </div>
      </div>
    </div>
  </li>
</template>