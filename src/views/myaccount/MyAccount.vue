<template>
  <div id="checkout">
    <Headbar></Headbar>
    <!-- Page Title -->
    <div class="page-title">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <h1 class="mb-0">My Account</h1>
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
            <div class="cart-details shadow bg-white stick-to-content mb-4">
              <div class="bg-dark dark p-4">
                <h5 class="mb-0">My Account</h5>
              </div>
              <div class="cart-summary">
                <ul class="text-list">
                  <li class="text-link">
                    <i class="fa fa-home" aria-hidden="true"></i>
                    <a href="#" class="text-left active">Manage Address</a>
                  </li>
                  <li class="text-link">
                    <i class="fa fa-shopping-bag" aria-hidden="true"></i>
                    <a href="#" class="text-left">My Order</a>
                  </li>
                  <li class="text-link">
                    <i class="fa fa-money" aria-hidden="true"></i>
                    <a href="#" class="text-left">My Wallet</a>
                  </li>
                  <li class="text-link">
                    <i class="fa fa-question-circle" aria-hidden="true"></i
                    ><a href="#" class="text-left"> Help & FAQs</a>
                  </li>
                  <li class="text-link">
                    <i class="fa fa-sign-out" aria-hidden="true"></i
                    ><a href="#" class="text-left"> Logout</a>
                  </li>
                </ul>
              </div>
            </div>
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
                Manage Address
              </h4>
              <div class="row mb-5">
                <div class="col-md-6">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18876468.20030772!2d-113.72221585646197!3d54.7227051740391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b0d03d337cc6ad9%3A0x9968b72aa2438fa5!2sCanada!5e0!3m2!1sen!2sin!4v1640674008590!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    style="border: 0"
                    allowfullscreen=""
                    loading="lazy"
                  ></iframe>
                </div>

                <div class="col-md-6">
                <div class="row mb-3">
                <div class="col-md-6"><p class="heading-text">Save Address</p></div>
                <div class="col-md-6"><button class="btn btn-primary btn-sm"><span>Add Address</span></button></div>
                </div>
                <div class="row">
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Search for..."
                    />
                    <span class="input-group-btn">
                      <button class="btn btn-primary" type="button">
                        <span>Search</span>
                      </button>
                    </span>
                  </div>
                  <div class="display-list mt-2">
                     <p><a href="#"><i class="fa fa-location-arrow" aria-hidden="true"></i> Use My Current Location</a></p>
                  </div>
                  <div class="display-list">
                     <h4 class="font-weight-bold"><b>Add The Address</b></h4>
                  </div>
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Full Address"
                    />
                  </div>
                  <div class="input-group mt-2">
                   <select class="form-control form-select" aria-label="Default select example">
                      <option selected>Save Favorites Address</option>
                      <option value="1">Home</option>
                      <option value="2">Work</option>
                      <option value="3">Others</option>
                  </select>
                   </div>
                  <div class="col-md-12 mt-2">
                  <button class="btn btn-primary w-100"><span>Save Address</span></button>
                  </div>
                  </div>
                  <!-- /input-group -->
                </div>
                <!-- /.col-lg-6 -->
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
    Footer
    // BContainer,
    // BRow,
    // BCol,
    // BForm,
    // BFormGroup,
    // BFormInput
  },

  name: 'checkout'
}
</script>
<style>
ul.text-list li.text-link {
  list-style: none;
  font-size: 15px;
  line-height: 3;
}
ul.text-list {
  padding-left: 7px;
}
li.text-link i {
  color: #ddae71;
}
a.text-left {
  margin-left: 15px;
}
a.text-left.active {
  color: #ddae71;
  font-weight: 600 !important;
}
.heading-text {
    font-size: 18px;
    font-weight: 700;
    margin-top: 8px;
}
</style>
