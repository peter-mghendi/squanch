<template>
  <div class="p-grid">
    <div class="p-col-12 p-md-6 p-md-offset-3 p-sm-8 p-sm-offset-2">
      <Card class="p-py-3">
        <template #content>
          <div class="p-d-flex p-jc-center p-mb-5">
            <ProgressSpinner />
          </div>
          <div class="p-d-flex p-jc-center">
            <h3 class="p-text-light">Loading...</h3>
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>

<style scoped>
@keyframes p-progress-spinner-color {
  100%,
  0% {
    stroke: #d62d20;
  }
  40% {
    stroke: #0057e7;
  }
  66% {
    stroke: #008744;
  }
  80%,
  90% {
    stroke: #ffa700;
  }
}
</style>

<script>
import Card from "primevue/card";
import ProgressSpinner from "primevue/progressspinner";

export default {
  name: "Loader",
  components: { Card, ProgressSpinner }
};
</script>
