import * as React from 'react';

import { useScrollSmooth } from '../src';

const SECTION_ID = 'test-section-id';

export const ExampleWithoutProvider = () => {
  const { scrollToSectionById, scrollTop } = useScrollSmooth();

  const handleClick = () => scrollToSectionById(SECTION_ID);

  const handleScrollToTop = () => scrollTop();

  return (
    <div>
      <button onClick={handleClick} style={{ marginBottom: 2000 }}>
        Smooth scroll to section by id
      </button>
      <div id={SECTION_ID}>
        <h1>Section</h1>
        <button onClick={handleScrollToTop}>
          Scroll to top
        </button>
      </div>
    </div>
  );
};
