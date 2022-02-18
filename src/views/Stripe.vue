<template>
    <div id="paymentpage">
     <BackHeader page_name="Payment"></BackHeader>
<div class="page-content-wrapper py-3 elements-page">
        <div class="container">
        <div class="card">
          <div class="card-body">
                <!-- Price Table One -->
            <div class="price-table-one">
              <ul class="nav nav-tabs border-bottom-0 mb-3 align-items-center justify-content-center" id="priceTab" role="tablist">
                <li class="nav-item" role="presentation"><a class="nav-link  active shadow" id="priceTabThree" data-bs-toggle="tab" href="#priceTab_Three" role="tab" aria-controls="priceTab_Three" aria-selected="ture"><i class="bi bi-cart-check-fill"></i></a></li>
              </ul>
              <div class="tab-content" id="priceTabContent">
                <div class="tab-pane fade  show active" id="priceTab_Three" role="tabpanel" aria-labelledby="priceTabThree">
                  <!-- Single Price Table -->
                  <div class="single-price-content shadow-sm p-5">
                    <div class="price"><span class="text-white mb-2"></span>
                      <h2 class="display-3">$/-</h2><span class="badge bg-light text-dark rounded-pill">1 Year</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
                 <!-- Price Table One -->

                <table class="table mb-0 w-50 text-center">
              <tbody>
                <tr class="text-success">
                  <th scope="col" style="text-algin:left !important;">Package Amount</th>
                  <td scope="col">$</td>
                </tr>
                <tr class="text-danger">
                  <th scope="col"  style="text-algin:left !important;">Pending Amount</th>
                  <td scope="col">$</td>
                </tr>
              </tbody>
              </table>

              <!---pay card ---------->
              <form @submit.prevent="payment">
                 <div id="payment-card" class="w-50 card-around">
                </div>
                <div id="card-error" class="mt-2 text-danger"></div>
                <div class="text-center mt-3">
                    <div :class="'text-'" class="mb-2">

                    </div>
                <button class="btn btn-primary w-50" value="payment" id="submit">Pay</button>
                </div>
              </form>
          </div>
        </div>
        </div>
</div>
     <Footer></Footer>
    </div>
</template>
<script>
import { paymentProcess } from '@/store/api'
import { getUserData } from '@/store/services'
const styles = {
  style: {
    base: {
      color: '#32325d',
      fontFamily: 'Arial, sans-serif',
      fontSmoothing: 'antialiased',
      fontSize: '16px',
      '::placeholder': {
        color: '#32325d'
      }
    },
    invalid: {
      fontFamily: 'Arial, sans-serif',
      color: '#fa755a',
      iconColor: '#fa755a'
    }
  }
}
export default {
  name: 'Payment Page',

  data () {
    return {
      profileImg: require('../../assets/images/img/payment.jpg'),
      transection: {},
      userData: getUserData(),
      cardError: '',
      invoice_id: this.$route.params.invoice,
      msgRes: {
        type: '',
        msg: ''
      }
    }
  },
  created () {
    this.packageDetail()
  },
  mounted () {
    const ELEMENT_TYPE = 'card'

    this.stripe = window.Stripe('pk_test_G1rWGnRBT4OayfHaxO377TV5')
    this.elements = this.stripe.elements()
    const element = this.elements.create(ELEMENT_TYPE, styles)
    element.mount('#payment-card')
    this.loading = false
    element.on('change', function (event) {
      // Disable the Pay button if there are no card details in the Element
      if (event.error) {
        document.querySelector('#submit').disabled = true
      } else {
        document.querySelector('#submit').disabled = false
      }

      document.querySelector('#card-error').textContent = event.error ? event.error.message : ''
    })
  },
  methods: {
    packageDetail () {
      getinvoiceDetail(this.$route.params.invoice).then(res => {
        if (!res.data.invoice.status) {
          this.transection = res.data.invoice
        } else {
          this.$router.push({ name: 'MyPackage' })
        }
      })
        .catch(err => {
          console.log(err)
          this.$router.push({ name: 'MyPackage' })
        })
    },
    toFixedAmt (amt) {
      return Number.parseFloat(amt).toFixed(2)
    },
    payment () {
      document.querySelector('#submit').disabled = true
      const invoiceId = this.invoice_id
      const router = this.$router
      const data = {
        name: this.userData.name,
        email: this.userData.email,
        amount: this.toFixedAmt(this.transection.amount)
      }
      paymentProcess(data).then(res => {
        console.log(res.data.clientSecret)
        const cardElement = this.elements.getElement('card')
        this.stripe
          .confirmCardPayment(res.data.clientSecret, {
            receipt_email: this.userData.email,
            payment_method: {
              card: cardElement
            }
          })
          .then(function (result) {
            console.log(result)
            if (result.error) {
              // Show error to your customer
              this.msgRes.type = 'danger'
              this.msgRes.msg = result.error.message
            } else {
              const paymentData = {
                payment_id: result.paymentIntent.id
              }
              pay_pendingInvoice(invoiceId, paymentData).then(res => {
                if (res.data.status == 'success') {
                  // msgRes_type = 'success'
                  // msgRes_msg = 'Update Payment status success'
                  router.push({ name: 'MyPackage' })
                } else {
                  // msgRes_type = 'danger'
                  // msgRes_msg = 'Update Payment status failed, please contact customer care'
                }
              })
            }
          })
      })
        .catch(err => {
          console.log(err)
          // this.msgRes.type = 'danger'
          // this.msgRes.msg = err.response.data.message
        })
    }
  }
}
</script>
<style lang="scss" scoped>
#paymentpage{

table.table.mb-0.w-50.text-center {
    margin: 0 auto !important;
}

div#payment-card {
    margin: 0 auto;
    margin-top: 29px;
}

th {
    text-align: left !important;
}

td {
    text-align: right !important;
}
@media screen and (max-width: 480px) {
.w-50 {
    width: 100%!important;
    margin-top: 8px;
}
}

}
</style>
