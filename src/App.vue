<template>
  <div id="nav" class="p-mb-3">
    <MenuBar :model="items">
      <template #start>
        <router-link to="/">
          <img alt="logo" src="./assets/logo.png" height="40" class="p-mx-2" />
        </router-link>
      </template>
      <template #end>
        <a href="https://github.com/sixpeteunder/squanch" class="p-mx-3" style="color: black">
          <span class="pi pi-github" style="font-size: 1.5rem"></span>
        </a>
      </template>
    </MenuBar>
  </div>
  <router-view />
</template>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */

/* #nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>

<script>
import MenuBar from "primevue/menubar";

export default {
  name: "App",
  components: { MenuBar },
  data: function() {
    return {
      items: [
        {
          label: "Home",
          icon: "pi pi-fw pi-home",
          to: "/",
        },
        {
          label: "Characters",
          icon: "pi pi-fw pi-users",
          to: "/characters",
        },
        {
          label: "Locations",
          icon: "pi pi-fw pi-map",
          to: "/locations ",
        },
        {
          label: "About",
          icon: "pi pi-fw pi-info-circle",
          to: "/about",
        },
      ],
    };
  },
};
</script>
