<template>
  <div id="manage-address">
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
                <div class="col-md-12">
                  <div class="row">
                    <div class="col-md-6">
                      <p class="heading-text">Save Address</p>
                    </div>
                    <div class="col-md-6 text-right">
                      <button class="btn btn-primary btn-sm">
                        <span><router-link to='/addmanageaddress'>
                        Add Address   </router-link></span>
                      </button>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="list-group">
                        <a
                          href="#"
                          class="list-group-item list-group-item-action active"
                          aria-current="true"
                        >
                          <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1 font-weight-bold">Home</h5>
                            <small style="font-size:20px; position: relative; top: 14px;" class="text-white"><i class="fa fa-trash-o" aria-hidden="true"></i></small>
                          </div>
                          <p class="mb-1">
                            860 Century St James Manitoba R3H 0M5
                          </p>
                        </a>
                        <a
                          href="#"
                          class="list-group-item list-group-item-action"
                        >
                          <div class="d-flex w-100 justify-content-between">
                             <h5 class="mb-1 font-weight-bold">Work</h5>
                           <small style="font-size:20px; position: relative; top: 14px;" class="text-danger"><i class="fa fa-trash-o" aria-hidden="true"></i></small>
                          </div>
                          <p class="mb-1">
                            Giersstrasse 23 Paderborn North Rhine-Westphalia
                          </p>
                        </a>
                      </div>
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

  name: 'ManageAddress'
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
.list-group-item.active {
    z-index: 2;
    color: #fff;
    background-color: #ddae71;
    border-color: #ddae71;
}
</style>
