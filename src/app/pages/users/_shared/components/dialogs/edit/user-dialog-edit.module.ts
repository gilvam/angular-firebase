import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDialogEditComponent } from './user-dialog-edit.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { UserDialogFormModule } from '../_form/user-dialog-form.module';

@NgModule({
	declarations: [UserDialogEditComponent],
	imports: [CommonModule, MatDialogModule, MatButtonModule, UserDialogFormModule],
	exports: [UserDialogEditComponent],
})
export class UserDialogEditModule {}
