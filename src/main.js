import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import PrimeVue from "primevue/config";

import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import store from "./store";

console.log("Wubba lubba dub dubs!!");

createApp(App)
  .use(store)
  .use(router)
  .use(PrimeVue)
  .mount("#app");
