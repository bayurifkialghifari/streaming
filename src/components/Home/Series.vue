<script setup>
  import axios from 'axios'
  import ListSeries from './ListSeries.vue'
  import Loading from 'vue-loading-overlay'
  import 'vue-loading-overlay/dist/css/index.css'
  import { ref, defineProps, onMounted } from 'vue'
  import SERIES_TYPE from '../../constants/series.constant.js'
  
  // Get type from props
  const { type } = defineProps({
    type: {
      type: String,
      required: true,
    },
  })

  // Refs
  const series = ref([])
  const subTitle = ref('')
  const isLoading = ref(true)
  const url = ref('')

  // Check if type is ongoing or completed
  if (type === SERIES_TYPE.ONGOING) {
    url.value = 'https://anime-scraper-six.vercel.app/otakudesu/v1/ongoing'
    subTitle.value = 'Ongoing'
  } else {
    url.value = 'https://anime-scraper-six.vercel.app/otakudesu/v1/complete'
    subTitle.value = 'Completed'
  }

  // Fetch data
  onMounted(() => {
    const getSeries = axios.get(url.value)
      .then(res => {
        isLoading.value = false
        series.value = res.data.data
        series.value = series.value.slice(0, 8)
      })
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
    </div>
  </section>
</template>
