import { RickAndMortyService } from "../../services/RickAndMortyService";

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

      RickAndMortyService.getEpisode(id)
        .then(data => commit("setEpisode", data))
        .catch(error => {
          alert("Something went wrong. Please check your internet connection.");
          console.log(error);
        })
        .then(() => commit("setLoading", false));
    }
  }
};
