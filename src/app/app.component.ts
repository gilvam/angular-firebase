import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatDrawerMode, MatSidenav, MatSidenavContainer } from '@angular/material/sidenav';
import { MediaQueryService } from './_shared/services/media-query/media-query.service';
import { BehaviorSubject, tap } from 'rxjs';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	@ViewChild('sidenav', { static: false }) sidenav?: ElementRef<MatSidenav>;
	@ViewChild(MatSidenavContainer) sidenavContainer?: MatSidenavContainer;
	$isMobileOrTablet = new BehaviorSubject<boolean>(false);

	constructor(private media: MediaMatcher, private mediaQueryService: MediaQueryService) {}

	ngOnInit(): void {
		this.mediaQueryService.onchange
			?.pipe(tap(() => this.$isMobileOrTablet.next(this.mediaQueryService.isMobileOrTablet)))
			.subscribe();
	}

	sideNavToggleMobile(): void {
		if (!this.$isMobileOrTablet.value) {
			return;
		}
		this.sideNavToggle();
	}

	sideNavToggle(): void {
		this.sidenavContainer?.start?.toggle();
	}

	get navMode(): MatDrawerMode {
		return this.$isMobileOrTablet.value ? 'over' : 'side';
	}
}
