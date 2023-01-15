import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';

const routes: Routes = [
	{
		path: '',
		component: UsersComponent,
	},
	{
		path: 'list',
		loadChildren: () =>
			import('./list/user-list.module').then(m => m.UserListModule),
	},
	{
		path: 'edit',
		loadChildren: () =>
			import('./edit/user-edit.module').then(m => m.UserEditModule),
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class UsersRoutingModule {}
