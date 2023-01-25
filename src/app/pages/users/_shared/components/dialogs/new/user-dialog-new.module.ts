import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDialogNewComponent } from './user-dialog-new.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { UserDialogFormModule } from '../_form/user-dialog-form.module';

@NgModule({
	declarations: [UserDialogNewComponent],
	imports: [CommonModule, MatDialogModule, MatButtonModule, UserDialogFormModule],
	exports: [UserDialogNewComponent],
})
export class UserDialogNewModule {}
