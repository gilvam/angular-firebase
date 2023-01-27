import { animate, style, transition, trigger } from '@angular/animations';

export const fadeOpacityAnimation = trigger('fade', [
	transition(':enter', [style({ opacity: 0 }), animate(500, style({ opacity: 1 }))]),
	transition(':leave', [animate(500, style({ opacity: 0 }))]),
]);
