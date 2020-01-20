import { normalizePixelValue } from './normalizePixelValue';

type IValue = number | string | undefined;
type ICssString = (cssTemplateString: TemplateStringsArray) => string;

interface IBreakpointParams {
  min?: IValue;
  max?: IValue;
}

export function breakpoint(params: IBreakpointParams | IValue[]): { css: ICssString } {
  let min: IValue = undefined;
  let max: IValue = undefined;

  if (Array.isArray(params)) {
    min = normalizePixelValue(params[0]);
    max = normalizePixelValue(params[1]);
  } else {
    min = normalizePixelValue(params.min);
    max = normalizePixelValue(params.max);
  }

  return {
    css: cssString => {
      switch (true) {
        case Boolean(min && max) ||
          (Boolean(min === 0) && Boolean(max === 0)) ||
          (Boolean(min === 0) && Boolean(max)) ||
          (Boolean(max === 0) && Boolean(min)): {
          return `@media only screen and (min-width: ${min}) and (max-width: ${max}) {${cssString}}`;
        }

        case Boolean(min || min === 0): {
          return `@media only screen and (min-width: ${min}) {${cssString}}`;
        }

        case Boolean(max || max === 0): {
          return `@media only screen and (max-width: ${max}) {${cssString}}`;
        }

        default: {
          return ``;
        }
      }
    },
  };
}
