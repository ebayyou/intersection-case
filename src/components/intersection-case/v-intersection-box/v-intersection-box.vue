<template>
  <section class="wrapper">
    <div class="select">
      <select v-model="optionModel">
        <option v-for="opt in optionTransitions" :value="opt.value" :key="opt.value">
          {{ opt.option }}
        </option>
      </select>
    </div>

    <div class="box__wrapper">
      <div class="box__animate" v-for="(item, index) in 28" :key="index" ref="boxRef"></div>
    </div>
  </section>
</template>

<script lang="ts" src="./v-intersection-box.component.ts"></script>

<style lang="scss" src="./v-intersection-box.scss"></style>
