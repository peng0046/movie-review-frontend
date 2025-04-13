<script setup>
import { ref, onMounted, computed } from "vue";
import { ALL_REVIEWS_API_URL } from "../utils/api.js";
import Loader from "../components/Loader.vue";
import { RouterLink } from "vue-router";
import { useFetch } from "@vueuse/core";

// state
const reviews = ref([]);
const isLoading = ref(true);
const searchQuery = ref("");

// fetch data
const fetchReviews = async () => {
  const { data } = await useFetch(ALL_REVIEWS_API_URL).json();
  reviews.value = data.value.data || [];
  isLoading.value = false;
};

onMounted(() => {
  fetchReviews();
});

// filter logic
const filteredReviews = computed(() => {
  return reviews.value.filter((review) =>
    review.title.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});
</script>

<template>
  <div class="reviews-container">
    <h1>All Reviews</h1>

    <input
      type="text"
      v-model="searchQuery"
      class="search-input"
      placeholder="Search reviews by title..."
    />

    <Loader v-if="isLoading" />

    <ul v-else class="review-list">
      <li
        v-for="review in filteredReviews"
        :key="review.documentId"
        class="review-item"
      >
        <RouterLink :to="`/reviews/${review.documentId}`" class="review-link">
          <h3>{{ review.title }}</h3>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.reviews-container {
  max-width: 800px;
  margin: 2rem auto;
  padding: 0 1rem;
}

h1 {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 1rem;
  color: #333;
}

.search-input {
  width: 100%;
  padding: 0.75rem 1rem;
  margin-bottom: 1.5rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.review-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.review-item {
  width: 100%;
  background: #f9f9f9;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  transition: 0.3s ease box-shadow;
}

.review-item:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.review-link {
  text-decoration: none;
  color: #333;
}

.review-link h3 {
  margin: 0;
  transition: 0.3s color ease;
}

.review-link:hover h3 {
  color: #007acc;
}
</style>
