import { RickAndMortyService } from "../../services/RickAndMortyService";

export default {
  namespaced: true,
  state: function() {
    return {
      character: {},
      loading: false
    };
  },
  mutations: {
    setCharacter: function(state, character) {
      state.character = character;
    },
    setLoading: function(state, loading) {
      state.loading = loading;
    }
  },
  actions: {
    fetchCharacterAsync: function({ commit }, id) {
      commit("setLoading", true);

      RickAndMortyService.getCharacter(id)
        .then(data => commit("setCharacter", data))
        .catch(error => {
          alert("Something went wrong. Please check your internet connection.");
          console.log(error);
        })
        .then(() => commit("setLoading", false));
    }
  }
};
