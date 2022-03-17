<template>
  <div class="about">
    <Headbar></Headbar>
    <!-- Content -->
    <div id="content">
      <!-- Page Title -->

      <!-- Section -->
      <!-- Section -->
      <section class="section section-lg">
        <!-- BG Image -->
        <div class="container text-center mt-3">
        <div class="images">
          <img src="@/assets/error.gif" alt="404">
        </div>
          <div class="col-lg-8 offset-lg-2">
            <h2 class="mb-3">Would you like to visit Us?</h2>
            <h5 class="text-muted">
              Book a table even right now or make an online order!
            </h5>
            <router-link class="btn btn-outline-primary" to="/menu">
              <span>Order Online</span></router-link>
          </div>
        </div>
      </section>
    </div>
    <!-- Content / End -->
    <Footer></Footer>
  </div>
</template>
<script>
import Headbar from '@/views/layouts/Headbar.vue'
import Footer from '@/views/layouts/Footer.vue'

export default {
  methods: {},
  name: '404',
  components: {
    Headbar,
    Footer
  }
}
</script>
<style scoped>
h1.mb-0 {
    color: #383c40;
    font-family: Helvetica Neue, Raleway, sans-serif;
    font-weight: 800;
    font-size: 200px;
}
</style>
