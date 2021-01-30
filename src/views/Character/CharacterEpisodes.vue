<template>
  <Timeline
    :value="character.episodes"
    align="alternate"
    class="customized-timeline"
  >
    <template #content="episode">
      <Card class="p-mb-5">
        <template #title>
          {{ episode.item.episode }} : {{ episode.item.name }}
        </template>
        <template #subtitle>
          {{ episode.item.air_date }}
        </template>
        <template #content>
          <!-- <router-link
            :to="{ name: 'episode-details', params: { id: episode.item.id } }"
            style="text-decoration: none"
            class="p-text-light"
          >
            View Episode
          </router-link> -->
          <Button label="View Episode" class="p-button-text"></Button>
        </template>
      </Card>
    </template>
  </Timeline>
</template>

<script>
import { mapState } from "vuex";

import Button from "primevue/button";
import Card from "primevue/card";
import Timeline from "primevue/timeline";

// const UNDEFINED = "--";

export default {
  components: { Button, Card, Timeline },
  computed: {
    ...mapState({
      character: (state) => state.character.character,
    }),
  },
};
</script>

<style></style>
