import { createContext } from 'react';

import { IScrollSmoothContextValue } from './scroll-smooth.types';

export const ScrollSmoothContext = createContext<IScrollSmoothContextValue | null>(null);
