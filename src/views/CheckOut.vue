<template>
<div id="checkout">
<Headbar></Headbar>
      <!-- Page Title -->
        <div class="page-title">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <h1 class="mb-0">Checkout</h1>
                        <h4 class="text-muted mb-0">Some informations about our restaurant</h4>
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
                                <tr v-for="(it, index) in item" :key="index">
                                    <td class="title">
                                        <span class="name"><a href="#product-modal" data-toggle="modal">{{ it.name }}</a></span>
                                        <!--<span class="caption text-muted">26”, deep-pan, thin-crust</span>-->
                                    </td>
                                    <td class="price">${{ it.price }}</td>
                                    <!--<td class="actions">
                                        <a href="#product-modal" data-toggle="modal" class="action-icon"><i class="ti ti-pencil"></i></a>
                                        <a href="#" class="action-icon"><i class="ti ti-close"></i></a>
                                    </td>-->
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
                                <div class="row">
                                    <div class="col-7 text-right text-muted">Delivery:</div>
                                    <div class="col-5"><strong>+$<span class="cart-delivery">0.00</span></strong></div>
                                </div>
                               <div class="row">
                                    <div class="col-7 text-right text-muted">Total Tax({{ tipTax.taxPercentage.value }}%):</div>
                                    <div class="col-5">
                                        <strong>+$<span class="cart-delivery">{{ taxTotal }}</span></strong>
                                    </div>
                                </div>
                                <hr class="hr-sm">
                                <div class="row text-lg">
                                    <div class="col-7 text-right text-muted">Total:</div>
                                    <div class="col-5"><strong>$<span class="cart-total">{{ totalAmount.toFixed(2) }}</span></strong></div>
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
                            <h4 class="border-bottom pb-4"><i class="ti ti-user mr-3 text-primary"></i>Basic informations</h4>
                            <div class="row mb-5">
                                <div class="form-group col-sm-6">
                                    <label>Name:</label>
                                    <input type="text" class="form-control">
                                </div>
                                <div class="form-group col-sm-6">
                                    <label>Surename:</label>
                                    <input type="text" class="form-control">
                                </div>
                                <div class="form-group col-sm-6">
                                    <label>Street and number:</label>
                                    <input type="text" class="form-control">
                                </div>
                                <div class="form-group col-sm-6">
                                    <label>City:</label>
                                    <input type="text" class="form-control">
                                </div>
                                <div class="form-group col-sm-6">
                                    <label>Phone number:</label>
                                    <input type="text" class="form-control">
                                </div>
                                <div class="form-group col-sm-6">
                                    <label>E-mail address:</label>
                                    <input type="email" class="form-control">
                                </div>
                            </div>

                            <h4 class="border-bottom pb-4"><i class="ti ti-package mr-3 text-primary"></i>Pickup Address</h4>
                            <div class="row mb-5">
                                <!--<div class="form-group col-sm-6">
                                    <label>Select way</label>
                                    <div class="select-container">
                                        <select class="form-control">
                                            <option>Pickup</option>
                                            <option>In one hour</option>
                                            <option>In two hours</option>
                                        </select>
                                    </div>
                                </div>-->
                            </div>

                            <h4 class="border-bottom pb-4"><i class="ti ti-wallet mr-3 text-primary"></i>Payment</h4>
                            <div class="row text-lg">
                                <div class="col-md-4 col-sm-6 form-group">
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
                                </div>
                                <div class="col-md-4 col-sm-6 form-group">
                                    <label class="custom-control custom-radio">
                                        <input type="radio" name="payment_type" class="custom-control-input">
                                        <span class="custom-control-indicator"></span>
                                        <span class="custom-control-description">Cash</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="text-center">
                            <button class="btn btn-primary btn-lg"><span>Order now!</span></button>
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
import { getSettings } from '@/store/api'
import { getLocalStorage, tipTax } from '@/store/service'

export default {
  components: { Headbar, Footer },
  name: 'checkout',
  data () {
    return {
      item: [],
      tipTax: {
        tips: {},
        taxPercentage: {}
      },
      orderTotal: 0,
      taxes: [],
      taxTotal: 0,
      totalAmount: 0
    }
  },
  mounted () {
    this.getSetting()
    this.item = getLocalStorage('cart')
  },
  methods: {
    getSetting () {
      getSettings().then(res => {
        this.tipTax.taxPercentage = res.data[45]
        this.tipTax.tips = res.data[109]
        tipTax('taxes', JSON.stringify(this.tipTax))
        this.taxes = getLocalStorage('taxes')
        for (var i = 0; i < this.item.length; i++) {
          this.orderTotal += parseFloat(this.item[i].price)
        }
        this.taxTotal = parseFloat(this.orderTotal) * parseInt(this.taxes.taxPercentage.value) / 100
        this.totalAmount = Math.round(parseFloat(this.orderTotal)) + parseFloat(this.taxTotal)
      })
    }
  }
}
</script>
