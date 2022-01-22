<template>
<div id="checkout">
<Headbar></Headbar>
      <!-- Page Title -->
        <div class="page-title">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <h1 class="mb-0">Checkout</h1>
                        <h4 class="text-muted mb-0">Some information about our restaurant</h4>
                    </div>
                </div>
            </div>
        </div>
        <!-- Section -->
        <section class="section bg-light">

            <div class="container text-left">
                <div class="row">
                    <div class="col-xl-4 col-lg-5">
                        <div class="cart-details shadow bg-white stick-to-content mb-4">
                            <div class="bg-dark dark p-4"><h5 class="mb-0">You order</h5></div>
                            <table class="cart-table">
                                <tr v-for="(it, index) in submitOrder.order" :key="index">
                                    <td class="title">
                                        <span class="name"><a href="#product-modal" data-toggle="modal">{{ it?it.name:'' }}</a></span>
                                        <!--<span class="caption text-muted">26”, deep-pan, thin-crust</span>-->
                                    </td>
                                    <td class="price">{{ it.quantity }}x ${{ it?it.price:'' }}</td>
                                    <!--<td class="actions">
                                        <a href="#product-modal" data-toggle="modal" class="action-icon"><i class="ti ti-pencil"></i></a>
                                        <a href="#" class="action-icon"><i class="ti ti-close"></i></a>
                                    </td>-->
                                    <td class="actions">
                                        <!-- <a href="#product-modal" data-toggle="modal" class="action-icon"><i class="ti ti-pencil"></i></a> -->
                                        <a href="#" class="action-icon" @click="deleteItem(index)"><i class="ti ti-close"></i></a>
                                    </td>
                                </tr>
                                <!--<tr>
                                    <td class="title">
                                        <span class="name">Weekend 20% OFF</span>
                                    </td>
                                    <td class="price text-success">-$8.22</td>
                                    <td class="actions"></td>
                                </tr>-->
                            </table>
                            <div class="cart-summary">
                                <div class="row">
                                    <div class="col-7 text-right text-muted">Order total:</div>
                                    <div class="col-5"><strong>+$<span class="cart-products-total">{{ orderTotal }}</span></strong></div>
                                </div>
                                <div class="row" v-if="orderTotal >= 10 && discountPrice > 0">
                                    <div class="col-7 text-right text-muted">Discount:</div>
                                    <div class="col-5"><strong>-$<span class="cart-products-total">{{ discountPrice }}</span></strong></div>
                                </div>
                                <div class="row">
                                    <div class="col-7 text-right text-muted">Delivery:</div>
                                    <div class="col-5"><strong>+$<span class="cart-delivery">0.00</span></strong></div>
                                </div>
                               <div class="row">
                                    <div class="col-7 text-right text-muted">Total Tax({{ tipTax?tipTax.taxPercentage.value:'' }}%):</div>
                                    <div class="col-5">
                                        <strong>+$<span class="cart-delivery">{{ taxTotal?taxTotal.toFixed(2):0 }}</span></strong>
                                    </div>
                                </div>
                                <hr class="hr-sm">
                                <div class="row text-lg">
                                    <div class="col-7 text-right text-muted">Total:</div>
                                    <div class="col-5"><strong>$<span class="cart-total">{{ totalAmount?totalAmount.toFixed(2):0 }}</span></strong></div>
                                </div>
                            </div>
                            <div class="cart-empty">
                                <i class="ti ti-shopping-cart"></i>
                                <p>Your cart is empty...</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-8 col-lg-7 order-lg-first">
                        <div class="bg-white p-4 p-md-5 mb-4">
                            <h4 class="border-bottom pb-4"><i class="ti ti-package mr-3 text-primary"></i>Pickup Address</h4>
                            <div class="row mb-5">
                              <!-- <div v-for="(rest, index) in restaurants" :key="index">
                                <div class="jumbotron">{{ rest.name }}
                                    <div class="d-flex w-100 justify-content-between">
                                      <h5 class="mb-1 font-weight-bold">{{ rest.address }}<i class="fa fa-star text-white ml-1" aria-hidden="true"></i></h5>
                                    </div>
                                    <p class="mb-1">
                                    </p>
                                </div>
                              </div> -->
                                <div class="form-group col-sm-6">
                                    <label>Select way</label>
                                    <div class="select-container">
                                        <select class="form-control" v-model="submitOrder.delivery_type" @change="selectAdd($event)">
                                            <option selected disabled>-- Select Way --</option>
                                            <option value="2" v-if="storeInfo && storeInfo.delivery_type === 3 || storeInfo.delivery_type === 2">
                                             Self PickUp
                                            </option>
                                            <option value="1" v-if="storeInfo && storeInfo.delivery_type === 3 || storeInfo.delivery_type === 1">
                                              Delivery
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div class="mt-3" v-if="submitOrder.delivery_type == 2">
                                  <h4>PickUp your order from restaurant address</h4>
                                </div>
                                <div
                                  class="list-group-item list-group-item-action active bg-primary"
                                  aria-current="true" v-if="submitOrder.delivery_type == 2"
                                >
                                  <div class="d-flex w-100 justify-content-between">
                                    <h5 class="mb-1 font-weight-bold">{{ storeInfo?storeInfo.name:'' }}<i class="fa fa-star text-white ml-1" aria-hidden="true"></i></h5>
                                  </div>
                                  <p class="mb-1">
                                    {{ storeInfo?storeInfo.address:'' }}
                                  </p>
                                </div>
                            </div>
                            <h4 class="border-bottom pb-4"><i class="ti ti-user mr-3 text-primary"></i>Basic information</h4>
                            <div class="row mb-5">
                                <div class="form-group col-sm-12">
                                    <label>Name:</label>
                                    <input type="text" class="form-control" :value="form.name" disabled>
                                </div>
                            </div>
                            <div class="row mb-5">
                                <div class="form-group col-sm-6">
                                    <label>Phone number:</label>
                                    <input type="text" class="form-control" v-model="form.phone" disabled>
                                </div>
                                <div class="form-group col-sm-6">
                                    <label>E-mail address:</label>
                                    <input type="email" class="form-control" v-model="form.email" disabled>
                                </div>
                            </div>

                            <h4 class="border-bottom pb-4"><i class="ti ti-package mr-3 text-primary"></i>Tip/ Coupon</h4>
                            <div class="row mb-5">
                                <div class="form-group col-sm-6">
                                    <label>Coupon Code</label>
                                    <div class="form-group">
                                       <div class="input-group mb-3">
                                          <input type="text" placeholder="Enter coupon code" class="form-control" v-model="form.coupon">
                                          <div class="input-group-append">
                                            <button class="input-group-text bg-primary text-white" @click="couponVerify">Verify</button>
                                          </div>
                                      </div>
                                    </div>
                                </div>

                            </div>

                            <h4 class="border-bottom pb-4"><i class="ti ti-wallet mr-3 text-primary"></i>Payment</h4>
                            <div class="row text-lg">
                                <!-- <div class="col-md-4 col-sm-6 form-group">
                                    <label class="custom-control custom-radio">
                                        <input type="radio" name="payment_type" class="custom-control-input">
                                        <span class="custom-control-indicator"></span>
                                        <span class="custom-control-description">PayPal</span>
                                    </label>
                                </div>
                                <div class="col-md-4 col-sm-6 form-group">
                                    <label class="custom-control custom-radio">
                                        <input type="radio" name="payment_type" class="custom-control-input">
                                        <span class="custom-control-indicator"></span>
                                        <span class="custom-control-description">Credit Card</span>
                                    </label>
                                </div> -->
                                <div class="col-md-4 col-sm-6 form-group">
                                    <label class="custom-control custom-radio">
                                        <input type="radio" name="payment_type" checked  value="COD" v-model="submitOrder.method">
                                        <span class="custom-control-indicator"></span>
                                        <span class="custom-control-description ml-2">COD</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="text-center">
                            <button class="btn btn-primary btn-lg" @click="placeOrder"><span>Order now!</span></button>
                        </div>
                    </div>
                </div>
            </div>

        </section>

