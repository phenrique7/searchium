<script>
export default {
  name: 'Container',
};
</script>

<template>
  <div :class="$style.Container" data-component="Container"><slot></slot></div>
</template>

<style module>
.Container {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: var(--size-lg);
}
</style>
