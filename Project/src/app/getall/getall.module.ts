import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GetallRoutingModule } from './getall-routing.module';
import { GetallclientesComponent } from './components/getallclientes/getallclientes.component';
import { GetallpersonalComponent } from './components/getallpersonal/getallpersonal.component';
import { GetallprodComponent } from './components/getallprod/getallprod.component';
import { GetallventasComponent } from './components/getallventas/getallventas.component';
import { GetallstockComponent } from './components/getallstock/getallstock.component';
import { GetallprodvendidoComponent } from './components/getallprodvendido/getallprodvendido.component';


@NgModule({
	declarations: [
		GetallclientesComponent,
		GetallpersonalComponent,
		GetallprodComponent,
		GetallventasComponent,
		GetallstockComponent,
		GetallprodvendidoComponent
	],
	imports: [
		CommonModule,
		GetallRoutingModule
	],
	exports: [
		GetallclientesComponent,
		GetallpersonalComponent,
		GetallprodComponent,
		GetallventasComponent,
		GetallstockComponent,
		GetallprodvendidoComponent
	]
})
export class GetallModule { }
