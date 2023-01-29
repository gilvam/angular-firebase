import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		redirectTo: '',
		pathMatch: 'full',
	},
	{
		path: 'users',
		loadChildren: () => import('./pages/users/users.module').then(m => m.UsersModule),
	},
	{
		path: 'photos',
		loadChildren: () => import('./pages/photos/photos.module').then(m => m.PhotoModule),
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
