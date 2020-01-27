export function templateToString(template: TemplateStringsArray, ...values: any[]): string {
  const result: string[] = [];
  template.forEach((item: any, index) => {
    if (item || item === 0) {
      result.push(item);
    }

    if (values[index] || values[index] === 0) {
      result.push(values[index]);
    }
  });
  return result.join('');
}
