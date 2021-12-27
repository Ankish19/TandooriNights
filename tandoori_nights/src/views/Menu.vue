<template>
  <div class="menu">
    <Headbar></Headbar>
    <!-- Content -->
    <div id="content">
      <!-- Page Title -->
      <div class="page-title bg-light">
        <div class="container">
          <div class="row">
            <div class="col-lg-7 offset-lg-5">
              <h1 class="mb-0">Menu</h1>
              <h4 class="text-muted mb-0">
                Some informations about our restaurant
              </h4>
            </div>
          </div>
        </div>
      </div>

      <!-- Page Content -->

      <!-- Page Content -->
      <!-- Page Content -->
      <div class="page-content">
        <div class="container">
          <div class="row no-gutters">
            <div class="col-md-3 left-bar-fixed">
              <!-- Menu Navigation -->
              <nav
                id="menu-navigation"
                class="stick-to-content"
                data-local-scroll
              >
                <ul class="nav nav-menu bg-dark dark">
                  <li v-for="(item, value, index) in Items" :key="index">
                    <a :href="`#${value}`" class="menu-link">{{ value }}</a>
                    <!-- <span v-for="(item1, index1) in Items[value]" :key="index1">
                        {{ item1.name }}
                      </span> -->
                  </li>
                </ul>
              </nav>
            </div>
            <div class="col-md-9">
              <!-- Menu Category / Burgers -->
              <MenuComp :items="Items"></MenuComp>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Content / End -->

    <Footer></Footer>
    <!-- Modal / Product -->
  </div>
</template>
<script>
import Headbar from "@/views/layouts/Headbar.vue";
import Footer from "@/views/layouts/Footer.vue";
import { getMenu } from "@/store/api";
import MenuComp from "@/views/layouts/MenuComp.vue";
export default {
  name: "Menu",
  components: {
    Headbar,
    Footer,
    MenuComp,
  },
  data() {
    return {
      Items: [],
    };
  },
  mounted() {
    getMenu().then((res) => {
      // console.log(res.data['items']['Fast food'])
      let arr = [];
      arr = res.data["items"];

      Object.keys(arr).map((e) => {
        console.log(res.data["items"][e][0].price);
      });

      // Object.keys(res.data.items).map((item) => (
      //     console.log(item)
      // ));

      console.log(arr);
      this.Items = res.data.items;
    });
  },
  methods: {
    cardModalClose() {},
  },
};
</script>
<style lang="scss" scoped>
.bg-image img {
  width: 100% !important;
  height: 100% !important;
  display: block;
}
</style>
