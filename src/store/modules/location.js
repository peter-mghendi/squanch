const apiUrl = "https://rickandmortyapi.com/api";
const axios = require("axios");

export default {
  namespaced: true,
  state: function() {
    return {
      location: {},
      loading: false,
    };
  },
  mutations: {
    setLocation: function(state, location) {
      state.location = location;
    },
    setLoading: function(state, loading) {
      state.loading = loading;
    },
  },
  actions: {
    fetchLocationAsync: function({ commit }, id) {
      commit("setLoading", true);

      axios
        .get(`${apiUrl}/location/${id}`)
        .then((response) => {
          let data = response.data;
          const residentIds = data.residents
            .map((resident) => resident.split("/").slice(-1)[0])
            .join();

          axios.get(`${apiUrl}/character/${residentIds}`).then((response) => {
            data.residents = Array.isArray(response.data) ? response.data : [response.data];
            commit("setLocation", data);
          });
        })
        .catch((error) => {
          alert("Something went wrong. Please check your internet connection.");
          console.log(error);
        })
        .then(() => commit("setLoading", false));
    },
  },
};
