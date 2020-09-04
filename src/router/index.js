import Vue from 'vue'
import Router from 'vue-router'
import index1 from '../views/index1'
import profiles from '../views/profiles'
import HelloWorld from "../components/HelloWorld";


Vue.use(Router)


const router = new Router({
  routes: [
    {
      path: '/',
      name:'index1',
      component: index1,
    },
    {
      path: '/profiles/:id',
      name: 'profiles',
      component: profiles
    },
    {
      path: '/test',
      name: 'test',
      component: HelloWorld
    },
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
