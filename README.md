# css-tools

Simple data comparsion and composition library

[![build status](https://badgen.net/travis/ibitcy/css-tools?icon=travis)](https://travis-ci.org/ibitcy/css-tools)
[![npm bundlephobia minzip](https://badgen.net/bundlephobia/minzip/css-tools@latest?icon=awesome)
![npm version](https://badgen.net/npm/v/css-tools?icon=npm&color=blue)](https://www.npmjs.com/package/css-tools)

# Install

```bash
# npm
npm i css-tools

# yarn
yarn add css-tools
```

# Usage

#### Example

```typescript
import { css } from 'YOUR_BELOWED_CSS_IN_JS_FRAMEWORK';
import { breakpoint } from 'eo-css-tools';

const style = {
  root: css`
    height: 400px;

    // Mobile portrait breakpoint
    ${breakpoint(0, 400)`
      height: 200px;
    `}

    // Tablet breakpoint
    ${breakpoint('400px', '1024px')`
      height: 300px;
    `}
  `,
};
```

#### Result

```css
.root_xk292ls {
  height: 400px;
}

@media only screen and (min-width: 0px) and (max-width: 400px) {
  .root_xk292ls {
    height: 200px;
  }
}

@media only screen and (min-width: 400px) and (max-width: 1024px) {
  .root_xk292ls {
    height: 300px;
  }
}
```
