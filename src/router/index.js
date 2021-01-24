import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/characters",
    name: "characters",
    component: () =>
      import(/* webpackChunkName: "characters" */ "../views/Characters.vue")
  },
  {
    path: "/locations",
    name: "locations",
    component: () =>
      import(/* webpackChunkName: "locations" */ "../views/Locations.vue")
  },
  {
    path: "/episodes",
    name: "episodes",
    component: () =>
      import(/* webpackChunkName: "locations" */ "../views/Episodes.vue")
  },
  // {
  //   path: "/characters/:id",
  //   name: "character",
  //   component: () =>
  //     import(/* webpackChunkName: "character" */ "../views/Character.vue"),
  // },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
