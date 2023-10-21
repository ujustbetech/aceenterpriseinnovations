/********************************************************
*	      Project name: WBS_Creator					              *
*	      Project by: Nesabyte						                *
*	      Project for: McLean Innovations                 * 
*	      DATE: Dec 2022						                      *
********************************************************/
import Vue from "vue";
import VueRouter from "vue-router";
import SetupView from "../views/SetupView.vue";
import ProjectInfoView from "../views/ProjectInfoView.vue";
import HomeView from '../views/website/HomeView.vue'

Vue.use(VueRouter);

const routes = [
  
  {
    path: "/",
    name: "home",
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/website/AboutView.vue')
  },
  {
    path: '/philosophy',
    name: 'philosophy',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/website/PhilosophyView.vue')
  },
  {
    path: '/joinus',
    name: 'joinus',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/website/JoinView.vue')
  },
  {
    path: '/contactus',
    name: 'contactus',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/website/ContactView.vue')
  },
  {
    path: '/wbscreationtool',
    name: 'wbscreationtool',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/website/ToolView.vue')
  },
  /*{
    path: "/",
    name: "home",
    component: SetupView, ProjectInfoView
  }, */
  {
    path: "/wbscreationtool/setupproject",
    name: "setupproject",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SetupView.vue"),
  },
  {
    path: "/wbscreationtool/wbstable",
    name: "wbstable",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/WBSView.vue"),
  },
  {
    path: "/wbscreationtool/projectinfo",
    name: "projectinfo",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ProjectInfoView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
