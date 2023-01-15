import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserEditRoutingModule } from './user-edit-routing.module';
import { UserEditComponent } from './user-edit.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
	declarations: [UserEditComponent],
	imports: [
		CommonModule,
		UserEditRoutingModule,
		MatInputModule,
		MatIconModule,
		ReactiveFormsModule,
		MatButtonModule,
	],
})
export class UserEditModule {}
