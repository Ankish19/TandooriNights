import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import { getLocalStorage } from '../store/service'
import { resendVerifyOtp } from '../store/api'
import VueMeta from 'vue-meta'

Vue.use(VueRouter)
Vue.use(VueMeta)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/payment-success',
    name: 'PaymentSuccess',
    component: () => import('../views/PaymentSuccess.vue')
  },
  {
    path: '/menu',
    name: 'Menu',
    component: () => import('../views/Menu.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/forget',
    name: 'Forget',
    component: () => import('../views/Forget.vue')
  },
  {
    path: '/otp',
    name: 'Otp',
    component: () => import('../views/Otp.vue')
  },
  {
    path: '/otpverify',
    name: 'OtpVerify',
    component: () => import('../views/OtpVerify.vue')
  },
  {
    path: '*',
    name: '404',
    component: () => import('../views/404.vue')
  },
  // {
  //   path: '/stripe',
  //   name: 'Stripe',
  //   component: () => import('../views/Stripe.vue')
  // },
  {
    path: '/checkout',
    name: 'Checkout',
    component: () => import('../views/CheckOut.vue')
  },
  {
    path: '/checkoutnew',
    name: 'Checkoutnew',
    component: () => import('../views/CheckOutNew.vue')
  },
  {
    path: '/myaccount',
    name: 'MyAccount',
    component: () => import('../views/myaccount/MyAccount.vue')
  },
  {
    path: '/manageaddress',
    name: 'ManageAddress',
    component: () => import('../views/myaccount/ManageAddress.vue')
  },
  {
    path: '/addmanageaddress',
    name: 'AddManageAddress',
    component: () => import('../views/myaccount/AddManageAddress.vue')
  },
  {
    path: '/myorder',
    name: 'MyOrder',
    component: () => import('../views/myaccount/MyOrder.vue')
  },
  {
    path: '/orderdetails/:id/:uniqueId',
    name: 'OrderDetails',
    component: () => import('../views/myaccount/OrderDetails.vue')
  },
  {
    path: '/wallet',
    name: 'Wallet',
    component: () => import('../views/myaccount/Wallet.vue')
  },
  {
    path: '/editcart',
    name: 'EditCart',
    component: () => import('../views/EditCart.vue')
  },
  {
    path: '/change-password',
    name: 'ChangePassword',
    component: () => import('../views/ChangePassword.vue')
  },
  {
    path: '/updateprofile',
    name: 'UpdateProfile',
    component: () => import('../views/myaccount/UpdateProfile.vue')
  },
  {
    path: '/app-download',
    name: 'apptemplate',
    component: () => import('../views/AppTemplate.vue')
  },
  {
    path: '/privacypolicy',
    name: 'privacypolicy',
    component: () => import('../views/PrivacyPolicy.vue')
  },
  {
    path: '/table-login/:table',
    name: 'tableLogin',
    component: () => import('../views/Table_login.vue')
  },
  {
    path: '/success/:paymentId/:security',
    name: 'success',
    component: () => import('../views/Success.vue')
  },
  {
    path: '/failure',
    name: 'failure',
    component: () => import('../views/Failure.vue')
  },
  {
    path: '/cancel',
    name: 'cancel',
    component: () => import('../views/Cancel.vue')
  },
  {
    path: '/cardpayment',
    name: 'cancel',
    component: () =>
      import('../views/CardPayment.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, _, next) => {
  const userData = getLocalStorage('userData')
  const userDataVerify = getLocalStorage('userDataVerify') ?? false

  if (userData) {
    if (to.path === '/login' || to.path === '/register' || to.path === '' || to.path === '/forget' || to.path === '/change-password') {
      return next('/')
    } else if (userData.verified_at === null || userDataVerify === 'false') {
      if (to.path !== '/otpverify') {
        // console.log(userData.verified_at)
        const form = {
          email: userData.email,
          phone: userData.phone
        }
        resendVerifyOtp(form).then(res => {
          console.log(res.data)
        })
        return next({
          path: '/otpverify',
          query: { redirect: 'email' }
        })
      } else {
        return next()
      }
    }
  } else if (!userData) {
    if (to.path === '/myaccount' || to.path === '/checkout' || to.path === '/editcart' || to.path === '/ManageAddress' || to.path === '/addmanageaddress' || to.path === '/myorder' || to.path === '/wallet') {
      return next('/login')
    }
  } else {
    return next()
  }
  return next()
})
export default router
