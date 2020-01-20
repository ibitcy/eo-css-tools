# eo-css-tools

🛠 CSS tools that built to simplify CSS-in-JS styling.

[![build status](https://badgen.net/travis/ibitcy/eo-css-tools?icon=travis)](https://travis-ci.org/ibitcy/eo-css-tools)
[![npm bundlephobia minzip](https://badgen.net/bundlephobia/minzip/eo-css-tools@latest?icon=awesome)
![npm version](https://badgen.net/npm/v/eo-css-tools?icon=npm&color=blue)](https://www.npmjs.com/package/eo-css-tools)

## Utils

- [breakpoint](#breakpoint)

## Install

```bash
# npm
npm i css-tools

# yarn
yarn add css-tools
```

# Compatibility

💅 [Styled Components](https://styled-components.com)  
👩‍🎤 [Emotion](https://emotion.sh)  
🌸 [Linaria](https://linaria.now.sh)

[Tested](https://1eq9w.sse.codesandbox.io) only with the libraries above. However, it must be compatible with any CSS-in-JS library.

# Usage

## breakpoint

### Example

```typescript
import { css } from 'YOUR_BELOWED_CSS_IN_JS_FRAMEWORK';
import { breakpoint } from 'eo-css-tools';

const style = {
  root: css`
    height: 400px;

    // Mobile portrait breakpoint
    ${breakpoint([0, 400]).css`
      height: 200px;
    `}

    // Tablet breakpoint
    ${breakpoint({ min: '401px', max: '1024px' }).css`
      height: 300px;
    `}
  `,
};
```

### Result

```css
.root_xk292ls {
  height: 400px;
}

@media only screen and (min-width: 0px) and (max-width: 400px) {
  .root_xk292ls {
    height: 200px;
  }
}

@media only screen and (min-width: 401px) and (max-width: 1024px) {
  .root_xk292ls {
    height: 300px;
  }
}
```
