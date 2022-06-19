import 'react-app-polyfill/ie11';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { ExampleWithoutProvider } from './example-without-provider';

const App = () => {
  return (
    <div>
      <ExampleWithoutProvider />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
