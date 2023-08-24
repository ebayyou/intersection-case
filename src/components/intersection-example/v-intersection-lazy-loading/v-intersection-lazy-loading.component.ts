import { defineComponent, onMounted, reactive, ref } from 'vue'

import { imageDatas } from '@/shared/image-data'
import onIntersection from '@/shared/composables/onIntersection'
import type { IVueImageDatas, IVueIntersectionObserverEntry } from '@/shared/interface/interface'

export default defineComponent({
  compatConfig: { MODE: 3 },
  name: 'v-intersection-lazy-loading',
  setup() {
    const imageRef = ref()
    const images: IVueImageDatas[] = reactive(imageDatas)
    const { useIntersection } = onIntersection()

    const callback = (entry: IVueIntersectionObserverEntry) => {
      console.log(entry.target)
      entry.target.src = entry.target.dateset.src
      entry.target.classList.add('loaded')
    }

    onMounted(() => {
      imageRef.value.forEach((image: Element) =>
        useIntersection({ elementToWatch: image, callback })
      )
    })

    return {
      imageRef,
      images
    }
  }
})
