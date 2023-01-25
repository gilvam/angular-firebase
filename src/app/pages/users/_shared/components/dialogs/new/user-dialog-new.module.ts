import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDialogNewComponent } from './user-dialog-new.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { UserDialogFormModule } from '../_form/user-dialog-form.module';
import { A11yModule } from '@angular/cdk/a11y';

@NgModule({
	declarations: [UserDialogNewComponent],
	imports: [CommonModule, MatDialogModule, MatButtonModule, UserDialogFormModule, A11yModule],
	exports: [UserDialogNewComponent],
})
export class UserDialogNewModule {}
