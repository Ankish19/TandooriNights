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
              Some information about our restaurant
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
          <div class="col-xl-8 col-lg-7">
            <div class="bg-white p-4 p-md-5 mb-4">
                <h4 class="border-bottom pb-4"><i class="ti ti-user mr-3 text-primary"></i>My Account</h4>
                <form @submit.prevent="updateUser">
                  <div class="row mb-5">
                      <div class="form-group col-sm-6">
                          <label>Name:</label>
                          <input type="text" class="form-control" v-model="form.name" disabled>
                      </div>
                      <!-- <div class="form-group col-sm-6">
                          <label>Street and number:</label>
                          <input type="text" class="form-control" v-model="form.street">
                      </div>
                      <div class="form-group col-sm-6">
                          <label>City:</label>
                          <input type="text" class="form-control" v-model="form.city">
                      </div> -->
                      <div class="form-group col-sm-6">
                          <label>Phone number:</label>
                          <input type="text" class="form-control" v-model="form.phone" disabled>
                      </div>
                      <div class="form-group col-sm-6">
                          <label>E-mail address:</label>
                          <input type="email" class="form-control" v-model="form.email" disabled>
                      </div>
                  </div>
                  <!-- <div class="row">
                    <div class="col-md-6">
                        <button type="submit" class="btn btn-primary">
                          Save Changes
                        </button>
                    </div>
                  </div> -->
                </form>
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
import { getLocalStorage } from '@/store/service'
import //   BContainer,
//   BRow,
//   BCol,
//   BForm,
//   BFormGroup,
//   BFormInput
'bootstrap-vue'
export default {
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
  data () {
    return {
      user: [],
      form: {
        name: '',
        email: '',
        phone: ''
      }
    }
  },
  mounted () {
    this.userData()
  },
  methods: {
    userData () {
      this.user = getLocalStorage('userData')
      this.form.name = this.user.name
      this.form.email = this.user.email
      this.form.phone = this.user.phone
    }
  },
  name: 'update Profile'
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
.profile{
    font-weight: 700;
    color: #ddae71;
    font-family: 'Raleway';
}
</style>
