<template>
  <div>
    <Headbar></Headbar>
    <!-- Content -->
    <div id="content">
      <!-- Page Title -->
      <div class="page-title bg-light">
        <div class="container">
          <div class="row">
            <div class="col-lg-7 offset-lg-5">
              <h1 class="mb-0">Register</h1>
            </div>
          </div>
        </div>
      </div>

      <!-- Section -->
      <section class="sectionbg">
        <b-container>
          <b-form>
            <b-row>
              <b-col cols="6" class="mx-auto">
                <b-col cols="12">
                  <h2 class="font-weight-bold">Register Form</h2>
                </b-col>
                <b-col cols="12">
                  <b-form-group>
                    <b-form-input
                      v-model="text"
                      placeholder="Name"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col cols="12">
                  <b-form-group>
                    <b-form-group>
                      <b-form-input
                        v-model="phone"
                        placeholder="Phone"
                      ></b-form-input>
                    </b-form-group>
                  </b-form-group>
                </b-col>
                <b-col cols="12">
                  <b-form-group>
                    <b-form-group>
                      <b-form-input
                        v-model="email"
                        placeholder="Email"
                      ></b-form-input>
                    </b-form-group>
                  </b-form-group>
                </b-col>
                <b-col cols="12">
                  <b-form-group>
                    <b-form-group>
                      <b-form-input
                        v-model="password"
                        placeholder="Password"
                      ></b-form-input>
                    </b-form-group>
                  </b-form-group>
                </b-col>
                <b-col cols="12" class="mt-3">
                  <b-form-group>
                    <b-button class="w-100"><span>Submit</span></b-button>
                  </b-form-group>
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
  name: "Register",
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
};
</script>
