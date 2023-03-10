import { Directive, ElementRef, Input, OnChanges, Renderer2 } from '@angular/core';

@Directive({ selector: '[appDimensionCanvas]' })
export class DimensionCanvasDirective implements OnChanges {
	@Input('appDimensionCanvas') videoRef?: HTMLVideoElement;
	@Input() isLoaded = false;

	constructor(private element: ElementRef, private renderer: Renderer2) {}

	ngOnChanges(): void {
		if (this.isLoaded) {
			this.setStyle();
		}
	}

	private setStyle(): void {
		if (!this.videoRef) {
			return;
		}
		this.renderer.setProperty(this.element.nativeElement, 'height', this.videoRef.height);
		this.renderer.setProperty(this.element.nativeElement, 'width', this.videoRef.width);
	}
}
