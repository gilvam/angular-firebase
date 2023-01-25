import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDialogNewComponent } from './user-dialog-new.component';

describe('UserDialogNewComponent', () => {
	let component: UserDialogNewComponent;
	let fixture: ComponentFixture<UserDialogNewComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [UserDialogNewComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(UserDialogNewComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
