import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../_shared/services/user.service';
import { ApiUserService } from '../_shared/services/api/api-user.service';
import { User } from '../_shared/model/user.model';
import { IUser } from '../_shared/model/user.interface';

@Component({
	selector: 'app-user-edit',
	templateUrl: './user-edit.component.html',
	styleUrls: ['./user-edit.component.scss'],
})
export class UserEditComponent {
	form = this.fb.group({
		id: [''],
		name: ['', [Validators.required]],
		email: ['', [Validators.email]],
	});

	constructor(
		private fb: FormBuilder,
		private userService: UserService,
		private apiUserService: ApiUserService
	) {}

	submit(): void {
		const user = new User().form(this.form.value as IUser);

		if (user.id) {
			return;
		}
		this.apiUserService.insert(user);
	}
}
