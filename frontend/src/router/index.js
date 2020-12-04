import Vue from "vue";
import VueRouter from "vue-router";

import Auth from '@okta/okta-vue'

import Dashboard from '@/components/Dashboard'

Vue.use(Auth, {
  issuer: 'https://dev-3720054.okta.com',
  client_id: '0oa1p0vvxrjVVumoF5d6',
  redirect_uri: 'http://localhost:8080/implicit/callback',
  scope: 'openid profile email'
})

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
      props: true
    },
    {
      path: 'implicit/callback',
      component: Auth.handleCallback()
    },
  ]
});
router.beforeEach(Vue.prototype.$auth.authRedirectGuard())

export default router;
