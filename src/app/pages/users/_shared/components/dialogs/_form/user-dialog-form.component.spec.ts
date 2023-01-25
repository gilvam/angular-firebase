import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDialogFormComponent } from './user-dialog-form.component';

describe('UserEditComponent', () => {
	let component: UserDialogFormComponent;
	let fixture: ComponentFixture<UserDialogFormComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [UserDialogFormComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(UserDialogFormComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
