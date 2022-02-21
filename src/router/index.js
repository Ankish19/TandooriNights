import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import { getLocalStorage } from '../store/service'
import { resendVerifyOtp } from '../store/api'

Vue.use(VueRouter)

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
    path: '/updateprofile',
    name: 'UpdateProfile',
    component: () => import('../views/myaccount/UpdateProfile.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, _, next) => {
  const userData = getLocalStorage('userData')
  const userDataVerify = getLocalStorage('userDataVerify')

  if (userData) {
    if (to.path === '/login' || to.path === '/register' || to.path === '') {
      return next('/')
    } else if (userData.verified_at === null || !userDataVerify) {
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
