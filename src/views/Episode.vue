<template>
  <Loader v-if="loading" />
  <div class="episode" v-else>
    <div class="p-d-flex p-jc-between p-px-3">
      <span class="p-d-flex p-ai-center">
        <Button
          icon="pi pi-arrow-left"
          class="p-button-text p-button-rounded p-mr-3"
          @click="$router.back()"
        />
        <h1 class="p-text-light">{{ episode.episode }} : {{ episode.name }}</h1>
      </span>
    </div>
    <p>Episode aired {{ episode.air_date }}.</p>

    <div class="p-grid">
      <div class="p-col-12 p-md-8">
        <img
          :src="episode.info.poster"
          :alt="episode.episode"
          style="width:100%"
        />
      </div>
      <div class="p-col-12 p-md-4">
        <p>
          <i class="pi pi-tag p-mr-1"></i>
          Rated: {{ episode.info.rated }}
        </p>
        <p>
          <i class="pi pi-sort p-mr-1"></i>
          IMDB Rating: {{ episode.info.rating }}
        </p>
        <p>
          <i class="pi pi-video p-mr-1"></i>
          Runtime: {{ episode.info.runtime }}
        </p>
        <a
          :href="`https://imdb.com/title/${episode.info.imdbId}`"
          target="_blank"
        >
          View on IMDB
          <i class="pi pi-external-link p-ml-1"></i>
        </a>
      </div>
      <div class="p-col-12">{{ episode.info.plot }}</div>
    </div>

    <h2>Featured Characters</h2>
    <router-link
      v-for="character in episode.characters"
      :key="character.id"
      :to="{ name: 'character-details', params: { id: character.id } }"
      style="text-decoration: none"
      class="p-mr-2"
    >
      <Chip :label="character.name" :image="character.image" />
    </router-link>
  </div>
</template>

<script>
import { mapState } from "vuex";

import Button from "primevue/button";
import Chip from "primevue/chip";

import Loader from "../components/Loader.vue";

export default {
  name: "Episode",
  components: { Button, Chip, Loader },
  computed: mapState({
    episode: state => state.episode.episode,
    loading: state => state.episode.loading
  }),
  beforeRouteUpdate(to, from) {
    if (to.params.id !== from.params.id) {
      this.$store.dispatch("episode/fetchEpisodeAsync", to.params.id);
    }
  },
  created: function() {
    this.$store.dispatch("episode/fetchEpisodeAsync", this.$route.params.id);
  }
};
</script>

<style></style>
