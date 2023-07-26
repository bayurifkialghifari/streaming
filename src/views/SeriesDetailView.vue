<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { getSeries } from '@/helpers/api/series.js'
import SeriesDetail from '@/components/SeriesDetail/Detail.vue'
import ListEpisodes from '@/components/SeriesDetail/ListEpisodes.vue'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'

const route = useRoute()

const { slug } = route.params
const series = ref([])
const isLoading = ref(true)
const key = 'anime/' + slug

// Fetch data now
onMounted(async () => {
  const data = await getSeries(key)

  series.value = data
  isLoading.value = false
})

// Watch series
watch(series, () => {
  document.title += ` ${series.value?.detail?.judul}`
})
</script>
<template>
  <main>
    <article>
      <section class="movie-detail vl-parent">
        <Loading v-model:active="isLoading" :is-full-page="false" />
        <SeriesDetail 
          :detail="series?.detail" 
          :watch_now="Object.keys(series?.episode || {}).length > 0 ? series?.episode[series?.episode.length - 1].link : '' " 
        />
      </section>
      <section class="tv-series">
        <ListEpisodes :episodes="series?.episode" />
      </section>
    </article>
  </main>
</template>
<style scoped>
  .movie-detail {
    background: none;
  }
</style>