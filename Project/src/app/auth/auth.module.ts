import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { AddproductoComponent } from './components/addproducto/addproducto.component';


@NgModule({
	declarations: [
		LoginComponent, 
		RegisterComponent, 
		ResetPasswordComponent, 
		AddproductoComponent
	],
	imports: [
		CommonModule,
		AuthRoutingModule,
		FormsModule
	],
	exports: [
		LoginComponent, 
		RegisterComponent, 
		ResetPasswordComponent,
		AddproductoComponent
	]
})
export class AuthModule { }
