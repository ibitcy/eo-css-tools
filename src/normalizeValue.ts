export const mormalizePixelValue = (value: string | number | undefined): string | undefined => {
  if (value === undefined) {
    return undefined;
  } else if (typeof value === 'string') {
    return `${parseFloat(value)}px`;
  } else if (typeof value === 'number') {
    return `${value}px`;
  } else {
    return undefined;
  }
};
