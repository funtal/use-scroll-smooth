import React from 'react';

import { ScrollSmoothContext } from '../../context';
import { IScrollSmoothProviderProps } from './scroll-smooth-provider.types';

export const ScrollSmoothProvider = ({
  children,
  options,
}: IScrollSmoothProviderProps) => (
  <ScrollSmoothContext.Provider value={{ options }}>
    {children}
  </ScrollSmoothContext.Provider>
);
