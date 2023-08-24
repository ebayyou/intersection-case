import { defineComponent, onMounted, ref, onUpdated } from 'vue';

import onIntersection from '@/shared/composables/onIntersection';
import type { IVueIntersectionObserverEntry } from '@/shared/interface/interface';
import { typeTransition } from '@/shared/enums/enums';

export default defineComponent({
  compatConfig: { MODE: 3 },
  name: 'v-intersection-box',
  setup() {
    const { useIntersection } = onIntersection();
    const boxRef = ref();
    const optionModel = ref(typeTransition.FADE_IN);
    const optionTransitions = [
      { option: 'fade in', value: typeTransition.FADE_IN },
      { option: 'pulse', value: typeTransition.PULSE },
      { option: 'spin', value: typeTransition.SPIN },
      { option: 'bounced', value: typeTransition.BOUNCED },
    ];

    const callback = (entry: IVueIntersectionObserverEntry) => {
      if (optionModel.value === typeTransition.FADE_IN) {
        entry.target.classList.add('is-visible-fade-in');
        entry.target.classList.remove('is-visible-pulse');
        entry.target.classList.remove('is-visible-spin');
        entry.target.classList.remove('is-visible-bounced');
      } else if (optionModel.value === typeTransition.PULSE) {
        entry.target.classList.add('is-visible-pulse');
        entry.target.classList.remove('is-visible-fade-in');
        entry.target.classList.remove('is-visible-spin');
        entry.target.classList.remove('is-visible-bounced');
      } else if (optionModel.value === typeTransition.SPIN) {
        entry.target.classList.add('is-visible-spin');
        entry.target.classList.remove('is-visible-fade-in');
        entry.target.classList.remove('is-visible-pulse');
        entry.target.classList.remove('is-visible-bounced');
      } else if (optionModel.value === typeTransition.BOUNCED) {
        entry.target.classList.add('is-visible-bounced');
        entry.target.classList.remove('is-visible-fade-in');
        entry.target.classList.remove('is-visible-spin');
        entry.target.classList.remove('is-visible-pulse');
      }
    };
    const outCallback = (entry: IVueIntersectionObserverEntry) => {
      if (optionModel.value === typeTransition.FADE_IN) {
        entry.target.classList.remove('is-visible-fade-in');
      } else if (optionModel.value === typeTransition.PULSE) {
        entry.target.classList.remove('is-visible-pulse');
      } else if (optionModel.value === typeTransition.SPIN) {
        entry.target.classList.remove('is-visible-spin');
      } else if (optionModel.value === typeTransition.BOUNCED) {
        entry.target.classList.remove('is-visible-bounced');
      }
    };

    onMounted(() => {
      boxRef.value.forEach((elementToWatch: Element) => {
        useIntersection({ elementToWatch, callback, outCallback });
      });
    });

    onUpdated(() => {
      console.log(optionModel.value);
    });

    return {
      optionTransitions,
      boxRef,
      optionModel,
    };
  },
});
