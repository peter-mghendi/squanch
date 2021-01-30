import { createStore } from "vuex";

import character from "./modules/character";

export default createStore({
  modules: {
    character
  },
});
