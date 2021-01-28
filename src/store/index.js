import { createStore } from "vuex";

const axios = require("axios");

export default createStore({
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

      axios
        .get(`https://rickandmortyapi.com/api/character/${id}`)
        .then(function(response) {
          commit("setCharacter", response.data);
        })
        .catch(function(error) {
          alert("Something went wrong. Please check your internet connection.");
          console.log(error);
        })
        .then(function() {
          commit("setLoading", false);
        });
    }
  },
  modules: {}
});
