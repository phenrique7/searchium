<script setup lang="ts">
import SunIcon from '@/icons/SunIcon.vue';
import LogoIcon from '@/icons/LogoIcon.vue';
import GithubIcon from '@/icons/GithubIcon.vue';
import Container from '@/components/container/Container.vue';
</script>

<template>
  <div :class="$style.root" data-component="Layout">
    <div :class="$style.background" />
    <main :class="$style.main">
      <header :class="$style.header">
        <Container>
          <LogoIcon />
          <div :class="$style.header_actions">
            <button>Feedback</button>
            <hr />
            <SunIcon />
            <a
              title="Source on Github"
              href="https://github.com/phenrique7/searchium"
            >
              <GithubIcon />
            </a>
          </div>
        </Container>
      </header>
      <slot />
    </main>
  </div>
</template>

<style module>
.root {
  min-height: 100vh;
}

.background {
  width: 100%;
  height: 100%;
  position: absolute;
  mask-image: linear-gradient(to bottom, transparent, black);
}

.background::before {
  width: 100%;
  height: 100%;
  content: '""';
  position: absolute;
  background: rgb(248 250 252/1) url('/hero-light.jpg') no-repeat bottom;
}

.background::after {
  width: 100%;
  height: 100%;
  content: '""';
  position: absolute;
  background-size: 50px 50px;
  background-position: 0 0, 25px 25px;
  background-image: radial-gradient(#ced4da 1px, transparent 0),
    radial-gradient(#ced4da 1px, transparent 0);
}

.main {
  z-index: 1;
  position: relative;
}

.header {
  height: 5rem;
  display: flex;
  align-items: center;
  padding-top: var(--size-2);
  justify-content: space-between;
}

.header [data-component='Container'] {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header_actions {
  display: flex;
  align-items: center;
}

.header_actions a {
  display: flex;
}

.header_actions > *:not(:first-child) {
  margin-left: var(--size-2_5);
}

.header_actions hr {
  height: 20px;
  opacity: 0.6;
  border-style: solid;
  border-width: 0 0 0 1px;
  border-color: var(--gray-4);
  border-image: none 100% / 1 / 0 stretch;
}

@media (--md-n-above) {
  .header {
    padding-top: var(--size-5);
  }

  .header_actions > *:not(:first-child) {
    margin-left: var(--size-4);
  }
}
</style>
