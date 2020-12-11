import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetingresostComponent } from './getingresost/getingresost.component';
import { GetventastComponent } from './getventast/getventast.component';
import { GetpersonalproComponent } from './getpersonalpro/getpersonalpro.component';

const routes: Routes = [
	{path: 'getingresost', component: GetingresostComponent},
	{path: 'getventast', component: GetventastComponent},
	{path: 'getpersonalpro', component: GetpersonalproComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GettRoutingModule { }
