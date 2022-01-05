# ProjectCatwalk

## Test edit

## 1: Tests and You

### 1.1: Introduction

_JEST is a testing framework for javascript (specifically, jsx) which supports unit, integration, and end-to-end tests._  </br>
_This section will provide a comprehensive guide on how to setup JEST and create / run your first unit test._

---

### 1.2: Installation and Setup

- Install JEST and all its dependencies by running ``npm install --save-dev jest``.

- Install the [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/), which works out of the box with JEST. This will allow you to write behavior patterns in jsx to test your react components (as opposed to plain javascript.)

- Ensure the ``module.exports`` in your ``babel.config.js`` file contains the following presets. If you don't have a ``babel.config.js`` file, just make one.

```
module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
  ],
}; 
```

---

### 1.3: Your First Unit Test

_Recommended: Make a testing directory (such as_ ``./tests``_) for all your tests to live in._  </br>
_JEST will automatically generate a_ ``./coverage`` _directory with an_ ``index.html`` _file after you run your first testing suite._

- In your testing directory, create a ``COMPONENT_NAME.test.jsx`` file, where ``COMPONENT_NAME`` is the name of your component (e.g. ``App.test.jsx``.)

- Inside your ``COMPONENT_NAME.test.jsx`` file, import all the required modules and write a simple test:

```
import React from 'react';
import { screen, render } from '@testing-library/react';
import { test } from '@jest/globals';
import App from '../client/src/components/App';

test('EXPECTED: App should render \'Hello World!\'', () => {
  render(<App />);
  screen.getByText('Hello World!');
});
```

_More details about JEST tests including mocks available at [jestjs docs](https://jestjs.io/docs/getting-started)_

---

### 1.4: Code Coverage

- Navigate to ``/coverage/lcov-report`` inside your root project directory and run the ``index.html`` file in your browser.