import { normalizePixelValue } from './normalizePixelValue';
import { templateToString } from './templateToString';

type IValue = number | string | undefined;
type ICssString = (cssTemplateString: TemplateStringsArray, ...values: any) => string;

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
    css: (cssTemplateString, ...values) => {
      const css = templateToString(cssTemplateString, ...values);

      switch (true) {
        case Boolean(min && max) ||
          (Boolean(min === 0) && Boolean(max === 0)) ||
          (Boolean(min === 0) && Boolean(max)) ||
          (Boolean(max === 0) && Boolean(min)): {
          return `@media only screen and (min-width: ${min}) and (max-width: ${max}) {${css}}`;
        }

        case Boolean(min || min === 0): {
          return `@media only screen and (min-width: ${min}) {${css}}`;
        }

        case Boolean(max || max === 0): {
          return `@media only screen and (max-width: ${max}) {${css}}`;
        }

        default: {
          return ``;
        }
      }
    },
  };
}
