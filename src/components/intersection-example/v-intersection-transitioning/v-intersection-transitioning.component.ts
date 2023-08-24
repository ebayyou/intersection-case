import onIntersection from '@/shared/composables/onIntersection'
import type { IVueIntersectionObserverEntry } from '@/shared/interface/interface'
import { defineComponent, onMounted, ref } from 'vue'

export default defineComponent({
  compatConfig: { MODE: 3 },
  name: 'v-intersection-transitioning',
  setup() {
    const h2Ref = ref()
    const { useIntersection } = onIntersection()

    const callback = (entry: IVueIntersectionObserverEntry) => {
      entry.target.classList.add('visible')
    }
    const outCallback = (entry: IVueIntersectionObserverEntry) => {
      entry.target.classList.remove('visible')
    }

    onMounted(() => {
      useIntersection({ elementToWatch: h2Ref.value, callback, outCallback })
    })

    return {
      h2Ref
    }
  }
})
