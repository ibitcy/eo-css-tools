import { normalizePixelValue } from './normalizePixelValue';

type IValue = number | string | undefined;

interface IBreakpointParams {
  min?: IValue;
  max?: IValue;
}

export function breakpoint(params: IBreakpointParams | IValue[]): string {
  let min: IValue;
  let max: IValue;

  if (Array.isArray(params)) {
    min = normalizePixelValue(params[0]);
    max = normalizePixelValue(params[1]);
  } else {
    min = normalizePixelValue(params.min);
    max = normalizePixelValue(params.max);
  }

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

export const brp = breakpoint;
