import { IUser } from './user.interface';

export class User implements IUser {
	id: string;
	name: string;
	email: string;

	constructor(id = '', name = '', email = '') {
		this.id = id;
		this.name = name;
		this.email = email;
	}

	isEmpty(): boolean {
		return !!this.id;
	}

	form(user: IUser): User {
		this.id = user.id || '';
		this.name = user.name;
		this.email = user.email;
		return this;
	}
}
