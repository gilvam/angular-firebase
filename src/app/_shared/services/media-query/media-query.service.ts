import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointObserver, BreakpointState, MediaMatcher } from '@angular/cdk/layout';
import { MediaQueryEnum } from './model/media-query.enum';
import { MediaQueryBreakpointEnum } from './model/media-query-breakpoint.enum';
import { EnumUtil } from '../../utils/enum.util';
import { NumberUtil } from '../../utils/number.util';
import { MediaQueryMax } from './model/media-query-max.model';

@Injectable({ providedIn: 'root' })
export class MediaQueryService {
	onchange: Observable<BreakpointState>;

	list = [
		MediaQueryBreakpointEnum.XS,
		MediaQueryBreakpointEnum.SM,
		MediaQueryBreakpointEnum.MD,
		MediaQueryBreakpointEnum.LG,
		MediaQueryBreakpointEnum.XL,
		MediaQueryBreakpointEnum.XX,
	];

	constructor(public breakpointObserver: BreakpointObserver, private mediaMatcher: MediaMatcher) {
		this.onchange = this.breakpointObserver.observe(this.list);
	}

	private maxValue(mediaQuery: MediaQueryBreakpointEnum, accumulator: MediaQueryMax): MediaQueryMax {
		const max = NumberUtil.onlyNumber(mediaQuery);
		return max > accumulator.max ? new MediaQueryMax(mediaQuery, max) : accumulator;
	}

	getBreakpointsInfo(): MediaQueryEnum {
		const point = this.list
			.filter(breakpoint => this.mediaMatcher.matchMedia(breakpoint).matches)
			.reduce(
				(accumulator: MediaQueryMax, current) => this.maxValue(current, accumulator),
				new MediaQueryMax()
			).value;

		return EnumUtil.getKey<MediaQueryEnum>(point as string, MediaQueryBreakpointEnum) || MediaQueryEnum.XS;
	}

	get isSmall(): boolean {
		return [MediaQueryEnum.XS, MediaQueryEnum.SM, MediaQueryEnum.MD].includes(this.getBreakpointsInfo());
	}

	get isLarge(): boolean {
		return [MediaQueryEnum.LG, MediaQueryEnum.XL, MediaQueryEnum.XX].includes(this.getBreakpointsInfo());
	}
}
