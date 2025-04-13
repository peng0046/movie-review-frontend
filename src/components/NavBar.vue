<template>
  <nav class="navbar">
    <RouterLink to="/" class="nav-logo">MovieReviewSite</RouterLink>
    <div class="nav-links">
      <RouterLink to="/" class="nav-link">Home</RouterLink>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #007acc;
  color: white;
  padding: 1rem 2rem;
}

.nav-logo {
  font-weight: bold;
  font-size: 1.5rem;
  color: white;
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 1rem;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: opacity 0.3s;
}

.nav-link:hover {
  opacity: 0.8;
}
</style>