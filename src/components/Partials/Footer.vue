<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const goTopBtn = ref('')

const handleScroll = () => {
  if (window.scrollY >= 10) {
    goTopBtn.value = 'active'
  } else {
    goTopBtn.value = ''
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
<template>
  <footer class="footer">
    <div class="footer-top">
      <div class="container">
        <div class="footer-brand-wrapper">
          <a href="./index.html" class="logo">
            <img src="/images/logo.svg" alt="Filmlane logo" />
          </a>

          <ul class="footer-list">
            <li>
              <RouterLink to="/" class="navbar-link">Home</RouterLink>
            </li>

            <li>
              <RouterLink to="/on-going" class="navbar-link">On Going</RouterLink>
            </li>

            <li>
              <RouterLink to="/completed" class="navbar-link">Complete</RouterLink>
            </li>

            <li>
              <RouterLink to="/about" class="navbar-link">About</RouterLink>
            </li>
          </ul>
        </div>

        <div class="divider"></div>

        <div class="quicklink-wrapper">
          <ul class="quicklink-list">
            <li>
              <a href="#" class="quicklink-link">Faq</a>
            </li>

            <li>
              <a href="#" class="quicklink-link">Help center</a>
            </li>

            <li>
              <a href="#" class="quicklink-link">Terms of use</a>
            </li>

            <li>
              <a href="#" class="quicklink-link">Privacy</a>
            </li>
          </ul>

          <ul class="social-list">
            <li>
              <a href="#" class="social-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" class="social-link">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" class="social-link">
                <ion-icon name="logo-pinterest"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" class="social-link">
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container">
        <p class="copyright">
          &copy; {{ new Date().getFullYear() }} <a href="#">codewithsadee</a>. All Rights Reserved
        </p>

        <img
          src="@/assets/footer-bottom-img.png"
          alt="Online banking companies logo"
          class="footer-bottom-img"
        />
      </div>
    </div>
  </footer>
  <!-- 
  - #GO TO TOP
  -->

  <a href="#top" class="go-top" data-go-top :class="goTopBtn">
    <ion-icon name="chevron-up"></ion-icon>
  </a>
</template>
