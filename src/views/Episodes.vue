<template>
  <div class="episodes">
    <div class="p-grid p-mb-3">
      <div
        v-for="item in items"
        v-bind:key="item.id"
        class="p-col-12 p-md-6 p-lg-3"
      >
        <Card>
          <template #title>
            {{ item.name }}
          </template>
          <template #subtitle>
            {{ item.episode }}
          </template>
          <template #content>
            <p>Aired On: {{ item.air_date }}</p>
            <p>Featured {{ item.characters.length }} characters</p>
          </template>
        </Card>
      </div>
    </div>

    <div class="p-d-flex p-jc-center p-mb-3">
      <Button
        label="Prev"
        class="p-button-outlined p-button-rounded p-mr-2"
        :icon="goingPrev ? 'pi pi-spin pi-spinner' : 'pi pi-angle-left'"
        iconPos="left"
        v-if="pageInfo.prev"
        v-on:click="prev()"
        :disabled="goingPrev || goingNext || loading"
      />

      <Button
        label="Next"
        class="p-button-outlined p-button-rounded p-ml-2"
        :icon="goingNext ? 'pi pi-spin pi-spinner' : 'pi pi-angle-right'"
        iconPos="right"
        v-if="pageInfo.next"
        v-on:click="next()"
        :disabled="goingPrev || goingNext || loading"
      />
    </div>
  </div>
</template>

<script>
import Button from "primevue/button";
import Card from "primevue/card";

const axios = require("axios");

export default {
  name: "Episodes",
  components: { Button, Card },
  data: function() {
    return {
      goingPrev: false,
      goingNext: false,
      loading: false,

      items: [],
      pageInfo: {}
    };
  },
  created: function() {
    this.loading = true;
    this.fetchEpisodes("https://rickandmortyapi.com/api/episode");
  },
  methods: {
    prev() {
      this.goingPrev = true;
      this.fetchEpisodes(this.pageInfo.prev);
    },
    next() {
      this.goingNext = true;
      this.fetchEpisodes(this.pageInfo.next);
    },
    fetchEpisodes(url) {
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
          self.goingPrev = false;
          self.goingNext = false;
          self.loading = false;
        });
    }
  }
};
</script>
