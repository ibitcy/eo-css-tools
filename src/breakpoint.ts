import {normalizePixelValue} from './normalizePixelValue';

type TBreakpointValue = number | string | undefined;

export function breakpoint(params: TBreakpointValue[]): string {
  const min = normalizePixelValue(params[0]);
  const max = normalizePixelValue(params[1]);

  switch (true) {
    case Boolean(min && max) ||
      (Boolean(min === '0') && Boolean(max === '0')) ||
      (Boolean(min === '0') && Boolean(max)) ||
      (Boolean(max === '0') && Boolean(min)): {
      return `@media only screen and (min-width: ${min}) and (max-width: ${max})`;
    }

    case Boolean(min || min === '0'): {
      return `@media only screen and (min-width: ${min})`;
    }

    case Boolean(max || max === '0'): {
      return `@media only screen and (max-width: ${max})`;
    }

    default: {
      return '';
    }
  }
}

// Aliases
export const brk = breakpoint;

