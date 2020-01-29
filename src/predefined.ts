import { breakpoint } from './breakpoint';

export const PREDEFINED = {
  MOBILE: [undefined, 479],
  MOBILE_LANDSCAPE: [undefined, 767],
  TABLET: [undefined, 991],
  TABLET_LANDSCAPE: [undefined, 1199],
  DESKTOP: [1200, Infinity],
};

export function mobile(): string {
  return breakpoint(PREDEFINED.MOBILE);
}

export function mobileLandscape(): string {
  return breakpoint(PREDEFINED.MOBILE_LANDSCAPE);
}

export function tablet(): string {
  return breakpoint(PREDEFINED.TABLET);
}

export function tabletLandscape(): string {
  return breakpoint(PREDEFINED.TABLET_LANDSCAPE);
}

export function desktop(): string {
  return breakpoint(PREDEFINED.DESKTOP);
}
