<template>
  <div class="locations">
    <div class="p-grid p-mb-3">
      <div
        v-for="item in items"
        v-bind:key="item.id"
        class="p-col-12 p-md-6 p-lg-3"
      >
        <Card>
          <template #title>
            <router-link
              :to="{ name: 'location', params: { id: item.id } }"
              style="text-decoration: none"
              class="p-text-light"
            >
              {{ item.name }}
            </router-link>
          </template>
          <template #subtitle>
            {{ item.type }}
          </template>
          <template #content>
            <p>Dimension: {{ item.dimension }}</p>
            <p>Population: {{ item.residents.length }}</p>
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

import { RickAndMortyService } from "../services/RickAndMortyService";
import { UrlUtils } from "../utils/UrlUtils";

export default {
  name: "Locations",
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
    this.fetchLocations();
  },
  methods: {
    prev() {
      this.goingPrev = true;
      this.fetchLocations(UrlUtils.getUrlParam(this.pageInfo.prev, "page"));
    },
    next() {
      this.goingNext = true;
      this.fetchLocations(UrlUtils.getUrlParam(this.pageInfo.next, "page"));
    },
    fetchLocations(page) {
      let self = this;

      RickAndMortyService.getLocations([], page)
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
