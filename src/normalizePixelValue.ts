export const normalizePixelValue = (value: string | number | undefined): string | undefined => {
  if (value === undefined || value === null) {
    return undefined;
  }

  const parsedValue = parseFloat(value as string);

  if (isNaN(parsedValue)) {
    return undefined;
  } else if (parsedValue === 0 || parsedValue === -Infinity) {
    return '0';
  } else if (isFinite(parsedValue)) {
    return `${parsedValue}px`;
  } else {
    return undefined;
  }
};
