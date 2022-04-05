<template>
  <div id="footer">
    <!-- Footer -->
    <footer id="footer" class="bg-dark dark">
      <div class="container">
        <!-- Footer 1st Row -->
        <div class="footer-first-row row">
          <div class="col-lg-3 text-left">
            <a href="#">
              <img alt="Vue logo" class="footer-logo" src="@/assets/logo.svg"
            /></a>
            <p>Tandoori Nights reimagine the wonders of Canadian fare in a space that evokes a bygone era of a boisterous yet elegant Canada—all within the heart of Calgary City.</p>
          </div>
          <div class="col-lg-1"></div>
          <div class="col-lg-4 col-md-6 text-left">
            <h5 class="text-light">Contact</h5>
            <ul class="list-posts">
              <li>
                <a href="#" class="title"
                  >101- 4851 Westwinds Dr NE, Calgary, T3J 4L4</a
                >
                <br>
                <p> Follow Us On &nbsp;
                <a
              href="https://www.facebook.com/tandoorinightsca/"
              class="icon icon-social icon-circle icon-sm icon-facebook"
              ><i class="fa fa-facebook"></i
            ></a>
            &nbsp;
            <a
              href="https://www.instagram.com/tandoorinightscalgary/"
              class="icon icon-social icon-circle icon-sm icon-instagram"
              ><i class="fa fa-instagram"></i
            ></a></p>
            <hr class="hr-md">
              <a>Queries/Support:</a>
               <a href="tel:+1-604-614-9324" class="title mt-3 mb-4"
                  >+1-604-614-9324</a
                >
                <a>Booking:</a>
                <a href="tel:+1-403-568-9858" class="title mt-2 mb-4"
                  >+1-403-568-9858</a
                >
                <a>E-mail:</a>
                <a href="tel:+1-403-568-9858" class="title mt-2"
                  >info@tandoorinights.ca</a
                >
                <hr class="hr-md">
              </li>
              <h5 class="text-light">Timmings</h5>
              <li>
            <p>Wednesday-Monday 11am–10pm</p>
            <p>Tuesday-Closed</p>
            </li>
            </ul>
          </div>
          <div class="col-lg-4 col-md-6">
            <!-- <h5 class="text-light">Subscribe Us!</h5>
            <form
              action="//suelo.us12.list-manage.com/subscribe/post-json?u=ed47dbfe167d906f2bc46a01b&amp;id=24ac8a22ad"
              id="sign-up-form"
              class="sign-up-form validate-form mb-5"
              method="POST"
            >
              <div class="input-group form-footer">
                <input
                  name="EMAIL"
                  id="mce-EMAIL"
                  type="email"
                  class="form-control"
                  placeholder="Tap your e-mail..."
                  required
                />
                <span class="input-group-btn">
                  <button class="btn btn-footer btn-submit" type="submit">
                    <span class="description">Subscribe</span>
                    <span class="success">
                      <svg x="0px" y="0px" viewBox="0 0 32 32">
                        <path
                          stroke-dasharray="19.79 19.79"
                          stroke-dashoffset="19.79"
                          fill="none"
                          stroke="#FFFFFF"
                          stroke-width="2"
                          stroke-linecap="square"
                          stroke-miterlimit="10"
                          d="M9,17l3.9,3.9c0.1,0.1,0.2,0.1,0.3,0L23,11"
                        />
                      </svg>
                    </span>
                    <span class="error">Try again...</span>
                  </button>
                </span>
              </div>
            </form> -->
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2504.980454849165!2d-113.97040968401946!3d51.10882077957173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5371637ffd480cfb%3A0xbcc259dc49a97ae5!2s101%20Westwinds%20Dr%20NE%2C%20Calgary%2C%20AB%20T3J%205H3%2C%20Canada!5e0!3m2!1sen!2sin!4v1640782046742!5m2!1sen!2sin" width="300px" height="300px" style="border:0;" allowfullscreen="" loading="lazy"></iframe>

          </div>
        </div>
        <!-- Footer 2nd Row -->
        <div class="footer-second-row">
        <div class="row">
        <div class="col-md-6"><span class="text-muted"
            >Copyright Tandoori Night 2022 ©. Made by <a href="https://tngwebsolutions.ca/">T&G Web Solutions Ltd.</a></span
          ></div>
        <div class="col-md-6 text-muted text-right"><router-link to="/privacypolicy">Privacy Policy</router-link></div>
        </div>

        </div>
      </div>

      <!-- Back To Top -->
      <button id="back-to-top" class="back-to-top">
        <i class="ti ti-angle-up"></i>
      </button>
    </footer>
    <!-- Footer / End -->

    <!-- Modal / Product -->
    <div class="modal fade product-modal" id="product-modal" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header modal-header-lg dark bg-dark">
            <div class="bg-image">
              <img
                src="http://assets.suelo.pl/soup/img/photos/modal-add.jpg"
                alt=""
              />
            </div>
            <h4 class="modal-title">Specify your dish</h4>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <i class="ti ti-close"></i>
            </button>
          </div>
          <div class="modal-product-details">
            <div class="row align-items-center">
              <div class="col-9">
                <h6 class="mb-1 product-modal-name">Boscaiola Pasta</h6>
                <span class="text-muted product-modal-ingredients"
                  >Pasta, Cheese, Tomatoes, Olives</span
                >
              </div>
              <div class="col-3 text-lg text-right">
                $<span class="product-modal-price"></span>
              </div>
            </div>
          </div>
          <div class="modal-body panel-details-container">
            <!-- Panel Details / Size -->
            <div class="panel-details panel-details-size">
              <h5 class="panel-details-title">
                <label class="custom-control custom-radio">
                  <input
                    name="radio_title_size"
                    type="radio"
                    class="custom-control-input"
                  />
                  <span class="custom-control-indicator"></span>
                </label>
                <a href="#panel-details-sizes-list" data-toggle="collapse"
                  >Size</a
                >
              </h5>
              <div id="panel-details-sizes-list" class="collapse show">
                <div class="panel-details-content">
                  <div class="product-modal-sizes">
                    <div class="form-group">
                      <label class="custom-control custom-radio">
                        <input
                          name="radio_size"
                          type="radio"
                          class="custom-control-input"
                          checked
                        />
                        <span class="custom-control-indicator"></span>
                        <span class="custom-control-description"
                          >Small - 100g ($9.99)</span
                        >
                      </label>
                    </div>
                    <div class="form-group">
                      <label class="custom-control custom-radio">
                        <input
                          name="radio_size"
                          type="radio"
                          class="custom-control-input"
                        />
                        <span class="custom-control-indicator"></span>
                        <span class="custom-control-description"
                          >Medium - 200g ($14.99)</span
                        >
                      </label>
                    </div>
                    <div class="form-group">
                      <label class="custom-control custom-radio">
                        <input
                          name="radio_size"
                          type="radio"
                          class="custom-control-input"
                        />
                        <span class="custom-control-indicator"></span>
                        <span class="custom-control-description"
                          >Large - 350g ($21.99)</span
                        >
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Panel Details / Additions -->
            <div class="panel-details panel-details-additions">
              <h5 class="panel-details-title">
                <label class="custom-control custom-radio">
                  <input
                    name="radio_title_additions"
                    type="radio"
                    class="custom-control-input"
                  />
                  <span class="custom-control-indicator"></span>
                </label>
                <a
                  href="#panel-details-additions-content"
                  data-toggle="collapse"
                  >Additions</a
                >
              </h5>
              <div id="panel-details-additions-content" class="collapse">
                <div class="panel-details-content">
                  <!-- Additions List -->
                  <div class="row product-modal-additions">
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" />
                          <span class="custom-control-indicator"></span>
                          <span class="custom-control-description"
                            >Tomato ($1.29)</span
                          >
                        </label>
                      </div>
                      <div class="form-group">
                        <label class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" />
                          <span class="custom-control-indicator"></span>
                          <span class="custom-control-description"
                            >Ham ($1.29)</span
                          >
                        </label>
                      </div>
                      <div class="form-group">
                        <label class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" />
                          <span class="custom-control-indicator"></span>
                          <span class="custom-control-description"
                            >Chicken ($1.29)</span
                          >
                        </label>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" />
                          <span class="custom-control-indicator"></span>
                          <span class="custom-control-description"
                            >Cheese($1.29)</span
                          >
                        </label>
                      </div>
                      <div class="form-group">
                        <label class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" />
                          <span class="custom-control-indicator"></span>
                          <span class="custom-control-description"
                            >Bacon ($1.29)</span
                          >
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Panel Details / Other -->
            <div class="panel-details panel-details-form">
              <h5 class="panel-details-title">
                <label class="custom-control custom-radio">
                  <input
                    name="radio_title_other"
                    type="radio"
                    class="custom-control-input"
                  />
                  <span class="custom-control-indicator"></span>
                </label>
                <a href="#panel-details-other" data-toggle="collapse">Other</a>
              </h5>
              <div id="panel-details-other" class="collapse">
                <form action="#">
                  <textarea
                    cols="30"
                    rows="4"
                    class="form-control"
                    placeholder="Put this any other informations..."
                  ></textarea>
                </form>
              </div>
            </div>
          </div>
          <button
            type="button"
            class="modal-btn btn btn-secondary btn-block btn-lg"
            data-action="add-to-cart"
          >
            <span>Add to Cart</span>
          </button>
          <button
            type="button"
            class="modal-btn btn btn-secondary btn-block btn-lg"
            data-action="update-cart"
          >
            <span>Update</span>
          </button>
        </div>
      </div>
    </div>
    <!-- Panel Mobile -->
    <nav id="panel-mobile">
      <div class="module module-logo bg-dark dark">
        <a href="#">
          <img src="assets/img/logo-light.svg" alt="" width="88" />
        </a>
        <button class="close" data-toggle="panel-mobile">
          <i class="ti ti-close"></i>
        </button>
      </div>
      <nav class="module module-navigation"></nav>
      <div class="module module-social">
        <h6 class="text-sm mb-3">Follow Us!</h6>
        <a href="#" class="icon icon-social icon-circle icon-sm icon-facebook"
          ><i class="fa fa-facebook"></i
        ></a>
        <a href="#" class="icon icon-social icon-circle icon-sm icon-google"
          ><i class="fa fa-google"></i
        ></a>
        <a href="#" class="icon icon-social icon-circle icon-sm icon-twitter"
          ><i class="fa fa-twitter"></i
        ></a>
        <a href="#" class="icon icon-social icon-circle icon-sm icon-youtube"
          ><i class="fa fa-youtube"></i
        ></a>
        <a href="#" class="icon icon-social icon-circle icon-sm icon-instagram"
          ><i class="fa fa-instagram"></i
        ></a>
      </div>
    </nav>
    <div class="footer_cart" @click="openCart()">
      <div class="footer_cart_icon">
        <span class="notification d-block" v-if="item">{{ item?item.length:0 }}</span>
          <i class="ti ti-shopping-cart"></i>
      </div>
  </div>
  </div>
