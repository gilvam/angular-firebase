import { User } from './user.model';
import { IUserDto } from './user-dto.interface';

export class UserDto implements IUserDto {
	name: string;
	email: string;

	constructor(name: User);
	constructor(name: string, email: string);
	constructor(...args: any[]) {
		const value = args.at(0);

		if (value instanceof User) {
			this.name = value.name;
			this.email = value.email;
			return;
		}
		this.name = args.shift();
		this.email = args.shift() || '';
	}
}
