import { IUserDto } from './user-dto.interface';
import { IUser } from './user.interface';

export class UserDto implements IUserDto {
	name: string;
	email: string;

	constructor(name: IUser);
	constructor(name: string, email: string);
	constructor(...args: any[]) {
		const value = args.at(0);

		if ('name' in value && 'email' in value) {
			this.name = value.name;
			this.email = value.email;
			return;
		}
		this.name = args.shift();
		this.email = args.shift() || '';
	}
}
