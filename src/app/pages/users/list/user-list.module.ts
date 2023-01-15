import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserListRoutingModule } from './user-list-routing.module';
import { UserListComponent } from './user-list.component';

@NgModule({
	imports: [CommonModule, UserListRoutingModule],
	declarations: [UserListComponent],
})
export class UserListModule {}
