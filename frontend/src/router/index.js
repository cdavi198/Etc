import Vue from "vue";
import VueRouter from "vue-router";

import Auth from '@okta/okta-vue'

import Health from '@/components/Health/Health'
import Home from '@/views/Home'
import Golf from '@/views/Golf'
import Dnd from '@/views/Dnd'

Vue.use(Auth, {
  issuer: 'https://dev-3720054.okta.com',
  client_id: '0oa1p0vvxrjVVumoF5d6',
  redirect_uri: 'http://localhost:8080/implicit/callback',
  scope: 'openid profile email'
})

Vue.use(VueRouter);

let router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      props: true
    },
    {
      path: '/dnd', name: 'D&D', component: Dnd, props: true
    },
    {
      path: '/golf', name: 'Golf', component: Golf, props: true
    },
    {
      path: '/health', name: 'Health', component: Health, props: true
    },
    {
      path: '/implicit/callback',
      component: Auth.handleCallback()
    },
  ]
});
router.beforeEach(Vue.prototype.$auth.authRedirectGuard())

export default router;
