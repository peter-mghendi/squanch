import { RickAndMortyService } from "../../services/RickAndMortyService";

export default {
  namespaced: true,
  state: function() {
    return {
      location: {},
      loading: false
    };
  },
  mutations: {
    setLocation: function(state, location) {
      state.location = location;
    },
    setLoading: function(state, loading) {
      state.loading = loading;
    }
  },
  actions: {
    fetchLocationAsync: function({ commit }, id) {
      commit("setLoading", true);

      RickAndMortyService.getLocation(id)
        .then(data => commit("setLocation", data))
        .catch(error => {
          alert("Something went wrong. Please check your internet connection.");
          console.log(error);
        })
        .then(() => commit("setLoading", false));
    }
  }
};
