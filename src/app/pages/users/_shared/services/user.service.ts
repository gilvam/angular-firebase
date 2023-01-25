import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../model/user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
	private $_user = new BehaviorSubject(new User());

	change(user: User): void {
		this.$_user.next(user);
	}

	clear(): void {
		this.change(new User());
	}

	getObservable(): Observable<User> {
		return this.$_user.asObservable();
	}

	get get(): User {
		return this.$_user.value;
	}
}
