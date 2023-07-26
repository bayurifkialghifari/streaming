<script setup>
// Get detail from props
const props = defineProps({
  detail: {
    type: Object,
    required: true,
  },
})
</script>
<template>
  <li>
    <div class="movie-card">
      <RouterLink :to="props.detail.link">
        <figure class="card-banner">
          <img 
            :src="props.detail.image" 
            :alt="props.detail.title" />
        </figure>
      </RouterLink>

      <div class="title-wrapper">
        <RouterLink :to="props.detail.link">
          <h3 class="card-title">
            {{ props.detail.title }}
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
            {{ props.detail.episode }}
          </data>
        </div>

        <div class="rating">
          <ion-icon name="star"></ion-icon>

          <data>
            {{ props.detail.rating }}            
          </data>
        </div>
      </div>
    </div>
  </li>
</template>