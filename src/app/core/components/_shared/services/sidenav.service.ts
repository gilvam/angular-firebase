import { Injectable } from '@angular/core';
import { MatDrawerToggleResult, MatSidenavContainer } from '@angular/material/sidenav';

@Injectable({ providedIn: 'root' })
export class SidenavService {
	private sidenav?: MatSidenavContainer;

	set(sidenav?: MatSidenavContainer): void {
		this.sidenav = sidenav;
	}

	open(): Promise<MatDrawerToggleResult> | undefined {
		return this.sidenav?.start?.open();
	}

	close(): Promise<MatDrawerToggleResult> | undefined {
		return this.sidenav?.start?.close();
	}

	toggle(): void {
		this.sidenav?.start?.toggle();
	}
}
