export interface IVueOptionsIntersection {
  root?: Element | Document | null | undefined;
  rootMargin?: string;
  thresholds?: number;
}

export interface IVueIntersection {
  elementToWatch: Element;
  callback: (entry: IVueIntersectionObserverEntry) => void;
  outCallback?: (entry: IVueIntersectionObserverEntry) => void;
  options?: IVueOptionsIntersection;
  once?: boolean;
}

export interface IVueIntersectionObserverEntry {
  boundingClientRect: DOMRectReadOnly;
  intersectionRatio: number;
  intersectionRect: DOMRectReadOnly;
  isIntersecting: boolean;
  rootBounds: DOMRectReadOnly | null;
  target: Element;
  time: number;
}

export interface IVueImageDatas {
  id: number;
  href: string;
  title: string;
  src: string;
}
