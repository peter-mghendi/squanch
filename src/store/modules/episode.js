import { OmdbService } from "../../services/OmdbService";
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
        .then(async data => {
          const response = await OmdbService.getEpisodeInfo(data.episode);
          const info = response.data;

          data.info = {
            imdbId: info.imdbID,
            plot: info.Plot,
            poster: info.Poster,
            rated: info.Rated,
            rating: info.imdbRating,
            runtime: info.Runtime
          };

          return data;
        })
        .then(data => commit("setEpisode", data))
        .catch(error => {
          alert("Something went wrong. Please check your internet connection.");
          console.log(error);
        })
        .then(() => commit("setLoading", false));
    }
  }
};
