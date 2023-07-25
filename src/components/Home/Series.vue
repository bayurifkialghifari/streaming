<script setup>
import { ref, watch, onMounted } from 'vue'
import { getSeries } from '@/helpers/api/series.js'
import ListSeries from './ListSeries.vue'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
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
const series = ref([])
const subTitle = ref('')
const isLoading = ref(true)
const current = ref(1)


// Check if type is ongoing or completed
subTitle.value = type === SERIES_TYPE.ONGOING ? 'Ongoing' : 'Completed'
const key = type === SERIES_TYPE.ONGOING ? 'ongoing' : 'complete'

// Fetch data now
onMounted(async () => {
  const data = await getSeries(key)

  series.value = data
  isLoading.value = false
})

// Load More
const loadMore = async (page) => {
  isLoading.value = true
  const data = await getSeries(`${key}?page=${page}`)

  series.value = [...series.value, ...data]
  isLoading.value = false
}

watch(series, () => {
  // Increase current page
  current.value += 1
  // Limit 10
  if (location === 'home') {
    series.value = series.value.slice(0, 10)
  }
})
</script>
<template>
  <section :class="type === SERIES_TYPE.ONGOING ? 'tv-series' : 'top-rated'" class="vl-parent">
    <Loading v-model:active="isLoading" :is-full-page="false" />
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
      <div v-if="location !== 'home'" class="load-more">
        <button @click="loadMore(current)" class="btn btn-primary">
          <ion-icon name="add-outline"></ion-icon>

          <span>Load More</span>
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .load-more {
    margin-top: 50px;
    display: flex;
    justify-content: center;
  }
  @media (min-width: 1200px) {
    .movies-list {
      grid-template-columns: repeat(5, 1fr);
    }
  }
</style>
