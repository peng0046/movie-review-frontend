<script setup>
import { ref, onMounted } from "vue";
import { SINGLE_REVIEW_API_URL } from "../utils/api.js";
import Loader from "../components/Loader.vue";
import { useRoute } from "vue-router";
import { useFetch } from "@vueuse/core";

// set initial state
const review = ref({});
const isLoading = ref(true);

const route = useRoute();
const documentId = route.params.id;

// fetch single review
const fetchReview = async () => {
  const { data } = await useFetch(SINGLE_REVIEW_API_URL(documentId)).json();
  review.value = data.value.data;
  isLoading.value = false;
};

onMounted(() => {
  fetchReview();
});

// format date
const formatDate = (dateString) => {
  const options = { year: "numeric", month: "short", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
};
</script>

<template>
  <Loader v-if="isLoading" />

  <div class="single-review" v-else>
    <img
      :src="review.featuredImage?.url"
      :alt="review.title"
      class="review-image"
    />

    <h2>{{ review.title }}</h2>
    <p>
      <strong>By:</strong> {{ review.username }} | <strong>Rating:</strong>
      {{ review.rating }} ⭐
    </p>
    <p>
      <em>Posted on: {{ formatDate(review.posted_at) }}</em>
    </p>

    <div class="content" v-html="review.content"></div>
  </div>
</template>

<style scoped>
.single-review {
  max-width: 800px;
  margin: 2rem auto;
  padding: 0 1rem;
  color: #333;
  font-family: system-ui, sans-serif;
}

.review-image {
  max-width: 50%;
  height: auto;
  display: block;
  margin: 0 auto 1.5rem;
  border-radius: 12px;
  object-fit: cover;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

h2 {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
}

p {
  margin-bottom: 1rem;
  line-height: 1.6;
}

.content {
  white-space: pre-line;
  line-height: 1.8;
}
</style>
