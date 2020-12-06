import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetallclientesComponent } from './components/getallclientes/getallclientes.component';
import { GetallpersonalComponent } from './components/getallpersonal/getallpersonal.component';
import { GetallprodComponent } from './components/getallprod/getallprod.component';
import { GetallventasComponent } from './components/getallventas/getallventas.component';
import { GetallstockComponent } from './components/getallstock/getallstock.component';
import { GetallprodvendidoComponent } from './components/getallprodvendido/getallprodvendido.component';

const routes: Routes = [
	{path: 'getallclientes', component: GetallclientesComponent},
	{path: 'getallpersonal', component: GetallpersonalComponent},
	{path: 'getallprod', component: GetallprodComponent},
	{path: 'getallventas', component: GetallventasComponent},
	{path: 'getstock1', component: GetallstockComponent},
	{path: 'getallproductosvendidos', component: GetallprodvendidoComponent}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class GetallRoutingModule { }
