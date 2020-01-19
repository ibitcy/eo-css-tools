/**
 * Makes breakpoint style by media-quries
 * @param {string|number} [min] - Min of range eg. (300 or '300px')
 * @param {string|number} [max] - Max of range eg. (1024 or '1024px')
 * @return {string} CSS-string
 */
export declare const breakpoint: (min?: string | number | undefined, max?: string | number | undefined) => (cssTemplateString: TemplateStringsArray) => string;
