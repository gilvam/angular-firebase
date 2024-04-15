import { EnumUtil } from './enum.util';

describe('EnumUtil', () => {
	it('deve retornar o valor get', () => {
		const value = 'a/b.c1';

		const response = EnumUtil.get(value, { a: 1, b: 2 });

		expect(response).toEqual(1);
	});
});
