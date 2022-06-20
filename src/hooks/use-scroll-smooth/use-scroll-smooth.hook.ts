import { RefObject, useEffect, useState } from 'react';
import { Options as IOptions } from 'smooth-scroll';

import { useSmoothScrollContext } from '..';

const getSmoothScrollInstance = () => {
  // eslint-disable-next-line global-require
  const SmoothScroll = require('smooth-scroll');

  return new SmoothScroll();
};

export const useScrollSmooth = (globalToggle?: Element | null, globalOptions?: IOptions) => {
  const [instance, setInstance] = useState<SmoothScroll | null>();

  const smoothScrollContext = useSmoothScrollContext();
  const mergedOptions = { ...smoothScrollContext?.options, ...globalOptions };

  useEffect(() => {
    const smoothScrollInstance = getSmoothScrollInstance();

    setInstance(smoothScrollInstance);

    return () => {
      smoothScrollInstance.destroy();
    };
  }, []);

  const animateScroll = (
    element: HTMLElement | number | null | undefined,
    toggle?: Element | null,
    options?: IOptions
  ) => {
    if (element === null || element === undefined || !instance) {
      return;
    }

    instance.animateScroll(element, toggle || globalToggle, {
      ...mergedOptions,
      ...options,
    });
  };

  const scrollToSectionById = (id: string, toggle?: Element | null, options?: IOptions) => {
    const anchorElement = document.getElementById(id);

    animateScroll(anchorElement, toggle, options);
  };

  const scrollToSectionByRef = (
    ref: RefObject<HTMLElement> | null,
    toggle?: Element | null,
    options?: IOptions
  ) => animateScroll(ref?.current, toggle, options);

  const scrollTo = (position: number, toggle?: Element | null, options?: IOptions) =>
    animateScroll(position, toggle, options);

  const scrollToTop = (toggle?: Element | null, options?: IOptions) => scrollTo(0, toggle, options);

  const cancelScroll = (noEvent?: boolean | undefined) => {
    if (!instance) {
      return;
    }

    instance.cancelScroll(noEvent);
  };

  return {
    scrollTo,
    scrollToTop,
    cancelScroll,
    animateScroll,
    scrollToSectionById,
    scrollToSectionByRef,
  };
};
