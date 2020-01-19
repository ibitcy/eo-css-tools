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
const style = css`
  height: 400px;

  // Mobile portrait breakpoint
  ${breakpoint(0, 400)`
    height: 200px;
  `}

  // Tablet breakpoint
  ${breakpoint('400px', '1024px')`
    height: 300px;
  `}
`;
```

#### Result

```javascript
[
  {
    id: '1',
    title: 'Document 1',
    status: 'upd', // <--- New value
    updated: '1970-01-01T00:00:03.000Z', // <--- New value
  },
  {
    id: '2',
    title: 'Document 2',
    status: 'old',
    updated: '1970-01-01T00:00:02.000Z',
  },

  // New record
  {
    id: '3',
    title: 'Document 3',
    status: 'new',
    updated: '1970-01-01T00:00:04.000Z',
  },
];
```
