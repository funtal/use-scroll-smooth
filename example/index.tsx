import 'react-app-polyfill/ie11';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { ExampleWithProvider } from './example-with-provider';
import { ExampleWithoutProvider } from './example-without-provider';

const App = () => {
  return (
    <div>
      <div>
        <h1>Example without provider</h1>
        <ExampleWithoutProvider />
      </div>
      <div>
        <h1>Example with provider</h1>
        <ExampleWithProvider />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
