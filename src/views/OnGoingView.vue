<script setup>
import SERIES_TYPE from '../constants/series.constant.js'
import Series from '../components/Home/Series.vue'
</script>
<template>
  <Series :type="SERIES_TYPE.ONGOING" :location="'ongoing'" />
</template>
