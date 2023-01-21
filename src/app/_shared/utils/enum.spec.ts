export class StringUtil<T> {
  static onlyNumber(text: string | number): string {
    return String(text).match(/\d/gi)?.join('') || '';
  }
}
