import { Injectable } from '@angular/core';
import { User } from '../../model/user.model';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { map, Observable } from 'rxjs';
import { IUser } from '../../model/user.interface';
import { UserDto } from '../../model/user-dto.model';
import { UserDbEnum } from '../../model/user-db.enum';
import { Action } from '@angular/fire/compat/database/interfaces';
import firebase from 'firebase/compat';
import ThenableReference = firebase.database.ThenableReference;

@Injectable({ providedIn: 'root' })
export class ApiUserService {
	constructor(private db: AngularFireDatabase) {}

	insert(user: IUser): ThenableReference {
		return this.db.list(UserDbEnum.USER).push(new UserDto(user));
	}

	update(user: IUser): Promise<void> {
		return this.db.list(UserDbEnum.USER).update(user.id, new UserDto(user));
	}

	getAll(): Observable<IUser[]> {
		return this.db
			.list(UserDbEnum.USER)
			.snapshotChanges()
			.pipe(
				map(changes =>
					changes.map((it: Action<any>) => {
						const ob: IUser = it.payload.val();
						return new User(it.payload.key, ob.name, ob.email);
					})
				)
			);
	}

	delete(key: string) {
		this.db.object(`user/${key}`).remove();
	}
}
