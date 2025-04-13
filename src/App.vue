<script setup>
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <div class="app-layout">
    <NavBar />
    <Suspense>
      <RouterView />
    </Suspense>
  </div>
</template>

<style scoped>
.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>