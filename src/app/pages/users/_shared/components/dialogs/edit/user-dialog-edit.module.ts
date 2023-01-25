import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDialogEditComponent } from './user-dialog-edit.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { UserDialogFormModule } from '../_form/user-dialog-form.module';
import { A11yModule } from '@angular/cdk/a11y';

@NgModule({
	declarations: [UserDialogEditComponent],
	imports: [CommonModule, MatDialogModule, MatButtonModule, UserDialogFormModule, A11yModule],
	exports: [UserDialogEditComponent],
})
export class UserDialogEditModule {}
