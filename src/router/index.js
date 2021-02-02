import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/characters",
    name: "characters",
    component: () =>
      import(/* webpackChunkName: "characters" */ "../views/Characters.vue"),
  },
  {
    path: "/characters/:id",
    name: "character",
    component: () =>
      import(/* webpackChunkName: "character" */ "../views/Character.vue"),
    children: [
      {
        path: "details",
        name: "character-details",
        component: () => import("../views/Character/CharacterDetails"),
      },
      {
        path: "episodes",
        name: "character-episodes",
        component: () => import("../views/Character/CharacterEpisodes"),
      },
    ],
  },
  {
    path: "/locations",
    name: "locations",
    component: () =>
      import(/* webpackChunkName: "locations" */ "../views/Locations.vue"),
  },
  {
    path: "/locations/:id",
    name: "location",
    component: () =>
      import(/* webpackChunkName: "location" */ "../views/Location.vue"),
  },
  {
    path: "/episodes",
    name: "episodes",
    component: () =>
      import(/* webpackChunkName: "episodes" */ "../views/Episodes.vue"),
  },
  {
    path: "/episodes/:id",
    name: "episode",
    component: () =>
      import(/* webpackChunkName: "episode" */ "../views/Episode.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/:x(.*)",
    name: "not-found",
    component: () =>
      import(/* webpackChunkName: "not-found" */ "../views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
