<template>
  <div class="page">
    <h1>Example 3</h1>
    <p>Scroll at least 3/4 of the page and check the console.</p>
    <div class="section" v-for="(item, i) in 3" :key="i">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam imperdiet ipsum nec
        fermentum mollis. Fusce in orci lorem. Suspendisse vel tellus quam. Cras sagittis lorem
        vitae risus laoreet, vel malesuada mauris porta. Nam facilisis lacinia ligula, eu facilisis
        urna laoreet sit amet. Duis et velit finibus, eleifend quam in, tincidunt lacus. Duis
        cursus, nulla at accumsan aliquam, lacus sapien venenatis metus, vitae tempor lorem mi eu
        sem. Morbi ex leo, accumsan sit amet enim eu, placerat commodo nunc. Proin consequat, quam
        eget semper lacinia, purus mi congue nibh, vel commodo turpis leo vel tortor. Phasellus
        ornare, lectus non faucibus tempor, turpis elit interdum ex, ut rhoncus nisi leo nec turpis.
      </p>
    </div>

    <div class="section" ref="sectionRef">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam imperdiet ipsum nec
        fermentum mollis. Fusce in orci lorem. Suspendisse vel tellus quam. Cras sagittis lorem
        vitae risus laoreet, vel malesuada mauris porta. Nam facilisis lacinia ligula, eu facilisis
        urna laoreet sit amet. Duis et velit finibus, eleifend quam in, tincidunt lacus. Duis
        cursus, nulla at accumsan aliquam, lacus sapien venenatis metus, vitae tempor lorem mi eu
        sem. Morbi ex leo, accumsan sit amet enim eu, placerat commodo nunc. Proin consequat, quam
        eget semper lacinia, purus mi congue nibh, vel commodo turpis leo vel tortor. Phasellus
        ornare, lectus non faucibus tempor, turpis elit interdum ex, ut rhoncus nisi leo nec turpis.
      </p>
    </div>
  </div>
</template>

<script lang="ts" src="./v-intersection-tracking.component.ts"></script>

<style lang="scss" src="./v-intersection-tracking.scss"></style>
