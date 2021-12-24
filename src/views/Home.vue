<template>
  <div class="home">
    <Header></Header>
    <section class="section section-main section-main-2 bg-dark dark">
      <div id="section-main-2-slider" class="section-slider inner-controls">
        <!-- Slide -->
        <div class="slide">
          <div class="bg-image zooming">
            <img
              src="http://assets.suelo.pl/soup/img/photos/slider-burger_dark.jpg"
              alt=""
            />
          </div>
          <div class="container v-center">
            <h1 class="display-2 mb-2">Get 10% off coupon</h1>
            <h4 class="text-muted mb-5">and use it with your next order!</h4>
            <a href="page-offers.html" class="btn btn-outline-primary btn-lg"
              ><span>Get it now!</span></a
            >
          </div>
        </div>
        <!-- Slide -->
        <div class="slide">
          <div class="bg-image zooming">
            <img
              src="http://assets.suelo.pl/soup/img/photos/slider-dessert_dark.jpg"
              alt=""
            />
          </div>
          <div class="container v-center">
            <h1 class="display-2 mb-2">Delicious Desserts</h1>
            <h4 class="text-muted mb-5">Order it online even now!</h4>
            <a
              href="menu-list-collapse.html"
              class="btn btn-outline-primary btn-lg"
              ><span>Order now!</span></a
            >
          </div>
        </div>
        <!-- Slide -->
        <div class="slide">
          <div class="bg-image zooming">
            <img
              src="http://assets.suelo.pl/soup/img/photos/slider-pasta_dark.jpg"
              alt=""
            />
          </div>
          <div class="container v-center">
            <h4 class="text-muted">New product!</h4>
            <h1 class="display-2">Boscaiola Pasta</h1>
            <div class="btn-group">
              <button
                class="btn btn-outline-primary btn-lg"
                data-action="open-cart-modal"
                data-id="1"
              >
                <span>Add to cart</span>
              </button>
              <span class="price price-lg">from $9.98</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Section - About -->
    <section class="section section-bg-edge">
      <div class="image right col-md-6 offset-md-6">
        <div class="bg-image">
          <img
            src="http://assets.suelo.pl/soup/img/photos/bg-burger.jpg"
            alt=""
          />
        </div>
      </div>

      <div class="container">
        <div class="col-lg-5 col-md-9">
          <div class="rate mb-5 rate-lg">
            <i class="fa fa-star active"></i><i class="fa fa-star active"></i
            ><i class="fa fa-star active"></i><i class="fa fa-star active"></i
            ><i class="fa fa-star"></i>
          </div>
          <h1 class="display-2">Why <strong>our</strong> Burgers?</h1>
          <p class="lead text-muted mb-5">
            Donec a eros metus. Vivamus volutpat leo dictum risus ullamcorper
            condimentum. Cras sollicitudin varius condimentum. Praesent a dolor
            sem....
          </p>
          <!-- Feature -->
          <div class="feature feature-1">
            <div class="feature-icon icon icon-primary">
              <i class="ti ti-desktop"></i>
            </div>
            <div class="feature-content">
              <h4 class="mb-2">Online Order</h4>
              <p class="text-muted mb-0">
                Vivamus volutpat leo dictum risus ullamcorper condimentum.
              </p>
            </div>
          </div>
          <!-- Feature -->
          <div class="feature feature-1">
            <div class="feature-icon icon icon-primary">
              <i class="ti ti-heart"></i>
            </div>
            <div class="feature-content">
              <h4 class="mb-2">Perfect Taste</h4>
              <p class="text-muted mb-0">
                Vivamus volutpat leo dictum risus ullamcorper condimentum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section - Menu -->
    <section class="section cover protrude pull-up-10">
      <div
        class="menu-sample-carousel carousel inner-controls"
        data-slick='{
                "dots": true,
                "slidesToShow": 3,
                "slidesToScroll": 1,
                "infinite": true,
                "responsive": [
                    {
                        "breakpoint": 991,
                        "settings": {
                            "slidesToShow": 2,
                            "slidesToScroll": 1
                        }
                    },
                    {
                        "breakpoint": 690,
                        "settings": {
                            "slidesToShow": 1,
                            "slidesToScroll": 1
                        }
                    }
                ]
            }'
      >
        <!-- Menu Sample -->
        <div class="menu-sample slider-img">
          <a href="#">
            <img
              src="http://assets.suelo.pl/soup/img/photos/menu-sample-burgers.jpg"
              alt=""
              class="image"
            />
            <h3 class="title">Burgers</h3>
          </a>
        </div>
        <!-- Menu Sample -->
        <div class="menu-sample slider-img">
          <a href="#">
            <img
              src="http://assets.suelo.pl/soup/img/photos/menu-sample-pizza.jpg"
              alt=""
              class="image"
            />
            <h3 class="title">Pizza</h3>
          </a>
        </div>
        <!-- Menu Sample -->
        <div class="menu-sample slider-img">
          <a href="#">
            <img
              src="http://assets.suelo.pl/soup/img/photos/menu-sample-sushi.jpg"
              alt=""
              class="image"
            />
            <h3 class="title">Sushi</h3>
          </a>
        </div>
        <!-- Menu Sample -->
        <div class="menu-sample slider-img">
          <a href="#">
            <img
              src="http://assets.suelo.pl/soup/img/photos/menu-sample-pasta.jpg"
              alt=""
              class="image"
            />
            <h3 class="title">Pasta</h3>
          </a>
        </div>
        <!-- Menu Sample -->
        <div class="menu-sample slider-img">
          <a href="#">
            <img
              src="http://assets.suelo.pl/soup/img/photos/menu-sample-dessert.jpg"
              alt=""
              class="image"
            />
            <h3 class="title">Desserts</h3>
          </a>
        </div>
        <!-- Menu Sample -->
        <div class="menu-sample slider-img">
          <a href="#">
            <img
              src="http://assets.suelo.pl/soup/img/photos/menu-sample-drinks.jpg"
              alt=""
              class="image"
            />
            <h3 class="title">Drinks</h3>
          </a>
        </div>
      </div>
    </section>
    <!-- Section - Steps -->
    <section class="section bg-dark dark">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <!-- Step -->
            <div class="feature feature-1">
              <div class="feature-icon icon icon-primary">
                <i class="ti ti-shopping-cart"></i>
              </div>
              <div class="feature-content">
                <h4 class="mb-2 text-white font-weight-bold">
                  <a href="#">Pick a dish</a>
                </h4>
                <p class="text-muted mb-0">
                  Vivamus volutpat leo dictum risus ullamcorper condimentum.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <!-- Step -->
            <div class="feature feature-1">
              <div class="feature-icon icon icon-primary">
                <i class="ti ti-wallet"></i>
              </div>
              <div class="feature-content">
                <h4 class="mb-2 text-white font-weight-bold">Make a payment</h4>
                <p class="text-muted mb-0">
                  Vivamus volutpat leo dictum risus ullamcorper condimentum.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <!-- Step -->
            <div class="feature feature-1">
              <div class="feature-icon icon icon-primary">
                <i class="ti ti-package"></i>
              </div>
              <div class="feature-content">
                <h4 class="mb-2 text-white font-weight-bold">
                  Recieve your food!
                </h4>
                <p class="text-muted mb-3">
                  Vivamus volutpat leo dictum risus ullamcorper condimentum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Section - Menu Sample -->
    <section class="section right bg-light">
      <div class="container">
        <div class="row no-gutters justify-content-center">
          <div class="col-md-8" role="tablist">
            <h1 class="mb-6 text-center"><strong>Our</strong> Bestsellers</h1>
            <!-- Menu Category / Burgers -->
            <div id="Burgers" class="menu-category">
              <div class="menu-category-title" role="tab">
                <div class="bg-image">
                  <img
                    src="http://assets.suelo.pl/soup/img/photos/menu-title-burgers.jpg"
                    alt=""
                  />
                </div>
                <h2 class="title">Burgers</h2>
              </div>
              <div id="menuBurgersContent" class="menu-category-content">
                <!-- Menu Item -->
                <div class="menu-item menu-list-item">
                  <div class="row align-items-center">
                    <div class="col-sm-6 mb-2 mb-sm-0">
                      <h6 class="mb-0">Beef Burger</h6>
                      <span class="text-muted text-sm"
                        >Beef, cheese, potato, onion, fries</span
                      >
                    </div>
                    <div class="col-sm-6 text-sm-right">
                      <span class="text-md mr-4"
                        ><span class="text-muted">from</span> $<span
                          data-product-base-price
                          >9.00</span
                        ></span
                      >
                      <button
                        class="btn btn-outline-secondary btn-sm"
                        data-action="open-cart-modal"
                        data-id="1"
                      >
                        <span>Add to cart</span>
                      </button>
                    </div>
                  </div>
                </div>
                <!-- Menu Item -->
                <div class="menu-item menu-list-item">
                  <div class="row align-items-center">
                    <div class="col-sm-6 mb-2 mb-sm-0">
                      <h6 class="mb-0">Broccoli</h6>
                      <span class="text-muted text-sm"
                        >Chicken, cheese, potato, onion, fries</span
                      >
                    </div>
                    <div class="col-sm-6 text-sm-right">
                      <span class="text-md mr-4"
                        ><span class="text-muted">from</span> $<span
                          data-product-base-price
                          >9.00</span
                        ></span
                      >
                      <button
                        class="btn btn-outline-secondary btn-sm"
                        data-action="open-cart-modal"
                        data-id="1"
                      >
                        <span>Add to cart</span>
                      </button>
                    </div>
                  </div>
                </div>
                <!-- Menu Item -->
                <div class="menu-item menu-list-item">
                  <div class="row align-items-center">
                    <div class="col-sm-6 mb-2 mb-sm-0">
                      <h6 class="mb-0">Chicken Burger</h6>
                      <span class="text-muted text-sm"
                        >Chicken, cheese, potato, onion, fries</span
                      >
                    </div>
                    <div class="col-sm-6 text-sm-right">
                      <span class="text-md mr-4"
                        ><span class="text-muted">from</span> $<span
                          data-product-base-price
                          >9.00</span
                        ></span
                      >
                      <button
                        class="btn btn-outline-secondary btn-sm"
                        data-action="open-cart-modal"
                        data-id="1"
                      >
                        <span>Add to cart</span>
                      </button>
                    </div>
                  </div>
                </div>
                <!-- Menu Item -->
                <div class="menu-item menu-list-item">
                  <div class="row align-items-center">
                    <div class="col-sm-6 mb-2 mb-sm-0">
                      <h6 class="mb-0">Creste di Galli</h6>
                      <span class="text-muted text-sm"
                        >Pasta, cheese, potato, onion, fries</span
                      >
                    </div>
                    <div class="col-sm-6 text-sm-right">
                      <span class="text-md mr-4"
                        ><span class="text-muted">from</span> $<span
                          data-product-base-price
                          >9.00</span
                        ></span
                      >
                      <button
                        class="btn btn-outline-secondary btn-sm"
                        data-action="open-cart-modal"
                        data-id="1"
                      >
                        <span>Add to cart</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/views/layouts/Header.vue";
