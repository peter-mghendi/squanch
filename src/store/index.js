import { createStore } from "vuex";

import character from "./modules/character";
import episode from "./modules/episode";

export default createStore({
  modules: {
    character,
    episode,
  },
});
