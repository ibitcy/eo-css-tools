export function templateToString(template: TemplateStringsArray, ...values: any[]): string {
  return `${template}`(values);
}
