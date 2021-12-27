<template>
  <div class="about">
    <Headbar></Headbar>
    <!-- Content -->
    <div id="content">
      <!-- Page Title -->
      <div class="page-title bg-light">
        <div class="container">
          <div class="row">
            <div class="col-lg-7 offset-lg-5">
              <h1 class="mb-0">About Us</h1>
              <h4 class="text-muted mb-0">
                Some informations about our restaurant
              </h4>
            </div>
          </div>
        </div>
      </div>

      <!-- Section -->
      <section class="section section-bg-edge">
        <div class="container mt-5 mb-5">
          <div class="row">
            <div class="col-md-6">
              <img src="../assets/bg-chef.jpg" alt="" />
            </div>
            <div class="col-md-6 mt-3">
              <h2 class="font-weight-bold">About Us</h2>
              <p class="lead">
                Donec a eros metus. Vivamus volutpat leo dictum risus
                ullamcorper condimentum. Cras sollicitudin varius condimentum.
                Praesent a dolor sem....
              </p>
              <p>
                Nam eleifend elementum sapien et bibendum. Nunc ac diam
                efficitur, ultrices lorem quis, consectetur odio. Nullam
                vulputate, eros quis accumsan cursus, elit lectus bibendum
                nulla, sed dapibus ligula tellus at purus. Fusce id eros id mi
                cursus semper. Quisque efficitur bibendum nunc a consectetur.
                Maecenas vitae quam iaculis, scelerisque purus nec, varius
                purus. Nullam eget varius elit. Donec eget facilisis nunc, non
                rutrum lorem.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Section -->
      <section class="section section-lg dark bg-dark">
        <!-- BG Image -->
        <div class="bg-image bg-parallax">
          <img src="../assets/bg-croissant.jpg" alt="" />
        </div>

        <div class="container text-center mt-3">
          <div class="col-lg-8 offset-lg-2">
            <h2 class="mb-3">Would you like to visit Us?</h2>
            <h5 class="text-muted">
              Book a table even right now or make an online order!
            </h5>
            <a href="#" class="btn btn-outline-primary"
              ><span>Order Online</span></a
            >
          </div>
        </div>
      </section>
    </div>
    <!-- Content / End -->
    <Footer></Footer>
  </div>
</template>
<script>
import Headbar from "@/views/layouts/Headbar.vue";
import Footer from "@/views/layouts/Footer.vue";

export default {
  methods: {},
  name: "About",
  components: {
    Headbar,
    Footer,
  },
};
</script>
