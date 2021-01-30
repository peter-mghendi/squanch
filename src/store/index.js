import { createStore } from "vuex";

import character from "./modules/character";
import episode from "./modules/episode";
import location from "./modules/location";

export default createStore({
  modules: {
    character,
    episode,
    location
  }
});
