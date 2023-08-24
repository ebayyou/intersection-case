<template>
  <div class="page">
    <h1>Example 2</h1>
    <p>
      Open the network tab of Chrome Developer tools and watch the images download when they become
      visible.
    </p>
    <div class="image-container" v-for="image in images" :key="image.id">
      <div class="image-wrapper">
        <a :href="image.href" target="_blank" rel="noopener noreferrer" :title="image.src">
          <img :data-src="image.src" class="lazyload" :alt="image.title" ref="imageRef" />
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./v-intersection-lazy-loading.component.ts"></script>

<style lang="scss" src="./v-intersection-lazy-loading.scss"></style>
