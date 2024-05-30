import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { MediaQueryService } from '../../../_shared/services/media-query/media-query.service';
import { MatDrawerMode, MatSidenavContainer } from '@angular/material/sidenav';
import { SidenavService } from '../_shared/services/sidenav.service';
import { navList } from './_shared/nav.data';

@Component({
	selector: 'app-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit, AfterViewInit {
	@ViewChild(MatSidenavContainer) sidenav?: MatSidenavContainer;
	$isLarge = new BehaviorSubject<boolean>(false);
	navList = navList;

	constructor(private sidenavService: SidenavService, private mediaQueryService: MediaQueryService) {}

	ngOnInit(): void {
		this.mediaQueryService.onchange.pipe(tap(() => this.$isLarge.next(this.mediaQueryService.isLarge)))
			.subscribe(it => {
				console.log(`it: `, it);
			});
	}

	ngAfterViewInit(): void {
		this.sidenavService.set(this.sidenav);
	}

	sideNavToggleMobile(): void {
		if (this.$isLarge.value) {
			return;
		}
		this.sidenavService.toggle();
	}

	get navMode(): MatDrawerMode {
		return this.$isLarge.value ? 'side' : 'over';
	}
}
