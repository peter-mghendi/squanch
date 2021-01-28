<template>
  <!-- <DataTable :value="details">
    <Column field="property" header="Property"></Column>
    <Column field="value" header="Value"></Column>
  </DataTable> -->
  <ul v-for="detail in details" :key="detail.property">
    <li>{{ detail.property }} : {{ detail.value }}</li>
  </ul>
</template>

<script>
import { mapState } from "vuex";

// import DataTable from "primevue/datatable";
// import Column from "primevue/column";

export default {
  // components: { DataTable, Column },
  computed: {
    details: function() {
      return [
        { property: "Name", value: this.character.name },
        { property: "Status", value: this.character.status },
        { property: "Species", value: this.character.species },
        { property: "Type", value: this.character.type },
        { property: "Gender", value: this.character.gender },
      ];
    },
    ...mapState({
      character: (state) => state.character,
    }),
  },
};
</script>

<style></style>
