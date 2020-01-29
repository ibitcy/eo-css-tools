declare type IValue = number | string | undefined;
interface IBreakpointParams {
    min?: IValue;
    max?: IValue;
}
export declare function breakpoint(params: IBreakpointParams | IValue[]): string;
export declare const brp: typeof breakpoint;
export {};
