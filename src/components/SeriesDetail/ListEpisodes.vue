<script setup>
const props = defineProps({
  episodes: {
    type: Object,
    required: true,
  },
})
</script>
<template>
  <div class="container">
    <h2 class="h2 section-title">
      List Episodes
    </h2>

    <ul class="movies-list">
      <li 
        v-for="(item, index) in props.episodes"
        :key="index">
        <div class="details-actions movies-eps">
          <div class="title-wrapper">
            <p class="title">{{ item.title }}</p>

            <p class="text">{{ item.tanggal }}</p>
          </div>
          <RouterLink :to="item.link" class="btn btn-primary">
            <ion-icon name="play"></ion-icon>

            <span>Go</span>
          </RouterLink>
        </div>
      </li>
    </ul>

  </div>
</template>
<style scoped>
  .movies-list {
    grid-template-columns: repeat(1, 1fr) !important;
  }
  .movies-eps {
    max-width: 100% !important;
    justify-content: space-between !important;
  }
</style>