</template>
<script>
import { getLocalStorage } from '@/store/service'
export default {
  props: ['newCart'],
  data () {
    return {
      item: []
    }
  },
  watch: {
    newCart () {
      if (this.newCart) {
        this.item = this.newCart
      }
    }
  },
  mounted () {
    this.showItem()
  },
  methods: {
    showItem () {
      this.user = getLocalStorage('userData')
      this.item = getLocalStorage('cart')
    },
    openCart () {
      if (this.item.length > 0) {
        this.$router.push('/checkout')
      }
    }
  }
}
</script>
<style>
.footer_cart {
  position: fixed;
    bottom: 40px;
    left: 80px;
    padding: 10px 17px;
    border: 2px solid #e26f2f;
    border-radius: 50px;
    background: #606467;
    cursor: pointer;
}
.footer_cart_icon{
  color: #fff;
  font-size: 20px;
}
ul.list-posts li a {
  color: white;
}
.btn-footer {
  border-color: #ddae71;
  background-color: #ddae71;
  color: #fff;
}
input#mce-EMAIL {
  background: transparent;
  padding: 22px;
  border: 1px solid #ffff;
}
button.btn.btn-footer.btn-submit {
  width: 133px;
  border-radius: 0px;
}
.footer-logo {
  width: 150px;
}
</style>
