<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { getSeries } from '@/helpers/api/series.js'
import SeriesEpisode from '@/components/SeriesEpisode/Episode.vue'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'

const route = useRoute()

const { slug } = route.params
const series = ref([])
const isLoading = ref(true)
const key = 'episode/' + slug

// Fetch data now
onMounted(async () => {
  const data = await getSeries(key)

  series.value = data
  isLoading.value = false
})

// Watch series
watch(series, () => {
  document.title += ` ${series.value?.title}`
})
</script>
<template>
  <main>
    <article>
      <section class="movie-detail vl-parent">
        <Loading v-model:active="isLoading" :is-full-page="false" />
        <SeriesEpisode :detail="series" />
      </section>
    </article>
  </main>
</template>
<style scoped>
  .movie-detail {
    background: none;
  }
</style>