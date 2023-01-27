import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IUser } from '../_shared/model/user.interface';
import { UserService } from '../_shared/services/user.service';
import { ApiUserService } from '../_shared/services/api/api-user.service';
import { User } from '../_shared/model/user.model';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserDialogEditComponent } from '../_shared/components/dialogs/edit/user-dialog-edit.component';
import { UserDialogNewComponent } from '../_shared/components/dialogs/new/user-dialog-new.component';
import { LoaderService } from '../../../core/components/loader/service/loader.service';
import { initialize } from '../../../core/components/_shared/operator/initialize.operator';
import { fadeOpacityAnimation } from '../../../core/components/_shared/animations/fade-opacity.animation';

@Component({
	selector: 'app-user-list',
	templateUrl: './user-list.component.html',
	styleUrls: ['./user-list.component.scss'],
	animations: [fadeOpacityAnimation],
})
export class UserListComponent implements OnInit {
	$userList = new Observable<IUser[]>();
	nameColumns = ['name', 'email', 'action'];

	constructor(
		public dialog: MatDialog,
		private snackBar: MatSnackBar,
		private userService: UserService,
		private apiUserService: ApiUserService,
		private loaderService: LoaderService
	) {}

	ngOnInit(): void {
		this.$userList = this.apiUserService.getAll().pipe(
			initialize(() => {
				console.log('loading INIT');
				this.loaderService.start();
			}),
			tap(() => {
				console.log('loading END');
				this.loaderService.stop();
			})
		);
	}

	private msg(text: string): void {
		if (!text) {
			return;
		}

		this.snackBar.open(text, '', { duration: 2000 });
	}

	new(): void {
		this.userService.clear();
		this.dialog
			.open(UserDialogNewComponent)
			.afterClosed()
			.subscribe((result: string) => this.msg(result));
	}

	edit(user: User): void {
		this.userService.change(user);
		this.dialog
			.open(UserDialogEditComponent)
			.afterClosed()
			.subscribe((result: string) => this.msg(result));
	}

	delete(id: string): void {
		this.snackBar.open('under development', ';)', { duration: 2000 });
	}
}
