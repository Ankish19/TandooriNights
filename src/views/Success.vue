<template>
  <div class="ordersuccess">
    <Headbar></Headbar>
    <!-- Content -->
    <div id="content">
      <!-- Page Title -->
      <section class="section section-bg-edge text-left">
        <div class="container mt-5 mb-5">
          <div class="row">
            <div class="col-md-12 text-center">
              <img src="@/assets/success.png" alt="" />
            </div>
            <div class="col-md-12 mt-5">
              <h2 class="font-weight-bold text-center">Success</h2>
            </div>
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
import { placeOrder, cloverApiGetPayment } from '@/store/api'
import { getLocalStorage } from '@/store/service'

export default {
  name: 'ordersuccess',
  components: {
    Headbar,
    Footer
  },
  data () {
    return {
      showSuccess: 0,
      interval: '',
      newCart: [],
      paymentId: this.$route.params.paymentId,
      security: this.$route.params.security
    }
  },
  mounted () {
    if (
      getLocalStorage('submitOrder') &&
      getLocalStorage('submitOrder').method === 'Clover' &&
      getLocalStorage('securityToken').id === this.security
    ) {
      cloverApiGetPayment(this.paymentId)
        .then((res) => {
          console.log(res.data)
          const response = res.data
          if (response.res.status === 'succeeded') {
            this.placeOrder()
          } else {
            this.$router.push('/cancel')
          }
        })
        .catch((err) => {
          console.log(err)
          this.$router.push('/menu')
        })
    } else {
      this.$router.push('/menu')
    }
  },
  methods: {
    placeOrder () {
      placeOrder(getLocalStorage('submitOrder')).then((res) => {
        if (res.data.success === true) {
          localStorage.removeItem('cart')
          localStorage.removeItem('submitOrder')
          this.showSuccess = 1
          this.newCart = []
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
  }
}
</script>
