import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoDialogComponent } from './photo-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { A11yModule } from '@angular/cdk/a11y';
import { DimensionCanvasDirective } from '../../directives/dimension-canvas.directive';
import { LoaderModule } from '../../../../core/components/loader/loader.module';
import { DimensionVideoDirective } from '../../directives/dimension-video.directive';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
	declarations: [PhotoDialogComponent, DimensionCanvasDirective, DimensionVideoDirective],
	imports: [CommonModule, A11yModule, MatDialogModule, MatButtonModule, MatIconModule, LoaderModule],
	exports: [PhotoDialogComponent],
})
export class PhotoDialogModule {}
