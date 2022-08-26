<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  document.title = 'Searchium ― Page Not Found';
});
</script>

<template>
  <div :class="$style.root">
    <h1>404 - Page Not Found</h1>
    <p>
      The page you're looking for doesn't exist or is temporarily unavailable.
    </p>
    <button>Go to Homepage</button>
  </div>
</template>

<style module>
.root {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
</style>
