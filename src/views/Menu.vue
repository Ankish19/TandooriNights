<template>
  <div class="menu">
    <div id="dogra"></div>
    <Headbar :newCart="newCart" :cartshow="cartshow"></Headbar>
    <!-- Content -->
    <div id="content">
      <!-- Page Title -->
      <div class="page-title bg-light" style="position: sticky !important; top: 0px;">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <h1 class="mb-0">Online Order</h1>
              <h4 class="text-muted mb-0">
                Some information about our restaurant
              </h4>
            </div>
          </div>
        </div>
      </div>

      <!-- Page Content -->

      <!-- Page Content -->
      <div class="page-content">
        <div class="container">
          <div class="row no-gutters">
            <div class="col-md-3 left-bar-fixed text-left" >
              <!-- Menu Navigation -->
              <nav id="menu-navigation" class="stick-to-content" data-local-scroll :class="scrollClass?'sticky':''">
                <ul class="nav nav-menu bg-dark dark">
                  <li v-for="(item, value, index) in Items" :key="index">
                    <a :href="`menu#${value}`" class="menu-link">{{ value }}</a>
                    <!-- <span v-for="(item1, index1) in Items[value]" :key="index1">
                        {{ item1.name }}
                      </span> -->
                  </li>
                </ul>
              </nav>
            </div>
            <div class="col-md-9 box-line">
              <!-- Menu Category / Burgers -->
              <MenuComp :items="Items" v-on:addItem="addItem($event)"></MenuComp>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Content / End -->

    <Footer :newCart="newCart" v-on:opencartpopup="opencartpopup($event)"></Footer>
    <!-- Modal / Product -->
  </div>
</template>
<script>
import Headbar from '@/views/layouts/Headbar.vue'
import Footer from '@/views/layouts/Footer.vue'
import { getMenu } from '@/store/api'
import MenuComp from '@/views/layouts/MenuComp.vue'

export default {
  props: {
  },
  name: 'Menu',
  components: {
    Headbar,
    Footer,
    MenuComp
  },
  metaInfo: {
    title: 'Best Fine Dining Restaurant',
    titleTemplate: '%s | Food Order Online in Calgary NE',
    meta: [
      { charset: 'utf-8' },
      { name: 'description', content: 'Order the delicious and flavourful food your way online near you at the best fine dining restaurant places to eat in Calgary NE at easy rates and easy procedure.' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: 'Best Fine Dinning Restaurant Calgary NE, Best Places to Eat in Calgary NE, Food Order Online in Calgary' }
    ]
  },
  data () {
    return {
      Items: [],
      newCart: [],
      cartshow: false,
      scrollClass: false
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  mounted () {
    // eslint-disable-next-line no-unused-expressions
    getMenu().then((res) => {
      // console.log(res.data['items']['Fast food'])
      let arr = []
      arr = res.data.items

      Object.keys(arr).map((e) => {
        console.log(res.data.items[e][0].price)
      })

      // Object.keys(res.data.items).map((item) => (
      //     console.log(item)
      // ));
      this.Items = res.data.items
    // eslint-disable-next-line no-sequences
    })
  },
  methods: {
    handleScroll (event) {
      // Any code to be executed when the window is scrolled
      this.scrollClass = true
    },
    addItem (event) {
      this.newCart = event
    },
    opencartpopup (event) {
      // this.cartshow = !this.cartshow
      console.log(event)
    }
  }
}
</script>

<style lang="scss" scoped>
// .bg-image img {
//   width: 100% !important;
//   height: 100% !important;
//   display: block;
// }
// .fixed {
//   width: 350px;
//   position: fixed;
//   top: 0px;
//   z-index: 999;
// }
// .box-line {
//     float: right;
//     position: relative;
//     left:350px;
// }

.menu{
 scroll-behavior: smooth;
 }
</style>
