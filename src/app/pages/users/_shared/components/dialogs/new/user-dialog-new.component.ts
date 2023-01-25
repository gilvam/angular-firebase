import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { ApiUserService } from '../../../services/api/api-user.service';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
	selector: 'app-user-dialog-edit',
	templateUrl: './user-dialog-new.component.html',
	styleUrls: ['./user-dialog-new.component.scss'],
})
export class UserDialogNewComponent {
	constructor(
		private dialogRef: DialogRef,
		private userService: UserService,
		private apiUserService: ApiUserService
	) {}

	formSubmit(): void {
		this.apiUserService.insert(this.userService.get).then(() => this.dialogRef.close('user edited'));
	}
}
