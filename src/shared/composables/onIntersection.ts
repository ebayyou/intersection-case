/**
 * @function useIntersection
 * @param  {Element} elementToWatch elementToWatch
 * @param  {function} callback callback element is intersecting
 * @param  {function} callback callback element is not intersecting
 * @param  {boolen} once if callback only run one time
 * @param  {object} options Intersection Observer API options
 * @return {type} Observer
 *
 */

import type { IVueIntersection, IVueIntersectionObserverEntry } from '../interface/interface'

const onIntersection = () => {
  const useIntersection = ({
    elementToWatch,
    callback,
    outCallback = () => {},
    options,
    once
  }: IVueIntersection) => {
    const Observer = new IntersectionObserver((entries) => {
      entries.forEach((entry: IVueIntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          callback(entry)

          if (once) {
            Observer.unobserve(entry.target)
          }
        } else {
          outCallback(entry)
        }
      })
    }, options)

    Observer.observe(elementToWatch)

    return Observer
  }

  return { useIntersection }
}

export default onIntersection
