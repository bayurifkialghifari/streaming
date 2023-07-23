<script setup>
import useSWRV from 'swrv'
import LocalStorageCache from 'swrv/dist/cache/adapters/localStorage'
import { getSeries } from '@/helpers/api/series.js'
import ListSeries from './ListSeries.vue'
import { ref, defineProps, watch } from 'vue'
import SERIES_TYPE from '@/constants/series.constant.js'

// Get type and location from props
const { type, location } = defineProps({
  type: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
})

// Refs
const subTitle = ref('')

// Check if type is ongoing or completed
subTitle.value = type === SERIES_TYPE.ONGOING ? 'Ongoing' : 'Completed'
const key = type === SERIES_TYPE.ONGOING ? 'ongoing' : 'complete'

// Fetch data
const { data: series } = useSWRV(key, getSeries, {
  cache: new LocalStorageCache(),
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
})

watch(series, () => {
  // Limit 10
  if (location === 'home') {
    series.value = series.value.slice(0, 10)
  }
})
</script>
<template>
  <section :class="type === SERIES_TYPE.ONGOING ? 'tv-series' : 'top-rated'">
    <div class="container">
      <p class="section-subtitle">
        {{ subTitle }}
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

<style>
  @media (min-width: 1200px) {
    .movies-list {
      grid-template-columns: repeat(5, 1fr);
    }
  }
</style>
