# eo-css-tools

🛠 CSS tools that built to simplify CSS-in-JS styling.

[![build status](https://badgen.net/travis/ibitcy/eo-css-tools?icon=travis)](https://travis-ci.org/ibitcy/eo-css-tools)
[![npm bundlephobia minzip](https://badgen.net/bundlephobia/minzip/eo-css-tools@latest?icon=awesome)
![npm version](https://badgen.net/npm/v/eo-css-tools?icon=npm&color=blue)](https://www.npmjs.com/package/eo-css-tools)

## Tools

- [Breakpoints](#Breakpoints)

## Install

```bash
# npm
npm i eo-css-tools

# yarn
yarn add eo-css-tools
```

## Compatibility

💅 [Styled Components](https://styled-components.com)  
👩‍🎤 [Emotion](https://emotion.sh)  
🌸 [Linaria](https://linaria.now.sh)

[Tested](https://1eq9w.sse.codesandbox.io) only with the libraries above. However, it must be compatible with any CSS-in-JS library.

## Usage

### Breakpoints

Generates media query with min/max-width conditions.

| Method name               | Breakpoint type                         | Media query   |
|---------------------------|-----------------------------------------|---------------|
| `breakpoint([min, max])`  | Custom                                  |               |
| `mobile()`                | Mobile devices in portrait orientation  | < 479px       |
| `mobileLandscape()`       | Mobile devices in landscape orientation | < 767px       |
| `tablet()`                | Tablet devices in portrait orientation  | < 991px       |
| `tabletLandscape()`       | Tablet devices in landscape orientation | < 1199px      |
| `desktop()`               | Laptops and larger                      | 1200px >      |


#### Example

```typescript
import { css } from 'YOUR_BELOWED_CSS_IN_JS_FRAMEWORK';
import { breakpoint, brk, mobile } from 'eo-css-tools';

const LARGE_TO_INFINITY = ['2000px', Infinity];

const style = {
  root: css`
    height: 200px;

    /* Mobile portrait custom */
    ${breakpoint([undefined, 400])} {
      height: 400px;
    }

    /* Large screens */
    ${brk(LARGE_TO_INFINITY)} {
      height: 600px;
    }
    
    /* Mobile portrait predefined */
    ${mobile()} {
      height: 800px;
    }
  `,
};
```

#### Result

```css
.root_xk292ls {
  height: 200px;
}

@media only screen and (max-width: 400px) {
  .root_xk292ls {
    height: 400px;
  }
}

@media only screen and (min-width: 2000px) {
  .root_xk292ls {
    height: 600px;
  }
}

@media only screen and (max-width: 479px) {
  .root_xk292ls {
    height: 800px;
  }
}
```
