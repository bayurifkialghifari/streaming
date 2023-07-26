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

    <div class="movie-detail-content">

      <p class="detail-subtitle">{{ props.detail?.title }}</p>

      <div class="details-actions">

        <a :href="props.detail?.prev_eps" v-if="props.detail?.prev_eps" class="btn btn-primary">
          <ion-icon name="play"></ion-icon>

          <span>Previous Episode</span>
        </a>

        <RouterLink 
          :to="props.detail?.link_all_eps"
          v-if="props.detail?.link_all_eps"
          class="btn btn-primary">
          <ion-icon name="play"></ion-icon>

          <span>See All Episode</span>
        </RouterLink>
        
        <a :href="props.detail?.next_eps" v-if="props.detail?.next_eps" class="btn btn-primary">
          <ion-icon name="play"></ion-icon>

          <span>Next Episode</span>
        </a>

      </div>

      <div class="embed_holder">
        <div class="player-embed" id="pembed">
          <div class="responsive-embed-stream">
            <iframe 
              :src="props.detail?.link_string" 
              width="420" 
              height="370" 
              allowfullscreen="true" 
              webkitallowfullscreen="true" 
              mozallowfullscreen="true">
            </iframe>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<style scoped>
  .embed_holder {
    position: relative;
    width: 100%;
    height: auto;
  }
  .player-embed {
    margin: auto;
  }
  .responsive-embed-stream {
    position: relative;
    padding-bottom: 51%;
    padding-top: 44px;
    height: 0;
    overflow: hidden;
  }
  .responsive-embed-stream iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    right: 1px;
  }
  .movie-detail-content {
    max-width: 100%;
    width: 100%;
  }
  .details-actions {
    max-width: 100%;
  }
</style>