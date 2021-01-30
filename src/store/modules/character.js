const apiUrl = "https://rickandmortyapi.com/api";
const axios = require("axios");

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

      axios
        .get(`${apiUrl}/character/${id}`)
        .then(response => {
          let data = response.data;
          const episodeIds = data.episode
            .map(episode => episode.split("/").slice(-1)[0])
            .join();

          axios.get(`${apiUrl}/episode/${episodeIds}`).then(response => {
            data.episodes = Array.isArray(response.data) ? response.data : [response.data];
            commit("setCharacter", data);
          });
        })
        .catch(error => {
          alert("Something went wrong. Please check your internet connection.");
          console.log(error);
        })
        .then(() => commit("setLoading", false));
    }
  }
};