<Footer></Footer>
</div>
</template>
<script>
import Headbar from '@/views/layouts/Headbar.vue'
import Footer from '@/views/layouts/Footer.vue'
import { getSettings, getRestaurantInfo, placeOrder, checkCoupon } from '@/store/api'
import { getLocalStorage, tipTax } from '@/store/service'

export default {
  components: { Headbar, Footer },
  name: 'checkout',
  data () {
    return {
      showAddress: 0,
      form: {
        name: '',
        lastName: '',
        address: '',
        email: '',
        phone: '',
        street: '',
        coupon: ''
      },
      couponDetail: '',
      discountPrice: 0,
      discountPercent: 0,
      item: [],
      tipTax: {
        tips: {},
        taxPercentage: {}
      },
      user: {},
      orderTotal: 0,
      taxes: [],
      taxTotal: 0,
      totalAmount: 0,
      storeInfo: '',
      delivery_type: '',
      submitOrder: {
        order: [],
        coupon: '',
        quantity: 0,
        location: {
          lat: '',
          lng: '',
          address: '',
          house: null,
          tag: null
        },
        order_comment: null,
        total: {
          productQuantity: '',
          totalPrice: '',
          tip_to_driver: ''
        },
        method: 'COD',
        payment_token: '',
        delivery_type: '',
        partial_wallet: '',
        dis: '',
        pending_payment: ''
      }
    }
  },
  mounted () {
    if (getLocalStorage('cart')) {
      this.getSetting()
      this.getRestaurant()
      this.showItem()
      this.submitOrder.order = getLocalStorage('cart')
      this.getUserData()
    } else {
      this.$router.push('/menu')
    }
  },
  methods: {
    showItem () {
      this.item = getLocalStorage('cart')
    },
    deleteItem (index) {
      var storedNames = JSON.parse(localStorage.getItem('cart'))
      var name = []
      // var name = storedNames.slice(index, 1)
      // localStorage.setItem('cart', JSON.stringify(name))
      for (var j = 0; j < storedNames.length; j++) {
        if (j !== index) {
          name.push(storedNames[j])
        }
      }
      localStorage.removeItem('cart')
      localStorage.setItem('cart', JSON.stringify(name))
      this.showItem()
      console.log(this.item)
      this.orderTotal = 0
      this.taxTotal = 0
      this.totalAmount = 0
      this.getSetting()
    },
    getUserData () {
      this.form.name = getLocalStorage('userData').name
      // this.form.street = getLocalStorage('userData').default_address.house
      this.form.email = getLocalStorage('userData').email
      this.form.phone = getLocalStorage('userData').phone
      // this.form.address = getLocalStorage('userData').default_address.address
      this.delivery_type = getLocalStorage('userData').delivery_type

      // this.submitOrder.delivery_type = getLocalStorage('userData').delivery_type
      this.submitOrder.total.productQuantity = this.item.length
      // this.submitOrder.location.address = getLocalStorage('userData').default_address.address
      // this.submitOrder.location.house = getLocalStorage('userData').default_address.house
      // this.submitOrder.location.lat = getLocalStorage('userData').default_address.latitude
      // this.submitOrder.location.lng = getLocalStorage('userData').default_address.longitude
      // this.submitOrder.location.tag = getLocalStorage('userData').default_address.tag
    },
    selectAdd (event) {
      console.log(this.showAddress)
      if (event.target.value === '2') {
        this.showAddress = 1
      }
    },
    getRestaurant () {
      getRestaurantInfo().then(res => {
        console.log(res.data)
        this.storeInfo = res.data
      })
    },
    getSetting () {
      getSettings().then(res => {
        this.tipTax.taxPercentage = res.data[45]
        this.tipTax.tips = res.data[109]
        tipTax('taxes', JSON.stringify(this.tipTax))
        this.taxes = getLocalStorage('taxes')
        for (var i = 0; i < this.item.length; i++) {
          this.orderTotal += parseInt(this.item[i].quantity) * parseFloat(this.item[i].price)
        }
        this.taxTotal = (parseFloat(this.orderTotal) - parseFloat(this.discountPrice)) * parseInt(this.taxes.taxPercentage.value) / 100
        this.totalAmount = (parseFloat(this.orderTotal) - parseFloat(this.discountPrice)) + parseFloat(this.taxTotal)
        this.submitOrder.total.totalPrice = this.totalAmount
      })
    },
    couponVerify () {
      const data = {
        coupon: this.form.coupon,
        subTotal: this.orderTotal
      }
      checkCoupon(data).then(res => {
        console.log(res.data)
        if (res.data.success === false) {
          console.log('invalid Coupon')
        } else {
          this.couponDetail = res.data
          this.submitOrder.coupon = {
            code: res.data.code
          }
          if (res.data.discount_type === 'AMOUNT') {
            this.discountPrice = res.data.discount
          } else if (res.data.discount_type === 'PERCENTAGE') {
            this.discountPercent = res.data.discount
          }
          this.taxTotal = 0
          this.totalAmount = 0
          this.orderTotal = 0
          this.getSetting()
        }
      })
    },
    placeOrder () {
      console.log(this.submitOrder)
      placeOrder(this.submitOrder).then(res => {
        if (res.data.success === true) {
          localStorage.removeItem('cart')
        }
        this.$toast.success('Order place successfully')
        this.$router.push('/myorder')
      })
    }
  }
}
</script>
