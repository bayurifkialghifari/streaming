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

    <figure class="movie-detail-banner">

      <img 
        :src="props.detail?.fotonime" 
        :alt="props.detail?.judul">

      <button class="play-btn">
        <!-- <ion-icon name="play-circle-outline"></ion-icon> -->
      </button>

    </figure>

    <div class="movie-detail-content">

      <p class="detail-subtitle">{{ props.detail?.jepang }}</p>

      <h1 class="h1 detail-title">
        {{ props.detail?.judul }}
      </h1>

      <div class="meta-wrapper">

        <div class="badge-wrapper">
          <div class="badge badge-fill">
            {{ props.detail?.status }}
          </div>
        </div>

        <div class="date-time">

          <div>
            <ion-icon name="star"></ion-icon>

            {{ props.detail?.skor }}
          </div>

          <div>
            <ion-icon name="calendar-outline"></ion-icon>

            <time :datetime="props.detail?.tanggalrilis">
              {{ props.detail?.tanggalrilis }}
            </time>
          </div>

          <div>
            <ion-icon name="time-outline"></ion-icon>

            <time datetime="PT115M">
              {{ props.detail?.durasi }}
            </time>
          </div>

        </div>

        <div class="ganre-wrapper">
          <a href="#" 
            v-for="(item, index) in props.detail?.genre?.split(', ')"
            :key="index">
              {{ item }} 
              {{ index != Object.keys(props.detail?.genre?.split(', ')).length - 1 ? ',' : '' }}
          </a>
        </div>
        
      </div>

      <p class="storyline">
        {{ props.detail?.sinopsis }}
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
<style scoped>
  @media (min-width: 1200px) {
    .movie-detail-content {
      max-width: 900px;
    }
  }
</style>