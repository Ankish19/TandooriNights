<template>
  <div>
    <Headbar></Headbar>
    <!-- Content -->
    <div id="content">
      <!-- Page Title -->
      <div class="page-title bg-light">
        <div class="container">
          <div class="row">
            <div class="col-lg-7 offset-lg-5"></div>
          </div>
        </div>
      </div>

      <!-- Section -->
      <section class="sectionbg">
        <b-container>
          <b-form @submit.prevent="userLogin">
            <b-row>
              <b-col cols="6" class="mx-auto">
                <b-col cols="12">
                  <h2 class="font-weight-bold">Login Form</h2>
                </b-col>
                <b-col cols="12">
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
                  <b-form-group>
                    <b-form-group>
                      <b-form-input
                        v-model="form.password"
                        placeholder="Password"
                      ></b-form-input>
                    </b-form-group>
                  </b-form-group>
                </b-col>
                <b-col cols="12" class="mt-3">
                  <b-form-group>
                    <b-button class="w-100" type="submit"><span>Login</span></b-button>
                  </b-form-group>
                </b-col>
                <b-col cols="12" class="mt-3">
                  <p>
                    <router-link to="/register"
                      ><strong>Create an Account</strong></router-link
                    >
                  </p>
                </b-col>
              </b-col>
            </b-row>
          </b-form>
        </b-container>
      </section>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Headbar from "@/views/layouts/Headbar.vue";
import Footer from "@/views/layouts/Footer.vue";
import { login } from "@/store/api";
import {
  BForm,
  BFormGroup,
  BButton,
  BRow,
  BFormInput,
  BCol,
  BContainer,
} from "bootstrap-vue";
export default {
  name: "Login",
  data() {
    return {
      form: {
        email: '',
        password: ''
      }
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
  },
  methods : {
    userLogin() {
      console.log(this.form)
      login (this.form) 
        .then(res => {
            console.log(res)
        })
    }
  },
};
</script>
