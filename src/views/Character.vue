<template>
  <Loader v-if="loading" />
  <div class="character" v-else>
    <div class="p-d-flex p-jc-between p-px-3">
      <span class="p-d-flex p-ai-center">
        <Button
          icon="pi pi-arrow-left"
          class="p-button-text p-button-rounded p-mr-3"
          @click="$router.back()"
        />
        <Avatar
          :image="character.image"
          size="xlarge"
          shape="circle"
          class="p-mr-3"
        />
        <h1 class="p-text-light">{{ character.name }}</h1>
      </span>
    </div>

    <TabMenu :model="menuItems" />
    <router-view class="p-py-4"/>
  </div>
</template>

<style>
.p-avatar img {
  border-radius: 50%;
}
</style>

<script>
import { mapState } from "vuex";

import Avatar from "primevue/avatar";
import Button from "primevue/button";
import TabMenu from "primevue/tabmenu";

import Loader from "../components/Loader.vue";

export default {
  name: "Character",
  components: { Avatar, Button, Loader, TabMenu },
  computed: mapState({
    character: state => state.character.character,
    loading: state => state.character.loading
  }),
  data: function() {
    return {
      menuItems: [
        {
          label: "Details",
          icon: "pi pi-fw pi-home",
          to: {
            name: "character-details",
            params: { id: this.$route.params.id }
          }
        },
        {
          label: "Episodes",
          icon: "pi pi-fw pi-calendar",
          to: {
            name: "character-episodes",
            params: { id: this.$route.params.id }
          }
        }
      ]
    };
  },
  beforeRouteUpdate(to, from) {
    if (to.params.id !== from.params.id) {
      this.$store.dispatch("character/fetchCharacterAsync", to.params.id);
    }
  },
  created: function() {
    this.$store.dispatch("character/fetchCharacterAsync", this.$route.params.id);
  }
};
</script>
