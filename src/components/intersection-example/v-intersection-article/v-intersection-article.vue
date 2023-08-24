<template>
  <main class="app main">
    <article>
      <h1>My Article</h1>

      <section v-for="(header, index) in headers" :key="header">
        <h2 :id="index" ref="headerRef">{{ header }}</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate aspernatur at quam
          blanditiis veniam corrupti expedita quidem repellendus, ab eius quas suscipit deleniti
          soluta sit molestias dicta minima aut esse aliquam distinctio delectus ullam. Suscipit
          saepe cupiditate porro, laborum fugit recusandae, quos hic neque veritatis deleniti quasi
          dolorum ipsa sapiente.
        </p>
      </section>
    </article>

    <aside>
      <div>
        <a
          v-for="(header, index) in headers"
          :href="`${index}`"
          :key="header"
          :class="{ isActive: index == currentSection }"
        >
          {{ header }}
        </a>
      </div>
    </aside>
  </main>
</template>

<script lang="ts" src="./v-intersection-article.component.ts"></script>

<style lang="scss" src="./v-intersection-article.scss"></style>
