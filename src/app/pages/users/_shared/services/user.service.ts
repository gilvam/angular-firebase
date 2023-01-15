import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../model/user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
	$user = new BehaviorSubject(new User());
	private $_user = new BehaviorSubject(new User());

	constructor() {}

	change(user: User): void {
		this.$user.next(user);
	}

	get(): Observable<User> {
		return this.$_user.asObservable();
	}
}
