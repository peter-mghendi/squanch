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
    <DataTable :value="details">
      <Column field="property" header="&nbsp;"></Column>
      <Column field="value" header="&nbsp;"></Column>
    </DataTable>
    <h2>Residents</h2>
    <router-link
      v-for="resident in location.residents"
      :key="resident.id"
      :to="{ name: 'character-details', params: { id: resident.id } }"
      style="text-decoration: none"
      class="p-mr-2"
    >
      <Chip :label="resident.name" :image="resident.image" />
    </router-link>
  </div>
</template>

<script>
import { mapState } from "vuex";

import Button from "primevue/button";
import Chip from "primevue/chip";
import Column from "primevue/column";
import DataTable from "primevue/datatable";

import Loader from "../components/Loader.vue";

const UNDEFINED = "--";

export default {
  name: "Location",
  components: { Button, Chip, Column, DataTable, Loader },
  computed: {
    details: function() {
      return [
        { property: "Name", value: this.location.name || UNDEFINED },
        { property: "Type", value: this.location.type || UNDEFINED },
        { property: "Dimension", value: this.location.dimension || UNDEFINED }
      ];
    },
    ...mapState({
      location: state => state.location.location,
      loading: state => state.location.loading
    })
  },
  beforeRouteUpdate(to, from) {
    if (to.params.id !== from.params.id) {
      this.$store.dispatch("location/fetchLocationAsync", to.params.id);
    }
  },
  created: function() {
    this.$store.dispatch("location/fetchLocationAsync", this.$route.params.id);
  }
};
</script>
