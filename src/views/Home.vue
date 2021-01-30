<template>
  <div class="home p-grid p-my-4">
    <Card class="p-col-12 p-sm-10 p-sm-offset-1 p-md-8 p-md-offset-2">
      <template #title>
        Hi There!
      </template>

      <template #subtitle>
        Welcome to the schwiftiest encyclopaedia you didn't know you needed!
      </template>

      <template #content>
        <p>
          Do you need words? Did you come to this website to read words? Fine,
          here are some words for you to read since you evidently have nothing
          better to do than stare at words that you already know are saying
          nothing meaningful.
        </p>
        <p>
          Oh, great! A new paragraph. And you're still here. Please stop. Click
          on one of the buttons. I can only keep this up for so long.
        </p>
        <div class="p-grid">
          <div class="p-col-12 p-sm-6 p-md-3 p-d-flex p-jc-center">
            <Button
              label="Explore!"
              icon="pi pi-sign-in"
              class="p-button-info p-button-text"
              @click="toggle"
            />
            <Menu ref="menu" :model="items" :popup="true" />
          </div>
          <div class="p-col-12 p-sm-6 p-md-3 p-d-flex p-jc-center">
            <Button
              label="About Squanch"
              icon="pi pi-info-circle"
              class="p-button-info p-button-text"
              @click="$router.push({ name: 'about' })"
            />
          </div>
          <div class="p-col-12 p-sm-6 p-md-3 p-d-flex p-jc-center">
            <Button
              label="Tell A Friend"
              icon="pi pi-share-alt"
              class="p-button-success p-button-text"
              @click="share"
            />
          </div>
          <div class="p-col-12 p-sm-6 p-md-3 p-d-flex p-jc-center">
            <Button
              label="Source Code"
              icon="pi pi-github"
              class="p-button-plain p-button-text"
              @click="goToGitHub"
            />
          </div>
        </div>
        <p>
          <small class="p-text-light">
            Something about how I own none of this data goes here in very tiny
            text.
          </small>
        </p>
      </template>
      <template #footer>
        <small>{{ quote }}</small>
      </template>
    </Card>
  </div>
</template>

<script>
const axios = require("axios");

import Button from "primevue/button";
import Card from "primevue/card";
import Menu from "primevue/menu";

export default {
  name: "Home",
  components: { Button, Card, Menu },
  data: function() {
    return {
      quote: "",
      items: [
        {
          label: "Let's Get Schwifty!",
          items: [
            {
              label: "Characters",
              icon: "pi pi-fw pi-users",
              to: { name: "characters" },
            },
            {
              label: "Locations",
              icon: "pi pi-fw pi-map",
              to: { name: "locations" },
            },
            {
              label: "Episodes",
              icon: "pi pi-fw pi-images",
              to: { name: "episodes" },
            },
          ],
        },
      ],
    };
  },
  created: function() {
    axios
      .get(
        "https://rick-and-morty-api-phrases.herokuapp.com/phrases/en_us/random"
      )
      .then((response) => (this.quote = response.data.phrase))
      .catch((error) => {
        this.quote = "Get schwifty!";
        console.log(error);
      });
  },
  methods: {
    toggle(event) {
      this.$refs.menu.toggle(event);
    },
    share() {
      if (navigator.canShare) {
        navigator
          .share({
            url: "https://squanch.netlify.app",
            text: "Check out this Rick and Morty encyclopaedia!",
            title: "Squanch",
          })
          .catch((error) => console.log(error));
      } else console.log("Error while sharing.");
    },
    goToGitHub() {
      window.location.href = "https://github.com/sixpeteunder/squanch";
    },
  },
};
</script>
