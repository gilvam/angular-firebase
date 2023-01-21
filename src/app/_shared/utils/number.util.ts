import { StringUtil } from './enum.spec';

export class NumberUtil<T> {
	static onlyNumber(text: string | number): number {
		return Number(StringUtil.onlyNumber(text));
	}
}
