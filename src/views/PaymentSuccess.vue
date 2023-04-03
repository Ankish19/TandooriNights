<template>
  <div class="about">
    <!-- Content -->
    <div id="content">
      <!-- Page Title -->

      <!-- Section -->
      <section class="section section-bg-edge">
        <div class="container mt-5 mb-5" v-if="showSuccess == 0">
          <div class="row">
            <div class="col-md-12">
              <img src="@/assets/loader.gif" id="loaderimage" alt="" />
            </div>
           </div>
        </div>
        <div class="container mt-5 mb-5" v-if="showSuccess == 1">
          <div class="row">
            <div class="col-md-12">
              <img src="@/assets/success.gif" alt="" />
            </div>
           </div>
          <div class="row">
            <div class="col-md-12">
              <h2 class="font-weight-bold">Payment Successfully received</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <router-link class="btn btn-primary" to="/myorder">Check Orders</router-link>
            </div>
          </div>
        </div>
      </section>

    </div>
    <!-- Content / End -->
  </div>
</template>
<script>
import { placeOrder } from '@/store/api'
import { getLocalStorage } from '@/store/service'
export default {
  data () {
    return {
      showSuccess: 0,
      interval: ''
    }
  },
  mounted () {
    if (getLocalStorage('submitOrder') && getLocalStorage('submitOrder').method === 'Clover') {
      this.interval = setInterval(() => {
        this.placeOrder()
      }, 10000)
    } else {
      this.$router.push('/menu')
    }
  },
  destroyed () {
    clearInterval(this.interval)
  },
  methods: {
    placeOrder () {
      placeOrder(getLocalStorage('submitOrder')).then(res => {
        if (res.data.success === true) {
          localStorage.removeItem('cart')
          localStorage.removeItem('submitOrder')
          this.showSuccess = 1
        }
        this.$toast.success('Order place successfully', {
          timeout: 1000
        })
        clearInterval(this.interval)
        // this.interval = setInterval(() => {
        //   this.$router.push('/myorder')
        // }, 10000)
      })
    }
  },
  name: 'PaymentSuccess'
}
</script>
<style>
img {
    max-width: 350px !important;
}
#loaderimage{
    height:154px;
    width: 154px;
    margin-top: 30%;
}
</style>
