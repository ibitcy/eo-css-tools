declare type IValue = number | string | undefined;
declare type ICssString = (cssTemplateString: TemplateStringsArray) => string;
interface IBreakpointParams {
    min?: IValue;
    max?: IValue;
}
export declare function breakpoint(params: IBreakpointParams | IValue[]): ICssString;
export {};
