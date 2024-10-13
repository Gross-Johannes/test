<template>
  <div class="about">
    <h1>This is an about page, auto deploy</h1>
    <p>asdasdassa</p>
    <p v-for="category in categories" :key="category.id">
      {{ category.id }} - {{ category.name }}
    </p>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const categories = ref([]);

const getCategories = async () => {
  try {
    const response = await fetch(`/api/v1/categories?type=0`);

    if (!response.ok) {
      throw new Error('Response not OK');
    }

    const data = await response.json();
    categories.value = data;
  } catch (error) {
    console.error('Error fetching menu items:', error);
  }
};

onMounted(async () => {
  await getCategories();
});
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
