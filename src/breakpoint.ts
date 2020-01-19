import { mormalizePixelValue } from './normalizeValue';

interface IBreakpointParams {
  min?: number | string;
  max?: number | string;
}

export const breakpoint = (params: IBreakpointParams): ((cssTemplateString: TemplateStringsArray) => string) => {
  const { min, max } = params;

  return css => {
    switch (true) {
      case Boolean(min && max) ||
        (Boolean(min === 0) && Boolean(max === 0)) ||
        (Boolean(min === 0) && Boolean(max)) ||
        (Boolean(max === 0) && Boolean(min)): {
        return `@media only screen (min-width: ${mormalizePixelValue(min)}) and (max-width: ${mormalizePixelValue(
          max,
        )}) {${css}}`;
      }

      case Boolean(min || min === 0): {
        return `@media only screen (min-width: ${mormalizePixelValue(min)}) {${css}}`;
      }

      case Boolean(max || max === 0): {
        return `@media only screen (max-width: ${mormalizePixelValue(max)}) {${css}}`;
      }

      default: {
        return '';
      }
    }
  };
};
