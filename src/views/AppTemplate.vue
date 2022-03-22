<template>
  <div id="apptemplate">
<Headbar></Headbar>
  <div class="container-fluid appbackground mx-auto">
  <div class="row">
<div class="col-md-6">
<div class="text-section mx-auto">
<h1 class="text">Get Your Food App</h1>
<p class="text">No need for a  Wi-Fi network or mobile data plan. The <br> choice of OVER 1 billion users.</p>
<a href="#" class="btn btn-outline-secondary buttonone"><span class="order"><i class="fa fa-apple" aria-hidden="true"></i> App Store</span></a>&nbsp;
<a href="#" class="btn btn-outline-secondary buttontwo"><span class="order"><i class="fa fa-android" aria-hidden="true"></i> Play Store</span></a>
</div>
</div>
  <div class="col-md-6">
  <div class="appimage"><img src="@/assets/appphone.png" class="phoneimage" alt="" /></div>
  </div>
  </div>
  </div>
  <Footer></Footer>
  </div>
</template>
<script>
import Headbar from '@/views/layouts/Headbar.vue'
import Footer from '@/views/layouts/Footer.vue'
export default {
  name: 'apptemplate',
  components: {
    Headbar,
    Footer
  }
}
</script>
<style>
.appbackground{
background-color: #772f1a;
background-image: linear-gradient(315deg, #772f1a 0%, #f2a65a 74%);

}
.text-section{
margin-top: 30%;
}
.appbackground{
height: 800px;
}

.phoneimage {
    width: 100%;
    position: relative;
    top: 57px;
}
a.btn.btn-outline-secondary.buttonone {
    background: white;
    border: white;
}

a.btn.btn-outline-secondary.buttontwo {
    background: #000000fa;
    color: white;
    margin: 21px;
    }
.btn i {
    top: 2px;
    font-size: 24px;
    left: -9px;
}
h1.text {
    font-family: sans-serif;
    font-weight: 800;
    color: #ffff;
}

p.text {
    font-size: 18px;
    font-family: monospace;
    color: white;
}

</style>
