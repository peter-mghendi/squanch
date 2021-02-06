const apiUrl = "https://rickandmortyapi.com/api";
const axios = require("axios");

export default {
  namespaced: true,
  state: function() {
    return {
      episode: {},
      loading: false
    };
  },
  mutations: {
    setEpisode: function(state, episode) {
      state.episode = episode;
    },
    setLoading: function(state, loading) {
      state.loading = loading;
    }
  },
  actions: {
    fetchEpisodeAsync: function({ commit }, id) {
      commit("setLoading", true);

      axios
        .get(`${apiUrl}/episode/${id}`)
        .then(response => {
          let data = response.data;
          const characterIds = data.characters
            .map(character => character.split("/").slice(-1)[0])
            .join();

          axios.get(`${apiUrl}/character/${characterIds}`).then(response => {
            data.characters = Array.isArray(response.data)
              ? response.data
              : [response.data];
            commit("setEpisode", data);
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
