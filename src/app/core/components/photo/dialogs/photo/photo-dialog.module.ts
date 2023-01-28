import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoDialogComponent } from './photo-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { A11yModule } from '@angular/cdk/a11y';
import { DimensionCanvasDirective } from '../../directives/dimension-canvas.directive';
import { LoaderModule } from '../../../loader/loader.module';
import { DimensionVideoDirective } from '../../directives/dimension-video.directive';

@NgModule({
	declarations: [PhotoDialogComponent, DimensionCanvasDirective, DimensionVideoDirective],
	imports: [CommonModule, MatDialogModule, MatButtonModule, A11yModule, LoaderModule],
	exports: [PhotoDialogComponent],
})
export class PhotoDialogModule {}
