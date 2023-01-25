import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from '../../../model/user.model';
import { IUser } from '../../../model/user.interface';
import { UserService } from '../../../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
	selector: 'app-user-dialog-form',
	templateUrl: './user-dialog-form.component.html',
	styleUrls: ['./user-dialog-form.component.scss'],
})
export class UserDialogFormComponent implements OnInit {
	@Input() user = new User();
	@Output() formChange = new EventEmitter();
	form = this.fb.group({
		id: [''],
		name: ['', [Validators.required]],
		email: ['', [Validators.required, Validators.email]],
	});

	constructor(private fb: FormBuilder, private snackBar: MatSnackBar, private userService: UserService) {}

	ngOnInit(): void {
		this.formPopulate();
	}

	formPopulate(): void {
		this.form.setValue(this.userService.get);
	}

	submit(): void {
		const user = new User().form(this.form.value as IUser);

		if (this.form.invalid) {
			this.snackBar.open('invalid form', '', { duration: 2000 });
			return;
		}

		this.userService.change(user);
		this.formChange.emit();
	}
}
