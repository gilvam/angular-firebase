import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatDrawerMode, MatSidenav, MatSidenavContainer } from '@angular/material/sidenav';
import { MediaQueryService } from './_shared/services/media-query.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit, OnDestroy {
	@ViewChild('sidenav', { static: false }) sidenav?: ElementRef<MatSidenav>;
	@ViewChild(MatSidenavContainer) sidenavContainer?: MatSidenavContainer;
	private mobileQuery: MediaQueryList;
	private mobileQueryListener: () => void;

	constructor(
		private changeDetectorRef: ChangeDetectorRef,
		private media: MediaMatcher,
		private mediaQueryService: MediaQueryService
	) {
		this.mobileQuery = this.media.matchMedia('(max-width: 1000px)');
		this.mobileQueryListener = () => changeDetectorRef.detectChanges();
		this.mobileQuery.addListener(this.mobileQueryListener);
	}

	ngAfterViewInit(): void {
		this.changeDetectorRef.detectChanges();

		this.mediaQueryService.breakpointState?.subscribe(response => {
			// console.log(`response: `, response);
			console.log(`point: `, this.mediaQueryService.getBreakpointsInfo());
			// this.mediaQueryService.getBreakpointsInfo().forEach(response => {
			// 	console.log(`response: `, response);
			// });

			// this.mediaQueryService.getBreakpointsInfo();
		});
	}

	ngOnDestroy(): void {
		this.mobileQuery.removeListener(this.mobileQueryListener);
	}

	sideNavToggleMobile(): void {
		if (!this.isMobile) {
			return;
		}
		this.sideNavToggle();
	}

	sideNavToggle(): void {
		this.sidenavContainer?.start?.toggle();
	}

	get navOpen(): boolean {
		return !this.mobileQuery.matches;
	}

	get navMode(): MatDrawerMode {
		return this.mobileQuery.matches ? 'over' : 'side';
	}

	get isMobile(): boolean {
		return this.mobileQuery.matches;
	}
}
