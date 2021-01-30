<template>
  <DataTable :value="details">
    <Column field="property" header="&nbsp;"></Column>
    <Column field="value" header="&nbsp;"></Column>
  </DataTable>
</template>

<script>
import { mapState } from "vuex";

import DataTable from "primevue/datatable";
import Column from "primevue/column";

const UNDEFINED = "--";

export default {
  components: { DataTable, Column },
  computed: {
    details: function() {
      return [
        { property: "Name", value: this.character.name || UNDEFINED },
        { property: "Status", value: this.character.status || UNDEFINED },
        { property: "Species", value: this.character.species || UNDEFINED },
        { property: "Type", value: this.character.type || UNDEFINED },
        { property: "Gender", value: this.character.gender || UNDEFINED }
      ];
    },
    ...mapState({
      character: state => state.character
    })
  }
};
</script>

<style></style>