import Footer from "@/views/layouts/Footer.vue";
import {} from "bootstrap-vue";
export default {
  props: {},
  name: "Home",
  components: {
    Header,
    Footer,
  },
  data() {
    return {};
  },
};
</script>
<style>
h1.mb-0 {
  color: #383c40;
  font-family: Helvetica Neue, Raleway, sans-serif;
}
h4 {
  color: #383c40;
  font-family: Helvetica Neue, Raleway, sans-serif;
}
.bg-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 0;
}
.modal-header > .close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 2;
}
.modal-header {
  width: 100%;
  border-bottom: 1px solid transparent;
}
.header {
  width: 100%;
  border: none !important;
  background-image: url("../assets/burges.jpg");
  height: 180px;
  background-size: cover;
}
h4.modal-title {
  color: white;
  font-size: 30px;
  position: relative;
}
button.close {
  color: white;
}
a.btn.btn-link {
  text-align: left !important;
  position: relative;
  width: 100%;
}
a.btn.btn-link:after {
  position: absolute;
  top: 9px;
  font-size: 0.8em;
  font-family: "themify-icons";
  content: "\e62a";
  text-align: left !important;
  left: 95%;
}
a.btn.btn-link {
  bottom: 11px;
}
h5.mb-0 {
  height: 15px;
}
a.btn.btn-outline-secondary.btn-md {
  width: 120px !important;
  height: auto;
  padding: 13px !important;
  border: 2px solid #000;
}
li.has-dropdown a {
  color: #383c40 !important;
}
.module.left a {
  width: 112px;
  margin: 0px;
}
a.module.module-cart.right {
  color: #723c40;
}
a.menu-link {
  color: #fff;
}
h5.title {
  font-size: 20px;
  font-weight: 600;
  color: #343a40;
}
span.name a {
  color: #383c40;
  font-weight: 800;
}
.cart-table .price {
  font-weight: 500;
  text-align: right;
  width: 95px;
}
.cart-table .price {
  font-weight: 500;
  text-align: right;
  width: 95px;
}
a.panel-cart-action.btn.btn-secondary.btn-block.btn-lg {
  padding: 22px;
  background: #343a40;
}
a.panel-cart-action.btn.btn-secondary.btn-block.btn-lg {
  padding: 22px;
  background: #343a40;
}
</style>
