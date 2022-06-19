import { RefObject, useEffect, useState } from 'react';

import SmoothScroll, { Options as IOptions } from 'smooth-scroll';

import { useSmoothScrollContext } from '..';

const getSmoothScrollInstance = (): SmoothScroll => {
  // eslint-disable-next-line global-require
  const SmoothScroll = require('smooth-scroll');

  return new SmoothScroll();
};

export const useScrollSmooth = (options?: IOptions) => {
  const [instance, setInstance] = useState<SmoothScroll | null>();

  const smoothScrollContext = useSmoothScrollContext();
  const mergedOptions = { ...smoothScrollContext?.options, ...options };

  useEffect(() => {
    const smoothScrollInstance = getSmoothScrollInstance();

    setInstance(smoothScrollInstance);

    return () => {
      smoothScrollInstance.destroy();
    };
  }, []);

  const animateScroll = (
    element: HTMLElement | null | undefined,
    toggle?: Element | null,
    options?: IOptions
  ) => {
    if (!element || !instance) {
      return;
    }

    instance.animateScroll(element, toggle, {
      ...mergedOptions,
      ...options,
    });
  };

  const scrollToSectionById = (
    id: string,
    toggle?: Element | null,
    options?: IOptions
  ) => {
    const anchorElement = document.getElementById(id);

    animateScroll(anchorElement, toggle, options);
  };

  const scrollToSectionByRef = (
    ref: RefObject<HTMLElement> | null,
    toggle?: Element | null,
    options?: IOptions
  ) => animateScroll(ref?.current, toggle, options);

  const cancelScroll = (noEvent?: boolean | undefined) => {
    if (!instance) {
      return;
    }

    instance.cancelScroll(noEvent);
  };

  return {
    cancelScroll,
    animateScroll,
    scrollToSectionById,
    scrollToSectionByRef,
  };
};
