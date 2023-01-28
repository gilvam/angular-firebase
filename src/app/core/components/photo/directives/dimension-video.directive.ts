import { Directive, ElementRef, Input, OnChanges, Renderer2 } from '@angular/core';

@Directive({ selector: '[appDimensionVideo]' })
export class DimensionVideoDirective implements OnChanges {
	@Input('appDimensionVideo') isLoaded = false;

	constructor(private element: ElementRef, private renderer: Renderer2) {}

	ngOnChanges(): void {
		if (this.isLoaded) {
			this.setStyle();
		}
	}

	private setStyle(): void {
		if (this.isLoaded) {
			this.renderer.setAttribute(this.element.nativeElement, 'height', this.element.nativeElement.clientHeight);
			this.renderer.setAttribute(this.element.nativeElement, 'width', this.element.nativeElement.clientWidth);
			this.renderer.setStyle(this.element.nativeElement, 'height', '100vh');
			this.renderer.setStyle(this.element.nativeElement, 'width', '100vw');
			this.renderer.setStyle(this.element.nativeElement, 'max-height', '100vh');
			this.renderer.setStyle(this.element.nativeElement, 'max-width', '100vw');

			// position: absolute;
			// top: 0;
			// left: 0;
			// background: slategrey;
			// object-fit: cover;
			// pointer-events: none;
		}
	}
}
