import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { ApiUserService } from '../../../services/api/api-user.service';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
	selector: 'app-user-dialog-edit',
	templateUrl: './user-dialog-edit.component.html',
	styleUrls: ['./user-dialog-edit.component.scss'],
})
export class UserDialogEditComponent {
	constructor(
		private dialogRef: DialogRef,
		private userService: UserService,
		private apiUserService: ApiUserService
	) {}

	formSubmit(): void {
		this.apiUserService.update(this.userService.get).then(() => this.dialogRef.close('user added'));
	}
}
