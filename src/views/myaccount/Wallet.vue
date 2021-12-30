<template>
  <div id="checkout">
    <Headbar></Headbar>
    <!-- Page Title -->
    <div class="page-title">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h1 class="mb-0">My Wallet</h1>
            <h4 class="text-muted mb-0">
              Some informations about our restaurant
            </h4>
          </div>
        </div>
      </div>
    </div>
    <!-- Section -->
    <section class="section bg-light">
      <div class="container text-left">
        <div class="row">
           <div class="col-xl-4 col-lg-5">
            <SildeBar></SildeBar>
          </div>
          <!-- <div class="col-xl-8 col-lg-7">
                        <div class="bg-white p-4 p-md-5 mb-4">
                            <h4 class="border-bottom pb-4"><i class="ti ti-user mr-3 text-primary"></i>My Account</h4>
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
                        </div>
                    </div> -->
          <div class="col-xl-8 col-lg-7">
            <div class="bg-white p-4 p-md-5 mb-4">
              <h4 class="border-bottom pb-4">
                <i
                  class="fa fa-shopping-bag text-primary mr-3"
                  aria-hidden="true"
                ></i>
                My Orders
              </h4>
              <div class="row mb-5">
              <div class="card-2">
  <div class="card__front card__part">
    <img class="card__front-square card__square" src="https://image.ibb.co/cZeFjx/little_square.png">
    <img class="card__front-logo card__logo" src="https://www.fireeye.com/partners/strategic-technology-partners/visa-fireeye-cyber-watch-program/_jcr_content/content-par/grid_20_80_full/grid-20-left/image.img.png/1505254557388.png">
    <p class="card_numer">**** **** **** 6258</p>
    <div class="card__space-75">
      <span class="card__label">Card holder</span>
      <p class="card__info">John Doe</p>
    </div>
    <div class="card__space-25">
      <span class="card__label">Expires</span>
            <p class="card__info">10/25</p>
    </div>
  </div>

  <div class="card__back card__part">
    <div class="card__black-line"></div>
    <div class="card__back-content">
      <div class="card__secret">
        <p class="card__secret--last">420</p>
      </div>
      <img class="card__back-square card__square" src="https://image.ibb.co/cZeFjx/little_square.png">
      <img class="card__back-logo card__logo" src="https://www.fireeye.com/partners/strategic-technology-partners/visa-fireeye-cyber-watch-program/_jcr_content/content-par/grid_20_80_full/grid-20-left/image.img.png/1505254557388.png">

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
import Headbar from '@/views/layouts/Headbar.vue'
import Footer from '@/views/layouts/Footer.vue'
import SildeBar from '@/views/myaccount/SildeBar.vue'
import //   BContainer,
//   BRow,
//   BCol,
//   BForm,
//   BFormGroup,
//   BFormInput
'bootstrap-vue'
export default {
  created () {},
  components: {
    Headbar,
    Footer,
    SildeBar
    // BContainer,
    // BRow,
    // BCol,
    // BForm,
    // BFormGroup,
    // BFormInput
  },

  name: 'Wallet'
}
</script>
<style>
</style>
