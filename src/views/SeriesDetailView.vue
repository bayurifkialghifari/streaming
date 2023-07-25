<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getSeries } from '@/helpers/api/series.js'
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
</script>
<template>
  <main>
    <article>
      <section class="movie-detail vl-parent">
        <Loading v-model:active="isLoading" :is-full-page="false" />
        <div class="container">

          <figure class="movie-detail-banner">

            <img 
              :src="series?.detail?.fotonime" 
              :alt="series?.detail?.judul">

            <button class="play-btn">
              <!-- <ion-icon name="play-circle-outline"></ion-icon> -->
            </button>

          </figure>

          <div class="movie-detail-content">

            <p class="detail-subtitle">{{ series?.detail?.jepang }}</p>

            <h1 class="h1 detail-title">
              {{ series?.detail?.judul }}
            </h1>

            <div class="meta-wrapper">

              <div class="badge-wrapper">
                <div class="badge badge-fill">
                  {{ series?.detail?.status }}
                </div>
              </div>

              <div class="date-time">

                <div>
                  <ion-icon name="star"></ion-icon>

                  {{ series?.detail?.skor }}
                </div>

                <div>
                  <ion-icon name="calendar-outline"></ion-icon>

                  <time :datetime="series?.detail?.tanggalrilis">
                    {{ series?.detail?.tanggalrilis }}
                  </time>
                </div>

                <div>
                  <ion-icon name="time-outline"></ion-icon>

                  <time datetime="PT115M">
                    {{ series?.detail?.durasi }}
                  </time>
                </div>

              </div>

              <div class="ganre-wrapper">
                <a href="#" 
                  v-for="(item, index) in series?.detail?.genre?.split(', ')"
                  :key="index">
                    {{ item }} 
                    {{ index != Object.keys(series?.detail?.genre?.split(', ')).length - 1 ? ',' : '' }}
                </a>
              </div>
              
            </div>

            <p class="storyline">
              {{ series?.detail?.sinopsis }}
            </p>

            <div class="details-actions">

              <button class="btn btn-primary">
                <ion-icon name="play"></ion-icon>

                <span>Watch Now</span>
              </button>

            </div>

          </div>

        </div>
      </section>
    </article>
  </main>
</template>
<style>
  .movie-detail {
    background: none;
  }
  @media (min-width: 1200px) {
    .movie-detail-content {
      max-width: 900px;
    }
  }
</style>