import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDialogEditComponent } from './user-dialog-edit.component';

describe('UserDialogEditComponent', () => {
  let component: UserDialogEditComponent;
  let fixture: ComponentFixture<UserDialogEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDialogEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDialogEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
