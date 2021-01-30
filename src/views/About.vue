<template>
  <div class="home p-grid p-my-4">
    <Card class="p-col-12 p-sm-10 p-sm-offset-1 p-md-8 p-md-offset-2">
      <template #title>
        About Squanch
      </template>

      <template #subtitle>
        Technical details
      </template>

      <template #content>
        <p>
          Squanch is a single-page application built on the following
          technologies:
        </p>
        <ul>
          <li>
            <a href="https://v3.vuejs.org">Vue.js</a> - JavaScript Framework
          </li>
          <li>
            <a href="https://next.router.vuejs.org">Vue Router</a> - Client-Side
            Routing Library
          </li>
          <li>
            <a href="https://next.vuex.vuejs.org">Vuex</a> - Centralized State
            Management
          </li>
          <li>
            <a href="https://github.com/axios/axios">Axios</a> - HTTP Client
          </li>
          <li><a href="babeljs.io">Babel</a> - JavaScript Compiler</li>
          <li>
            <a href="https://primefaces.org/primevue">PrimeVUE</a> - UI Library
          </li>
        </ul>
        <p>...with data from:</p>
        <ul>
          <li>
            <a href="https://rickandmortyapi.com">The Rick and Morty API</a>
          </li>
          <li>
            <a href="https://github.com/Gustavoohrq/rick-and-morty-api-quotes">
              Rick and Morty Quotes API
            </a>
          </li>
          <!-- <li><a href="http://loremricksum.com">Lorem Ricksum</a></li> -->
          <!-- <li><a href="">The Open Movie Database</a></li>
          <li><a href="">The Movie Database</a></li> -->
        </ul>
        <p>
          <small class="p-text-light">
            More text about how I own none of this data goes here.
          </small>
        </p>
      </template>
      <template #footer>
        <small>
          &copy; {{ new Date().getFullYear() }}
          <a href="https://github.com/sixpeteunder" target="_blank">sixpeteunder <i class="pi pi-external-link p-ml-1" style="font-size: 0.75rem"></i></a>
        </small>
      </template>
    </Card>
  </div>
</template>

<script>
import Card from "primevue/card";

export default {
  name: "About",
  components: { Card },
};
</script>
