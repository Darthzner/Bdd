import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GetallRoutingModule } from './getall-routing.module';
import { GetallclientesComponent } from './components/getallclientes/getallclientes.component';
import { GetallpersonalComponent } from './components/getallpersonal/getallpersonal.component';


@NgModule({
	declarations: [
		GetallclientesComponent,
		GetallpersonalComponent
	],
	imports: [
		CommonModule,
		GetallRoutingModule
	],
	exports: [
		GetallclientesComponent,
		GetallpersonalComponent
	]
})
export class GetallModule { }
