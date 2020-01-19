import { mormalizePixelValue } from './normalizeValue';

type IValue = number | string | undefined;
type ICssString = (cssTemplateString: TemplateStringsArray) => string;

interface IBreakpointParams {
  min?: IValue;
  max?: IValue;
}

export function breakpoint(params: IBreakpointParams | IValue[]): ICssString {
  let min: IValue = undefined;
  let max: IValue = undefined;

  if (Array.isArray(params)) {
    [min, max] = params;
  } else {
    min = params.min;
    max = params.max;
  }

  return css => {
    switch (true) {
      case Boolean(min && max) ||
        (Boolean(min === 0) && Boolean(max === 0)) ||
        (Boolean(min === 0) && Boolean(max)) ||
        (Boolean(max === 0) && Boolean(min)): {
        return `@media only screen and (min-width: ${mormalizePixelValue(min)}) and (max-width: ${mormalizePixelValue(
          max,
        )}) {${css}}`;
      }

      case Boolean(min || min === 0): {
        return `@media only screen and (min-width: ${mormalizePixelValue(min)}) {${css}}`;
      }

      case Boolean(max || max === 0): {
        return `@media only screen and (max-width: ${mormalizePixelValue(max)}) {${css}}`;
      }

      default: {
        return '';
      }
    }
  };
}
