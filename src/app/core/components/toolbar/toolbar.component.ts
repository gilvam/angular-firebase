import { Component } from '@angular/core';
import { SidenavService } from '../_shared/services/sidenav.service';

@Component({
	selector: 'app-toolbar',
	templateUrl: './toolbar.component.html',
	styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
	constructor(private sidenavService: SidenavService) {}

	sidenavToggle(): void {
		this.sidenavService.toggle();
	}
}
