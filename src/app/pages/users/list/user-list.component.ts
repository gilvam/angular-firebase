import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../_shared/model/user.interface';
import { UserService } from '../_shared/services/user.service';
import { ApiUserService } from '../_shared/services/api/api-user.service';
import { User } from '../_shared/model/user.model';

@Component({
	selector: 'app-user-list',
	templateUrl: './user-list.component.html',
	styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
	$users = new Observable<IUser[]>();

	nameColumns = ['name', 'email', 'action'];

	constructor(private userService: UserService, private apiUserService: ApiUserService) {}

	ngOnInit(): void {
		this.$users = this.apiUserService.getAll();
	}

	delete(id: string) {}

	edit(user: User) {}
}
