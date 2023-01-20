import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointObserver, BreakpointState, MediaMatcher } from '@angular/cdk/layout';

@Injectable({ providedIn: 'root' })
export class MediaQueryService {
	breakpointState: Observable<BreakpointState>;

	list = [
		{ name: 'xs', media: '(min-width: 320px)', description: 'x-Small' },
		{ name: 'sm', media: '(min-width: 576px)', description: 'small' },
		{ name: 'md', media: '(min-width: 768px)', description: 'medium' },
		{ name: 'lg', media: '(min-width: 992px)', description: 'large' },
		{ name: 'xl', media: '(min-width: 1200px)', description: 'extra large' },
		{ name: 'xxl', media: '(min-width: 1400px)', description: 'extra extra large' },
	];

	constructor(public breakpointObserver: BreakpointObserver, private mediaMatcher: MediaMatcher) {
		this.breakpointState = this.breakpointObserver.observe(this.list.map(it => it.media));
	}

	getBreakpointsInfo(): string[] {
		const point = this.list
			.filter(breakpoint => this.mediaMatcher.matchMedia(breakpoint.media).matches)
			.sort()
			.reverse()
			.at(0);

		return point?.name ? [point.name] : [];
	}
}
