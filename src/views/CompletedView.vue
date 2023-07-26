<script setup>
import SERIES_TYPE from '@/constants/series.constant.js'
import Series from '@/components/Series.vue'
</script>
<template>
  <Series :type="SERIES_TYPE.COMPLETED" :location="'completed'" />
</template>
