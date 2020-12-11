import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	constructor(private authService: AuthService) { }

	ngOnInit(): void {
	}

	onSubmit(f: NgForm) {

		const loginObserver = {
			next: (x:any) => console.log('El usuario ingreso.'),
			error: (err:any) => console.log(err)
		};
	}

}
