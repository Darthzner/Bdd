import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { GettRoutingModule } from './gett-routing.module';
import { GetingresostComponent } from './getingresost/getingresost.component';
import { GetventastComponent } from './getventast/getventast.component';
import { GetpersonalproComponent } from './getpersonalpro/getpersonalpro.component';


@NgModule({
	declarations: [
		GetingresostComponent, 
		GetventastComponent, 
		GetpersonalproComponent
	],
	imports: [
		CommonModule,
		GettRoutingModule,
		FormsModule
	],
	exports: [
		GetingresostComponent,
		GetventastComponent,
		GetpersonalproComponent
	]
})
export class GettModule { }
