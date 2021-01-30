<template>
  <Loader v-if="loading" />
  <div class="location" v-else>
    <div class="p-d-flex p-jc-between p-px-3">
      <span class="p-d-flex p-ai-center">
        <Button
          icon="pi pi-arrow-left"
          class="p-button-text p-button-rounded p-mr-3"
          @click="$router.back()"
        />
        <h1 class="p-text-light">{{ location.name }}</h1>
      </span>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

import Button from "primevue/button";

import Loader from "../components/Loader.vue";

export default {
  name: "Location",
  components: { Button, Loader },
  computed: mapState({
    location: (state) => state.location.location,
    loading: (state) => state.location.loading,
  }),
  beforeRouteUpdate(to, from) {
    if (to.params.id !== from.params.id) {
      this.$store.dispatch("location/fetchLocationAsync", to.params.id);
    }
  },
  created: function() {
    this.$store.dispatch("location/fetchLocationAsync", this.$route.params.id);
  },
};
</script>
