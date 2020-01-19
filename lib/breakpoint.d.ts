interface IBreakpointParams {
    min?: number | string;
    max?: number | string;
}
export declare const breakpoint: (params: IBreakpointParams) => (cssTemplateString: TemplateStringsArray) => string;
export {};
