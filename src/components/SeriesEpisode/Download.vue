<script setup>
const props = defineProps({
  detail: {
    type: Object,
    required: true,
  },
})
</script>
<template>
  <div class="container">
    <h2 class="h2 section-title">
      Link Download
    </h2>

    <div
      v-for="(item, index) in props.detail?.link_download" 
      :key="index">
      <h3 class="h3 section-title">{{ index }}</h3>
      <ul class="movies-list">
        <li 
          v-for="(item2, index2) in item"
          :key="index2">
          <div class="details-actions movies-eps">
            <div class="title-wrapper">
              <p class="title">{{ item2.name }}</p>

              <p class="text">{{ item2.name }}</p>
            </div>
            <a :href="item2.link" target="_blank" class="btn btn-primary">
              <ion-icon name="play"></ion-icon>

              <span>Go</span>
            </a>
          </div>
        </li>
      </ul>
    </div>

  </div>
</template>
<style scoped>
  .movies-list {
    grid-template-columns: repeat(4, 1fr) !important;
    grid-gap: 1rem !important;
  }
  .h3 {
    margin: 4rem !important;
  }
  .movies-eps {
    max-width: 100% !important;
    justify-content: space-between !important;
  }
</style>