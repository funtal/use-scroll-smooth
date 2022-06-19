import { useContext } from 'react';

import { ScrollSmoothContext } from '../../context';

import { defaultScrollSmoothContextValue } from './use-scroll-smooth-context.defaults';

export const useSmoothScrollContext = () => {
  const smoothScrollContext = useContext(ScrollSmoothContext);

  const hasContextOptions = Object.keys(smoothScrollContext?.options || {}).length > 0;

  const parsedContext = hasContextOptions ? smoothScrollContext : defaultScrollSmoothContextValue;

  return parsedContext;
};
