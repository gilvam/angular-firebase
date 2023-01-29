import { Component, OnInit } from '@angular/core';
import { PhotoDialogComponent } from './dialogs/photo/photo-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
	selector: 'app-photo',
	templateUrl: './photo.component.html',
	styleUrls: ['./photo.component.scss'],
})
export class PhotoComponent implements OnInit {
	constructor(private dialog: MatDialog, private snackBar: MatSnackBar) {}

	ngOnInit(): void {
		this.openDialog();
	}

	openDialog(): void {
		this.dialog
			.open(PhotoDialogComponent, { height: '100vh', width: '100vw', maxWidth: '100vw' })
			.afterClosed()
			.subscribe((result: string) => {
				console.log(`result: `, result);
				if (!result) {
					return;
				}
				this.snackBar.open('salvo', '', { duration: 2000 });
			});
	}
}
