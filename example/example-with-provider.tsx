import * as React from 'react';

import { useScrollSmooth, ScrollSmoothProvider } from '../src';

const ExampleWithProviderDemo = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollToSectionByRef, scrollToTop } = useScrollSmooth();

  const handleClick = () => scrollToSectionByRef(ref);

  const handleScrollToTop = () => scrollToTop();

  return (
    <div>
      <button onClick={handleClick} style={{ marginBottom: 2000 }}>
        Smooth scroll to section by ref
      </button>
      <div ref={ref}>
        <h1>Section</h1>
        <button onClick={handleScrollToTop}>
          Scroll to top
        </button>
      </div>
    </div>
  );
};

export const ExampleWithProvider = () => (
  <ScrollSmoothProvider options={{ speed: 1000 }}>
    <ExampleWithProviderDemo />
  </ScrollSmoothProvider>
)
