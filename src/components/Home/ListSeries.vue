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
      <a href="./movie-details.html">
        <figure class="card-banner">
          <img 
            :src="detail.image" 
            :alt="detail.title" />
        </figure>
      </a>

      <div class="title-wrapper">
        <a href="./movie-details.html">
          <h3 class="card-title">
            {{ detail.title }}
          </h3>
        </a>

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