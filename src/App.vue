<template>
  <div id="nav" class="p-mb-3">
    <MenuBar :model="items">
      <template #start>
        <router-link :to="{ name: 'home' }">
          <img alt="logo" src="./assets/logo.png" height="40" class="p-mx-2" />
        </router-link>
      </template>
      <template #end>
        <a
          href="https://github.com/sixpeteunder/squanch"
          class="p-mx-3"
          style="color: black"
        >
          <span class="pi pi-github" style="font-size: 1.5rem"></span>
        </a>
      </template>
    </MenuBar>
  </div>
  <router-view />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400&display=swap");

* {
  font-family: "Nunito", sans-serif;
}
</style>

<script>
import MenuBar from "primevue/menubar";

export default {
  name: "App",
  components: { MenuBar },
  data: function() {
    return {
      items: [
        // {
        //   label: "Home",
        //   icon: "pi pi-fw pi-home",
        //   to: { name: "home" }
        // },
        {
          label: "Characters",
          icon: "pi pi-fw pi-users",
          to: { name: "characters" }
        },
        {
          label: "Locations",
          icon: "pi pi-fw pi-map",
          to: { name: "locations" }
        },
        {
          label: "Episodes",
          icon: "pi pi-fw pi-images",
          to: { name: "episodes" }
        },
        {
          label: "About",
          icon: "pi pi-fw pi-info-circle",
          to: { name: "about" }
        }
      ]
    };
  }
};
</script>
