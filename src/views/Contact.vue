<template>
  <div class="about">
    <Headbar></Headbar>
    <!-- Content -->
    <div id="content">
      <!-- Page Title -->
      <div class="page-title bg-light">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <h1 class="mb-0">Contact Us</h1>
              <h4 class="text-muted mb-0">
                Some information about our restaurant
              </h4>
            </div>
          </div>
        </div>
      </div>

      <!-- Section -->
      <section class="section section-bg-edge"></section>
    </div>
    <!-- Content / End -->
    <!-- Section -->
    <section class="section">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-4 offset-lg-1 col-md-6 mb-5 mb-md-0">
            <img
              src="assets/img/logo-horizontal-dark.svg"
              alt=""
              class="mb-5"
              width="130"
            />
            <h4 class="mb-2 font-weight-bold">Tandoori Night</h4>
            <span class="text-muted mt-5 mb-5">101- 4851 Westwinds Dr NE Calgary, AB T3J 4L4 Canada</span><br/><br/>
            <h4 class="mb-0 font-weight-bold">Timings</h4>
            <p class="text-muted text font-weight-bold">Monday To Sunday 11am to 10pm</p>
            <hr class="hr-md" />
            <div class="row">
              <div class="col-sm-12 mb-3 mb-sm-0">
                <h6 class="mb-1 text-muted font-weight-bold">Queries/Support:</h6>
                +1-604-614-9324
              </div>
              <div class="col-sm-12 mb-3 mb-sm-0">
                <h6 class="mb-1 text-muted font-weight-bold">Booking:</h6>
                +1-403-568-9858
              </div>
              <div class="col-sm-12">
                <h6 class="mb-1 text-muted font-weight-bold">E-mail:</h6>
                <a href="#">info@tandoorinights.ca</a>
              </div>
            </div>
            <hr class="hr-md" />
            <h6 class="mb-3 text-muted font-weight-bold">Follow Us!</h6>
            <a
              href="#"
              class="icon icon-social icon-circle icon-sm icon-facebook"
              ><i class="fa fa-facebook"></i
            ></a>
            <a href="#" class="icon icon-social icon-circle icon-sm icon-google"
              ><i class="fa fa-google"></i
            ></a>
            <a
              href="#"
              class="icon icon-social icon-circle icon-sm icon-instagram"
              ><i class="fa fa-instagram"></i
            ></a>
          </div>
          <div class="col-lg-5 offset-lg-2 col-md-6">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2504.980454849165!2d-113.97040968401946!3d51.10882077957173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5371637ffd480cfb%3A0xbcc259dc49a97ae5!2s101%20Westwinds%20Dr%20NE%2C%20Calgary%2C%20AB%20T3J%205H3%2C%20Canada!5e0!3m2!1sen!2sin!4v1640782046742!5m2!1sen!2sin" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
          </div>
        </div>
      </div>
    </section>

    <!-- Section -->
    <section class="sectionbg">
      <b-container>
        <b-form @submit.prevent="sendMessage">
          <b-row>
            <b-col cols="12">
              <h2 class="font-weight-bold">Send Us a Message</h2>
            </b-col>
            <b-col cols="6">
              <b-form-group>
                <b-form-input
                  v-model="form.firstname"
                  placeholder="Firstname"
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col cols="6">
              <b-form-group>
                <b-form-group>
                  <b-form-input
                    v-model="form.lastname"
                    placeholder="Lastname"
                  ></b-form-input>
                </b-form-group>
              </b-form-group>
            </b-col>
            <b-col cols="6">
              <b-form-group>
                <b-form-group>
                  <b-form-input
                    v-model="form.phone"
                    placeholder="Phone"
                  ></b-form-input>
                </b-form-group>
              </b-form-group>
            </b-col>
            <b-col cols="6">
              <b-form-group>
                <b-form-group>
                  <b-form-input
                    v-model="form.email"
                    placeholder="Email"
                  ></b-form-input>
                </b-form-group>
              </b-form-group>
            </b-col>
            <b-col cols="12">
              <b-form-textarea
                id="textarea"
                v-model="form.message"
                placeholder="Enter something..."
                rows="3"
              ></b-form-textarea>
            </b-col>
            <b-col cols="12" class="mt-3">
              <b-form-group>
                <b-button class="w-100" type="submit"><span>Submit</span></b-button>
              </b-form-group>
            </b-col>
            <span class="text-danger text-lg">{{ error }}</span>
          </b-row>
        </b-form>
      </b-container>
    </section>
    <Footer></Footer>
  </div>
</template>
<script>
import Headbar from '@/views/layouts/Headbar.vue'
import Footer from '@/views/layouts/Footer.vue'
import { contactUs } from '@/store/api'
import {
  BForm,
  BFormGroup,
  BButton,
  BRow,
  BFormInput,
  BCol,
  BContainer,
  BFormTextarea
} from 'bootstrap-vue'
export default {
  name: 'Contact',
  metaInfo: {
    title: 'Tiffin Service Calgary NE',
    titleTemplate: '%s | Best Indian Restaurants in Calgary Northeast',
    meta: [
      { charset: 'utf-8' },
      { name: 'description', content: 'Get the best reliable tiffin service near me at a modest price with the easy processed and fastest delivery at the best Indian restaurant in Northeast Calgary.' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: 'Indian Restaurant Calgary Northeast, Best Indian Restaurant in North East Calgary, Tiffin Service Calgary NE, Indian Restaurants Near Me' }
    ]
  },
  data () {
    return {
      form: {
        firstname: '',
        lastname: '',
        phone: '',
        email: '',
        message: ''
      },
      error: ''
    }
  },
  components: {
    Headbar,
    Footer,
    BForm,
    BFormGroup,
    BFormInput,
    BButton,
    BRow,
    BCol,
    BContainer,
    BFormTextarea
  },
  methods: {
    sendMessage () {
      this.error = ''
      if (!this.form.firstname || !this.form.lastname || !this.form.phone || !this.form.email || !this.form.message) {
        this.error = '*All fields are required.'
      } else {
        contactUs(this.form).then((res) => {
          console.log(res.data)
          if (res.data.success === true) {
            this.form.firstname = null
            this.form.lastname = null
            this.form.phone = null
            this.form.email = null
            this.form.message = null
            this.$toast.success('Mail sent successfully.', {
              timeout: 1000
            })
          }
        })
      }
    }
  }
}
</script>
<style>
.sectionbg {
  background: #f3f4f4;
}
</style>
