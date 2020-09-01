import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import register from '@/components/register'
import index1 from '../views/index1'
import profiles from '../views/profiles'


Vue.use(Router)


const router = new Router({
  routes: [
    {
      path: '/',
      name:'index1',
      component: index1,
    },
    {
      path: '/profiles',
      name: 'profiles',
      component: profiles
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    }
  ]
})
// router.beforeEach((to, from, next) => {
//   //debugger
//   if (to.path === '/login') {
//     next();
//   } else {
//     let token = sessionStorage.getItem('Authorization');
//     if (!token) {
//       next('/login');
//     } else {
//       next();
//     }
//   }
// });
export default router;
