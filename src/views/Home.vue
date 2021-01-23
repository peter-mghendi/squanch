<template>
  <div class="home">
    <ul>
      <li v-for="item in items" v-bind:key="item.id">
        {{ item.name }}
      </li>
    </ul>

    <button
      class="btn btn-link"
      v-if="pageInfo.prev"
      v-on:click="fetchCharacters(pageInfo.prev)"
      :disabled="loading"
    >
      Prev
    </button>
    <button
      class="btn btn-link"
      v-if="pageInfo.next"
      v-on:click="fetchCharacters(pageInfo.next)"
      :disabled="loading"
    >
      Next
    </button>
  </div>
</template>

<script>
const axios = require("axios");

export default {
  name: "Home",
  data: function() {
    return {
      loading: false,
      items: [],
      pageInfo: {}
    };
  },
  created: function() {
    this.fetchCharacters('https://rickandmortyapi.com/api/character')
  },
  methods: {
    fetchCharacters(url) {
      this.loading = true;
      let self = this;

      axios
        .get(url)
        .then(function(response) {
          self.items = response.data.results;
          self.pageInfo = response.data.info;
        })
        .catch(function(error) {
          alert("Something went wrong. Please check your internet connection.");
          console.log(error);
        })
        .then(function() {
          self.loading = false;
        });
    }
  }
};

// vm.fetchCharacters('https://rickandmortyapi.com/api/character')
</script>
