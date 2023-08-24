<template>
  <div>
    <v-intersection-transitioning
      v-if="typeIntersection === 'transitioning'"
    ></v-intersection-transitioning>
    <v-intersection-tracking v-else-if="typeIntersection === 'tracking'"></v-intersection-tracking>
    <v-intersection-article v-else-if="typeIntersection === 'article'"></v-intersection-article>
    <v-intersection-box v-else-if="typeIntersection === 'box'"></v-intersection-box>
  </div>
</template>

<script lang="ts" src="./App.component.ts"></script>

<style lang="scss" src="./App.scss"></style>
