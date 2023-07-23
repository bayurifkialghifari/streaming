<script setup>
import Hero from '../components/Home/Hero.vue'
import Series from '../components/Home/Series.vue'
import SERIES_TYPE from '../constants/series.constant.js'
</script>
<template>
  <main>
    <article>
      <!-- 
        - #HERO
      -->
      <Hero />
      <!-- 
        - #ONGOING
      -->
      <Series :type="SERIES_TYPE.ONGOING" :location="'home'" />
      <!-- 
        - #COMPLETE
      -->
      <Series :type="SERIES_TYPE.COMPLETED" :location="'home'" />
      <!-- 
        - #CTA
      -->
      <section class="cta">
        <div class="container">

          <div class="title-wrapper">
            <h2 class="cta-title">Trial start first 30 days.</h2>

            <p class="cta-text">
              Enter your email to create or restart your membership.
            </p>
          </div>

          <form action="" class="cta-form">
            <input type="email" name="email" required placeholder="Enter your email" class="email-field">

            <button type="submit" class="cta-form-btn">Get started</button>
          </form>

        </div>
      </section>
    </article>
  </main>
</template>
