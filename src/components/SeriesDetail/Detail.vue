<script setup>
const { detail } = defineProps({
  detail: {
    type: Object,
    required: true,
  },
})
</script>
<template>
  <div class="container">

    <figure class="movie-detail-banner">

      <img 
        :src="detail?.fotonime" 
        :alt="detail?.judul">

      <button class="play-btn">
        <!-- <ion-icon name="play-circle-outline"></ion-icon> -->
      </button>

    </figure>

    <div class="movie-detail-content">

      <p class="detail-subtitle">{{ detail?.jepang }}</p>

      <h1 class="h1 detail-title">
        {{ detail?.judul }}
      </h1>

      <div class="meta-wrapper">

        <div class="badge-wrapper">
          <div class="badge badge-fill">
            {{ detail?.status }}
          </div>
        </div>

        <div class="date-time">

          <div>
            <ion-icon name="star"></ion-icon>

            {{ detail?.skor }}
          </div>

          <div>
            <ion-icon name="calendar-outline"></ion-icon>

            <time :datetime="detail?.tanggalrilis">
              {{ detail?.tanggalrilis }}
            </time>
          </div>

          <div>
            <ion-icon name="time-outline"></ion-icon>

            <time datetime="PT115M">
              {{ detail?.durasi }}
            </time>
          </div>

        </div>

        <div class="ganre-wrapper">
          <a href="#" 
            v-for="(item, index) in detail?.genre?.split(', ')"
            :key="index">
              {{ item }} 
              {{ index != Object.keys(detail?.genre?.split(', ')).length - 1 ? ',' : '' }}
          </a>
        </div>
        
      </div>

      <p class="storyline">
        {{ detail?.sinopsis }}
      </p>

      <div class="details-actions">

        <button class="btn btn-primary">
          <ion-icon name="play"></ion-icon>

          <span>Watch Now</span>
        </button>

      </div>

    </div>

  </div>
</template>