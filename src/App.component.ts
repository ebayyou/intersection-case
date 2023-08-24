import { defineComponent, ref } from 'vue';

import VIntersectionTransitioning from '@/components/intersection-example/v-intersection-transitioning/v-intersection-transitioning.vue';
import vIntersectionLazyLoading from './components/intersection-example/v-intersection-lazy-loading/v-intersection-lazy-loading.vue';
import VIntersectionTracking from './components/intersection-example/v-intersection-tracking/v-intersection-tracking.vue';
import VIntersectionArticle from './components/intersection-example/v-intersection-article/v-intersection-article.vue';
import VIntersectionBox from './components/intersection-case/v-intersection-box/v-intersection-box.vue';

export default defineComponent({
  name: 'App',
  compatConfig: { MODE: 3 },
  components: {
    VIntersectionTransitioning,
    vIntersectionLazyLoading,
    VIntersectionTracking,
    VIntersectionArticle,
    VIntersectionBox,
  },
  setup() {
    const type = ['transitioning', 'tracking', 'article', 'box'];
    const typeIntersection = ref(type[3]);

    return {
      typeIntersection,
    };
  },
});
