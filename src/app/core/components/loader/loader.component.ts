import { Component } from '@angular/core';
import { LoaderService } from './service/loader.service';
import { fadeOpacityAnimation } from '../_shared/animations/fade-opacity.animation';

@Component({
	selector: 'app-loader',
	templateUrl: './loader.component.html',
	styleUrls: ['./loader.component.scss'],
	animations: [fadeOpacityAnimation],
})
export class LoaderComponent {
	constructor(public loaderService: LoaderService) {}
}
