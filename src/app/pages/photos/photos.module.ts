import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoComponent } from './photo.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { PhotoDialogModule } from './dialogs/photo/photo-dialog.module';
import { PhotosRoutingModule } from './photos-routing.module';

@NgModule({
	declarations: [PhotoComponent],
	exports: [PhotoComponent],
	imports: [
		CommonModule,
		PhotosRoutingModule,
		MatButtonModule,
		MatSnackBarModule,
		MatDialogModule,
		PhotoDialogModule,
	],
})
export class PhotoModule {}
