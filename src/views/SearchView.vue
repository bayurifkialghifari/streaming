<script setup>
import { ref, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getSeries } from '@/helpers/api/series.js'
import ListSeries from '@/components/ListSeries.vue'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'

const route = useRoute()
const series = ref([])
const isLoading = ref(true)

const key = 'search?s=' + route.query.s

onMounted(async () => {
  const data = await getSeries(key)

  series.value = data
  isLoading.value = false
})
</script>
<template>
  <section class="top-rated vl-parent">
    <Loading v-model:active="isLoading" :is-full-page="false" />
    <div class="container">
      <p class="section-subtitle">
        Search
      </p>

      <h2 class="h2 section-title">
        Anime
      </h2>

      <ul class="movies-list">
        <ListSeries 
            v-for="(item, index) in series"
            :detail="item"
            :key="index" 
          />
      </ul>
    </div>
  </section>
</template>

<style scoped>

  @media (min-width: 1200px) {
    .movies-list {
      grid-template-columns: repeat(5, 1fr);
    }
  }
</style>
