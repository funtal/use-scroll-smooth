import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { ExampleWithProvider } from '../example/example-with-provider';
import { ExampleWithoutProvider } from '../example/example-without-provider';

describe('useScrollSmooth hook', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ExampleWithProvider />, div);
    ReactDOM.unmountComponentAtNode(div);

    ReactDOM.render(<ExampleWithoutProvider />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
