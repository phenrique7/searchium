<script setup lang="ts">
import { useRouter } from 'vue-router';
import Container from '@/components/container/Container.vue';

type FormFields = {
  search: string;
};

const router = useRouter();

function onSubmit(data: FormFields) {
  router.push(`users/${data.search}`);
}
</script>

<template>
  <div :class="$style.HomeView" data-component="HomeView">
    <Container>asd</Container>
  </div>
</template>

<style module>
.HomeView {
  padding-left: var(--size-4);
  padding-right: var(--size-4);
}
</style>
