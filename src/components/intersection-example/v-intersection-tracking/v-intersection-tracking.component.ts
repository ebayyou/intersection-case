import onIntersection from '@/shared/composables/onIntersection'
import type { IVueIntersectionObserverEntry } from '@/shared/interface/interface'
import { defineComponent, onMounted, ref } from 'vue'

export default defineComponent({
  compatConfig: { MODE: 3 },
  name: 'v-intersection-tracking',
  setup() {
    const sectionRef = ref()
    const { useIntersection } = onIntersection()

    const options = {
      thresholds: 0.75
    }

    const callback = (entry: IVueIntersectionObserverEntry) => {
      console.log(entry)
      console.log('Log event and unobserve')
    }

    onMounted(() => {
      useIntersection({ elementToWatch: sectionRef.value, callback, options })
    })

    return {
      sectionRef
    }
  }
})
