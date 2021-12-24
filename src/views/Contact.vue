<template>
  <div class="about">
    <Header></Header>
    <!-- Content -->
    <div id="content">
      <!-- Page Title -->
      <div class="page-title bg-light">
        <div class="container">
          <div class="row">
            <div class="col-lg-7 offset-lg-5">
              <h1 class="mb-0">Contact Us</h1>
              <h4 class="text-muted mb-0">
                Some informations about our restaurant
              </h4>
            </div>
          </div>
        </div>
      </div>

      <!-- Section -->
      <section class="section section-bg-edge"></section>
    </div>
    <!-- Content / End -->
    <Footer></Footer>
  </div>
</template>
<script>
import Header from "@/views/layouts/Header.vue";
import Footer from "@/views/layouts/Footer.vue";

export default {
  methods: {},
  name: "Contact",
  components: {
    Header,
    Footer,
  },
};
</script>
