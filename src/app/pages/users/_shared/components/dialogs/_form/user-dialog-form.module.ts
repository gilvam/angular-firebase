import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDialogFormComponent } from './user-dialog-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
	declarations: [UserDialogFormComponent],
	imports: [CommonModule, ReactiveFormsModule, MatInputModule, MatIconModule, MatSnackBarModule],
	exports: [UserDialogFormComponent],
})
export class UserDialogFormModule {}
