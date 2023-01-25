import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserListRoutingModule } from './user-list-routing.module';
import { UserListComponent } from './user-list.component';
import { UserDialogEditModule } from '../_shared/components/dialogs/edit/user-dialog-edit.module';
import { MatCardModule } from '@angular/material/card';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { UserDialogNewModule } from '../_shared/components/dialogs/new/user-dialog-new.module';

@NgModule({
	imports: [
		CommonModule,
		UserListRoutingModule,
		UserDialogEditModule,
		UserDialogNewModule,
		MatCardModule,
		MatTableModule,
		MatSortModule,
		MatIconModule,
		MatButtonModule,
		MatSnackBarModule,
	],
	declarations: [UserListComponent],
})
export class UserListModule {}
