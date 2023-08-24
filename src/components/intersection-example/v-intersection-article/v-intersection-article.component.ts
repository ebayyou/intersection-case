import onIntersection from '@/shared/composables/onIntersection'
import type { IVueIntersectionObserverEntry } from '@/shared/interface/interface'
import { defineComponent, reactive, onMounted, ref, type Ref } from 'vue'

export default defineComponent({
  compatConfig: { MODE: 3 },
  name: 'v-intersection-article',
  setup() {
    const headers = reactive([
      'Section 1',
      'Section 2',
      'How this works',
      'Placeholder',
      'Section 5'
    ])

    const currentSection: Ref<string | null> = ref('')
    const headerRef = ref()
    const { useIntersection } = onIntersection()

    const callback = (entry: IVueIntersectionObserverEntry) => {
      currentSection.value = entry.target.getAttribute('id')
    }

    const optionsIntersection = {
      rootMargin: '0px 0px -90% 0px'
    }

    onMounted(() => {
      headerRef.value.forEach((elementToWatch: Element) => {
        useIntersection({ elementToWatch, callback, options: optionsIntersection })
      })
    })

    return {
      headerRef,
      headers,
      currentSection
    }
  }
})
