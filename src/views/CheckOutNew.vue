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
                        <div class="cart-details1 shadow bg-white stick-to-content1 mb-4">
                            <div class="bg-dark dark p-4">
                            <div class="row">
                              <div class="col-md-6">
                                <h5 class="mb-0">You order</h5>
                              </div>
                              <div class="col-md-6 float-right">
                                <a data-toggle="modal" class="action-icon ml-5" @click="editCart"><i class="ti ti-pencil"></i> Edit order</a>
                              </div>
                              </div>
                            </div>
                            <table class="cart-table">
                                <tr>
                                <td class="title">
                                        <span class="name"><a href="#" data-toggle="modal"></a></span>
                                        <!--<span class="caption text-muted">26”, deep-pan, thin-crust</span>-->
                                    </td>
                                    <td class="price"></td>
                                    <td class="price"></td>
                                    <td class="price"></td>
                                    </tr>

                            </table>
                            <div class="cart-summary">
                                <div class="row">
                                    <div class="col-7 text-right text-muted">Order total:</div>
                                    <div class="col-5"><strong>+$<span class="cart-products-total">0</span></strong></div>
                                </div>
                                <div class="row">
                                    <div class="col-7 text-right text-muted">Discount:</div>
                                    <div class="col-5"><strong>-$<span class="cart-products-total">0</span></strong></div>
                                </div>
                                <div class="row">
                                    <div class="col-7 text-right text-muted">Delivery:</div>
                                    <div class="col-5"><strong>+$<span class="cart-delivery">0</span></strong></div>
                                </div>
                                <div class="row">
                                    <div class="col-7 text-right text-muted">Tip:</div>
                                    <div class="col-5"><strong>+$<span class="cart-delivery">0</span></strong></div>
                                </div>
                               <div class="row">
                                    <div class="col-7 text-right text-muted">Total Tax:</div>
                                    <div class="col-5">
                                        <strong>+$<span class="cart-delivery">0</span></strong>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-7 text-right text-muted">Wallet:</div>
                                    <div class="col-5">
                                        <strong>-$<span class="cart-delivery">0</span></strong>
                                    </div>
                                </div>
                                <hr class="hr-sm">
                                <div class="row text-lg">
                                    <div class="col-7 text-right text-muted">Total:</div>
                                    <div class="col-5">
                                      <strong>$
                                        <span class="cart-total">
                                        0
                                        </span>
                                      </strong>
                                    </div>
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
                                        <select class="form-control">
                                            <option selected disabled>-- Select Way --</option>
                                            <option value="2">
                                             Self PickUp
                                            </option>
                                            <option value="1">
                                              Delivery
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div class="mt-3">
                                  <h4>PickUp your order from restaurant address</h4>
                                </div>
                                <div
                                  class="list-group-item list-group-item-action active bg-primary"
                                  aria-current="true">
                                  <div class="d-flex w-100 justify-content-between">
                                    <h5 class="mb-1 font-weight-bold">Home<i class="fa fa-star text-white ml-1" aria-hidden="true"></i></h5>
                                  </div>
                                  <p class="mb-1">
                                   Home Address
                                  </p>
                                </div>
                                <div
                                  class="list-group-item list-group-item-action mt-4"
                                  aria-current="true"
                                >
                                <span class="text-danger">Address</span>
                                <span class="float-right"><router-link class="text-primary" to="/checkoutnew">Add or select address</router-link></span>
                                  <div class="d-flex w-100 justify-content-between">
                                    <h5 class="mb-1 font-weight-bold">Home<i class="fa fa-star text-warning ml-1" aria-hidden="true"></i></h5>
                                  </div>
                                </div>
                            </div>

                            <!-- Modal -->
                            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                              <div class="modal-dialog modal-lg" role="document">
                                <div class="modal-content">
                                  <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Change Address</h5>
                                    <span type="button" class="fa fa-close" data-dismiss="modal" aria-label="Close">
                                    </span>
                                  </div>
                                  <div class="modal-body">
                                    <div class="row">
                                      <div class="col-md-12">
                                        <div class="list-group overflow">
                                          <div>
                                              <div
                                                class="list-group-item list-group-item-action 1"
                                                aria-current="true"
                                              >
                                                <div class="d-flex w-100 justify-content-between">
                                                  <h5 class="mb-1 font-weight-bold">
                                                  <a class="cursor-pointer">Address</a>
                                                  </h5>
                                                </div>
                                                <p class="mb-1">
                                                  Address
                                                </p>
                                              </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <h4 class="border-bottom pb-4"><i class="ti ti-user mr-3 text-primary"></i>Basic information</h4>
                            <div class="row mb-5">
                                <div class="form-group col-sm-12">
                                    <label>Name:</label>
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                            <div class="row mb-5">
                                <div class="form-group col-sm-6">
                                    <label>Phone number:</label>
                                    <input type="text" class="form-control">
                                </div>
                                <div class="form-group col-sm-6">
                                    <label>E-mail address:</label>
                                    <input type="email" class="form-control">
                                </div>
                            </div>

                            <h4 class="border-bottom pb-4"><i class="ti ti-package mr-3 text-primary"></i>Tip/ Coupon</h4>
                            <div class="mb-5">
                              <div class="row">
                                <div class="form-group col-sm-6">
                                    <label>Coupon Code</label>
                                    <div class="form-group">
                                       <div class="input-group mb-3">
                                          <input type="text" placeholder="Enter coupon code" class="form-control">
                                          <div class="input-group-append">
                                            <button class="input-group-text bg-primary text-white">Verify</button>
                                          </div>
                                      </div>
                                      <span class="text-danger">Discount Limit </span>
                                      <span class="text-success"> Coupon Applied</span>
                                    </div>
                                </div>
                              </div>

                                <div class="row">
                                  <div class="col-md-12">
                                    <label>Tips</label>
                                    <ul class="p-0">
                                    <li class="tipValue bg-success text-white">Tip</li>
                                    <li class="tipValue bg-success text-white">Custom</li>
                                    </ul>
                                        <div class="form-group">
                                          <input type="number" maxlength="6" class="form-control">
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
                                <div class="col-md-12 form-group">
                                <div class="row">
                                    <label class="custom-control custom-radio">
                                        <input type="radio" name="payment_type" value="wallet">
                                        <span class="custom-control-indicator"></span>
                                        <span class="custom-control-description ml-2">Wallet Balance <br/></span>
                                    </label>
                                    <label class="custom-control custom-radio">
                                        <input type="radio" name="payment_type" checked  value="COD">
                                        <span class="custom-control-indicator"></span>
                                        <span class="custom-control-description ml-2">COD</span>
                                    </label>
                                    <label class="custom-control custom-radio">
                                        <input type="radio" name="payment_type" checked  value="CARD">
                                        <span class="custom-control-indicator"></span>
                                        <span class="custom-control-description ml-2">Card/Online Payment</span>
                                    </label>
                                  </div>
                               <!-- <div v-if="paymentForm == 1">
                                  <div class="bg-white mt-5">
                                      <h4 class="border-bottom pb-4"><i class="ti ti-package mr-3 text-primary"></i>Card Details</h4>

                                      <div class="row mb-5">
                                          <div class="form-group col-sm-12">
                                              <label>Card Number:</label>
                                              <input type="text" class="form-control" placeholder="Enter card number" v-model="cardNumber">
                                              <span class="text-danger">{{ error.cardNumber }}</span>
                                          </div>
                                      </div>
                                      <div class="row mb-5">
                                          <div class="form-group col-sm-12">
                                              <label>Card Holder's Name:</label>
                                              <input type="text" class="form-control" placeholder="Enter card holder name" v-model="cardHolderName">
                                              <span class="text-danger">{{ error.cardHolderName }}</span>
                                          </div>
                                      </div>
                                      <div class="row mb-5">
                                          <div class="form-group col-sm-8">
                                              <label>Card Expiry Date:</label>
                                              <input type="text" class="form-control" placeholder="Enter card expiry date" v-model="cardExpiryDate">
                                              <span class="text-danger">{{ error.cardExpiryDate }}</span>
                                          </div>
                                          <div class="form-group col-sm-4">
                                              <label>CVV:</label>
                                              <input type="password" class="form-control" placeholder="Enter CVV" v-model="cvv">
                                              <span class="text-danger">{{ error.cvv }}</span>
                                          </div>
                                      </div>
                                      <div class="row mb-5">
                                        <div class="form-group col-sm-6">
                                            <label>Card Type</label>
                                              <div class="select-container">
                                                  <select class="form-control" v-model="cardType">
                                                      <option selected disabled>-- Card Type --</option>
                                                      <option value="VISA">
                                                      VISA
                                                      </option>
                                                      <option value="DISCOVER">
                                                        DISCOVER
                                                      </option>
                                                  </select>
                                              </div>
                                              <span class="text-danger">{{ error.cardType }}</span>
                                        </div>
                                        <div class="form-group col-sm-6 text-center">
                                          <button class="btn btn-primary btn-md" style="margin-top:38px;" @click="payment1"><span>Pay Now !</span></button>
                                        </div>
                                      </div>
                                  </div>
                                </div>-->
                                <div>
                                  <button class="btn btn-primary btn-md" style="margin-top:38px;"><span>Go to payment page</span></button>
                                </div>
                              </div>
                            </div>

                        </div>
                        <div class="text-center mt-5">
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

export default {
  watch: {
  },
  components: { Headbar, Footer },
  name: 'checkout',
  methods: {
    editCart () {
      this.$router.push('/editCart')
    }
  }
}
</script>

<style lang="scss" scoped>
.cursor-pointer{
  cursor: pointer !important;
}
#checkout{
  li.tipValue {
    list-style: none;
    display: inline-block;
    padding: 5px 20px;
    border: 1px solid #ccc;
    margin: 5px 10px;
    border-radius: 10px;
    cursor: pointer;
}
}
</style>
